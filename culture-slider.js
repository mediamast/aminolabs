const $dragElement = $('.drag-element');
// const $dragCursor = $('.drag-cursor');

// // Hide the default cursor on mouse enter and show on mouse leave
// $dragElement.on('mouseenter', function () {
//     $dragCursor.css('opacity', '1');
//     $dragElement.css('cursor', 'none'); // Hides the default browser cursor
// });

// $dragElement.on('mouseleave', function () {
//     $dragCursor.css('opacity', '0');
//     $dragElement.css('cursor', ''); // Resets to the default browser cursor
// });

// Scale the dragElement on mouse down and reset on mouse up globally
$dragElement.on('mousedown', function () {
    $(this).css('transform', 'scale(0.5)');
});

$dragElement.on('mouseup', function () {
    $(this).css('transform', 'scale(1)');
});

// CMS Culture Swiper
const cultureSwiper = new Swiper('.swiper.is-culture', {
    slidesPerView: 1.5,
    spaceBetween: 16,

    direction: 'horizontal',
    speed: 500,
    loop: true,
    // touchStartPreventDefault: false,
    allowTouchMove: true,

    breakpoints: {
        // when window width is >= 768px
        768: {
            slidesPerView: 2.5,
            spaceBetween: 16
        },
        // when window width is >= 1280px
        1280: {
            slidesPerView: 3.5,
            spaceBetween: 16
        }
    }
});