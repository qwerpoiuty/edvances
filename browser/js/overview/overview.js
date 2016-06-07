'use strict';

app.config(function($stateProvider) {
    $stateProvider.state('overview', {
        url: '/dashboard',
        templateUrl: 'js/overview/overview.html',
        controller: 'overviewCtrl',
        resolve: {},
        data: {
            authenticate: true
        }
    })
});
app.controller('overviewCtrl', function($scope, $state, $rootScope, $timeout) {
    $state.transitionTo('dashboard')

});