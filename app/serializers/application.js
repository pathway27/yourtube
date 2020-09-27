import RESTSerializer from '@ember-data/serializer/rest';

// TODO: This should be the youtube api serializer
export default class ApplicationSerializer extends RESTSerializer {
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    let {items, ...meta} = payload

    payload = {
      meta: meta
    }
    payload[`${primaryModelClass.modelName}s`] = items

    debugger

    // TODO: figure out why ...arguments isn't working
    return super.normalizeResponse(store, primaryModelClass, payload, id, requestType);
  }

  normalize(model, hash, prop) {
    // TODO: this should be in the subscription adapter
    if (prop === 'subscriptions') {
      let snippet = { ...hash.snippet }
      delete hash.snippet

      hash = { ...hash, ...snippet }
    }

    return super.normalize(model, hash, prop);
  }
};
