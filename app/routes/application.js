import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service youtube

  // TODO: Load GAPI Mixin
  beforeModel() {
    return this.youtube.loadGAPI();
  }
}
