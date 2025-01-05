const cmsReviewsSwiper = new Swiper('.swiper.is-cms-reviews', {
    slidesPerView: 1,
    spaceBetween: 16,

    pagination: {
      el: ".bullet-pagination-slider",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '"></span>';
      }
    },
  
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
      nextEl: '.c-reviews-slider-button.is-right',
      prevEl: '.c-reviews-slider-button.is-left',
    },
  });