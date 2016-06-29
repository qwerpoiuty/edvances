app.config(function($stateProvider) {
    $stateProvider.state('slides', {
        templateUrl: 'js/classroom/tools/slides/slides.html',
        controller: 'slidesCtrl',
        parent: 'resources'
    })
});

app.controller('slidesCtrl', function($scope) {

})