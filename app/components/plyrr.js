import Component from '@glimmer/component';

import config from 'yourtube/config/environment';

import { tracked } from '@glimmer/tracking';
import { action, computed } from '@ember/object';

export default class PlyrrComponent extends Component {
  @tracked videos = this.args.videos;
  @tracked titles = this.args.titles;
  @tracked currentVideoIndex = 0;
  @tracked player = null;
  
  get currentTime() {
    return this.player?.currentTime
  }

  @computed('player.muted')
  get muted() {
    return this.player?.muted
  }

  @action initPlyr(e) {
    this.player = new Plyr(e, {
      debug: (config.environment == 'development'),
      autoplay: true
    })

    this.player.on("ready", (event) => {
      console.debug('ready')
      console.debug(this.videos)
      console.debug(event)
      this.player = event.detail.plyr
      window.player = this.player;
      this.titles[this.currentVideoIndex] = this.player.config.title
      // create buttons for previous/next
    })

    this.player.on("ended", (event) => {
      console.debug('ended')
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
          src: this.videos[index],
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

  @computed('videos', 'currentVideoIndex')
  get currentTitle() {
    return this.titles[this.currentVideoIndex];
  }

  @computed('currentVideo')
  get currentVideoId() {
    return this.currentVideo
  }

  currentVid(index) {
    return this.currentVideo
  }
}
