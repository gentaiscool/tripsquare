var Logger = function Logger(){

	this.timeFormat = function(){
		var date = new Date();
		var current_year = date.getFullYear();
		var current_month = date.getMonth() + 1;
		var current_date = date.getDate();
		var current_hour = date.getHours();
		var current_minute = date.getMinutes();
		var current_second = date.getSeconds();

		if(current_month < 10) current_month = "0" + current_month;
		if(current_date < 10) current_date = "0" + current_date;
		if(current_hour < 10) current_hour = "0" + current_hour;
		if(current_minute < 10) current_minute = "0" + current_minute;
		if(current_second < 10) current_second = "0" + current_second;

		return current_year + "-" + current_month + "-" + current_date + " " + current_hour + ":" + current_minute + ":" + current_second;
	}

	this.print = function(message){
		console.log(message);
	}

	this.log = function(context, message){
		console.log(this.timeFormat() + " (" + context + ") " + message);
	}

}

Logger.instance = null;

Logger.getInstance = function(){
	if(this.instance == null)
		this.instance = new Logger();
	return this.instance;
}

module.exports = Logger.getInstance();