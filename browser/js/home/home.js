app.config(function($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'js/home/home.html',
        controller: 'homeCtrl'
    })
});

app.controller('homeCtrl', function($scope, $state) {
    $scope.signup = function(state) {
        console.log('hello', state)
        $state.go(state)
    }
    $scope.myInterval = false;
    $scope.slides = [{
        information: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit esse, at doloremque sint recusandae quasi labore nobis consectetur id, adipisci a. Animi illum laboriosam molestiae harum dicta eligendi quibusdam totam. Fugit esse, at doloremque sint recusandae quasi labore nobis consectetur id, adipisci a. Animi illum laboriosam molestiae harum dicta eligendi quibusdam totam.'
    }, {
        information: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit esse, at doloremque sint recusandae quasi labore nobis consectetur id, adipisci a. Animi illum laboriosam molestiae harum dicta eligendi quibusdam totam. Fugit esse, at doloremque sint recusandae quasi labore nobis consectetur id, adipisci a. Animi illum laboriosam molestiae harum dicta eligendi quibusdam totam.'
    }, {
        information: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit esse, at doloremque sint recusandae quasi labore nobis consectetur id, adipisci a. Animi illum laboriosam molestiae harum dicta eligendi quibusdam totam. Fugit esse, at doloremque sint recusandae quasi labore nobis consectetur id, adipisci a. Animi illum laboriosam molestiae harum dicta eligendi quibusdam totam.'
    }, {
        information: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit esse, at doloremque sint recusandae quasi labore nobis consectetur id, adipisci a. Animi illum laboriosam molestiae harum dicta eligendi quibusdam totam. Fugit esse, at doloremque sint recusandae quasi labore nobis consectetur id, adipisci a. Animi illum laboriosam molestiae harum dicta eligendi quibusdam totam.'
    }];

})