
var app = angular.module('drf-angular', [
	'ui.router'
]);

app.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: '/static/templates/home.html',
			controller: 'MainCtrl'
		})
		.state('page2', {
			url: '/page2',
			templateUrl: '/static/templates/page2.html',
			controller: 'Page2Ctrl'
		});

	$urlRouterProvider.otherwise('/');
});

app.controller('MainCtrl', function($scope){
	$scope.test = "I come from the angularz";
});

app.controller('Page2Ctrl', function($scope){
	$scope.test = "I come from the 2";
});
