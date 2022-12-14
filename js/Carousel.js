import Cache from "./utils/Cache.js";

export default class Carousel {
  constructor(component) {
    this.component = component;
    if (Cache.get("Links") === undefined || null) {
      Cache.set("Links", 0, false);
    }
    this.defaultConfig = {
      slidesPerView: 1,
      loop: true,
      parallax: true,
      speed: 450,
      initialSlide: parseFloat(Cache.get("Links")),

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    };
    this.init();
  }

  init() {
    let config = this.defaultConfig;

    if (this.component.dataset.carousel === "view-all") {
      config = {
        ...this.defaultConfig,
        ...{
          slidesPerView: 1,
          loop: true,

          breakpoints: {
            869: {
              spaceBetween: 40,
              slidesPerView: 9,
            },

            950: {
              spaceBetween: 64,
              slidesPerView: 9,
            },
          },
        },
      };
    }

    if (this.component.dataset.carousel === "view-two") {
      config = {
        ...this.defaultConfig,
        ...{
          spaceBetween: 10,
          slidesPerView: 1,
          loop: false,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },

          breakpoints: {
            500: {
              spaceBetween: 15,
              slidesPerView: 2,
            },

            768: {
              spaceBetween: 30,
              slidesPerView: 2,
            },
          },
        },
      };
    }

    new Swiper(this.component, config);
  }
}
