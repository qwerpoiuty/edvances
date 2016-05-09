'use strict';

app.directive('topnav', function() {
    return {
        templateUrl: 'js/common/directives/dashy/topnav/topnav.html',
        restrict: 'E',
        replace: true,
        controller: function($scope, $rootScope) {

            $scope.toggleBodyLayout = function() {

                $('body').toggleClass('box-section');
                $scope.val = !$scope.val;
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



            $scope.showMenu = function() {

                $('#app-container').toggleClass('push-right');

            }





        }
    }
});