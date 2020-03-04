const os = require('os');
const path = require('path');
const bindings = require(path.join(__dirname, os.platform(), os.arch(), 'bindings'));
module.exports = bindings;

