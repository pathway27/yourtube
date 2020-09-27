import ApplicationController from './application';

import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class SubscriptionsController extends ApplicationController {
  @tracked name = null;
  @tracked model;

  @tracked selected = [];

  get filteredSubscriptions() {
    let name = this.name;
    let subscriptions = this.model;

    if (!subscriptions) return []

    if (name) {
      let re = new RegExp(name, 'i')
      return subscriptions.filter(item => item.title.search(re) >= 0)
    }
    else
      return subscriptions
  }

  @action rowSelectionChange({detail}) {
    console.log(detail)
  }
}
