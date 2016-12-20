import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		scrollDown() {
			$('html, body').animate({scrollTop: document.body.scrollHeight},"slow");
		}
	}
});
