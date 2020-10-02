'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'yourtube',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      DISCOVERY_DOCS: 	 ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'],
      GOOGLE_SCOPES: 	   'https://www.googleapis.com/auth/youtube.readonly',
      GOOGLE_API_KEY:    process.env.GOOGLE_API_KEY,
      OAUTH_CLIENT_ID:   process.env.OAUTH_CLIENT_ID,
      YOUTUBE_HOST:      'https://www.googleapis.com/youtube/v3',
      useLocalJSON:      false
    }
    // contentSecurityPolicy: {
    //   'script-src':  "'self' 'unsafe-inline' 'unsafe-eval' apis.google.com storage.googleapis.com code.getmdl.io",
    //   'font-src':    "'self' data: fonts.gstatic.com",
    //   'style-src':   "'self' 'unsafe-inline' storage.googleapis.com fonts.googleapis.com code.getmdl.io",
    //   'frame-src':   "'self' 'unsafe-inline' accounts.google.com content.googleapis.com",
    //   'connect-src': "'self' localhost:3000",
    //   'img-src':     "'self' s3.amazonaws.com lorempixel.com csi.gstatic apis.google.com i.ytimg.com yt3.ggpht.com csi.gstatic.com"
    // },
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    ENV.rootURL = '/yourtube/';
    ENV.APP.useLocalJSON = false;
  }

  return ENV;
};
