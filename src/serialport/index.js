const SerialPort = require('@serialport/stream');
const Binding = require('./lib');

SerialPort.Binding = Binding;

module.exports = SerialPort;
