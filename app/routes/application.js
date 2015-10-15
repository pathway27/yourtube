import Ember from "ember";

export default Ember.Route.extend({
  // Scope out to Authenticated Mixin
  beforeModel() {
    var auth = this.get('yourtube.authenticated');

    if (!auth) {
      this.transitionTo('index');
    }
  },

  actions: {
    gapi () {
      this.get('yourtube').oauth();
    }
  }
});