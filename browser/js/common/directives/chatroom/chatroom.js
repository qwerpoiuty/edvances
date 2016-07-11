app.directive('chatroom', function($rootScope, AuthService, AUTH_EVENTS, $state, socket) {
    return {
        restrict: 'E',
        scrope: {
            user: "="
        },
        templateUrl: 'js/common/directives/chatroom/chatroom.html',
        link: function(scope, element, attrs) {
            scope.msg = {}
            scope.msg.user = scope.user.firstName
            scope.msg.timeStamp = Date.now()

            socket.on('chat message', function(chat) {

                // message = user + '[' + date + ']:' + message
                $('#messages').append('<li class="chat-message"><span class="username">' + chat.user + '</span>       ' + chat.text + '</li>')
            })
            socket.on('chat', function(chats) {
                chats.forEach(function(chat) {
                    $('#messages').append('<li class="chat-message"><span class="username">' + chat.user + '</span>       ' + chat.text + '</li>')
                });
            });
            scope.sendMsg = function() {
                if (scope.msg.text !== '') {
                    socket.emit('chat message', scope.msg)
                    scope.msg.text = ''
                }
                return false

            }
        }
    }
});