import Ember from "ember";

export default Ember.Controller.extend({
  yourtube: Ember.inject.service('yourtube-api'),

  authenticated: Ember.computed.alias('yourtube.authenticated'),

  authChanged: Ember.observer('authenticated', function() {
    var auth = this.get('authenticated');

    if (auth) {
      this.transitionToRoute('subscriptions');
    }
  })
});