import ApplicationController from './application';

import { tracked } from '@glimmer/tracking';

export default class ChannelController extends ApplicationController {
  @tracked name = null;
  @tracked model;

  @tracked selected = [];
}
