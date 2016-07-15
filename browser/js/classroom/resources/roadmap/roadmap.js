app.config(function($stateProvider) {
    $stateProvider.state('roadmap', {
        templateUrl: 'js/classroom/resources/roadmap/roadmap.html',
        controller: 'roadmapCtrl',
        parent: 'resources'
    })
});

app.controller('roadmapCtrl', function($scope) {
    $scope.events = [{
        badgeClass: 'info',
        badgeIconClass: 'glyphicon-check',
        title: 'First heading',
        content: 'Some awesome content.'
    }, {
        badgeClass: 'warning',
        badgeIconClass: 'glyphicon-credit-card',
        title: 'Second heading',
        content: 'More awesome content.'
    }, {
        badgeClass: 'warning',
        badgeIconClass: 'glyphicon-credit-card',
        title: 'Second heading',
        content: 'More awesome content.'
    }, {
        badgeClass: 'warning',
        badgeIconClass: 'glyphicon-credit-card',
        title: 'Second heading',
        content: 'More awesome content.'
    }, {
        badgeClass: 'warning',
        badgeIconClass: 'glyphicon-credit-card',
        title: 'Second heading',
        content: 'More awesome content.'
    }];
})