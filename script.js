document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        {
            title: 'IT Career Guide',
            description: 'This comprehensive guide offers valuable resources and structured advice for newcomers preparing for IT careers. It covers motivation, aptitude, programming languages, data structures, and algorithms, all organized in an accessible manner.',
            thumbnail: 'images/cg.jpg', // Replace with actual image path
            technologies: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript'],
            link: 'https://www.example.com/project1', // Replace with actual project link
            source: 'https://github.com/Sanjoy-Chattopadhay/prep-guide-for-beginners'
        },
        {
            title: 'EZ-Coding',
            description: 'This user-friendly platform provides a curated collection of coding challenges with detailed descriptions, examples, and solutions, making it ideal for both beginners and advanced programmers. The minimalist design, interactive features, and comprehensive content align well with the rigorous academic environment of NIT Durgapur, helping students enhance their problem-solving skills effectively.',
            thumbnail: 'images/cg.jpg', // Replace with actual image path
            technologies: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript'],
            link: 'https://www.example.com/project2', // Replace with actual project link
            source: 'https://github.com/Sanjoy-Chattopadhay/ez-coding'
        },
        {
            title: 'International Game Technology (IGT)',
            description: 'This is a Banking project I have been working on since last year. It is a combination of three Spring boot projects where Spring Framework, Spring Security, Kafka Services, Microsoft Graph API are used. It works with Respect to Work items. User mails with invoice receipt on a particular mail id and a work item would be created with respect to that. Now Users will be able to access the work items and route that to different queues. And based on the criteria and approval levels, those will be approved.',
            thumbnail: 'images/cg.jpg', // Replace with actual image path
            technologies: ['Spring Boot', 'Kafka Tools', 'Spring Cloud', 'Spring Webflow', 'Apache ZooKeeper'],
            link: 'https://www.example.com/project3', // Replace with actual project link
            source: 'https://github.com/Sanjoy-Chattopadhay/igt'
        },
        {
            title: 'Library Management Application',
            description: 'A robust system built with Java and Spring Boot for efficient management of library resources. This project showcases my skills in developing scalable applications with features for cataloging books, managing user accounts, and tracking borrowings.',
            thumbnail: 'images/cg.jpg', // Replace with actual image path
            technologies: ['Java', 'Spring Boot'],
            link: 'https://github.com/SanjoyChatterjee/Liabrary-Management-Application/',
            source: 'https://github.com/SanjoyChatterjee/Liabrary-Management-Application/'
        }
    ];

    const projectsGrid = document.getElementById('projects-grid');

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');

        const techTags = project.technologies.map(tech => 
            `<span class="tech-tag">${tech}</span>`
        ).join(' ');

        const descriptionPreview = project.description.split(' ').slice(0, 100).join(' ') + '...'; // Preview text with up to 5 lines
        const fullDescription = project.description;

        projectCard.innerHTML = `
            <div class="project-header">
                <img src="${project.thumbnail}" alt="${project.title}">
                <h3>${project.title}</h3>
            </div>
            <p class="description-preview">${descriptionPreview}</p>
            <p class="description-full">${fullDescription}</p>
            <div class="technologies-container">
                ${techTags}
            </div>
            <div class="buttons-container">
                <a href="${project.link}" class="btn btn-view">Take a Look</a>
                <a href="${project.source}" class="btn btn-source">Source Code</a>
            </div>
        `;

        projectsGrid.appendChild(projectCard);
    });
});
