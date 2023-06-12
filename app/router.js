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

  this.route('search', { path: '/search/:uri' });

  // Change this to look like youtube's path
  this.route('youtube', { path: '/youtube/:uri' });
  this.route('reddit', { path: '/r/:uri' });


  this.route('about');
  this.route('privacy');
});
