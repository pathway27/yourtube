/*jshint loopfunc:true */

import ApplicationRoute from './application'

import { inject as service } from '@ember/service';

export default class SubscriptionsRoute extends ApplicationRoute {
  @service snackbar
  @service store

  meta = null;

  queryParams = {
    name: {
      replace: true
    }
  }

  model() {
    return this.store.findAll('subscription')
  }

  // model() {
  //   return new Ember.RSVP.Promise(resolve => {
  //       let req = this.youtube.subscriptions()
  //       req.then((res) => {
  //         console.debug(res)
  //         resolve(res)
  //       })
  //   })
  // }

  // Scope out to Authenticated Mixin
  afterModel() {
    if (!this.youtube.isAuthenticated) {
      // this.snackbar._snackbar({
      //   message: 'Please Login',
      
      //   // optional properties
      
      //   dismissible: true,
      //   action: {
      //     label: 'Undo',
      //     handler () {
      //       alert ('We press the undo action!');
      //     }
      //   } 
      // })

      this.transitionTo('index');
    }
  }
}
