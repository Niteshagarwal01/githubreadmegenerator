# GitHub README Generator

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) [![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML) [![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)

## Description

A simple and intuitive web application to generate professional README files for your GitHub projects. This tool helps developers create comprehensive and well-structured documentation quickly, with real-time preview and easy customization options.

## Features

- ✨ User-friendly interface with form-based input
- ✨ Real-time preview of generated README
- ✨ Support for multiple README sections (Description, Features, Installation, Usage, etc.)
- ✨ Automatic badge generation for common technologies and licenses
- ✨ Copy to clipboard functionality
- ✨ Responsive design for desktop and mobile devices
- ✨ Auto-save functionality with debounced input
- ✨ Sample data loading for first-time users
- ✨ Beautiful gradient design with modern UI/UX

## Installation

```bash
# Clone the repository
git clone https://github.com/Niteshagarwal01/githubreadmegenerator.git

# Navigate to the project directory
cd githubreadmegenerator

# Open index.html in your browser
# No build process required - it's a static web app!
```

## Usage

1. Open `index.html` in your web browser
2. Fill in the form fields with your project details:
   - **Project Title** (required)
   - **Description** (required)
   - **Badges** - Add comma-separated badges (e.g., MIT, React, Node.js)
   - **Demo URL** - Link to live demo
   - **Screenshot URL** - Link to project screenshot
   - **Features** - List your project features (one per line)
   - **Installation Steps** - Installation instructions
   - **Usage Instructions** - How to use your project
   - **Technologies** - Comma-separated list of technologies
   - **Contributing Guidelines** - How others can contribute
   - **License** - Select from popular open-source licenses
   - **Author Information** - Your name, GitHub username, and email
3. The README will be generated automatically in the preview pane
4. Click "Copy to Clipboard" to copy the generated markdown
5. Paste it into your project's README.md file

## Technologies

- HTML5
- CSS3
- JavaScript (Vanilla JS - no frameworks required)

## Project Structure

```
githubreadmegenerator/
├── index.html          # Main HTML file
├── styles.css          # Stylesheet with modern design
├── script.js           # JavaScript logic for README generation
└── README.md           # This file
```

## Features in Detail

### Badge Generation
The app automatically generates badges for common technologies and licenses including:
- Licenses: MIT, Apache 2.0, GPL v3
- Technologies: Node.js, React, JavaScript, TypeScript, Python, HTML, CSS
- Custom badges for other technologies

### Real-time Preview
As you fill in the form, the README preview updates automatically (with a 1-second debounce to avoid excessive updates).

### Responsive Design
The interface adapts to different screen sizes:
- Desktop: Side-by-side form and preview
- Mobile: Stacked layout for better readability

## Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/improvement`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature/improvement`)
6. Create a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

👤 **Nitesh Agarwal**

- GitHub: [@Niteshagarwal01](https://github.com/Niteshagarwal01)

## Acknowledgments

- Inspired by the need for quick and professional README generation
- Badge icons from [Shields.io](https://shields.io)
- Font families from system default fonts

---

⭐️ If you found this project helpful, please give it a star!
