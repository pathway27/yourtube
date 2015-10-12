import Ember from "ember";

export default Ember.Controller.extend({
  yourtube: Ember.inject.service('yourtube-api'),

  authenticated: Ember.computed.alias('yourtube.authenticated')
});