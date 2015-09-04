'use strict';

app.controller('mainCtrl', ['$scope', '$state', function($scope, $state){
	
	/**
	 * Object that will hold the attributes of the room to connect to
	 * @type {Object}
	 */
	$scope.room = {};


	$scope.functions = {
		goToRoom: function(){
			$state.go('videocall');
		}
	};
}]);