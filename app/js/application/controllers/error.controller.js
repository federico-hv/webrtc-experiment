'use strict';

app.controller('errorCtrl', ['$scope', 'electron', function($scope, electron){
	
	/**
	 * Object that holds all the functions for this controller
	 * @type {Object}
	 */
	$scope.functions = {
		goBack : function(){
			$state.go('main');
		}
	};

}]);