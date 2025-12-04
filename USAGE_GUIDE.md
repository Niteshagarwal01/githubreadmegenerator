# Commit Generator - Usage Guide

## Quick Start

Run the script from your project directory:

```bash
python generate_commits.py
```

This will generate commits for the last 60 days with default settings.

## Options

### Basic Usage

```bash
# Generate commits for the last 30 days
python generate_commits.py -db 30

# Generate commits with maximum 10 commits per day
python generate_commits.py -mc 10

# Generate commits on 90% of days
python generate_commits.py -fr 90

# Skip weekends
python generate_commits.py -nw
```

### Advanced Usage

```bash
# Combine multiple options
python generate_commits.py -db 90 -mc 5 -fr 80 -nw

# Set custom git identity
python generate_commits.py -un "Your Name" -ue "your.email@example.com"

# Generate commits for last 30 days and next 30 days
python generate_commits.py -db 30 -da 30
```

## Parameters

| Parameter | Short | Description | Default |
|-----------|-------|-------------|---------|
| --days_before | -db | Days in the past to generate commits | 60 |
| --days_after | -da | Days in the future to generate commits | 0 |
| --max_commits | -mc | Maximum commits per day (1-20) | 7 |
| --frequency | -fr | Percentage of days with commits (0-100) | 70 |
| --no_weekends | -nw | Skip weekend commits | False |
| --user_name | -un | Override git user name | (uses global) |
| --user_email | -ue | Override git user email | (uses global) |

## Examples

### Conservative (looks natural)
```bash
python generate_commits.py -db 90 -mc 3 -fr 60 -nw
```
- 90 days of history
- Max 3 commits per day
- Active 60% of days
- No weekends

### Moderate (active developer)
```bash
python generate_commits.py -db 120 -mc 7 -fr 70
```
- 4 months of history
- Max 7 commits per day
- Active 70% of days
- Includes weekends

### Aggressive (very active)
```bash
python generate_commits.py -db 180 -mc 12 -fr 85
```
- 6 months of history
- Max 12 commits per day
- Active 85% of days
- Includes weekends

## After Running

The script creates a `CONTRIBUTIONS.md` file to track all generated commits.

### Push to GitHub

```bash
# Review your commits first
git log --oneline -20

# Push to GitHub (rewrites history)
git push origin main --force
```

**⚠️ Warning:** Using `--force` rewrites Git history. Only use this if:
- This is your personal project
- You haven't shared this repository with others
- You understand the implications

## Tips

1. **Start Small:** Test with `-db 7` first to see how it works
2. **Be Natural:** Use realistic numbers (3-7 commits/day, 60-80% frequency)
3. **Check First:** Run `git log` before pushing
4. **Backup:** Make a backup branch before force pushing

## Troubleshooting

**Error: "Not a git repository"**
- Make sure you're in the project root directory
- Check that `.git` folder exists

**Commits not showing on GitHub**
- Remember to `git push origin main --force`
- Check your git config user email matches GitHub

**Too many commits generated**
- Lower `-mc` (max commits) value
- Lower `-fr` (frequency) percentage
- Reduce `-db` (days before) value
