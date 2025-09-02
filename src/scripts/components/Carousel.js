import Swiper from 'swiper/bundle';

export default class Carousel {
  constructor(element) {
    this.element = element;
    this.options = {
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: {
        el: this.element.querySelector('.swiper-pagination'),
        clickable: true,
      },
      navigation: {
        nextEl: this.element.querySelector('.swiper-button-next'),
        prevEl: this.element.querySelector('.swiper-button-prev'),
      },
    };

    this.init();
  }

  setOptions() {
    if ('split' in this.element.dataset) {
      this.options.breakpoints = {
        1150: {
          slidesPerView: 2.01,
        },
        1024: {
          slidesPerView: 1.7,
        },
        910: {
          slidesPerView: 1.5,
        },
        768: {
          slidesPerView: 1.3,
        },
      };
    }

    if ('split2' in this.element.dataset) {
      this.options.breakpoints = {
        1440: {
          slidesPerView: 3.2,
        },
        1250: {
          slidesPerView: 3,
        },
        985: {
          slidesPerView: 2.5,
        },
        768: {
          slidesPerView: 2,
        },
        480: {
          slidesPerView: 1.5,
        },
      };
    }

    if ('autoplay' in this.element.dataset) {
      this.options.autoplay = {
        delay: 3000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      };
    }

    if ('loop' in this.element.dataset) {
      this.options.loop = 'true';
    }

    if ('slides' in this.element.dataset) {
      this.options.slidesPerView =
        parseFloat(this.element.dataset.slides, 10) ||
        this.options.slidesPerView;
    }
  }

  init() {
    this.setOptions();

    new Swiper(this.element, this.options);
  }
}
