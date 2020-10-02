import Model, { attr, belongsTo } from '@ember-data/model';

export default class ChannelModel extends Model {
  @attr('string') title;
  @attr('string') description;
  @attr('date') publishedAt;
  @attr uploads;
  @attr thumbnails;
}
