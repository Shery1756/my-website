document.addEventListener('DOMContentLoaded', () => {
const projects = [
    { name: 'Social Media Analytics Dashboard', technology: 'Python', description: 'Developed a dashboard application using Python and Flask to analyze social media metrics and engagement.' },
    { name: 'Online Banking System', technology: 'Java', description: 'Designed and implemented an online banking system with features like account management, transactions, and security protocols.' },
    { name: 'E-learning Platform', technology: 'React', description: 'Built a modern e-learning platform using React.js and Redux for state management, allowing users to enroll in courses and track their progress.' },
    { name: 'Restaurant Management System', technology: 'ASP.NET', description: 'Created a restaurant management system with ASP.NET MVC, including features like order management, table reservations, and inventory tracking.' },
    { name: 'Fitness Tracker Mobile App', technology: 'Swift', description: 'Developed a mobile application for tracking fitness activities, including workout sessions, calorie intake, and progress charts, using Swift and UIKit.' },
    { name: 'Online Marketplace', technology: 'Ruby on Rails', description: 'Built a scalable online marketplace platform using Ruby on Rails, allowing users to buy and sell products with secure payment processing.' }
];


    const projectList = document.getElementById('project-list');
    const filterInput = document.getElementById('filter');

    function displayProjects(filter = '') {
        projectList.innerHTML = '';
        const filteredProjects = projects.filter(project => 
            project.technology.toLowerCase().includes(filter.toLowerCase()));
        filteredProjects.forEach(project => {
            const li = document.createElement('li');
            li.textContent = `${project.name} - ${project.technology}`;
            projectList.appendChild(li);
        });
    }

    filterInput.addEventListener('input', (e) => {
        displayProjects(e.target.value);
    });

    displayProjects();
});
