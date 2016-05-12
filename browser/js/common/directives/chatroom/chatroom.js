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
                $('#messages').append($('<li>').text(chat.text))
            })
            socket.on('chat', function(chats) {
                chats.forEach(function(chat) {
                    $('#messages').append($('<li>').text(chat.text))
                });
            });
            scope.sendMsg = function() {
                if (scope.msg.text !== '') {
                    console.log('test')
                    socket.emit('chat message', scope.msg)
                    scope.msg.text = ''
                }
                return false

            }
        }
    }
});