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

})