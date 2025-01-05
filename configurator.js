// Initialize step counter
let currentStep = 1;

// Get all steps
const steps = document.querySelectorAll('.configurator-form-step');

// Hide all steps except the first on page load
document.addEventListener('DOMContentLoaded', () => {
    steps.forEach((step, index) => {
        if (index !== 0) {
            step.style.display = 'none';
        }
    });
});

// Function to show a specific step with animation
function showStep(stepIndex) {
    const current = document.querySelector(
        `.configurator-form-step[data-step="${currentStep}"]`
    );
    const next = document.querySelector(
        `.configurator-form-step[data-step="${stepIndex}"]`
    );

    if (!next) 
        return; // Prevent navigating to a non-existent step
    
    // Animate current step out
    gsap.to(current, {
        opacity: 0,
        x: -32,
        duration: 0.35,
        ease: Power1.easeOut,
        onComplete: () => {
            current.style.display = 'none';

            // Update current step
            currentStep = stepIndex;

            // Animate next step in
            next.style.display = 'grid';
            gsap.fromTo(next, {
                opacity: 0,
                x: 32
            }, {
                opacity: 1,
                x: 0,
                duration: 0.35,
                ease: Power1.easeOut
            });
        }
    });
}

// Event delegation for buttons inside step cards
document.addEventListener('click', (event) => {
    const target = event.target;

    if (target.hasAttribute('configurator')) {
        const action = target.getAttribute('configurator');

        if (action === 'next-btn') {
            showStep(currentStep + 1);
        } else if (action === 'prev-btn') {
            showStep(currentStep - 1);
        }
    }
});
