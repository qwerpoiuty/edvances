app.config(function($stateProvider) {
    $stateProvider.state('search', {
        templateUrl: 'js/overview/search/search.html',
        controller: 'searchCtrl',
        parent: 'overview'
    })
})

app.controller("searchCtrl", function($scope, dataFactory) {
    $scope.search;

})