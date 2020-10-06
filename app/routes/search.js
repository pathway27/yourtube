/*jshint loopfunc:true */

import ApplicationRoute from './application'

import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import config from 'yourtube/config/environment';

export default class SearchRoute extends ApplicationRoute {
  @service snackbar
  @service youtube

  // TODO: Load GAPI Mixin
  beforeModel() {
    return this.youtube.loadGAPI();
  }

  async search(username) {
    var channelSearchResults
    if (config.APP.useLocalJSON) {
      channelSearchResults = await (await fetch('/youtube_v3/search/list/q_MatanAnimationStudios.json')).json()
    } else {
      channelSearchResults = await new Ember.RSVP.Promise((resolve, reject) => {
        gapi.client.youtube.search.list({
          part: 'snippet',
          q: username,
          maxResults: 1
        }).then(response => {
          resolve(response.result)
        }, (reason) => {
          console.log('Error: ' + reason.result.error.message);
          reject(reason)
        })
      })
    }

    const channelId = channelSearchResults.items.firstObject.snippet.channelId
    return channelId
  }

  async channelDetails(channelId) {
    var channel
    if (config.APP.useLocalJSON) {
      channel = await (await fetch('/youtube_v3/channels/list/MatanAnimationStudios.json')).json()
    } else {
      channel = await new Ember.RSVP.Promise((resolve, reject) => {
        gapi.client.youtube.channels.list({
          part: 'contentDetails',
          id: channelId
        }).then(response => {
          resolve(response.result)
        }, (reason) => {
          console.log('Error: ' + reason.result.error.message);
          reject(reason)
        })
      })
    }

    const uploadsPlaylistId = channel.items.firstObject.contentDetails.relatedPlaylists.uploads
    return uploadsPlaylistId
  }

  async getVideos(playlistId, nextPageToken = null) {
    var playlistItems
    if (config.APP.useLocalJSON) {
      const url = `/youtube_v3/playlistItems/list/MatanAnimationStudios_${nextPageToken || '1'}.json`
      playlistItems = await (await fetch(url)).json()
    } else {
      playlistItems = await new Ember.RSVP.Promise((resolve, reject) => {
        gapi.client.youtube.playlistItems.list({
          part: 'contentDetails,snippet',
          playlistId: playlistId,
          maxResults: 50,
          pageToken: nextPageToken
        }).then(response => {
          resolve(response.result)
        }, (reason) => {
          console.log('Error: ' + reason.result.error.message);
          reject(reason)
        })
      })
    }


    if (playlistItems.nextPageToken)
      return playlistItems.items.concat(await this.getVideos(playlistId, playlistItems.nextPageToken))
    else
      return playlistItems.items
  }

  async model({uri}) {
    // handle a username like:
    // https://www.youtube.com/c/MatanAnimationStudios
    const channelId = await this.search(uri)
    const uploadsPlaylistId = await this.channelDetails(channelId)
    const videos = await this.getVideos(uploadsPlaylistId)

    // TODO: handle a channel Id like
    // https://www.youtube.com/channel/UCL44k-cLrlsdr7PYuMU4yIw
    return videos;
  }
}
