import Ember from 'ember';

let web = [{
	title: 'Unbias the Internet',
	description: 'The famous cartoon “On the internet, no one knows you’re a dog” is out of date. A more contemporary expression would be “on the internet, everyone knows you’re a dog.” More and more time spent on the internet is spent using social media, where the user represents their real-life self: in fact, a recent study by Global Web Index found that 28% of time individuals spend on the internet is on social media sites, more than any other category. On some levels, this makes sense: social media allows people to easily produce their own content, interact with their friends, and personalize the internet. <br> <br>However, there is an unintended consequence. By perpetuating our real-life identities online, we also bring the negative consequences of identity, like racism, sexism, and our reputation, into a space where communication is easier, faster, and often permanent. This voluntary removal of anonymity transfers real-world social problems like intolerance onto the internet. <br> <br>To demonstrate the extent to which gender affects our lives on the internet, I built a Chrome extension using HTML and JavaScript that replaces gendered language with generic language, such as changing all instances of "man" and "woman" to "human". After just a few hours with this extension, you\'ll be convinced of how pervasive gender is in media. This extension fundamentally alters the narrative of almost every media story, especially entertainment media, and exaggerates the pervasiveness of gendered bias.',
	content: 'web-content',
	class: 'projW1',
	imgSize: 'imgWeb',
	image: '../img/web.png',
	screenshot: '../img/unbias.png',
	github: 'https://github.com/shorner5/Unbias-the-Internet',
	link: 'https://chrome.google.com/webstore/detail/unbias-the-internet/njcdabcgjmpoedeoloccmpnejapkcjci'
}, {
	title: 'arteryapp.com',
	description: '<a href=http://arteryapp.com>arteryapp.com</a> is an elegantly simple, interactive landing page for the Android app Artery. It\'s written in JavaScript, jQuery, HTML5, and CSS.',
	content: 'web-content',
	class: 'projW2',
	imgSize: 'imgWeb',
	image: '../img/web.png',
	screenshot: '../img/artery-web.png',
	github: 'https://github.com/shorner5/Artery-Website',
	link: 'http://arteryapp.com/'
}, {
	title: 'About this Site',	
	content: 'web-content',
	class: 'projW3',
	imgSize: 'imgWeb',
	image: '../img/web.png',
	screenshot: '../img/this.png'
}];

export default Ember.Route.extend({
	activate() {
		document.title='Stuart Horner';
	},
	model() {
		return web;
	}
});
