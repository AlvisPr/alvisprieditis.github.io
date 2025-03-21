document.addEventListener('DOMContentLoaded', () => {
    // Create the flashlight element
    const flashlight = document.createElement('div');
    flashlight.className = 'flashlight';
    document.body.appendChild(flashlight);

    // Update flashlight position on mouse move
    document.addEventListener('mousemove', (e) => {
        flashlight.style.left = e.clientX + 'px';
        flashlight.style.top = e.clientY + 'px';
    });

    // Optional: Handle touch events for mobile
    document.addEventListener('touchmove', (e) => {
        const touch = e.touches[0];
        flashlight.style.left = touch.clientX + 'px';
        flashlight.style.top = touch.clientY + 'px';
    });
});