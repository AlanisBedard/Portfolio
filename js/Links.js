import Cache from "./utils/Cache.js";

export default class Links {
  /* Méthode constructeur */
  constructor(element) {
    this.element = element;
    this.init();
  }

  /* Méthode d'initialisation */
  init() {
    this.pagelink = this.element.dataset.page;
    /* Permet d'ajouter dans la cache une clef et une valeur pendant de changer la valeur du lien */
    Cache.set("Links", this.pagelink, true);
    console.log(Cache.get("Links"));

    this.element.addEventListener("click", this.LinkSlideTime.bind(this));
  }

  LinkSlideTime() {
    const timeout = setTimeout(this.LinkSlide.bind(this), 1000);
    console.log(Cache.get("Links"));
  }

  LinkSlide() {
    window.location = `../../projects`;
  }
}
