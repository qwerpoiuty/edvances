app.directive('sidebar', function($rootScope, $state) {

    return {
        restrict: 'E',
        scope: {
            items: '='
        },
        templateUrl: 'js/common/directives/sidenav/sidenav.html',
        link: function(scope, element, attrs) {
            console.log(scope.items)
            scope.transition = function(state) {
                console.log(state)
                $state.transitionTo(state)
            }

        }

    };

});