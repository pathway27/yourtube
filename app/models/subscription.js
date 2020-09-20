import Model, { attr } from '@ember-data/model';

export default class SubscriptionModel extends Model {
  @attr('string') channelId
  @attr snippet

  get title() {
    return this.snipped.title;
  }
};

/*
Object

items: Array[5]
0: Object
etag: ""DsOZ7qVJA4mxdTxZeNzis6uE6ck/nTE3Z3Wffee0ac9D7br9QhfRCgU""
id: "qn7-zT5NzpB_LEYShwNlkglEwNK2KUSL3smvJFRfS1w"
kind: "youtube#subscription"
snippet: { publishedAt: 2017-07-28T09:26:32.000Z, title: Logan Paul Vlogs ...}
channelId: "UCOcL9BOQb7g9Jae0feybkSg"
description: "AngryJoeShow - Just one Guys Opinion on Games, Movies & Geek Stuff.↵↵Spread the word &share my channel with your friends!↵↵I work hard to release 2-3 vids a week! Hows about a $1 donation to keep my supply of Dr.Pepper (Now Red Bull) going! =)↵↵Donate button at my site! It helps me go crazy & bigger on the next review!↵↵My "GO! to the Website" Theme Song↵is done by Callenish Circle↵"Suffer my Disbelief""
publishedAt: "2013-04-21T04:56:35.000Z"
resourceId: Object
thumbnails: Object
title: "AngryJoeShow"


{
  "kind":"youtube#subscription",
  "etag":"\"m2yskBQFythfE4irbTIeOgYYfBU/ld80BsIMK0yvjuSg9SOdJCy_TR4\"",
  "id":"qn7-zT5NzpB_LEYShwNlkrXF2XPXUs_z9OHNr5RDX58",
  "snippet": {
    "publishedAt":"2017-07-28T09:26:32.000Z",
    "title":"Logan Paul Vlogs","description":"22 year old kid in Hollywood making crazy daily Vlogs!\nJoin the movement and Be A Maverick: https://shoploganpaul.com/",
    "resourceId":
      {"kind":"youtube#channel","channelId":"UCG8rbF3g2AMX70yOd8vqIZg"},"channelId":"UCOcL9BOQb7g9Jae0feybkSg","thumbnails":{"default":{"url":"https://yt3.ggpht.com/-YKQ1X52jAR0/AAAAAAAAAAI/AAAAAAAAAAA/xg2DLdm-Fpo/s88-c-k-no-mo-rj-c0xffffff/photo.jpg"},"medium":{"url":"https://yt3.ggpht.com/-YKQ1X52jAR0/AAAAAAAAAAI/AAAAAAAAAAA/xg2DLdm-Fpo/s240-c-k-no-mo-rj-c0xffffff/photo.jpg"},"high":{"url":"https://yt3.ggpht.com/-YKQ1X52jAR0/AAAAAAAAAAI/AAAAAAAAAAA/xg2DLdm-Fpo/s240-c-k-no-mo-rj-c0xffffff/photo.jpg"}}}
  }
*/