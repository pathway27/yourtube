export function initialize(application) {
  // application.deferReadiness();
  application.inject('route', 'yourtube', 'service:yourtube-api');
  console.log('Yourtube Service injected to every route!');

};

export default {
  initialize: initialize
};
