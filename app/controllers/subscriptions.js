import ApplicationController from './application';
import Fuse from 'fuse.js'

import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class SubscriptionsController extends ApplicationController {
  @tracked name = null;
  @tracked model;
  @tracked signals = [
    { id: 'u0', status: 'Online', name: 'Arcus watch slowdown', severity: 'Medium', stage: 'Triaged', time: '0:33', roles: 'Allison Brie'},
    { id: 'u1', status: 'Offline', name: 'monarch: prod shared ares-managed-features-provider-heavy', severity: 'Huge', state: 'Triaged', time: '0:33', roles: 'Brie Larson'},
    { id: 'u2', status: 'Online', name: 'monarch: prod shared ares-managed-features-provider-heavy', severity: 'Minor', state: 'Not triaged', time: '0:33', roles: 'Jeremy Lake'},
    { id: 'u3', status: 'Online', name: 'Arcus watch slowdown', severity: 'Negligible', state: 'Triaged', time: '0:33', roles: 'Angelina Cheng'},
  ];

  @tracked selected = ([this.signals[0], this.signals[1]]);

  get filteredSubscriptions() {
    let name = this.name;
    let subscriptions = this.model.items;

    if (!subscriptions) return []

    if (name) {
      let re = new RegExp(name, 'i')
      return subscriptions.filter(item => item.snippet.title.search(re) >= 0)
    }
    else
      return subscriptions
  }

  @action rowSelectionChange ({detail}) {
    console.log(detail)
  }
}
