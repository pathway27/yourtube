import Controller from '@ember/controller';

import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { alias } from '@ember/object/computed';
import { action } from '@ember/object';

import config from 'yourtube/config/environment';

export default class ApplicationController extends Controller {
  @service youtube

  @tracked searchValue

  config = config;
  
  @alias('youtube.isAuthenticated') authenticated
  @alias('youtube.currentUser') currentUser

  @action
  gapi (e) {
    console.debug('gapi ApplicationController')
    this.youtube.handleAuthClick();
  }
  
  @action
  search (e) {
    console.debug('search ApplicationController', e)
    this.transitionToRoute('search', e.target.value);
    // debugger
  }

  get development() {
    return config.environment == 'development'
  }
}
