/*jshint loopfunc:true */
import ApplicationRoute from './application';

export default class SubscriptionsRoute extends ApplicationRoute {
  async beforeModel() {
    await this.youtube.loadGAPI()
  }

  model() {
    return new Ember.RSVP.Promise(resolve => {
      let req = this.youtube.subscriptions()
      req.then((res) => {
        console.debug(res)
        resolve(res)
      })
    })
  }

  // Scope out to Authenticated Mixin
  afterModel() {
    if (!this.youtube.isAuthenticated) {
      this.toastAlert('Please Login')
      this.transitionTo('index');
    }
  }
};