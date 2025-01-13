const cmsReviewsSwiper = new Swiper('.swiper.is-numbers', {
    slidesPerView: 1,
    spaceBetween: 16,
  
    breakpoints: {
      // when window width is >= 768px
      768: {
        slidesPerView: 1,
        spaceBetween: 16
      },
      // when window width is >= 1280px
      1280: {
        slidesPerView: 1,
        spaceBetween: 16
      }
    },
    
    // Navigation arrows
    navigation: {
      nextEl: '.c-slider-button.is-right',
      prevEl: '.c-slider-button.is-left',
    },
  });