/*jshint loopfunc:true */

import SearchRoute from './search'

export default class RedditRoute extends SearchRoute {
  // TODO: Load GAPI Mixin
  beforeModel() {
    return this.youtube.loadGAPI();
  }

  async model({uri}) {
    const response = await (await fetch(`${uri}.json`)).json()
    let op = response[0].data["children"][0]["data"]["selftext"]
    const regex = /\(http.*yout[^)]*\)/gm

    const escaped_videos = [ ...op.matchAll(regex) ]
    const videos = escaped_videos.map(a => a[0].slice(1, a.length-2))

    return videos
  }
}
