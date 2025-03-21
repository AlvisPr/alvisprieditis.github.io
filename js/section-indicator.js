document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section[id]');
    const dots = document.querySelectorAll('.indicator-dot');
    const progressBar = document.createElement('div');
    progressBar.className = 'indicator-progress';
    document.querySelector('.indicator-line').appendChild(progressBar);

    const observerOptions = {
        root: null,
        rootMargin: '-10% 0px',
        threshold: [0, 0.2, 0.4, 0.6, 0.8, 1.0]
    };

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const currentDot = document.querySelector(`.indicator-dot[data-section="${entry.target.id}"]`);
            if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {
                dots.forEach(dot => dot.classList.remove('active'));
                currentDot?.classList.add('active');
                
                // Calculate section progress
                const progress = (entry.intersectionRatio - 0.2) / 0.8;
                currentDot.style.setProperty('--progress', Math.min(progress * 100, 100) + '%');
            }
        });
    }, observerOptions);

    sections.forEach(section => sectionObserver.observe(section));

    // Add click event listeners to dots for smooth scrolling
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const targetSection = document.getElementById(dot.dataset.section);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Update progress bar on scroll
    window.addEventListener('scroll', () => {
        const windowHeight = window.innerHeight;
        const fullHeight = document.documentElement.scrollHeight - windowHeight;
        const scrolled = window.scrollY;
        const progress = (scrolled / fullHeight) * 100;
        progressBar.style.height = `${progress}%`;
    });
});