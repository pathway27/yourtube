import Ember from 'ember';
import config from '../config/environment';

export default Ember.Service.extend({
  authenticated: false,

  init() {
    // initalizer 
    console.log('Yourtube Service');
    this._super();
  },

  handleAuthResult(token) {
    if (token && !token.error) {
      this.set('authenticated', true);
      console.log('authenticated');
      //route to authenticated
    } else {
      console.log(token.error);
    }
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
    
    gapi.auth.authorize(authObject, this.get('handleAuthResult'));
  },

  immediate() {
    var clientId = config.APP.YOUTUBE_CLIENT_ID,
          scopes = config.APP.GOOGLE_SCOPES;
    var authObject = {client_id: clientId, scope: scopes, immediate: true};
    
    gapi.auth.authorize(authObject, this.get('handleAuthResult'));
  }
});
