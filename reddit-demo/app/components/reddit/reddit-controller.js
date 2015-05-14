angular.module('redditApp').controller('redditController', function($scope, RedditFactory) {
	var ctrl = this;

	ctrl.reddit = new RedditFactory();
	ctrl.reddit.nextPage();
	console.log(ctrl.reddit.after);
})