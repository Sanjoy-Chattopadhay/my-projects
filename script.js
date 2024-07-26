document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        {
            title: 'IT Career Guide',
            description: 'This resource provides a comprehensive guide for newcomers preparing for programming and coding challenges. It includes various resources, tips, and practice problems to help build a solid foundation in programming. The guide serves as a structured reference to support and enhance the learning process for those new to coding.',
            thumbnail: 'images/cg.jpg', // Replace with actual image path
            technologies: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript'],
            link: 'https://sanjoy-chattopadhay.github.io/prep-guide-for-beginners/', // Replace with actual project link
            source: 'https://github.com/Sanjoy-Chattopadhay/prep-guide-for-beginners'
        },
        {
            title: 'EZ-Coding',
            description: 'EZ-Coding is a project designed to simplify learning programming through clear tutorials and practical challenges. It caters to beginners and intermediate coders by offering structured resources and hands-on examples. The goal is to make coding more accessible and enjoyable for learners at various skill levels.',
            thumbnail: 'images/ez.jpg', // Replace with actual image path
            technologies: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'Node.js'],
            link: 'https://sanjoy-chattopadhay.github.io/EZ-Coding/', // Replace with actual project link
            source: 'https://github.com/Sanjoy-Chattopadhay/EZ-Coding'
        },
        {
            title: 'International Game Technology (IGT)',
            description: 'It is a combination of three Spring boot projects where Spring Framework, Spring Security, Kafka Services, Microsoft Graph API are used. It works with Respect to Work items. User mails with invoice receipt on a particular mail id and a work item would be created with respect to that. Now Users will be able to access the work items and route that to different queues. And based on the criteria and approval levels, those will be approved.',
            thumbnail: 'images/igt.jpg', // Replace with actual image path
            technologies: ['Spring Boot', 'Kafka Tools', 'Spring Cloud', 'Spring Webflow', 'Apache ZooKeeper'],
            link: 'https://www.purrweb.com/blog/mobile-app-development-for-banking/', // Replace with actual project link
            source: 'https://www.purrweb.com/blog/mobile-app-development-for-banking/'
        },
        {
            title: 'Library Management Application',
            description: 'A robust system built with Java and Spring Boot for efficient management of library resources. This project showcases my skills in developing scalable applications with features for cataloging books, managing user accounts, and tracking borrowings.',
            thumbnail: 'images/lmg.png', // Replace with actual image path
            technologies: ['Java', 'Gradle', 'Android'],
            link: 'https://github.com/Sanjoy-Chattopadhay/Liabrary-Management-Application',
            source: 'https://github.com/Sanjoy-Chattopadhay/Liabrary-Management-Application'
        },
        {
            title: 'Mac Address Changer using Python',
            description: 'A tool developed in Python for changing the MAC address of a network interface. This project demonstrates my ability to handle network configurations and scripting, offering a practical solution for privacy and network management.',
            thumbnail: 'images/mac.jpg', // Replace with actual image path
            technologies: ['Python', 'Networking', 'Command-line Interface'],
            link: 'https://github.com/SanjoyChatterjee/mac_changer',
            source: 'https://github.com/SanjoyChatterjee/mac_changer'
        },
        {
            title: 'Portfolio',
            description: 'This clean and professional portfolio showcases Sanjoy\'s skills, projects, and achievements in web development and competitive programming. The site is well-organized, with sections detailing his experience, projects, and contact information, making it an impressive representation of his expertise and dedication.',
            thumbnail: 'images/portfolio.jpg', // Replace with actual image path
            technologies: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'Node.js'],
            link: 'https://sanjoy-chattopadhay.github.io/portfolio/',
            source: 'https://sanjoy-chattopadhay.github.io/portfolio/'
        },
        {
            title: 'To-Do List App with Google Calendar Integration',
            description: 'A web application that utilizes Google API to synchronize tasks with Google Calendar, featuring a responsive design implemented with CSS, JavaScript, and Bootstrap. This project demonstrates my proficiency in API integration and modern web development techniques.',
            thumbnail: 'images/todo.jpg', // Replace with actual image path
            technologies: ['JavaScript', 'CSS', 'Bootstrap', 'Google API', 'Responsive Design'],
            link: 'https://sanjoy-chattopadhay.github.io/To-Do-List-App-with-Google-Calendar-Integration/', // Replace with actual project link
            source: 'https://github.com/Sanjoy-Chattopadhay/To-Do-List-App-with-Google-Calendar-Integration'
        },
        {
            title: 'Weather Teller',
            description: 'It is a weather application that fetches data from https://home.openweather map.org/ using API and city name. Besides temperature, it also tells windspeed and humidity.',
            thumbnail: 'images/weather.jpg', // Replace with actual image path
            technologies: ['JavaScript', 'CSS', 'HTML', 'OpenWeatherMap API', 'Responsive Design'],
            link: 'https://sanjoy-chattopadhay.github.io/know_your_weather/',
            source: 'https://github.com/Sanjoy-Chattopadhay/know_your_weather'
        },
        {
            title: 'Pick Color',
            description: 'An interactive color picker tool with a sleek dark theme, featuring HEX and RGB color values, a color palette generator, and a stylish digital clock.',
            thumbnail: 'images/color-picker.jpg', // Replace with actual image path
            technologies: ['JavaScript', 'CSS', 'HTML', 'Color Picker API'],
            link: 'https://sanjoy-chattopadhay.github.io/color-picker/', // Replace with actual project link
            source: 'https://github.com/Sanjoy-Chattopadhay/color-picker'
        },
        {
            title: 'Note Keeper App',
            description: 'A comprehensive note-taking application that helps users organize and manage their notes efficiently. It supports various features such as categorization, search functionality, and data persistence.',
            thumbnail: 'images/react-todo.png', // Replace with actual image path
            technologies: ['JavaScript', 'HTML', 'CSS'],
            link: 'https://tzb03n.csb.app/',
            source: 'https://github.com/Sanjoy-Chattopadhay/Note-Keeper-App'
        },
        {
            title: 'Project Portfolio',
            description: 'A comprehensive portfolio showcasing various projects, each with a detailed description, technology stack, and links to the live project and source code.',
            thumbnail: 'images/projects.jpg', // Replace with actual image path
            technologies: ['HTML5', 'CSS3', 'Bootstrap', 'JavaScript'],
            link: 'https://sanjoy-chattopadhay.github.io/my-projects/',
            source: 'https://github.com/Sanjoy-Chattopadhay/my-projects'
        }
    ];

    const projectsGrid = document.getElementById('projects-grid');

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');

        const techTags = project.technologies.map(tech => 
            `<span class="tech-tag">${tech}</span>`
        ).join(' ');

        projectCard.innerHTML = `
            <div class="project-header">
                <img src="${project.thumbnail}" alt="${project.title}">
                <h3><i class="fas fa-project-diagram"></i> ${project.title}</h3>
            </div>
            <p class="description-full">${project.description}</p>
            <div class="technologies-container">
                ${techTags}
            </div>
            <div class="buttons-container">
                <a href="${project.link}" class="btn btn-view"><i class="fas fa-eye"></i> Take a Look</a>
                <a href="${project.source}" class="btn btn-source"><i class="fas fa-code"></i> Source Code</a>
            </div>
        `;

        projectsGrid.appendChild(projectCard);
    });
});
