import Ember from 'ember';

export default Ember.Component.extend({
	isShowingBody: false,
	actions: {
		showBody() {
			this.set('isShowingBody', true);
			//this.sendAction('opened');
		},
		hideBody() {
			this.toggleProperty('isShowingBody');
			//this.sendAction('closed')		
		}
	}
});
