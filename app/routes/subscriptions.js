/*jshint loopfunc:true */
import Ember from "ember";


export default Ember.Route.extend({
  model() {
    return this.store.findAll('subscription');
  },

  actions: {
  }
});