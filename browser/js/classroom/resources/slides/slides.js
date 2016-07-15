app.config(function($stateProvider) {
    $stateProvider.state('slides', {
        templateUrl: 'js/classroom/resources/slides/slides.html',
        controller: 'slidesCtrl',
        parent: 'resources'
    })
});

app.controller('slidesCtrl', function($scope) {
    $scope.presentations = [{
        name: 'Introduction',
        image: 'http://placekitten.com.s3.amazonaws.com/homepage-samples/200/287.jpg'
    }, {
        name: 'Unit 1',
        image: 'http://placekitten.com.s3.amazonaws.com/homepage-samples/200/287.jpg'
    }, {
        name: 'Unit 2',
        image: 'http://placekitten.com.s3.amazonaws.com/homepage-samples/200/287.jpg'
    }, {
        name: 'Unit 3',
        image: 'http://placekitten.com.s3.amazonaws.com/homepage-samples/200/287.jpg'
    }, {
        name: 'Unit 4',
        image: 'http://placekitten.com.s3.amazonaws.com/homepage-samples/200/287.jpg'
    }, {
        name: 'Unit 5',
        image: 'http://placekitten.com.s3.amazonaws.com/homepage-samples/200/287.jpg'
    }, {
        name: 'Unit 6',
        image: 'http://placekitten.com.s3.amazonaws.com/homepage-samples/200/287.jpg'
    }]
})