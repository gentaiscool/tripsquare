var Message = require("./message");

function Channel(channelId){
	this.channelId = channelId;
	this.messages = [];
}

Channel.prototype.init = function(){
	
}

Channel.prototype.newMessage = function(message){
	this.messages.push(message);
}

module.exports = Channel;