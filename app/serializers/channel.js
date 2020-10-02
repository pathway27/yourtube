import RESTSerializer from '@ember-data/serializer/rest';

// TODO: This should be the youtube api serializer
export default class ChannelSerializer extends RESTSerializer {
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    let {items, ...meta} = payload
    let {contentDetails, ...channel} = items.firstObject

    payload = {
      meta: meta,
      channel: {
        type: primaryModelClass.modelName,
        ...channel,
        ...contentDetails.relatedPlaylists
      }
    }

    // TODO: figure out why ...arguments isn't working
    return super.normalizeResponse(store, primaryModelClass, payload, id, requestType);
  }

  // normalize(model, hash, prop) {
  //   let relatedPlaylists = { ...hash.contentDetails.relatedPlaylists }
  //   delete hash.contentDetails

  //   hash = { ...hash, ...relatedPlaylists }

  //   return super.normalize(model, hash, prop);
  // }
};
