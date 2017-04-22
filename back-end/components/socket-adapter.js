var dl = require('delivery');
var fs = require('fs');
var ffmpeg = require('fluent-ffmpeg');
var Promise = require('promise');
var Channel = require('./channel');

var SocketAdapter = function SocketAdapter(){

	var numSessions = 0;
	var sessions = {};
	
	var sockets = []; //anticipate garbage collection
	var channels = [];

	var context = "socket adapter";
	var SocketAdapter = this;

	this.init = function( _socketio){
		var io = _socketio;

		/* EVENTS */
		io.on('connection', function(socket) {
			sockets.push(socket);
			console.log("new connection");

			var delivery = dl.listen(socket);
			var sessionId;

			socket.on('message', function(data){
				console.log("send_text: " + data);
				var message = data.message;
				var channelId = data.channelId;

				if(!channels.hasOwnProperty(channelId)){
					var newChannel = new Channel(channelId);
					newChannel.newMessage(message);
				}
			});

			socket.on('close', function(){

			});

			/* FRONT-END MESSAGE RETRIEVAL EVENTS */
			// From dashboard to get session counts
			socket.on('', function(data){
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