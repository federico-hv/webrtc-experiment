'use strict';

app.controller('appCtrl', ['$scope', '$state', 'electron', function($scope, $state, electron){

	/**
	 * Main object -> Global but not that much (still encapsulted)
	 * @type {Object}
	 */
	$scope.main = {
		room: {
			name : null
		}
	};


	/**
	 * Object with main functions
	 * @type {Object}
	 */
	$scope.main.functions = {
		closeApp  	 : function(){
			electron.send('close-app');
		},
		setupMenu 	 : function(){
			
		},
		goToMain 	 : function(){
			$state.go('main');
		},
		goToVideoCall: function(){
			$state.go('videocall');
		},
		goToError	 : function(){
			$state.go('error');
		}
	};


}]);