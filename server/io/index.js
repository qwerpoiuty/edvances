'use strict';
var socketio = require('socket.io');
var io = null;

module.exports = function(server) {
    if (io) return io;

    io = socketio(server);
    var chatHistory = {}
    io.on('connection', function(socket) {
        console.log(socket.id, 'connected');

        socket.on('join awesome room', function(roomName) {

            var chatBot = {

                    log: function() {
                        var date = Date.now()
                        this.bot(date)
                    },
                    bot: function(msg) {
                        io.to(roomName).emit('receiving message', msg)
                    }
                }
                //joining the room
            socket.join(roomName);
            if (!chatHistory[roomName]) chatHistory[roomName] = []
            else socket.emit('chat', chatHistory[roomName])
                //whiteboard things


            //chat things
            socket.on('chat message', function(msg) {
                chatHistory[roomName].push(msg)
                io.emit('chat message', msg);
            });
        });
    });

    return io;

};