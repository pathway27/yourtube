import DS from 'ember-data';

export default DS.JSONSerializer.extend({
  normalizeResponse: function(store, type, payload, id, requestType) {
    var typeKey = type.typeKey;
    var value = {};
    value[typeKey] = payload;
    return value;
  }
});
