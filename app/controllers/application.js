import Controller from '@ember/controller';
import Ember from "ember";
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';


export default class ApplicationController extends Controller {
  @service youtube
  
  @alias('youtube.isAuthenticated') authenticated
  @alias('youtube.currentUser') currentUser
}

  // authChanged: Ember.observer('authenticated', function() {
  //   var auth = this.get('authenticated');

  //   if (auth) {
  //     this.transitionToRoute('subscriptions');
  //   }
  // })

/*

 {
   "kind": "youtube#channel",
   "etag": "\"fpJ9onbY0Rl_LqYLG6rOCJ9h9N8/djnQzdArPxwjkNKqqIFM8thqMbk\"",
   "id": "UCM-Z4PXBZ9uAwwxEEjpwGTw",
   "snippet": {
    "title": "",
    "description": "",
    "publishedAt": "2011-10-18T07:00:05.000Z",
    "thumbnails": {
     "default": {
      "url": "https://i.ytimg.com/i/M-Z4PXBZ9uAwwxEEjpwGTw/1.jpg"
     },
     "medium": {
      "url": "https://i.ytimg.com/i/M-Z4PXBZ9uAwwxEEjpwGTw/mq1.jpg"
     },
     "high": {
      "url": "https://i.ytimg.com/i/M-Z4PXBZ9uAwwxEEjpwGTw/hq1.jpg"
     }
    }
   },
   "contentDetails": {
    "relatedPlaylists": {
     "likes": "LLM-Z4PXBZ9uAwwxEEjpwGTw",
     "favorites": "FLM-Z4PXBZ9uAwwxEEjpwGTw",
     "uploads": "UUM-Z4PXBZ9uAwwxEEjpwGTw",
     "watchHistory": "HLM-Z4PXBZ9uAwwxEEjpwGTw",
     "watchLater": "WLM-Z4PXBZ9uAwwxEEjpwGTw"
    }
   }
  }


*/

