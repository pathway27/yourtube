import Store from '@ember-data/store';

import config from '../config/environment';

// Change between local and remote adapter
export default class ApplicationStore extends Store {
  constructor() {
    super(...arguments)
    console.debug(config)
    if (config.APP.useLocalJSON) {
      this.adapter = 'local'
    } else {
      this.adapter = 'youtube-api'
    }
  }
}
