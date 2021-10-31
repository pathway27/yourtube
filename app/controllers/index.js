import ApplicationController from './application';

import { tracked } from '@glimmer/tracking';

export default class IndexController extends ApplicationController {
  @tracked model;
}