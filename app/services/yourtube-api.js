import Ember from 'ember';
import config from '../config/environment';

export default Ember.Service.extend({
  authenticated: false,
  token: null,
  currentUser: null,

  init() {
    this._super();
    console.log('Yourtube Service');
  },

  handleAuthResult(token) {
    if (token && !token.error) {
      this.set('authenticated', true);
      this.set('token', token);
      //route to authenticated
    } else {
      console.log(token.error);
    }
  },

  setCurrentUser() {
    //gapi.me.then(function(user) {
    //  this.set('currentUser', res);
    //});
    return false;
  },

  subscriptions() {
    var request = gapi.client.youtube.subscriptions.list({
      'mine': 'true',
      'part': 'snippet'
    });
    // Step 6: Execute the API request
    request.then(function(resp) {
      console.log(resp);
    }, function(reason) {
      console.log('Error: ' + reason.result.error.message);
    });
  },

  oauth() {
    var clientId = config.APP.YOUTUBE_CLIENT_ID,
          scopes = config.APP.GOOGLE_SCOPES;
    var authObject = {client_id: clientId, scope: scopes, immediate: false};
    var self = this;

    gapi.auth.authorize(authObject, self.handleAuthResult.bind(this));
  },

  immediate() {
    var clientId = config.APP.YOUTUBE_CLIENT_ID,
          scopes = config.APP.GOOGLE_SCOPES;
    var authObject = {client_id: clientId, scope: scopes, immediate: true};
    var self = this;

    gapi.auth.authorize(authObject, self.handleAuthResult.bind(this));
  }
});
