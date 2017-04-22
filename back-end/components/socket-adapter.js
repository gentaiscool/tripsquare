var dl = require('delivery');
var fs = require('fs');
var ffmpeg = require('fluent-ffmpeg');
var Promise = require('promise');
var Channel = require('./channel');
var axios = require('axios');

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

			socket.on('directions_api', function(data){
				console.log(data.departure + " " + data.arrival);

				var origin = data.departure;
			    var destination = data.arrival;
			    var key = "AIzaSyDqLv6-xuJb3MU2d5hN4G42qAqNbeZ6SRM";
			    var mode = "driving";
		   		var url = 'https://maps.googleapis.com/maps/api/directions/json?origin=' + origin + '&destination=' + destination + '&mode=' + mode +'&key=' + key;

		   		var drivingTime = null;
		   		var walkingTime = null;
		   		var bicyclingTime = null;
		   		var transitTime = null;

				axios.get(url)
				.then(function(response){
					drivingTime = response.data.routes[0].legs[0].duration.text;
					console.log(drivingTime);
					mode = "walking";
					url = 'https://maps.googleapis.com/maps/api/directions/json?origin=' + origin + '&destination=' + destination + '&mode=' + mode +'&key=' + key;
					axios.get(url)
					.then(function(response2){
						walkingTime = response2.data.routes[0].legs[0].duration.text;
						mode = "transit";
						url = 'https://maps.googleapis.com/maps/api/directions/json?origin=' + origin + '&destination=' + destination + '&mode=' + mode +'&key=' + key;
						//console.log(response2.data.routes[0].legs[0]);
						axios.get(url)
						.then(function(response3){
							transitTime = response3.data.routes[0].legs[0].duration.text;
							console.log("walkingTime: " + walkingTime);
							console.log("transitTime: " + transitTime);
							console.log("drivingTime: " + drivingTime);

							var obj = {};
							obj.walkingTime = walkingTime;
							obj.transitTime = transitTime;
							obj.drivingTime = drivingTime;
							socket.emit(origin + "_" + destination, obj);
						});
					});
				});	
			})

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