app.directive('sidebar', function($rootScope, $state) {

    return {
        restrict: 'E',
        scope: {
            items: '=',
            state: '='
        },
        templateUrl: 'js/common/directives/sidenav/sidenav.html',
        link: function(scope, element, attrs) {
            scope.colors = [
                "blue",
                "green",
                "yellow",
                "red"
            ]
            console.log(scope.state)
            scope.transition = function(state, index) {
                console.log('hello')
                scope.selected = index
                $state.transitionTo(state)

            }

        }

    };

});