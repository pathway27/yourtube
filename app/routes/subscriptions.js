/*jshint loopfunc:true */

import ApplicationRoute from './application'

import data from './youtube_v3_api_response'

export default class SubscriptionsRoute extends ApplicationRoute {
  queryParams = {
    name: {
      replace: true
    }
  }

  async beforeModel() {
    await this.youtube.loadGAPI()
  }

  model() {
    return data;
    // return new Ember.RSVP.Promise(resolve => {
    //   let req = this.youtube.subscriptions()
    //   req.then((res) => {
    //     console.debug(res)
    //     resolve(res)
    //   })
    // })
  }

  // Scope out to Authenticated Mixin
  afterModel() {
    if (!this.youtube.isAuthenticated) {
      this.toastAlert('Please Login')
      this.transitionTo('index');
    }
  }
}