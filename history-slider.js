// History Swiper
const historySwiper = new Swiper('.swiper.is-history', {
    slidesPerView: 1.5,
    spaceBetween: 16,

    direction: 'horizontal',
    speed: 500,
    loop: false,
    // touchStartPreventDefault: false,
    allowTouchMove: true,

    breakpoints: {
        // when window width is >= 768px
        768: {
            slidesPerView: 2.5,
            spaceBetween: 24
        },
        // when window width is >= 1280px
        1280: {
            slidesPerView: 3.5,
            spaceBetween: 32
        }
    }
});