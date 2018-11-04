import DS from "ember-data";

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  publishedAt: DS.attr('date'),
  uploads: DS.belongsTo('playlist'),
  thumbnails: DS.attr()
});

/*


{

   "kind": "youtube#channel",
   "etag": "\"sGDdEsjSJ_SnACpEvVQ6MtTzkrI/vF-onncXLhyyiMwR93xjvBhMR8g\"",
   "id": "UC1cWTErb7vw_UmmuB0dYgsQ",
   "snippet": {
    "title": "TV-People",
    "description": "",
    "publishedAt": "2014-05-27T04:47:16.000Z",
    "thumbnails": {
     "default": {
      "url": "https://yt3.ggpht.com/-vE7g2yUsGjA/AAAAAAAAAAI/AAAAAAAAAAA/OjxitO_bR0w/s88-c-k-no/photo.jpg"
     },
     "medium": {
      "url": "https://yt3.ggpht.com/-vE7g2yUsGjA/AAAAAAAAAAI/AAAAAAAAAAA/OjxitO_bR0w/s240-c-k-no/photo.jpg"
     },
     "high": {
      "url": "https://yt3.ggpht.com/-vE7g2yUsGjA/AAAAAAAAAAI/AAAAAAAAAAA/OjxitO_bR0w/s240-c-k-no/photo.jpg"
     }
    },
    "localized": {
     "title": "TV-People",
     "description": ""
    }
   },
   "contentDetails": {
    "relatedPlaylists": {
     "uploads": "UU1cWTErb7vw_UmmuB0dYgsQ"
    },
    "googlePlusUserId": "100147912797412789396"
   }
  }a



 */
