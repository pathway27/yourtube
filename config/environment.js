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
      'script-src': "'self' 'unsafe-inline' 'unsafe-eval' apis.google.com storage.googleapis.com",
      'font-src': "'self' data: fonts.gstatic.com",
      'style-src': "'self' 'unsafe-inline' storage.googleapis.com fonts.googleapis.com",
      'frame-src': "'self' 'unsafe-inline' accounts.google.com"
    },
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.APP.GOOGLE_API_KEY = 'AIzaSyAM8s6IC3hZzjbS3jJ95j3uvMKjs7J-6Ek';
    ENV.APP.YOUTUBE_CLIENT_ID = '538048893232-6ravl5ktsabe8tlsne8jd9rj1kga7oq3.apps.googleusercontent.com';

    ENV.APP.GOOGLE_AUTH_RUL = 'https://accounts.google.com/o/oauth2/auth';
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

    ENV.APP.GOOGLE_AUTH_RUL = 'https://accounts.google.com/o/oauth2/auth';
    ENV.APP.YOUTUBE_HOST = 'https://www.googleapis.com/youtube/v3';    
    ENV.APP.GOOGLE_SCOPES = 'https://www.googleapis.com/auth/plus.me';
  }

  return ENV;
};
