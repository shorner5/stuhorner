import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('paper');
  this.route('android');
  this.route('web');
  this.route('contact');
});

export default Router;
