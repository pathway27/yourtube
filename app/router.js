import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('subscriptions', function() {
    this.route('channel', { path: '/channel/:channel_id' }, function() {
      this.route('video', { path: '/video/:video_id' });
    });
  });

  this.route('about');
});

export default Router;
