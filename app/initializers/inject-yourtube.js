export function initialize(container, application) {
  application.inject('route', 'yourtube', 'service:yourtube-api');
  console.log('Yourtube Service injected to every route!');
}

export default {
  name: 'inject-yourtube',
  initialize: initialize
};
