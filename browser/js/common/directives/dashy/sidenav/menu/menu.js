'use strict';

app.directive('menu', function() {
    return {
        templateUrl: 'js/common/directives/dashy/sidenav/menu/menu.html',
        restrict: 'E',
        replace: true,

        controller: function($scope) {

            $scope.selectedMenu = 'dashboard';
            $scope.showingSubNav = 0;

            $scope.showSubNav = function(x) {

                if (x == $scope.showingSubNav)
                    $scope.showingSubNav = 0;
                else
                    $scope.showingSubNav = x;


            };


        },
    }
});