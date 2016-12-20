import Ember from 'ember';

export default Ember.Component.extend({
	isShowingBody: false,
	actions: {
		showBody() {
			this.set('isShowingBody', true);
		},
		hideBody() {
			this.toggleProperty('isShowingBody');
		}
	}
});
