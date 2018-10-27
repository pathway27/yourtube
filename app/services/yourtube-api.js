import Ember from 'ember';
import config from '../config/environment';

export default Ember.Service.extend({
  authenticated: false,
  token: null,
  currentUser: null,
  GoogleAuth: null,
  currentApiRequest: null,
  loading: false,

  init() {
    this._super();
    console.log('Yourtube Service');
  },

  sendAuthenticatedApiRequest(requestDetails) {
    this.set('currentApiRequest', requestDetails);
    if (authenticated) {
      this.set('currentApiRequest', {});
    } else {
      this.get('GoogleAuth').signIn();
    }
  },

  handleAuthClick() {
    var authenticated = this.get('GoogleAuth').isSignedIn.get();
    if (authenticated) {
      this.get('GoogleAuth').signOut();
    } else {
      this.get('GoogleAuth').signIn();
    }
  },

  updateSigninStatus(isSignedIn) {
    var user = this.get('GoogleAuth').currentUser.get();
    console.log(user.hasGrantedScopes('https://www.googleapis.com/auth/youtube'));
    if (user.hasGrantedScopes('https://www.googleapis.com/auth/youtube')) {
      this.set('authenticated', true);
      this.setCurrentUser();
      // if (currentApiRequest) {
      //   this.sendAuthenticatedApiRequest(currentApiRequest);
      // }
    } else {
      this.set('authenticated', false);
    }
  },

  handleAuthResult(token) {
    if (token && !token.error) {
      this.set('authenticated', true);
      this.set('token', token);
      if (this.get('currentUser') === null) {
        this.setCurrentUser();
      }
      //route to authenticated
    } else {
      console.log(token.error);
    }
  },

  setCurrentUser() {
    //gapi.me.then(function(user) {
    //  this.set('currentUser', res);
    //});
    this.set('loading', true);
    var request = gapi.client.youtube.channels.list({
      part: 'snippet,contentDetails',
      mine: true
    });
    
    // Execute the API request.
    request.execute(function(response) {
      console.log(response);
      this.set('loading', false);
      return this.set('currentUser', response.result.items[0]);
    }.bind(this));
  },

  subscriptions(pageToken) {
    var params = {
      'mine': 'true',
      'part': 'snippet',
      'maxResults': 50
    };
    if (pageToken)
      params['pageToken'] = pageToken;

    var request = gapi.client.youtube.subscriptions.list(params);

    return request;
    // Step 6: Execute the API request
    // request.then(function(resp) {
    //   console.log(resp.result.items);
    //   return resp.result.items;
    // }, function(reason) {
    //   console.log('Error: ' + reason.result.error.message);
    // });
  },

  oauth() {
    var self = this;
    var clientId = config.APP.YOUTUBE_CLIENT_ID,
          scopes = config.APP.GOOGLE_SCOPES,
          dd = ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'];
    var authObject = {
      'apiKey': config.APP.GOOGLE_API_KEY,
      'clientId': config.APP.YOUTUBE_CLIENT_ID,
      'scope': 'https://www.googleapis.com/auth/youtube',
      'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest']
    };
    
    gapi.client.init(authObject).then(function() {
      var GoogleAuth = gapi.auth2.getAuthInstance();
      self.set('GoogleAuth', GoogleAuth);

      GoogleAuth.isSignedIn.listen(self.updateSigninStatus.bind(self));

      // self.set('currentUser', GoogleAuth.currentUser.get());
      self.updateSigninStatus();
    });
    // handleAuthResult
  }
});