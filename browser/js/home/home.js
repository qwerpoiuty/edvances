app.config(function($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'js/home/home.html',
        controller: 'homeCtrl'
    })
});

app.controller('homeCtrl', function($scope, $state) {
    $scope.join_user = ""

    $scope.signup = function(state) {
        $scope.join_user = state
        console.log('hello', $scope.join_user)
    }
    $scope.back = function() {
        $scope.join_user = ""
    }
<<<<<<< HEAD
=======
  $scope.myInterval = false;
  $scope.slides = [
    {
      information: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit esse, at doloremque sint recusandae quasi labore nobis consectetur id, adipisci a. Animi illum laboriosam molestiae harum dicta eligendi quibusdam totam. Fugit esse, at doloremque sint recusandae quasi labore nobis consectetur id, adipisci a. Animi illum laboriosam molestiae harum dicta eligendi quibusdam totam.'
    },
    {
      information: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit esse, at doloremque sint recusandae quasi labore nobis consectetur id, adipisci a. Animi illum laboriosam molestiae harum dicta eligendi quibusdam totam. Fugit esse, at doloremque sint recusandae quasi labore nobis consectetur id, adipisci a. Animi illum laboriosam molestiae harum dicta eligendi quibusdam totam.'
    },
    {
      information: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit esse, at doloremque sint recusandae quasi labore nobis consectetur id, adipisci a. Animi illum laboriosam molestiae harum dicta eligendi quibusdam totam. Fugit esse, at doloremque sint recusandae quasi labore nobis consectetur id, adipisci a. Animi illum laboriosam molestiae harum dicta eligendi quibusdam totam.'
    },
    {
      information: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit esse, at doloremque sint recusandae quasi labore nobis consectetur id, adipisci a. Animi illum laboriosam molestiae harum dicta eligendi quibusdam totam. Fugit esse, at doloremque sint recusandae quasi labore nobis consectetur id, adipisci a. Animi illum laboriosam molestiae harum dicta eligendi quibusdam totam.'
    }
  ];

>>>>>>> 72d16400a882965b2103a03f9ba9aeb56f1bac71
})