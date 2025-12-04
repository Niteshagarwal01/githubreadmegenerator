// Get DOM elements
const projectTitle = document.getElementById('projectTitle');
const projectDescription = document.getElementById('projectDescription');
const badges = document.getElementById('badges');
const demo = document.getElementById('demo');
const screenshot = document.getElementById('screenshot');
const features = document.getElementById('features');
const installation = document.getElementById('installation');
const usage = document.getElementById('usage');
const technologies = document.getElementById('technologies');
const contributing = document.getElementById('contributing');
const license = document.getElementById('license');
const authorName = document.getElementById('authorName');
const github = document.getElementById('github');
const email = document.getElementById('email');

const generateBtn = document.getElementById('generateBtn');
const resetBtn = document.getElementById('resetBtn');
const copyBtn = document.getElementById('copyBtn');
const preview = document.getElementById('preview');

// Generate badge markdown
function generateBadges(badgeString) {
    if (!badgeString.trim()) return '';
    
    const badgeList = badgeString.split(',').map(b => b.trim()).filter(b => b);
    const badgeMap = {
        'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
        'Apache-2.0': '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
        'GPL-3.0': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
        'Node.js': '[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=flat&logo=node.js&logoColor=white)](https://nodejs.org/)',
        'React': '[![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)](https://reactjs.org/)',
        'JavaScript': '[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)',
        'TypeScript': '[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)',
        'Python': '[![Python](https://img.shields.io/badge/Python-3776AB?style=flat&logo=python&logoColor=white)](https://www.python.org/)',
        'HTML': '[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)',
        'CSS': '[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)'
    };
    
    return badgeList.map(badge => {
        return badgeMap[badge] || `![${badge}](https://img.shields.io/badge/${badge.replace(/ /g, '%20')}-informational)`;
    }).join(' ') + '\n\n';
}

// Generate README markdown
function generateReadme() {
    const title = projectTitle.value.trim();
    const description = projectDescription.value.trim();
    
    if (!title || !description) {
        showToast('Please fill in the required fields (Title and Description)', 'error');
        return;
    }
    
    let readme = '';
    
    // Title
    readme += `# ${title}\n\n`;
    
    // Badges
    const badgeMarkdown = generateBadges(badges.value);
    if (badgeMarkdown) {
        readme += badgeMarkdown;
    }
    
    // Description
    readme += `## Description\n\n${description}\n\n`;
    
    // Screenshot
    if (screenshot.value.trim()) {
        readme += `## Screenshot\n\n![Screenshot](${screenshot.value})\n\n`;
    }
    
    // Demo
    if (demo.value.trim()) {
        readme += `## Demo\n\n🔗 [Live Demo](${demo.value})\n\n`;
    }
    
    // Table of Contents
    readme += `## Table of Contents\n\n`;
    readme += `- [Features](#features)\n`;
    if (installation.value.trim()) readme += `- [Installation](#installation)\n`;
    if (usage.value.trim()) readme += `- [Usage](#usage)\n`;
    if (technologies.value.trim()) readme += `- [Technologies](#technologies)\n`;
    if (contributing.value.trim()) readme += `- [Contributing](#contributing)\n`;
    if (license.value) readme += `- [License](#license)\n`;
    if (authorName.value.trim() || github.value.trim()) readme += `- [Author](#author)\n`;
    readme += `\n`;
    
    // Features
    if (features.value.trim()) {
        readme += `## Features\n\n`;
        const featureList = features.value.split('\n').filter(f => f.trim());
        featureList.forEach(feature => {
            readme += `- ✨ ${feature.trim()}\n`;
        });
        readme += `\n`;
    }
    
    // Installation
    if (installation.value.trim()) {
        readme += `## Installation\n\n`;
        readme += `\`\`\`bash\n${installation.value}\n\`\`\`\n\n`;
    }
    
    // Usage
    if (usage.value.trim()) {
        readme += `## Usage\n\n${usage.value}\n\n`;
    }
    
    // Technologies
    if (technologies.value.trim()) {
        readme += `## Technologies\n\n`;
        const techList = technologies.value.split(',').map(t => t.trim()).filter(t => t);
        techList.forEach(tech => {
            readme += `- ${tech}\n`;
        });
        readme += `\n`;
    }
    
    // Contributing
    if (contributing.value.trim()) {
        readme += `## Contributing\n\n${contributing.value}\n\n`;
    }
    
    // License
    if (license.value) {
        readme += `## License\n\n`;
        readme += `This project is licensed under the ${license.value} License.\n\n`;
    }
    
    // Author
    if (authorName.value.trim() || github.value.trim() || email.value.trim()) {
        readme += `## Author\n\n`;
        if (authorName.value.trim()) {
            readme += `👤 **${authorName.value}**\n\n`;
        }
        if (github.value.trim()) {
            readme += `- GitHub: [@${github.value}](https://github.com/${github.value})\n`;
        }
        if (email.value.trim()) {
            readme += `- Email: ${email.value}\n`;
        }
        readme += `\n`;
    }
    
    // Footer
    readme += `---\n\n`;
    readme += `⭐️ If you found this project helpful, please give it a star!\n`;
    
    // Update preview
    preview.innerHTML = readme;
    preview.classList.remove('placeholder');
    
    showToast('README generated successfully!', 'success');
}

// Reset form
function resetForm() {
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        if (input.type === 'checkbox') {
            input.checked = false;
        } else {
            input.value = '';
        }
    });
    
    preview.innerHTML = '<p class="placeholder">Fill in the form to generate your README...</p>';
    showToast('Form reset successfully!', 'success');
}

// Copy to clipboard
async function copyToClipboard() {
    const text = preview.textContent;
    
    if (text.includes('Fill in the form')) {
        showToast('Please generate a README first!', 'error');
        return;
    }
    
    try {
        await navigator.clipboard.writeText(text);
        showToast('Copied to clipboard!', 'success');
    } catch (err) {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        document.body.appendChild(textArea);
        textArea.select();
        
        try {
            document.execCommand('copy');
            showToast('Copied to clipboard!', 'success');
        } catch (err) {
            showToast('Failed to copy to clipboard', 'error');
        }
        
        document.body.removeChild(textArea);
    }
}

// Show toast notification
function showToast(message, type = 'success') {
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }
    
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    
    if (type === 'error') {
        toast.style.background = '#ef4444';
    }
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}

// Event listeners
generateBtn.addEventListener('click', generateReadme);
resetBtn.addEventListener('click', resetForm);
copyBtn.addEventListener('click', copyToClipboard);

// Auto-generate on input (debounced)
let debounceTimer;
const inputs = document.querySelectorAll('input, textarea, select');
inputs.forEach(input => {
    input.addEventListener('input', () => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            if (projectTitle.value.trim() && projectDescription.value.trim()) {
                generateReadme();
            }
        }, 1000);
    });
});

// Load sample data on first visit
window.addEventListener('load', () => {
    const hasVisited = localStorage.getItem('hasVisited');
    if (!hasVisited) {
        projectTitle.value = 'GitHub README Generator';
        projectDescription.value = 'A simple and intuitive web application to generate professional README files for your GitHub projects. Save time and create beautiful documentation with ease.';
        features.value = 'Easy to use interface\nReal-time preview\nSupport for multiple sections\nCopy to clipboard functionality\nResponsive design';
        installation.value = 'Clone the repository\ngit clone https://github.com/yourusername/readme-generator.git\ncd readme-generator\nOpen index.html in your browser';
        usage.value = 'Simply fill in the form fields with your project details, and the README will be generated automatically. You can then copy the generated markdown to your clipboard and paste it into your README.md file.';
        technologies.value = 'HTML, CSS, JavaScript';
        contributing.value = 'Contributions are welcome! Please feel free to submit a Pull Request.';
        license.value = 'MIT';
        badges.value = 'MIT, JavaScript, HTML, CSS';
        
        generateReadme();
        localStorage.setItem('hasVisited', 'true');
    }
});
