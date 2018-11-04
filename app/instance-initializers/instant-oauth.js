import config from '../config/environment';

export function initialize(applicationInstance) {
  console.log('Hello from the instance initializer!');

  window.OnLoadCallback = function(){
    console.log('OnLoadCallback');
    var api = applicationInstance.lookup('service:yourtube-api');

    api.oauth();
    // gapi.client.load('youtube', 'v3').then(function() {

    //   console.log(api);

    //   console.log('youtube loaded');
    //   console.log(applicationInstance);
    // });
  };

}

export default {
  initialize
};
