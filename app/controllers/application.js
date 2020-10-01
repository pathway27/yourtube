import Controller from '@ember/controller';
import Ember from "ember";
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
  @service youtube
  
  @alias('youtube.isAuthenticated') authenticated
  @alias('youtube.currentUser') currentUser

  @action
  gapi (e) {
    console.debug('gapi controller')
    this.youtube.handleAuthClick();
  }
}
