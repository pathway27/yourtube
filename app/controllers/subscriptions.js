import ApplicationController from './application';
import Fuse from 'fuse.js'

import { tracked } from '@glimmer/tracking';

export default class SubscriptionsController extends ApplicationController {
  @tracked name = null;
  @tracked model;

  get filteredSubscriptions() {
    let name = this.name;
    let subscriptions = this.model.items;

    if (!subscriptions) return []

    if (name) {
      const fuse = new Fuse(this.model.items, {
        keys: ['snippet.title']
      });
      return fuse.search(name)
    }
    else
      return subscriptions
  }
}
