import Swiper from 'swiper/bundle';

import { SliderPaginationProgress } from '../modules/Slider';

new Swiper('#main-preivew', {
  loop: true,
  autoplay: true,
  noSwipingClass: 'no-swiping-class',
  slidesPerView: 6,
  spaceBetween: 12,
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 12,
      slidesPerGroup: 2,
    },
    680: {
      slidesPerView: 3,
      spaceBetween: 12,
      slidesPerGroup: 3,
    },
    1024: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
    1440: {
      slidesPerView: 'auto',
      slidesPerGroup: 1,
    },
  },
});

new Swiper('#catalog-exclusive', {
    loop: true,
    noSwipingClass: 'no-swiping-class',
    slidesPerView: 6,
    spaceBetween: 6,
    navigation: {
      nextEl: '.catalog-exclusive .catalog-top__btn-right',
      prevEl: '.catalog-exclusive .catalog-top__btn-left ',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      bulletActiveClass: 'swiper-pagination-bullet-current',
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 12,
        slidesPerGroup: 2,
      },
      680: {
        slidesPerView: 3,
        spaceBetween: 12,
        slidesPerGroup: 3,
      },
      1024: {
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
      1440: {
        slidesPerView: 6,
        slidesPerGroup: 6,
      },
    },
});

new Swiper('#catalog-best', {
  loop: true,
  noSwipingClass: 'no-swiping-class',
  slidesPerView: 6,
  spaceBetween: 6,
  navigation: {
    nextEl: '.catalog-best .catalog-top__btn-right',
    prevEl: '.catalog-best .catalog-top__btn-left ',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    bulletActiveClass: 'swiper-pagination-bullet-current',
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 12,
      slidesPerGroup: 2,
    },
    680: {
      slidesPerView: 3,
      spaceBetween: 12,
      slidesPerGroup: 3,
    },
    1024: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
    1440: {
      slidesPerView: 6,
      slidesPerGroup: 6,
    },
  },
});

new Swiper('#catalog-limit', {
  loop: true,
  noSwipingClass: 'no-swiping-class',
  slidesPerView: 6,
  spaceBetween: 6,
  navigation: {
    nextEl: '.catalog-limit .catalog-top__btn-right',
    prevEl: '.catalog-limit .catalog-top__btn-left ',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    bulletActiveClass: 'swiper-pagination-bullet-current',
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 12,
      slidesPerGroup: 2,
    },
    680: {
      slidesPerView: 3,
      spaceBetween: 12,
      slidesPerGroup: 3,
    },
    1024: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
    1440: {
      slidesPerView: 6,
      slidesPerGroup: 6,
    },
  },
});

new Swiper('#big-catalog', {
  lazy: true,
  loop: true,
  noSwipingClass: 'no-swiping-class',
  slidesPerView: 4,
  spaceBetween: 12,
  navigation: {
    nextEl: '.catalog .catalog-top__btn-right',
    prevEl: '.catalog .catalog-top__btn-left',
    disabledClass: 'no',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    bulletActiveClass: 'swiper-pagination-bullet-current',
  },
  grid: {
    rows: 2,
    fill: 'row',
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 12,
      slidesPerGroup: 2,
    },
    680: {
      slidesPerView: 3,
      spaceBetween: 12,
      slidesPerGroup: 3,
    },
    1024: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
    1440: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
  },
})

new Swiper('#catalog-stock', {
  loop: true,
  noSwipingClass: 'no-swiping-class',
  slidesPerView: 6,
  spaceBetween: 6,
  navigation: {
    nextEl: '.catalog-stock .catalog-top__btn-right',
    prevEl: '.catalog-stock .catalog-top__btn-left ',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    bulletActiveClass: 'swiper-pagination-bullet-current',
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 12,
      slidesPerGroup: 2,
    },
    680: {
      slidesPerView: 3,
      spaceBetween: 12,
      slidesPerGroup: 3,
    },
    1024: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
    1440: {
      slidesPerView: 6,
      slidesPerGroup: 6,
    },
  },
});

new Swiper('#catalog-offers', {
  loop: true,
  noSwipingClass: 'no-swiping-class',
  slidesPerView: 6,
  spaceBetween: 6,
  navigation: {
    nextEl: '.best-offers .catalog-top__btn-right',
    prevEl: '.best-offers .catalog-top__btn-left ',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    bulletActiveClass: 'swiper-pagination-bullet-current',
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 12,
      slidesPerGroup: 2,
    },
    680: {
      slidesPerView: 3,
      spaceBetween: 12,
      slidesPerGroup: 3,
    },
    1024: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
    1440: {
      slidesPerView: 6,
      slidesPerGroup: 6,
    },
  },
});

new Swiper('#catalog-preview', {
  loop: true,
  noSwipingClass: 'no-swiping-class',
  slidesPerView: 6,
  spaceBetween: 6,
  navigation: {
    nextEl: '.catalog-preview .catalog-top__btn-right',
    prevEl: '.catalog-preview .catalog-top__btn-left ',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    bulletActiveClass: 'swiper-pagination-bullet-current',
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 12,
      slidesPerGroup: 2,
    },
    680: {
      slidesPerView: 3,
      spaceBetween: 12,
      slidesPerGroup: 3,
    },
    1024: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
    1440: {
      slidesPerView: 6,
      slidesPerGroup: 6,
    },
  },
});

new Swiper('#news-slider', {
  loop: true,
  noSwipingClass: 'no-swiping-class',
  slidesPerView: 4,
  spaceBetween: 12,
  navigation: {
    nextEl: '.news-slider .catalog-top__btn-right',
    prevEl: '.news-slider .catalog-top__btn-left ',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    bulletActiveClass: 'swiper-pagination-bullet-current',
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 12,
      slidesPerGroup: 2,
    },
    680: {
      slidesPerView: 3,
      spaceBetween: 12,
      slidesPerGroup: 3,
    },
    1024: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
    1440: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
  },
});

new Swiper('#knowledge-base', {
  loop: true,
  noSwipingClass: 'no-swiping-class',
  slidesPerView: 4,
  spaceBetween: 12,
  navigation: {
    nextEl: '.knowledge-base .catalog-top__btn-right',
    prevEl: '.knowledge-base .catalog-top__btn-left',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    bulletActiveClass: 'swiper-pagination-bullet-current',
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 12,
      slidesPerGroup: 2,
    },
    680: {
      slidesPerView: 3,
      spaceBetween: 12,
      slidesPerGroup: 3,
    },
    1024: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
    1440: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
  },
});

new Swiper('#new-arrivals', {
  loop: true,
  noSwipingClass: 'no-swiping-class',
  slidesPerView: 4,
  spaceBetween: 12,
  navigation: {
    nextEl: '.new-arrivals .catalog-top__btn-right',
    prevEl: '.new-arrivals .catalog-top__btn-left ',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    bulletActiveClass: 'swiper-pagination-bullet-current',
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 12,
      slidesPerGroup: 2,
    },
    680: {
      slidesPerView: 3,
      spaceBetween: 12,
      slidesPerGroup: 3,
    },
    1024: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
    1440: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
  },
});

new Swiper('#catalog-viewed', {
  loop: true,
  noSwipingClass: 'no-swiping-class',
  slidesPerView: 6,
  spaceBetween: 6,
  navigation: {
    nextEl: '.catalog-viewed .catalog-top__btn-right',
    prevEl: '.catalog-viewed .catalog-top__btn-left ',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    bulletActiveClass: 'swiper-pagination-bullet-current',
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 12,
      slidesPerGroup: 2,
    },
    680: {
      slidesPerView: 3,
      spaceBetween: 12,
      slidesPerGroup: 3,
    },
    1024: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
    1440: {
      slidesPerView: 6,
      slidesPerGroup: 6,
    },
  },
});

new Swiper('#news-slider-novelty', {
  loop: true,
  noSwipingClass: 'no-swiping-class',
  slidesPerView: 4,
  spaceBetween: 12,
  navigation: {
    nextEl: '.news-slider-novelty .catalog-top__btn-right',
    prevEl: '.news-slider-novelty .catalog-top__btn-left ',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    bulletActiveClass: 'swiper-pagination-bullet-current',
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 12,
      slidesPerGroup: 2,
    },
    680: {
      slidesPerView: 3,
      spaceBetween: 12,
      slidesPerGroup: 3,
    },
    1024: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
    1440: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
  },
});

new Swiper('#banner-feedback-1', {
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
    pauseOnMouseEnter: false,
  },
  noSwipingClass: 'no-swiping-class',
  slidesPerView: 5,
  spaceBetween: 16,
  navigation: {
    nextEl: '.catalog-viewed .catalog-top__btn-right',
    prevEl: '.catalog-viewed .catalog-top__btn-left ',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    bulletActiveClass: 'swiper-pagination-bullet-current',
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 12,
      slidesPerGroup: 2,
    },
    680: {
      slidesPerView: 3,
      spaceBetween: 12,
      slidesPerGroup: 3,
    },
    1024: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
    1440: {
      slidesPerView: 'auto',
      slidesPerGroup: 1,
    },
  },
});

new Swiper('#banner-feedback-2', {
  loop: true,
  autoplay: true,
  noSwipingClass: 'no-swiping-class',
  slidesPerView: 6,
  spaceBetween: 6,
  navigation: {
    nextEl: '.catalog-viewed .catalog-top__btn-right',
    prevEl: '.catalog-viewed .catalog-top__btn-left ',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    bulletActiveClass: 'swiper-pagination-bullet-current',
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 12,
      slidesPerGroup: 2,
    },
    680: {
      slidesPerView: 3,
      spaceBetween: 12,
      slidesPerGroup: 3,
    },
    1024: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
    1440: {
      slidesPerView: 'auto',
      slidesPerGroup: 1,
    },
  },
});