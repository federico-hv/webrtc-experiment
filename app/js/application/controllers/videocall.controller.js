'use strict';

/**
 *  Should check on modules like ng-simple-webrtc or other if possible
 */


app.controller('videocallCtrl', ['$scope', 'electron',function($scope, electron){
	
	var webrtc = null;

	/**
	 * Object that holds all the functions for this controller
	 * @type {Object}
	 */
	$scope.functions = {
		startVideoCall : function(){
			/**
			 * Raw WebRtc Stuff. Better use an angular wrapper for the next time
			 */

			webrtc = new SimpleWebRTC({
			  // the id/element dom element that will hold "our" video
			  localVideoEl: 'localVideo',
			  // the id/element dom element that will hold remote videos
			  remoteVideosEl: 'remotesVideos',
			  // immediately ask for camera access
			  autoRequestMedia: true
			});

			webrtc.on('readyToCall', function () {
			  alert('Video Call Started!');
			  // you can name it anything
			  webrtc.joinRoom($scope.main.room.name);
			});
		},
		endVideoCall : function(){
			//Fast solution?????
			document.getElementById('remotesVideos').innerHTML = '';
			var webrtc = null;
			$scope.main.functions.goToMain();
		}
	};

	$scope.functions.startVideoCall();

}]);












// a peer video has been added
webrtc.on('videoAdded', function (video, peer) {
    console.log('video added', peer);
    var remotes = document.getElementById('remotes');
    if (remotes) {
        var container = document.createElement('div');
        container.className = 'videoContainer';
        container.id = 'container_' + webrtc.getDomId(peer);
        container.appendChild(video);

        // suppress contextmenu
        video.oncontextmenu = function () { return false; };

        remotes.appendChild(container);
    }
});