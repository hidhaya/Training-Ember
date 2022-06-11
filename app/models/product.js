import DS from 'ember-data';

const {
  Model,
  attr,
} = DS;

export default Model.extend({
  name: attr('string', {defaultValue: ''}),
  description: attr('string', {defaultValue: ''}),
  price: attr('string', {defaultValue: ''}),
  type: attr('string', {defaultValue: ''})
});