import JSONSerializer from '@ember-data/serializer/json';

export default class ApplicationSerializer extends JSONSerializer {
  normalizeResponse(store, type, payload, id, requestType) {
    var typeKey = type.typeKey;
    var value = {};
    value[typeKey] = payload;
    return value;
  }
};
