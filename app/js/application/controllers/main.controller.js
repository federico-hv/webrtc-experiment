'use strict';

app.controller('mainCtrl', ['$rootScope', '$scope', 'electron', function($rootScope, $scope, $state, electron){
	
	/**
	$rootScope.$on('electron-host', function(evt, data) {
	    alert( data + " from HOST now in mainCtrl");
	});
	**/
	

	/**
	 * Object that holds all the functions for this controller
	 * @type {Object}
	 */
	$scope.functions = {
		goToRoom: function(){
			if(!$scope.main.room.name){
				alert('Please enter a room name!');
				return;
			}
			//Set main roomName
			$scope.main.functions.goToVideoCall();
		}
	};


}]);