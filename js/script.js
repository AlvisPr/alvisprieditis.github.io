/**
 * Main JavaScript for Portfolio Website
 * Handles animations, typewriter effects, and navigation
 */

// Loading screen handler
window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.loader-wrapper').style.display = 'none';
        document.querySelector('.content').classList.add('visible');
        
        // Start typewriter effect after content is visible
        const typewriterElements = document.querySelectorAll('.typewriter');
        typewriterElements.forEach((element, index) => {
            // Get the original text from the HTML
            const originalText = element.textContent;
            element.textContent = '';
            let charIndex = 0;
            
            function typeText() {
                if (charIndex < originalText.length) {
                    element.textContent += originalText[charIndex];
                    charIndex++;
                    if (charIndex < originalText.length) {
                        setTimeout(typeText, 150);
                    }
                }
            }
            
            // Add a small delay between each typewriter to create a sequence effect
            setTimeout(() => {
                typeText();
            }, index * 1500);
        });
    }, 1000);
});

// Intersection Observer for section animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-viewport');
        } else {
            entry.target.classList.remove('in-viewport');
        }
    });
}, observerOptions);

// Back to top button functionality
window.onscroll = function() {
    const myButton = document.getElementById("myBtn");
    if (!myButton) return;
    
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
};

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Create tooltip for skill icons
function createTooltip(text, targetElement) {
    // Remove any existing tooltips
    const existingTooltip = document.querySelector('.tooltip');
    if (existingTooltip) existingTooltip.remove();
    
    // Create and add new tooltip
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = text;
    document.body.appendChild(tooltip);
    
    // Position tooltip relative to element
    const rect = targetElement.getBoundingClientRect();
    tooltip.style.left = rect.left + rect.width / 2 - tooltip.offsetWidth / 2 + 'px';
    tooltip.style.top = rect.bottom + 10 + 'px';
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Observe all animation elements
    document.querySelectorAll('.animate-section, .about-section-content, .skill-card, .project-card, .certificate-card, .contact-method').forEach(element => {
        observer.observe(element);
    });
    
    // Event listener for smooth navigation
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // Contact card flip functionality
    const contactCard = document.querySelector('.contact-card');
    const flipButtons = document.querySelectorAll('.contact-flip-btn');
    
    if (contactCard && flipButtons.length > 0) {
        flipButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                contactCard.classList.toggle('flipped');
            });
        });
    }
    
    // Skills tooltip functionality
    document.querySelectorAll('.skills').forEach(skill => {
        skill.addEventListener('mouseenter', (e) => {
            const skillName = skill.getAttribute('data-name') || skill.getAttribute('title') || '';
            if (skillName) {
                createTooltip(skillName, skill);
            }
        });
        
        skill.addEventListener('mouseleave', () => {
            const tooltip = document.querySelector('.tooltip');
            if (tooltip) tooltip.remove();
        });
    });
});