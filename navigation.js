document.addEventListener('DOMContentLoaded', () => {
    const mainNav = document.querySelector('.main-nav');
    let lastScrollY = 0;
    const scrollUpThreshold = 16; // Threshold for scrolling up
    const scrollDownThreshold = 4; // Threshold for scrolling down
    const topThreshold = 64; // State 1 applies within the first 64px of the page

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        // State 1: Within the first 64px of the page
        if (currentScrollY <= topThreshold) {
            mainNav.classList.remove('is-scroll');
            mainNav.style.transform = 'translateY(0)'; // Reset navbar position
            lastScrollY = currentScrollY; // Update last scroll position
            return;
        }

        // Determine scrolling direction with separate thresholds
        if (currentScrollY > lastScrollY + scrollDownThreshold) {
            // State 2: Scrolling down by at least 4px
            mainNav.style.transform = 'translateY(-100%)'; // Slide navbar up
        } else if (currentScrollY < lastScrollY - scrollUpThreshold) {
            // State 3: Scrolling up by at least 16px
            mainNav.style.transform = 'translateY(0)'; // Slide navbar down
            mainNav.classList.add('is-scroll'); // Apply `is-scroll` class
        }

        // Update lastScrollY for the next scroll event
        lastScrollY = currentScrollY;
    });
});