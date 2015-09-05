'use strict';

const app 			= require('app');
const BrowserWindow = require('browser-window');
let windows 		= [];

//This should not be in the client side. Just a fast solution to order files...
const angular 		= require('./app/js/vendor/ng-electron/ng-bridge.js'); 

/**
 * Put here all the stuff you need when the application is ready to be loaded
 * e.g. Open main window
 */
app.on('ready', function(){
	//Instantiate main window.
	windows[0] = startMainWindow();


	/**
	 * Main process listener. Receives a message from any renderer process and decides what to do.
	 * @param  {string} Message  
	 */
	angular.listen(function(msg){
		switch(msg){
			case 'close-app':
				closeApp();
			break;
			case 'other':
				
			break;
			default:
			break;
		}
	});
});

/**
 * Quit app if all windows are closed. On mac the app will remain opened
 */
app.on('window-all-closed', function () {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

/**
 * Start app on mac if the app is still activated in the dock and the user clicks it
 */
app.on('activate-with-no-open-windows', function () {
	if (windows.length===0) {
		windows[0] = startMainWindow();
	}
});


/**
 * Creates and returns the main window of the app
 * @return {Object} a new BrowserWindow
 */
function startMainWindow(){
	let win = new BrowserWindow({
		frame: false,
		width: 800,
		height: 600,
		resizable: false
	});

	win.loadUrl('file://'+__dirname+'/app/index.html');

	return win;
}

/**
 * Closes all the windows and sets the arrays as default (on mac user can open the app again from docs)
 */
function closeApp(){
	for(var i=windows.length-1;i>=0;i--){
		windows[i].close();
	}
	windows = [];
}