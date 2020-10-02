import RESTAdapter from '@ember-data/adapter/rest';

import { inject as service } from '@ember/service';

export default class YoutubeAPIAdapter extends RESTAdapter {
  @service youtube
 
  findAll(store, type) {
    return new Ember.RSVP.Promise(resolve => {
      this.youtube.subscriptions(null).then(response => {
        resolve(response.result)
      }, (reason) => {
        console.log('Error: ' + reason.result.error.message);
      })
    })
  }

  findRecord(store, type, id, snapshot) {
    return new Ember.RSVP.Promise(resolve => {
      this.youtube.channel(id).then(response => {
        resolve(response.result)
      }, (reason) => {
        console.log('Error: ' + reason.result.error.message);
      })
    })
  }
};
