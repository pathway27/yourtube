import { VERSION } from '@ember/version';

import ApplicationController from './application';

export default class AboutController extends ApplicationController {
  emberVersion = VERSION
}
