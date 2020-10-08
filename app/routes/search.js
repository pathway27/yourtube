/*jshint loopfunc:true */

import ApplicationRoute from './application'

import { inject as service } from '@ember/service';

export default class SearchRoute extends ApplicationRoute {
  @service snackbar

  // TODO: Load GAPI Mixin
  beforeModel() {
    return this.youtube.loadGAPI();
  }

  allowedHosts = ["www.youtube.com", "www.reddit.com", "old.reddit.com"]

  handleUrl(string) {
    let url;
  
    try {
      url = new URL(string);
    } catch (_) {
      return false;  
    }
  
    if (!(url.protocol === "https:") && (allowedHosts.include(url.host))) {
      this.transitionTo('index')
      // TODO: a toast or something
    }

    return url
  }

  async model({uri}) {
    // debugger
    let url = this.handleUrl(uri)

    if (url.host && (url.host == 'www.reddit.com' || url.host == 'old.reddit.com'))
      this.transitionTo('reddit', uri)
    else 
      this.transitionTo('youtube', uri)

    // TOOD: handle a reddit url
    return videos;
  }
}
