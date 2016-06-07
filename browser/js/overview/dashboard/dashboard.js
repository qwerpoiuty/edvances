app.config(function($stateProvider) {
    $stateProvider.state('dashboard', {
        templateUrl: 'js/overview/dashboard/dashboard.html',
        controller: 'dashboardCtrl',
        parent: 'overview',
        resolve: {
            user: function(AuthService) {
                return AuthService.getLoggedInUser().then(function(user) {
                    return user
                })
            }
        }
    })
})

app.controller('dashboardCtrl', function($scope, $state, $rootScope, $timeout, user, $modal, $log, scheduler) {
    $scope.browse = function() {
        //this is going to be a student section for browsing classes
        console.log('hello')
    }

    $scope.createClass = function() {
        console.log('hello')
        var modalInstance = $modal.open({
            templateUrl: 'js/common/directives/modals/classCreation/create.html',
            controller: 'createClassCtrl',
            scope: $scope,
            size: 'lg'
        });

        modalInstance.result.then(function(selectedItem) {
            $scope.selected = selectedItem;
        }, function() {
            $log.info('Modal dismissed at: ' + new Date());
        });
    }
    scheduler.getCalendar(user.id).then(function(dashboard) {
        $scope.dashboard = dashboard
        console.log($scope.dashboard)
    })
    $scope.user = user
    $scope.date = new Date();
    $scope.eventSources = [];


})