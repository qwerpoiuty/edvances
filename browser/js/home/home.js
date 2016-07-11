app.config(function($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'js/home/home.html',
        controller: 'homeCtrl'
    })
});

app.controller('homeCtrl', function($scope, $state, dataFactory) {
    $scope.join_user = ""

    $scope.signup = function(state) {
        $scope.join_user = state
        console.log('hello', $scope.join_user)
    }
    $scope.back = function() {
        $scope.join_user = ""
    }

    $scope.signupTeacher = function(user) {
        user.powerLevel = 2;
        console.log(user)
        //input datafactory signup function
    }

    $scope.signupStudenc = function(user) {
        user.powerLevel = 1;
        console.log(user)
        //input datafactory signup function
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