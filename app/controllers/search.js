import ApplicationController from './application';

import { tracked } from '@glimmer/tracking';

export default class SearchController extends ApplicationController {
  queryParams = ['videoIndex']
}
