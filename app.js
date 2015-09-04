'use strict';

const app 			= require('app');
const BrowserWindow = require('browser-window');


/**
 * Put here all the stuff you need when the application is ready to be loaded
 * e.g. Open main window
 */
app.on('ready', function(){
	startMainWindow();
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