import Ember from 'ember';

let paper = [{
	title: 'Psychology',
	description: 'I completed a minor in Psychology at the University of California, San Diego, in the winter of 2017. <br> <br>Courses include (among others): <br>Industrial Organization Psychology <br>Behavioral Psychology <br>Clinical Psychology <br>Drugs, Addiction, and Substance Disorders <br>Psychology of Emotions',
	class: 'projW1',
	content: 'paper-content',
	imgSize: 'imgPaper',
	image: '../img/paper.png',
	screenshot: ''
}, {
	title: 'Local Politics',
	description: 'I designed, developed, and implemented websites for a local city council candidate, Brigette Mansell (currently the mayor of Healdsburg, CA), and a school board candidate, Ron Kristof. Both candidates won in very close races and credited the sites for their reliability and for making the difference by increasing voter reach.',
	class: 'projW2',
	content: 'paper-content',
	imgSize: 'imgPaper',
	image: '../img/paper.png',
	screenshot: ''
}, {
	title: 'Law Office',
	class: 'projW3',
	description: 'I worked part-time at the <a href="http://pmg-legal.com">Law Offices of Passalaqua, Mazzoni, Gladden, Lopez, & Maraviglia</a> for two years. I maintained the firm\'s law library, performed back-ups to off-site storage, and provided computer support to attorneys on an ad-hoc basis.',
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
