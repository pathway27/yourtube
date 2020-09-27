import Model, { attr, belongsTo } from '@ember-data/model';

export default class ChannelModel extends Model {
  @attr('string') title;
  @attr('string') description;
  @attr('date') publishedAt;
  @belongsTo('playlist') uploads;
  @attr thumbnails;

  @attr contentDetails;

  get uploadPlaylist() {
    return this.contentDetails.relatedPlaylists.uploads
  }
}
