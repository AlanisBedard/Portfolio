import Carousel from "./Carousel.js";
import Header from "./Header.js";
import Links from "./Links.js";

class Main {
  constructor() {
    this.componentList = {
      Carousel,
      Header,
      Links,
    };

    this.init();
  }

  init() {
    const components = document.querySelectorAll("[data-component]");

    for (let i = 0; i < components.length; i++) {
      const element = components[i];
      const componentName = element.dataset.component;

      if (componentName == "Carousel") {
        new Carousel(element);
      } else if (componentName == "Header") {
        new Header(element);
      } else if (componentName == "Links") {
        new Links(element);
      }
    }
  }
}

new Main();
