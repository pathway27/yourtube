import ApplicationSerializer from './application';

// TODO: This should be the youtube api serializer
export default class SubscriptionSerializer extends ApplicationSerializer {
  normalize(model, hash, prop) {
    let snippet = { ...hash.snippet }
    delete hash.snippet

    hash = { ...hash, ...snippet }

    return super.normalize(model, hash, prop);
  }
};
