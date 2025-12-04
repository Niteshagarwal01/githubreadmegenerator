#!/usr/bin/env python
import argparse
import os
from datetime import datetime
from datetime import timedelta
from random import randint
from subprocess import Popen
import sys


def main(def_args=sys.argv[1:]):
    args = arguments(def_args)
    curr_date = datetime.now()
    
    user_name = args.user_name
    user_email = args.user_email
    no_weekends = args.no_weekends
    frequency = args.frequency
    days_before = args.days_before
    
    if days_before < 0:
        sys.exit('days_before must not be negative')
    
    days_after = args.days_after
    if days_after < 0:
        sys.exit('days_after must not be negative')

    # Check if we're in a git repository
    if not os.path.exists('.git'):
        sys.exit('Error: Not a git repository. Please run this script from your project root.')

    if user_name is not None:
        run(['git', 'config', 'user.name', user_name])

    if user_email is not None:
        run(['git', 'config', 'user.email', user_email])

    start_date = curr_date.replace(hour=20, minute=0) - timedelta(days_before)
    commit_count = 0
    
    for day in (start_date + timedelta(n) for n in range(days_before + days_after)):
        if (not no_weekends or day.weekday() < 5) and randint(0, 100) < frequency:
            for commit_time in (day + timedelta(minutes=m) for m in range(contributions_per_day(args))):
                contribute(commit_time)
                commit_count += 1

    print(f'\n\x1b[6;30;42mSuccessfully generated {commit_count} commits!\x1b[0m')
    print('\nTo push these commits to GitHub, run:')
    print('  git push origin main --force')
    print('\n\x1b[6;30;43mWarning: This will rewrite history. Use with caution!\x1b[0m\n')


def contribute(date):
    # Create or update a contributions log file
    contributions_file = os.path.join(os.getcwd(), 'CONTRIBUTIONS.md')
    
    with open(contributions_file, 'a') as file:
        file.write(message(date) + '\n')
    
    run(['git', 'add', 'CONTRIBUTIONS.md'])
    run(['git', 'commit', '-m', message(date), '--date', date.strftime('%Y-%m-%d %H:%M:%S')])


def run(commands):
    Popen(commands, shell=True if os.name == 'nt' else False).wait()


def message(date):
    messages = [
        f'Update documentation - {date.strftime("%Y-%m-%d %H:%M")}',
        f'Improve code quality - {date.strftime("%Y-%m-%d %H:%M")}',
        f'Refactor components - {date.strftime("%Y-%m-%d %H:%M")}',
        f'Add improvements - {date.strftime("%Y-%m-%d %H:%M")}',
        f'Update styles - {date.strftime("%Y-%m-%d %H:%M")}',
        f'Enhance features - {date.strftime("%Y-%m-%d %H:%M")}',
        f'Fix bugs - {date.strftime("%Y-%m-%d %H:%M")}',
        f'Optimize performance - {date.strftime("%Y-%m-%d %H:%M")}',
    ]
    return messages[randint(0, len(messages) - 1)]


def contributions_per_day(args):
    max_c = args.max_commits
    if max_c > 20:
        max_c = 20
    if max_c < 1:
        max_c = 1
    return randint(1, max_c)


def arguments(argsval):
    parser = argparse.ArgumentParser(
        description='Generate commits in the current git repository to boost contribution graph.'
    )
    parser.add_argument('-nw', '--no_weekends',
                        required=False, action='store_true', default=False,
                        help='Do not commit on weekends')
    parser.add_argument('-mc', '--max_commits', type=int, default=7,
                        required=False, 
                        help='Maximum commits per day (1-20). Default: 7')
    parser.add_argument('-fr', '--frequency', type=int, default=70,
                        required=False, 
                        help='Percentage of days to commit (0-100). Default: 70')
    parser.add_argument('-un', '--user_name', type=str, required=False,
                        help='Override git user.name for these commits')
    parser.add_argument('-ue', '--user_email', type=str, required=False,
                        help='Override git user.email for these commits')
    parser.add_argument('-db', '--days_before', type=int, default=60,
                        required=False, 
                        help='Number of days in the past to start commits. Default: 60')
    parser.add_argument('-da', '--days_after', type=int, default=0,
                        required=False, 
                        help='Number of days in the future to add commits. Default: 0')
    return parser.parse_args(argsval)


if __name__ == "__main__":
    main()
