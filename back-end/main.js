/* SERVER INITIALIZATION */
var socketAdapters = require('./components/socket-adapter');
var Logger = require('./components/logger');

var settings = require('./config/settings');
var socketPort = settings.socket_port;
var socketio = require('socket.io').listen(socketPort);

socketAdapters.init(socketio);

Logger.print("=================================");
Logger.print("             Back-end            ");
Logger.print("=================================");
Logger.print("            is running           ");
Logger.print("    App listening on port " + socketPort);
Logger.print("=================================");