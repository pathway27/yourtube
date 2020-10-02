/*jshint loopfunc:true */

import ApplicationRoute from '../application'

import { inject as service } from '@ember/service';

export default class ChannelRoute extends ApplicationRoute {
  @service snackbar

  queryParams = {
    name: {
      as: 'channelName',
      replace: true
    }
  }

  model({channel}) {
    return this.store.findRecord('channel', channel)
  }

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
