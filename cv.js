document.addEventListener('DOMContentLoaded', () => {
    const cvData = {
        name: 'Margarita Bondarenko',
        contactInfo: [
            {type: 'phone', value: '+381 629 381 469'},
            {type: "telegram", value: '@margo_frontender', link: 'https://t.me/margo_frontender'},
            {type: 'email', value: 'ritabond1991@gmail.com'},
            {type: 'GitHub', value: 'Margo-Bond', link: 'https://github.com/Margo-Bond'},
            {type: 'location', value: 'Belgrade, Serbia'}
        ],
        summary: 'I am a frontend developer focused on creating user-friendly and functional interfaces. Transitioning to IT allowed me to solve complex problems and create valuable products. I thrive in teamwork environments and continuously learn modern technologies. Passionate about developing my skills in JavaScript and React, I am eager to contribute to challenging projects and grow as a developer.',
        skills: [
            'HTML5', 'CSS3 (Flex, Grid, SCSS)', 'JavaScript (ES6+)', 'ReactJS', 'Next.js', 'TypeScript', 'Firebase', 'Tailwind CSS', 'Git', 'GitHub', 'Vite', 'npm', 'Figma', 'Trello', 'Jira'
        ],
        experience: [
            {
                project: 'FunScrut',
                role: 'Frontend Developer',
                details: [
                    'Developed adaptive components for mobile and desktop using Next.js, TypeScript and Tailwind CSS.',
                    'Collaborated closely with design and backend teams to ensure seamless integration.'
                ]
            },
            {
                project: 'Magic Coffee Project',
                role: 'Frontend Developer',
                details: [
                    'Built the project architecture for mobile devices using native JavaScript and Vite.',
                    'Developed cross-browser and adaptive UI layouts based on Figma designs using B.E.M methodology.',
                    'Implemented routing, form validation, and server-side integration with Firebase RealTime Database.',
                    'Managed deadlines and technical quality via GitHub.'
                ],
                link: 'https://github.com/example/magic-coffee-project'
            },
            {
                project: 'Psychological Counseling Project',
                role: 'Frontend Developer',
                details: [
                    'Developed responsive UI components using React and Vite.',
                    'Created an admin panel and implemented seamless navigation without page reloads. ',
                    'Collaborated daily in an Agile environment with project managers, backend developers, and QA.'
                ],
                link: 'https://yana-pavlyuts.on.fleek.co/'
            },
            {
                project: 'Career Counseling Project ',
                role: 'Frontend Developer',
                details: [
                    'Developed a responsive and functional website for a career consulting service: https://nataliacareerexpert.com',
                    'Implemented routing, form validation, and integration with Firebase.',
                    'Built cross-browser adaptive UI components using React and Vite.',
                    'Worked closely with the client and the backend team to deliver the project on time.'
                ],
                link: 'https://github.com/Margo-Bond/career-counseling'
            },
        ],
        education: [
            'RSSchool, Frontent Course (2024): JavaScript, React, Git and Git Bash, HTML, CSS, SCSS',
            'SoftUni (Serbia), JavaScript Course (2023): JavaScript',
            'IT Girls School, Frontend development (2023-2024): JavaScript, React, TypeScript, NextJS, Git and Git Bash, HTML, CSS, SCSS',
            'Saint Petersburg Polytechnic University,  Introduction to Python (2023)',
            'PhD in Biology (2018), Komarov Botanical Institute, Russian Academy of Sciences, St. Petersburg',
            'Specialist Degree in Biology (2014), Syktyvkar State University, Faculty of Chemistry and Biology'
        ],
        english: 'Level: B1 (Intermediate)'
    };

    document.getElementById('name').textContent = result = cvData.name;

    const contactList = document.getElementById('contact-list');
    cvData.contactInfo.forEach(info => {
        const li = document.createElement('li');
        li.innerHTML = info.link
        ? `<strong>${info.type}:</strong> <a href="${info.link}">${info.value}</a>`
        : `<strong>${info.type}:</strong> ${info.value}`;
        contactList.append(li);
    });

    document.getElementById('summary-text').textContent = cvData.summary;

    const skillsList = document.getElementById('skills-list');
    cvData.skills.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill;
        skillsList.append(li);
    });

    const experienceList = document.getElementById(experience-list);
    cvData.experience.forEach(exp => {
        const article = document.createElement('article');
        article.innerHTML = '<h3>${exp.company}</h3><p><strong>Role:</strong> ${exp.role}</p>';
        const ul = document.createElement('ul');
        exp.details.forEach(detail => {
            const li = document.createElement('li');
            li.textContent = detail;
            ul.append(li);
        });
        article.append(ul);
        experienceList.append(article);
    })

    const educationList = document.getElementById('education-list');
    resumeData.education.forEach(edu => {
        const li = document.createElement('li');
        li.textContent = edu;
        educationList.appendChild(li);
    });

    document.getElementById('english-level').textContent = resumeData.english;
})