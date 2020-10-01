import ApplicationController from './application';

import Ember from "ember";

import config from '../config/environment';

export default class AboutController extends ApplicationController {
  config = config;
  emberVersion = Ember.VERSION
}