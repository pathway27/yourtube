import Application from '@ember/application';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';


var App = Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

var appInst = App.create();
appInst.deferReadiness();
loadInitializers(appInst, config.modulePrefix);


// let applicationInstance = App.create();
// window.app = applicationInstance;

window.OnLoadCallback = function() {
  console.log('OnLoadCallback');
  // Application.advanceReadiness();
}

export default App;
