/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'yourtube-ember',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created

      // Offline?
    },
    contentSecurityPolicy: {
      'script-src':  "'self' 'unsafe-inline' 'unsafe-eval' apis.google.com storage.googleapis.com",
      'font-src':    "'self' data: fonts.gstatic.com",
      'style-src':   "'self' 'unsafe-inline' storage.googleapis.com fonts.googleapis.com",
      'frame-src':   "'self' 'unsafe-inline' accounts.google.com content.googleapis.com",
      'connect-src': "'self' localhost:3000",
      'img-src':     "'self' s3.amazonaws.com lorempixel.com csi.gstatic apis.google.com"
    },
  };

  if (environment === 'development') {
    //ENV.APP.LOG_RESOLVER = true;
    //ENV.APP.LOG_ACTIVE_GENERATION = true;
    ENV.APP.LOG_TRANSITIONS = true;
    //ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    //ENV.APP.LOG_VIEW_LOOKUPS = true;

    ENV.APP.GOOGLE_API_KEY = '***REMOVED***-6Ek';
    ENV.APP.YOUTUBE_CLIENT_ID = '***REMOVED***';

    ENV.APP.GOOGLE_AUTH_RUL = '***REMOVED***';
    ENV.APP.YOUTUBE_HOST = 'https://www.googleapis.com/youtube/v3';    
    ENV.APP.GOOGLE_SCOPES = 'https://www.googleapis.com/auth/youtube';
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.APP.GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
    ENV.APP.YOUTUBE_CLIENT_ID = process.env.YOUTUBE_CLIENT_ID;

    ENV.APP.GOOGLE_AUTH_RUL = '***REMOVED***';
    ENV.APP.YOUTUBE_HOST = 'https://www.googleapis.com/youtube/v3';    
    ENV.APP.GOOGLE_SCOPES = 'https://www.googleapis.com/auth/plus.me';
  }

  return ENV;
};
