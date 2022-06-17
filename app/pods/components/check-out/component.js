import Component from '@ember/component';
import {computed} from '@ember/object';

export default Component.extend({
    totalPrice:computed('checkedProducts.[]',function(){
        const products = this.get('checkedProducts');
        let price = 0;
        products.forEach(element => {
            price += element.price
            console.log(price);

            
        });
        return price;


    }),
  async init() {
    this._super(...arguments);
 }
});
