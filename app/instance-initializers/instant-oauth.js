import config from '../config/environment';

export function initialize(applicationInstance) {
  console.log('Hello from the instance initializer!');

  window.OnLoadCallback = function(){
    console.log('OnLoadCallback');
    gapi.client.setApiKey(config.APP.GOOGLE_API_KEY);
    gapi.client.load('youtube', 'v3').then(function() {
      var api = applicationInstance.container.lookup('service:yourtube-api');
      console.log(api);

      console.log('youtube loaded');
      console.log(applicationInstance);
      
      //immediate oauth here
      // only works for first user/ first user on google.com
      //api.immediate();
    });
  };

}

export default {
  name: 'instant-oauth',
  initialize: initialize
};