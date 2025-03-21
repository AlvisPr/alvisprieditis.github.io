/**
 * Portfolio Data API
 * Centralized storage for all dynamic content used in the portfolio
 */

// Data API object to hold all portfolio data
const portfolioAPI = {
    // Projects data
    projects: [
        {
            name: 'Real Time Bus Tracker',
            photo: 'https://raw.githubusercontent.com/AlvisPr/Real-Time-Bus-Tracker/main/Screenshoots/Screenshot.png',
            link: 'https://github.com/AlvisPr/Real-Time-Bus-Tracker',
            about: 'Interactive map tracks bus movement between MIT and Harvard stops.',
            live: '',
            technologies: ['JavaScript', 'Mapbox API', 'HTML', 'CSS']
        }, 
        {
            name: 'Eye Exercise',
            photo: 'https://raw.githubusercontent.com/AlvisPr/Eye-Movement-Exercise/main/Screenshot/eyes.png',
            link: 'https://github.com/AlvisPr/Eye-Exercise',
            about: 'Dynamic eyes follow cursor movement across the webpage screen.',
            live: 'https://eyemovement.netlify.app/',
            technologies: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'PacMen Exercise',
            photo: 'https://raw.githubusercontent.com/AlvisPr/PacMen-Exercise/main/Screenshots/PacMen.png',
            link: 'https://github.com/AlvisPr/PacMen-Exercise',
            about: 'Create and animate PacMan characters bouncing around the screen.',
            live: 'https://pacmen.netlify.app/',
            technologies: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Little Lemon Restaurant',
            photo: './assets/Photos/littlelemon.jpeg',
            link: 'https://github.com/AlvisPr/little-lemon-capstone',
            about: 'Mediterranean restaurant website with online booking and menu system.',
            live: "https://littlelemonfreshfood.netlify.app/",
            technologies: ['React', 'Context API', 'JavaScript', 'CSS']
        }, 
        {
            name: 'Full Stack Banking App',
            photo: 'https://raw.githubusercontent.com/AlvisPr/FrontEndBankingApp_MIT/refs/heads/master/readme%20assets/HomePage.png',
            link: 'https://github.com/AlvisPr/FrontEndBankingApp_MIT',
            about: 'Secure banking application for deposits, withdrawals, and money transfers.',
            live: 'https://www.alvisprieditisfullstackbankingapp.online/',
            technologies: ['React', 'Context API', 'Node.js', 'Express.js', 'MongoDB', 'JWT']
        }
    ],

    // Certificates data
    certificates: [
        {
            title: 'Professional Certificate in Coding',
            issuer: 'MIT xPRO',
            date: '2024',
            image: 'https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/132766542',
            verifyLink: 'https://lnkd.in/ee3YzRdV',
            description: 'A comprehensive program covering full-stack development, including:',
            skills: [
                'Advanced JavaScript & ES6+',
                'React.js Development',
                'Node.js & Express',
                'Database Management',
                'API Development'
            ],
            additionalInfo: 'Completed with distinction, demonstrating proficiency in modern web development practices.'
        },
        {
            title: 'Front-End Developer Certificate',
            issuer: 'Meta',
            date: '2024',
            image: './assets/Photos/Meta.png',
            verifyLink: 'https://www.credly.com/badges/7f40b35d-70c5-4b97-9df0-c9b4bdab9568/public_url',
            description: 'Industry-recognized certification covering:',
            skills: [
                'Modern UI/UX Principles',
                'React & Redux',
                'Responsive Design',
                'Web Performance',
                'Testing & Debugging'
            ],
            additionalInfo: 'Developed by Meta engineers, focusing on real-world application development.'
        },
        {
            title: 'Learn PHP Skill Path',
            issuer: 'Codecademy NY',
            date: '2025',
            image: './assets/Photos/php.png',
            verifyLink: 'https://drive.google.com/file/d/1b5B4yYy1-74N_fENikiGBhZ1KmNtc2H0/view?usp=sharing',
            description: 'Comprehensive PHP development course covering:',
            skills: [
                'Object-Oriented PHP',
                'MySQL & Database Design',
                'PHP Security Best Practices',
                'Web Application Development',
                'API Integration'
            ],
            additionalInfo: 'Mastered PHP development fundamentals and advanced concepts through hands-on projects.'
        }
    ],

    // Methods to retrieve data
    getProjects: function() {
        return this.projects;
    },

    getCertificates: function() {
        return this.certificates;
    },

    // Method to get a specific project by name
    getProjectByName: function(name) {
        return this.projects.find(project => project.name === name) || null;
    },

    // Method to get a specific certificate by title
    getCertificateByTitle: function(title) {
        return this.certificates.find(cert => cert.title === title) || null;
    }
};

// Render functions

/**
 * Renders all projects to the specified container
 * @param {string} containerId - The ID of the container element
 */
function renderProjects(containerId = 'projects-grid') {
    const projectsGrid = document.getElementById(containerId);
    if (!projectsGrid) return;

    projectsGrid.innerHTML = '';
    
    portfolioAPI.getProjects().forEach((project, index) => {
        const projectCard = document.createElement('article');
        projectCard.className = 'project-card';

        // Create a card with flip functionality and guaranteed clickable links
        projectCard.innerHTML = `
            <div class="project-card-container">
                <!-- Front of the card -->
                <div class="project-card-front">
                    <div class="project-image">
                        ${project.photo ? 
                            `<img src="${project.photo}" alt="${project.name}" loading="lazy">` : 
                            `<div class="placeholder-image">
                                <i class="fas fa-laptop-code"></i>
                            </div>`
                        }
                    </div>
                    <div class="project-content">
                        <h3 class="project-title">${project.name}</h3>
                        <p class="project-description">${project.about}</p>
                        <div class="project-tech">
                            ${project.technologies
                                .map(tech => `<span class="tech-tag">${tech}</span>`)
                                .join('')}
                        </div>
                        <p class="flip-hint">Hover to see more details</p>
                    </div>
                </div>
                
                <!-- Back of the card -->
                <div class="project-card-back">
                    <div class="project-back-content">
                        <h3 class="project-back-title">${project.name}</h3>
                        <div class="project-details">
                            <p>${project.about}</p>
                            <p><strong>Technologies:</strong> ${project.technologies.join(', ')}</p>
                        </div>
                    </div>
                    
                    <!-- Project links (optimized layout) -->
                    <div class="project-links-container project-back-links">
                        ${project.live ? 
                            `<a href="${project.live}" class="project-link live-link" target="_blank" rel="noopener noreferrer">
                                <span class="link-text">Live Demo</span>
                            </a>` : 
                            ''
                        }
                        <a href="${project.link}" class="project-link source-link" target="_blank" rel="noopener noreferrer">
                            <span class="link-text">GitHub <i class="fab fa-github"></i></span>
                        </a>
                    </div>
                </div>
            </div>`;
        
        // Add direct click handlers to all links with event delegation
        const links = projectCard.querySelectorAll('.project-link');
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                // Get the href value
                const href = this.getAttribute('href');
                if (href) {
                    // Open link in new tab
                    window.open(href, '_blank');
                }
                // Prevent default and stop propagation to ensure it works
                e.preventDefault();
                e.stopPropagation();
            });
        });

        // Add to DOM
        projectsGrid.appendChild(projectCard);

        // Trigger animation after a small delay
        setTimeout(() => {
            projectCard.classList.add('animate');
        }, 50 * index); // Stagger animation
    });
}

/**
 * Renders all certificates to the specified container
 * @param {string} containerId - The ID of the container element
 */
function renderCertificates(containerId = 'certificates-grid') {
    const certificatesGrid = document.querySelector(`.${containerId}`);
    if (!certificatesGrid) return;

    certificatesGrid.innerHTML = '';
    
    portfolioAPI.getCertificates().forEach((certificate, index) => {
        const certCard = document.createElement('article');
        certCard.className = 'certificate-card';

        // Create certificate card markup
        certCard.innerHTML = `
            <div class="certificate-card-inner">
                <div class="certificate-card-front">
                    <div class="certificate-image">
                        <img src="${certificate.image}" alt="${certificate.title}">
                    </div>
                    <div class="certificate-content">
                        <h3 class="certificate-title">${certificate.title}</h3>
                        <p class="certificate-issuer">${certificate.issuer}</p>
                        <p class="certificate-date">${certificate.date}</p>
                    </div>
                </div>
                <div class="certificate-card-back">
                    <h3>${certificate.title}</h3>
                    <p>${certificate.description}</p>
                    <ul>
                        ${certificate.skills.map(skill => `<li>${skill}</li>`).join('')}
                    </ul>
                    <p>${certificate.additionalInfo}</p>
                    <a href="${certificate.verifyLink}" class="verify-link" target="_blank" rel="noopener noreferrer">Verify Certificate</a>
                </div>
            </div>
        `;

        // Add to DOM
        certificatesGrid.appendChild(certCard);

        // Trigger animation after a small delay
        setTimeout(() => {
            certCard.classList.add('animate');
        }, 50 * index); // Stagger animation
    });
}

// Initialize rendering when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    renderCertificates();
});

// Re-export to make accessible to other scripts
window.portfolioAPI = portfolioAPI;
window.renderProjects = renderProjects;
window.renderCertificates = renderCertificates;
