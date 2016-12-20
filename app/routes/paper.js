import Ember from 'ember';

let paper = [{
	title: 'Psychology',
	description: 'I completed a minor in Psychology at the University of California, San Diego, in the winter of 2017.',
	class: 'projW1',
	content: 'paper-content',
	imgSize: 'imgPaper',
	image: '../img/paper.png',
	screenshot: ''
}, {
	title: 'Local Politics',
	description: '',
	class: 'projW2',
	content: 'paper-content',
	imgSize: 'imgPaper',
	image: '../img/paper.png',
	screenshot: ''
}, {
	title: 'Law Office',
	class: 'projW3',
	description: '',
	content: 'paper-content',
	imgSize: 'imgPaper',
	image: '../img/paper.png',
	screenshot: ''
}];

export default Ember.Route.extend({
	activate() {
		document.title='Stuart Horner';
	},
	model() {
		return paper;
	}
});
