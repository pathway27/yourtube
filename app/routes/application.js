import Ember from "ember";

export default Ember.Route.extend({
  actions: {
    gapi () {
      this.get('yourtube').oauth();
    }
  }
});