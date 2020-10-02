import Controller from '@ember/controller';

import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';
import { action } from '@ember/object';

import config from 'yourtube/config/environment';

export default class ApplicationController extends Controller {
  @service youtube

  config = config;
  
  @alias('youtube.isAuthenticated') authenticated
  @alias('youtube.currentUser') currentUser

  @action
  gapi (e) {
    console.debug('gapi controller')
    this.youtube.handleAuthClick();
  }

  get development() {
    return config.environment == 'development'
  }
}
