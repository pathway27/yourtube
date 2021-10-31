import ApplicationRoute from './application';

import { inject as service } from '@ember/service';

export default class IndexRoute extends ApplicationRoute {
  @service store

  model() {
    return this.store.findAll('subscription');
  }
}