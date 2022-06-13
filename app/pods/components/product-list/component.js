import Component from "@ember/component";
import {inject as service} from '@ember/service';
const products = [
  {
    name: "Samsung",
    description: "Smart LED ",
    price: " 400 ",
    type: "TV",
  },
  {
    name: "One plus",
    description: "black, In-built",
    price: " 200 ",
    type: "Mobile",
  },
  {
    name: "Whirlpool",
    description: "Frost free",
    price: " 400",
    type: "Refrigerator",
  },
  {
    name: "IFB",
    description: "Fully automatic Front loading",
    price: " 350 ",
    type: "Washing machine",
  },
  {
    name: "T-shirt",
    description: "white, cotton",
    price: " 350 ",
    type: "Apparel",
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

  
  //  actions: {
  //   // delete(product) 

  //   //  const productDetails = this.get('products');
  //   //  console.log(productDetails);
  //   //  productDetails.removeObject(product);
  //   // console.log(productDetails);
  //   // this.set("products", productDetails);
    
  // }

  }
});
