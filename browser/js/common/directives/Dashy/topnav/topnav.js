'use strict';

app.directive('topnav', function($rootScope, AuthService, AUTH_EVENTS, $state) {
    return {
        templateUrl: 'js/common/directives/dashy/topnav/topnav.html',
        restrict: 'E',
        replace: true,
        controller: function($scope, $rootScope) {

            $scope.toggleBodyLayout = function() {

                $('body').toggleClass('box-section');
                $scope.val = !$scope.val;
            }

            $scope.login = function() {
                $state.go('login');
            }
            $scope.logout = function() {
                AuthService.logout().then(function() {
                    $state.go('home');
                });
            }
            $scope.$watch('val', function() {
                if ($scope.val == true) {
                    // alert("message");
                    $rootScope.$broadcast('resize');
                } else if ($scope.val == false) {
                    $rootScope.$broadcast('resize');
                }
                localStorage.setItem("switched", JSON.stringify($scope.val));
            });

            $scope.val = JSON.parse(localStorage.getItem("switched"));

            var removeUser = function() {
                $scope.user = null;
            };

            var setUser = function() {
                AuthService.getLoggedInUser().then(function(user) {
                    $scope.user = user;
                });
            };

            setUser()

            $rootScope.$on(AUTH_EVENTS.loginSuccess, setUser);
            $rootScope.$on(AUTH_EVENTS.logoutSuccess, removeUser);
            $rootScope.$on(AUTH_EVENTS.sessionTimeout, removeUser);

            $scope.showMenu = function() {

                $('#app-container').toggleClass('push-right');

            }





        }
    }
});