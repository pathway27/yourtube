import Component from '@glimmer/component';

import config from 'yourtube/config/environment';

import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { computed } from '@ember/object';

export default class PlyrComponent extends Component {
  @tracked videos = this.args.videos.reverse();
  @tracked currentVideoIndex = this.args.videoIndex || 0;
  @tracked player = null

  @action initPlyr(e) {
    this.player = new Plyr(e, {
      debug: (config.environment == 'development'),
      autoplay: true
    })

    this.player.on("ready", (event) => {
      console.log('ready')
      // create buttons for previous/next
    })

    this.player.on("ended", (event) => {
      console.log('ended')
      this.setActiveVideo(this.currentVideoIndex + 1, true)
    })
  }

  @action setActiveVideo(index, play = false) {
    // this.activeVideo = this.args.videos[index];
    this.currentVideoIndex = index;
    console.debug('setActiveVideo ', index)
    this.player.source = {
      type: 'video',
      sources: [
        {
          src: this.videos[index].snippet.resourceId.videoId,
          provider: 'youtube'
        }
      ]
    }
    if (play) this.player.play()
  }

  @computed('videos', 'currentVideoIndex')
  get currentVideo() {
    return this.videos[this.currentVideoIndex];
  }

  @computed('currentVideo')
  get currentVideoId() {
    return this.currentVideo.snippet.resourceId.videoId
  }
}
