import Model, { attr, belongsTo } from '@ember-data/model';

// channelId: "UCOcL9BOQb7g9Jae0feybkSg"
// description: ""
// id: "qn7-zT5NzpBeauLMPDzCj7xXfasXy_DqTbVbzx324E4"
// kind: "youtube#subscription"
// publishedAt: "2020-07-14T04:28:48.385000Z"
// resourceId: {kind: "youtube#channel", channelId: "UC-m6zNItyoDk5lSykDlhE4Q"}
// thumbnails: {default: {…}, medium: {…}, high: {…}}
// title: "StockedUp - Mike D'Antonio"

export default class SubscriptionModel extends Model {
  @attr channelId
  @attr description
  @attr kind
  @attr('date') publishedAt
  @attr resourceId
  @attr thumbnails
  @attr('string') title

  get channel() {
    return this.resourceId.channelId
  }
};