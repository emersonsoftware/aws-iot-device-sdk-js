/*
 * Built out for testing purposes
 */

//node.js deps
var tcp = require('net');

//npm deps

//app deps

function buildBuilder(mqttClient, opts) {
   var connection;

  if ( !opts.port ) {
    opts.port = 8883;
  }
   connection = tcp.connect(opts)
   return connection;
}

module.exports = buildBuilder;
