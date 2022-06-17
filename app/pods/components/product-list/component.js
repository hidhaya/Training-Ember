import Component from "@ember/component";
import { inject as service } from "@ember/service";
const productList = [
  {
    name: "SAMSUNG",
    description: "SMART LED ",
    price: 400,
    type: "TV",
    isChecked: false,
  },
  {
    name: "ONE PLUS",
    description: "BLACK, IN-BUILT",
    price: 200,
    type: "MOBILE",
    isChecked: false,
  },
  {
    name: "WHIRLPOOL",
    description: "FROST FREE",
    price: 400,
    type: "REFRIGERATOR",
    isChecked: false,
  },
  {
    name: "IFB",
    description: "FULLY AUTOMATIC FRONT LOADING",
    price: 600,
    type: "WASHING MACHINE",
    isChecked: false,
  },
  {
    name: "T-shirt",
    description: "WHITE, COTTON",
    price: 300,
    type: "APPAREL",
    isChecked: false,
  },
];

export default Component.extend({
  store: service(),
  products: null,
  selectedProducts: null,

  init() {
    this._super(...arguments);
    this.set("products", []);
    this.set("selectedProducts", []);
    productList.forEach((product) => {
      const list = this.store.createRecord("product", product);
      this.get("products").pushObject(list);
    });
  },

  actions: {
    oncheckBoxRowClick(target) {
      const value = target.value;
      const products = this.get("products");
      if (target.checked) {
        const selectedProducts = products.filter((ele) => ele.name === value);
        this.selectedProducts.pushObject(...selectedProducts);
        let productArray = [];
        products.forEach((product) => {
          if (product.name === value) {
            product.set("isChecked", true);
          }
          productArray.pushObject(product);
        });
        this.set("products", productArray);
        return;
      }

      const uncheckedProduct = this.selectedProducts.filter(
        (ele) => ele.name !== value
      );
      this.set("selectedProducts", uncheckedProduct);
      let productArray = [];
      products.forEach((product) => {
        if (product.name === value) {
          product.set("isChecked", false);
        }
      productArray.pushObject(product);
      });
      this.set("products", productArray);
    },

    delete(product) {
      const nameValue = product.name;
      const productDetails = this.get("products");
      console.log(productDetails);
      productDetails.removeObject(product);
      this.set("products", productDetails);
      const checkedProducts = this.get("selectedProducts");
      const selectedProducts = checkedProducts.filter(
        (ele) => ele.name === nameValue
      );
      this.set("selectedProducts", selectedProducts);
    },
  },
});
