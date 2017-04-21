var dl = require('delivery');
var fs = require('fs');
var ffmpeg = require('fluent-ffmpeg');
var Promise = require('promise');

/* SETTINGS */
var settings = require('../config/settings');

var SocketAdapter = function SocketAdapter(){

	var numSessions = 0;
	var sessions = {};
	
	var sockets = []; //anticipate garbage collection

	var context = "socket adapter";
	var SocketAdapter = this;

	this.init = function(_package, _socketio){
		var package = _package;
		var io = _socketio;

		/* EVENTS */
		io.on('connection', function(socket) {
			sockets.push(socket);

			var delivery = dl.listen(socket);
			var sessionId;

			socket.on('send_text', function(data){

			});

			socket.on('close', function(){

			});

			/* FRONT-END MESSAGE RETRIEVAL EVENTS */
			// From dashboard to get session counts
			socket.on('get_last_session', function(data){
				Logger.log(context, "get_session_count");

				var promise = new Promise(
					function(resolve, reject) {
						var counts = MongoDBAdapter.getLastUserSession(data["user_id"], data["login_type"]);
						counts.then(function(response){
							socket.emit("get_last_session_reply", response);
							resolve("");
						}).then(undefined, function(err){
							console.log(err);
							reject("");
						});
					}
				);
			});

			delivery.on('receive.success', function(file){ // Retrieving audio recording
				//get session Id
				Logger.log(context, "message_speech_recording is triggered");
				Logger.log(context, "message_speech_recording: " + file);
				Logger.log(context, "Sending ACK");

				package.requestAPIForSpeech(socket, file, package);
			});
		});
	}
}

SocketAdapter.instance = null;

SocketAdapter.getInstance = function(){
	if(this.instance == null)
		this.instance = new SocketAdapter();
	return this.instance;
}

module.exports = SocketAdapter.getInstance();