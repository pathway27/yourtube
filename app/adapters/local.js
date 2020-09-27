import RESTAdapter from '@ember-data/adapter/rest';

import { inject as service } from '@ember/service';

export default class LocalAdapter extends RESTAdapter {
  @service youtube

  async findAll(store, type) {
    const res = await fetch('/youtube_v3_api_response.json')
    const json = await res.json()

    console.debug(json)
    return json
  }

  async findRecord(store, type, id, snapshot) {
    const res = await fetch('/youtube_v3_api_response_2.json')
    const json = await res.json()

    console.debug(json)
    return json
  }

};