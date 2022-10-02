import Carousel from "./Carousel.js";
import Header from "./Header.js";

class Main {
  constructor() {
    this.init();
  }

  init() {
    //Pour les carousels
    const components = document.querySelectorAll('[data-component="Carousel"]');

    for (let i = 0; i < components.length; i++) {
      const component = components[i];
      new Carousel(component);
    }
    for (let i = 0; i < components.length; i++) {
      const component = components[i];
      new Header(component);
    }
  }
}

new Main();
