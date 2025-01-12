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