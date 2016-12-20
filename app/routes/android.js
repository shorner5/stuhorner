import Ember from 'ember';

let android = [{
	title: 'Artery',
	class: 'projA1',
	imgSize: 'imgAndroid',
	display: 'displayingA',
	image: '../img/android.png',
	screenshot: '../img/artery.png',
	description: 'Artery is an Android app that inspires creativity and meaningful connections with new people. Users draw something that represents them, then swipe through what people nearby draw, in a Tinder-like fashion. <br> <br>We all know you can’t get to know someone from a few pictures of their face. Each match on Artery brings potential for a real connection—since your matches are based on your personality, your creativity, your expression—your matches are really based on you. <br> <br>Artery involves bitmap processing, database storage of both pictures and images, a custom messaging service, location services, and realtime user interaction, and Material UI design.',
	github: 'https://github.com/shorner5/artery',
	link: 'https://play.google.com/store/apps/details?id=com.stuhorner.drawingsample&hl=en'

}, {
	title: 'Buck It',
	class: 'projA2',
	imgSize: 'imgAndroid',
	display: 'displayingA',
	image: '../img/android.png',
	screenshot: '../img/buckit.png',
	description: 'Buck It is a social bucket list Android app that connects users with people around them who have similar goals. It’s a social bucket list app that connects people with people around them who have the similar goals, so that people can stay motivated and focused on completing their bucket list while meeting cool, like-minded people in their area. <br> <br>The concept is that connections and meaningful relationships are based on similar aspirations and compatible adventure styles (because everyone adventures in their own way), rather than a picture and a line of text. I was originally inspired to make it because I was frustrated with all the Tinder-like apps that judge people so quickly off superficial aspects of identity. <br> <br> It involves bitmap processing, a custom messaging and notification service, location services, a social network graph, database storage, and Material UI design.',
	github: 'https://github.com/shorner5/Buck-It',
	link: 'https://play.google.com/store/apps/details?id=stuhorner.com.buckit&hl=en'
}, {
	title: 'CoupleTones',
	class: 'projA3',
	imgSize: 'imgAndroid',
	display: 'displayingA',
	image: '../img/android.png',
	screenshot: '../img/coupletones.png',
	description: 'CoupleTones, a class project, is an app that lets users add a partner and receive custom notifications when their partner arrives at specified locations. In a team of six, we utilized Agile software development, Git, JIRA, and CircleCI to develop an Android application involving location services, cloud messaging, and realtime user interaction.'
}];

export default Ember.Route.extend({
	activate() {
		document.title = "Stuart Horner";
	},
	model() {
		return android;
	},
	actions: {
		selected() {
		},
		unselected() {
		}
	}
});
