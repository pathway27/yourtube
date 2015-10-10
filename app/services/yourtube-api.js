import Ember from 'ember';
import config from '../config/environment';

export default Ember.Service.extend({
  authenticated: false,

  init() {
    this._super();
    // initalizer
    //gapi.setKey(config.APP.YOUTUBE_CLIENT_ID)
  },

  handleAuthResult(token) {
    if (token && !token.error) {
      gapi.client.load('youtube', 'v3').then(function() {
        // Step 5: Assemble the API request
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
      });

    } else {
      console.log(token.error);
    }
  },

  oauth() {
    var clientId = config.APP.YOUTUBE_CLIENT_ID,
          scopes = config.APP.GOOGLE_SCOPES;
    var authObject = {client_id: clientId, scope: scopes, immediate: false};
    
    gapi.auth.authorize(authObject, this.get('handleAuthResult'));
  }
});
