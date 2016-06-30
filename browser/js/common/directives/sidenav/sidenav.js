app.directive('sidebar', function($rootScope, $state) {

    return {
        restrict: 'E',
        scope: {
            items: '='
        },
        templateUrl: 'js/common/directives/sidenav/sidenav.html',
        link: function(scope, element, attrs) {
            scope.colors = [
                "blue",
                "green",
                "yellow",
                "red"
            ]
            scope.transition = function(state, index) {
                scope.selected = index
                $state.transitionTo(state)

            }

        }

    };

});