/*jshint loopfunc:true */

import SearchRoute from './search'

export default class RedditRoute extends SearchRoute {
  // TODO: Load GAPI Mixin
  beforeModel() {
    return this.youtube.loadGAPI();
  }

  async model({uri}) {
    const response = await (await fetch(`https://old.reddit.com/${uri}.json`)).json()
    let op = response[0].data["children"][0]["data"]["selftext"]
    // const regexOld = /\(http.*yout[^)]*\)/gm
    const regex = /\[([^\[\]]*)\]\((http.*yout[^)]*)\)/gm;

    const escaped_videos = [ ...op.matchAll(regex) ]
    console.log(escaped_videos);

    const titles = escaped_videos.map(a => a[1])
    const videos = escaped_videos.map(a => a[2])

    return {videos: videos, titles: titles}
  }
}
