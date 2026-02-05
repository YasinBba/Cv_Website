document.addEventListener('DOMContentLoaded', () => {
    // Typed.js Initialization
    const typedTarget = document.getElementById('typed-text');
    if (typedTarget) {
        new Typed('#typed-text', {
            strings: [
                'C# Developer',
                'Unity Game Developer',
                'Web Developer',
                'Problem Solver'
            ],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            loop: true,
            cursorChar: '|'
        });
    }

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-white', 'dark:bg-gray-900', 'shadow-md', 'py-2');
            navbar.classList.remove('bg-transparent', 'py-4');
        } else {
            navbar.classList.remove('bg-white', 'dark:bg-gray-900', 'shadow-md', 'py-2');
            navbar.classList.add('bg-transparent', 'py-4');
        }
    });

    // Animate blobs if they exist (for Hero background)
    const blobs = document.querySelectorAll('.animate-blob');
    if (blobs.length > 0) {
        // Just ensuring CSS animation runs, handled by style.css/Tailwind custom config if added
        // But here I'll rely on a simple CSS keyframe added to animations.css or inline
    }
});
