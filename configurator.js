$(document).ready(function () {
    let currentStep = 0; // Track the current step
    const $steps = $('.configurator-form-step'); // Cache all step elements

    // Initialize steps visibility and disable next buttons (except for the first step)
    $steps.each(function (index) {
        $(this).toggle(index === 0); // Show only the first step
        $(this).find('[configurator="next-btn"]').toggleClass('disabled', index !== 0).css('pointer-events', index === 0 ? 'auto' : 'none');
    });

    // Function to show a specific step with animation
    function showStep(stepIndex) {
        const $current = $steps.eq(currentStep);
        const $next = $steps.eq(stepIndex);

        if (!$next.length) return; // Exit if the step doesn't exist

        // Scroll to the top of the window
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Animate transition between steps
        gsap.to($current, {
            opacity: 0,
            y: -32,
            duration: 0.35,
            onComplete: function () {
                $current.hide();
                $next.css('display', 'grid');
                gsap.fromTo($next, { opacity: 0, y: 32 }, { opacity: 1, y: 0, duration: 0.35 });
                currentStep = stepIndex; // Update the current step
            },
        });

        // Check if we're moving from step 5 to step 6 and render the image
        if (stepIndex === 6 && currentStep === 5) {
            renderImage();
        }
    }

    // Enable or disable the "Next" button based on input selections
    function updateNextButtonState($step) {
        const $inputs = $step.find('input[type="radio"], input[type="checkbox"]');
        const $nextButton = $step.find('[configurator="next-btn"]');
        const isSelected = $inputs.is(':checked');
        $nextButton.toggleClass('disabled', !isSelected).css('pointer-events', isSelected ? 'auto' : 'none');
    }

    // Handle "Next" and "Previous" button clicks
    $(document).on('click', '[configurator]', function () {
        const action = $(this).attr('configurator');
        if (action === 'next-btn') showStep(currentStep + 1);
        if (action === 'prev-btn') showStep(currentStep - 1);
    });

    // Handle input changes to update button states and manage selection styles
    $steps.on('change', 'input', function () {
        const $step = $(this).closest('.configurator-form-step');
        updateNextButtonState($step);

        const $selection = $(this).closest('.configurator-selection');
        $selection.toggleClass('is-selected', this.checked);
        if (this.type === 'radio') {
            $step.find('.configurator-selection').not($selection).removeClass('is-selected');
        }
    });

    // Update product options based on selected market
    $('input[name="market"]').on('change', function () {
        const isPlantBased = $(this).data('reference') === 'plantbased-nutrition';
        const $options = $('input[name="product-type"]').closest('.configurator-selection');

        $options.each(function () {
            const $input = $(this).find('input');
            const disabled = isPlantBased && ['Tablets', 'Capsules'].includes($input.val());
            $(this).toggleClass('is-disabled', disabled);
            $input.prop('disabled', disabled).prop('checked', false);
        });

        updateNextButtonState($('[data-step="4"]')); // Update Step 4's button
    });

    // Update packaging options based on selected product type
    $('input[name="product-type"]').on('change', function () {
        const allowedPackaging = $(this).data('packaging').split(',');
        $('input[name="packaging"]').each(function () {
            const isAllowed = allowedPackaging.includes($(this).val());
            $(this).prop('disabled', !isAllowed).prop('checked', false)
                .siblings('.w--redirected-checked').removeClass('w--redirected-checked');
            $(this).closest('.configurator-selection').toggleClass('is-disabled', !isAllowed).removeClass('is-selected');
        });
    });

    function renderImage() {
        // Retrieve selected values based on data-reference attribute
        const market = $('input[name="market"]:checked').data('reference');
        const productType = $('input[name="product-type"]:checked').data('reference');
        const packaging = $('input[name="packaging"]:checked').data('reference');
    
        if (!market || !productType || !packaging) return; // Exit if any value is missing
    
        // Construct the class name
        const targetClass = `.pc-${productType}-${packaging}-${market}`;
    
        // Hide all direct child elements (all classes) inside .pc-final-render_wrapper
        $('.pc-final-render_wrapper > *').hide();

        // Apply CSS styles to all children
        $('.pc-final-render_wrapper > *').css({
            'object-fit': 'contain',
            'transform': 'scale(1.25)'
        });

        console.log(targetClass);
    
        // Show the matching image
        const targetImage = $(`.pc-final-render_wrapper ${targetClass}`);
        if (targetImage.length) {
            targetImage.css('display', 'block');
        }
    }
});