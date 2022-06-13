/*jshint loopfunc:true */

import { Promise } from 'rsvp';

import SearchRoute from './search';

import config from 'yourtube/config/environment';

export default class YoutubeRoute extends SearchRoute {
  async search(username) {
    var channelSearchResults
    if (config.APP.useLocalJSON) {
      channelSearchResults = await (await fetch('/youtube_v3/search/list/q_MatanAnimationStudios.json')).json()
    } else {
      channelSearchResults = await new Promise((resolve, reject) => {
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

  async channelDetails(channelId, username = null) {
    var channel
    if (config.APP.useLocalJSON) {
      channel = await (await fetch('/youtube_v3/channels/list/MatanAnimationStudios.json')).json()
    } else {
      channel = await new Promise((resolve, reject) => {
        gapi.client.youtube.channels.list({
          part: 'contentDetails',
          id: channelId,
          forUsername: username
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
      playlistItems = await new Promise((resolve, reject) => {
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
    // debugger
    let channelId, uploadsPlaylistId, videos
    let url = this.handleUrl(uri)

    // handle a username like:
    // MatanAnimationStudios
    if (!url) {
      channelId = await this.search(uri)
      uploadsPlaylistId = await this.channelDetails(channelId)
      videos = await this.getVideos(uploadsPlaylistId)
    } else {
      // handle a uri like 
      // https://www.youtube.com/c/MatanAnimationStudios
      let route = url.pathname.split('/')[1];
      switch (route) {
        case 'c':
          let uri = url.pathname.split('/')[2];
          channelId = await this.search(uri)
          uploadsPlaylistId = await this.channelDetails(channelId)
          videos = await this.getVideos(uploadsPlaylistId)
          break;
        case 'user':
          // handle a username like
          // https://www.youtube.com/user/superwog1
          let username = url.pathname.split('/')[2];
          uploadsPlaylistId = await this.channelDetails(null, username)
          videos = await this.getVideos(uploadsPlaylistId)

          break;
        case 'channel':
          // TODO: handle a channel Id like
          // https://www.youtube.com/channel/UCL44k-cLrlsdr7PYuMU4yIw
          channelId = url.pathname.split('/')[2];
          uploadsPlaylistId = await this.channelDetails(channelId)
          videos = await this.getVideos(uploadsPlaylistId)
          break;
      }
    }

    return videos;
  }
}
