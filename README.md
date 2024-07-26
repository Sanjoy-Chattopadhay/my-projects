# Project Portfolio

## Overview

This is a dynamic portfolio website that showcases various projects. Each project card includes details such as title, description, technologies used, and links to the live project and source code. The portfolio is designed to be visually appealing and informative, with a responsive layout and modern UI elements.

## Features

- **Project Showcase:** Displays a grid of projects with titles, descriptions, technologies, and links.
- **Responsive Design:** Ensures the portfolio looks good on all devices.
- **Interactive Elements:** Includes buttons for viewing projects and accessing source code.

## Usage

### Viewing Projects

Each project card on the portfolio displays the following elements:
- **Thumbnail:** An image representing the project.
- **Title:** The name of the project.
- **Description:** A brief summary of what the project is about.
- **Technology Tags:** Technologies used in the project.
- **Buttons:**
  - **"Take a Look":** Click this button to view the live project. It will open the project in a new tab.
  - **"Source Code":** Click this button to view the source code of the project. It will take you to the project's repository on GitHub.

Here’s an example of how the project cards are displayed:

```html
<div class="project-card">
    <div class="project-header">
        <img src="images/example.jpg" alt="Example Project">
        <h3>Example Project</h3>
    </div>
    <p class="description-full">This is a description of the Example Project. It showcases features and technologies used in the project.</p>
    <div class="technologies-container">
        <span class="tech-tag">HTML5</span>
        <span class="tech-tag">CSS3</span>
        <span class="tech-tag">JavaScript</span>
    </div>
    <div class="buttons-container">
        <a href="https://example.com" class="btn btn-view" target="_blank">Take a Look</a>
        <a href="https://github.com/example/repo" class="btn btn-source" target="_blank">Source Code</a>
    </div>
</div>
