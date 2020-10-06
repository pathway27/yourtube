import EmberRouter from '@ember/routing/router';
import config from 'yourtube/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('subscriptions', function() {
    this.route('channel', { path: '/:channel' });
  });

  this.route('search', { path: '/:uri' });

  this.route('about');
  this.route('privacy');
});
