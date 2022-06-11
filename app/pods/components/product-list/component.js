import Component from "@ember/component";
import {inject as service} from '@ember/service';

const products = [
  {
    name: "Samsung",
    description: "Smart TV",
    price: " 300 ",
    type: "LED",
  },
  {
    name: "One plus",
    description: "Mobile phone",
    price: " 200 ",
    type: "Android",
  },
  {
    name: "Whirlpool",
    description: "Refrigerator",
    price: " 400",
    type: "Top freezer",
  },
  {
    name: "IFB",
    description: "Fully automatic Washing machine",
    price: " 350 ",
    type: "Front loading",
  },
];

export default Component.extend({
  store: service(),


  init() {
    this._super(...arguments);
    const storedProducts = products.map((product) => {
      return this.store.createRecord("product", product);
    });
    this.set("products", storedProducts);

    
  }
});
