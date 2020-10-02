import ApplicationController from './application';

import Ember from "ember";

export default class AboutController extends ApplicationController {
  emberVersion = Ember.VERSION
}
