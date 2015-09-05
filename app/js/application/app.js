'use strict';

/**
 * Defines the app module with all the plugins
 */
var app = angular.module('webrtc', [
		'ui.router',
		'ngElectron'
	]);

/**
 * Defines configuration for the routes to be called with angular-ui-router
 */
app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
	$urlRouterProvider
		.otherwise('/');
	$stateProvider
		.state('main', {
			url:        "/",
			templateUrl: 'templates/main.html',
			pageid:     'main',
			controller: 'mainCtrl'
		})
		.state('videocall',{
			url:        "/videocall",
			templateUrl: 'templates/videocall.html',
			pageid:     'videocall',
			controller: 'videocallCtrl'
		})
		.state('error',{
			url:        "/error",
			templateUrl: 'templates/error.html',
			pageid:     'error',
			controller: 'errorCtrl'
		});
});