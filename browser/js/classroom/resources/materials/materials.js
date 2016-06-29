app.config(function($stateProvider) {
    $stateProvider.state('materials', {
        templateUrl: 'js/classroom/tools/materials/materials.html',
        controller: 'materialsCtrl',
        parent: 'resources'
    })
});

app.controller('materialsCtrl', function($scope) {

})