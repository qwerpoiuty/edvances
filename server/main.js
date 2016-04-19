'use strict';
var chalk = require('chalk');

// // Requires in ./db/index.js -- which returns a promise that represents
// // mongoose establishing a connection to a MongoDB database.
var models = require("./models");

// Create a node server instance! cOoL!
var server = require('http').createServer();

var createApplication = function() {
    var app = require('./app');
    server.on('request', app); // Attach the Express application.
    require('./io')(server); // Attach socket.io.
};

var startServer = function() {

    var PORT = process.env.PORT || 1337;

    server.listen(PORT, function() {
        console.log(chalk.blue('Server started on port', chalk.magenta(PORT)));
    });

};
models.sequelize.sync().then(createApplication).then(startServer).catch(function(err) {
    console.error(chalk.red(err.stack));
    process.kill(1);
});

// var debug = require('debug')('express-example');
// var app = require('./app');
// var models = require("./models");

// app.set('port', process.env.PORT || 3000);

// models.sequelize.sync().then(function() {
//     var server = app.listen(app.get('port'), function() {
//         debug('Express server listening on port ' + server.address().port);
//     });
// });