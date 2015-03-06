angular.module('ngbp-gulp', [
	//Core
	'templates-app',
	'templates-common',

	//Modules
	'ngbp-gulp.home',
	'ngbp-gulp.about',
	'ngbp-gulp.someDirective',

	//3rd Party
	'ui.router'
])

	.config(function myAppConfig($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/home');
	})

	.run(function run() {
	})

	.controller('AppCtrl', function AppCtrl($scope, $location) {
		$scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
			if (angular.isDefined(toState.data.pageTitle)) {
				$scope.pageTitle = toState.data.pageTitle + ' | ngbp-gulp';
			}
		});
	})

;

