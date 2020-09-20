/*eslint no-unused-vars: ["error", { "argsIgnorePattern": "^_" }]*/
/*global gapi*/

import Service from '@ember/service';
import config from '../config/environment';
import { tracked } from '@glimmer/tracking';

export default class YoutubeService extends Service {
  items = [];
  token = null;
  @tracked currentUser = gapi.auth2.getAuthInstance().currentUser.get();
  currentApiRequest = null;
  loading = false;
  gapi = null;

  testing = 'testing';

  init() {
    super.init(...arguments);

    console.debug('Yourtube Service');

    var self = this;
  }

  loadGAPI() {
    return new Ember.RSVP.Promise(resolve => {
      console.debug('resolve')
      gapi.load('client:auth2', {
        callback: () => {
          console.debug('gapi.load callback')
          gapi.client.init({
            apiKey: config.APP.GOOGLE_API_KEY,
            discoveryDocs: config.APP.DISCOVERY_DOCS,
            clientId: config.APP.OAUTH_CLIENT_ID,
            scope: config.APP.GOOGLE_SCOPES
          }).then(() => {
            console.log('gapi.client.init then')
            resolve({});
            // self.gapi = gapi;
            // Listen for sign-in state changes.
            // TODO: use observable instead
            // gapi.auth2.getAuthInstance().isSignedIn.listen(self.updateSigninStatus, self);

            // Handle the initial sign-in state.
            // self.updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
          }, (err) => {
            console.error('gapi.client.init error')
            console.error(err)
            resolve({});
          });
        },
        onerror: () => {
          console.log('gapi.load error')
        }
      })
    })
  }

  get isAuthenticated() {
    return gapi.auth2.getAuthInstance().isSignedIn.get();
  }

  get user() {
    return gapi.auth2.getAuthInstance().currentUser.get();
  }

  handleAuthClick() {
    if (this.isAuthenticated) {
      gapi.auth2.getAuthInstance().signOut();
    } else {
      gapi.auth2.getAuthInstance().signIn();
    }
  }

  sendAuthenticatedApiRequest(requestDetails) {
    this.set('currentApiRequest', requestDetails)
    if (authenticated) {
      this.set('currentApiRequest', {})
    } else {
      this.GoogleAuth.signIn();
    }
  }  

  updateSigninStatus(_isSignedIn) {
    var user = gapi.auth2.getAuthInstance().currentUser.get();
    console.debug(user);
    this.currentUser = user;
    // console.debug(user.hasGrantedScopes('https://www.googleapis.com/auth/youtube'));
    // if (user.hasGrantedScopes('https://www.googleapis.com/auth/youtube')) {
    //   s.setCurrentUser();
    //   // if (currentApiRequest) {
    //   //   this.sendAuthenticatedApiRequest(currentApiRequest);
    //   // }
    // } else {
    // }
  }



  handleAuthResult(token) {
    if (token && !token.error) {
      this.set('authenticated', true);
      this.set('token', token);
      if (this.currentUser === null) {
        this.setCurrentUser();
      }
      //route to authenticated
    } else {
      console.log(token.error);
    }
  }

  setCurrentUser() {
    //gapi.me.then(function(user) {
    //  this.set('currentUser', res);
    //});
    this.loading = true;
    var request = gapi.youtube.channels.list({
      part: 'snippet,contentDetails',
      mine: true
    });

    // Execute the API request.
    request.execute(function(response) {
      console.log(response);
      this.set('loading', false);
      return this.set('currentUser', response.result.items[0]);
    }.bind(this));
  }

  subscriptions(pageToken) {
    // if (!this.gapi) return

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
  }

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
      self.GoogleAuth = GoogleAuth;

      GoogleAuth.isSignedIn.listen(self.updateSigninStatus.bind(self));

      // self.set('currentUser', GoogleAuth.currentUser.get());
      self.updateSigninStatus();
    });
    // handleAuthResult
  }
};
