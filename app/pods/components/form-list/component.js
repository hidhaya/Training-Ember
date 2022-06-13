import Component from "@ember/component";
import {computed} from '@ember/object';
export default Component.extend({
    firstName: "",
    lastName: "",
    isFill: true,

    isValid: computed('firstName','lastName',function(){
      const firstName = this.get('firstName');
      const lastName = this.get('lastName');
      if(firstName.length > 6 && lastName.length > 6 ){
        return false;
      }
      return true;
      }),
    init() {
      this._super(...arguments);
    },



    actions:{
      onFillBtn(){
        this.set('isFill',false);
      },

      firstNameVal(event){
        this.set('firstName',event.target.value);

      },
      lastNameVal(event){
        this.set('lastName',event.target.value);

      }
    }
  });
  