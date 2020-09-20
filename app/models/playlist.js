import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class PlaylistModel extends Model {
  @attr('string') name
  @belongsTo('channel') channel
  @hasMany('video') videos
}

/*


{
 "kind": "youtube#playlistItemListResponse",
 "etag": "\"sGDdEsjSJ_SnACpEvVQ6MtTzkrI/BMRP9X0OhwFQmhFcCmdT20nYv6A\"",
 "nextPageToken": "CAEQAA",
 "pageInfo": {
  "totalResults": 8933,
  "resultsPerPage": 1
 },
 "items": [
  {

   "kind": "youtube#playlistItem",
   "etag": "\"sGDdEsjSJ_SnACpEvVQ6MtTzkrI/ctbHC9O5ab4Z4qrtLvKOXZ23QJ0\"",
   "id": "UUvKaqm72kxAuM5bMWwMmrCbmJhwOgVA5A",
   "snippet": {
    "publishedAt": "2015-09-08T23:38:58.000Z",
    "channelId": "UC1cWTErb7vw_UmmuB0dYgsQ",
    "title": "【TVPP Cam】 EXID+G-park- 'Up&Down', 'AH YEAH' Close-Up Ver, 이엑스아이디+지팍 클로즈업 @ 2015 DMC Festival",
    "description": "【TVPP Cam】 EXID, G-park - 'Up&Down', 'AH YEAH' Close-Up Ver, 이엑스아이디, 지팍  - '위 아래', '아 예' 클로즈업 버전 @ 2015 DMC Festival\n\nEXID # 056 : EXID had a 'Up&Down', 'AH YEAH' stage at  2015 DMC Festival 20150905\n\nEXID : LE, Junghwa, Hani, Solji, Hyerin,\nWatch More Clips : http://goo.gl/Xg54cd\nFacebook : https://www.facebook.com/EXIDOfficial\nTwitter : https://twitter.com/EXIDofficial",
    "thumbnails": {
     "default": {
      "url": "https://i.ytimg.com/vi/mAPF8L1ELWc/default.jpg",
      "width": 120,
      "height": 90
     },
     "medium": {
      "url": "https://i.ytimg.com/vi/mAPF8L1ELWc/mqdefault.jpg",
      "width": 320,
      "height": 180
     },
     "high": {
      "url": "https://i.ytimg.com/vi/mAPF8L1ELWc/hqdefault.jpg",
      "width": 480,
      "height": 360
     }
    },
    "channelTitle": "TV-People",
    "playlistId": "UU1cWTErb7vw_UmmuB0dYgsQ",
    "position": 0,
    "resourceId": {
     "kind": "youtube#video",
     "videoId": "mAPF8L1ELWc"
    }
   },
   "contentDetails": {
    "videoId": "mAPF8L1ELWc"
   }
  }
 ]
}


*/