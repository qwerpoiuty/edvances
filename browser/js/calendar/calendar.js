app.config(function($stateProvider) {
    $stateProvider.state('calendar', {
        url: '/calendar',
        templateUrl: 'js/calendar/calendar.html',
        controller: "calendarControl"
    })
});



app.controller("calendarControl", function($scope, $filter, $http, $q, $modal){

    $scope.items = ['item1', 'item2', 'item3'];

    $scope.open = function (size) {

        console.log("hello world");

        var modalInstance = $modal.open({
            templateUrl: 'js/common/directives/modal/modal.html',
            controller: 'ModalInstanceCtrl',
            size: size
        });

        modalInstance.result.then(function (selectedItem) {
            $scope.selected = selectedItem;
        }, function () {
            $log.info('Modal dismissed at: ' + new Date());
        });
    };




    $scope.dayFormat = "d";

    // To select a single date, make sure the ngModel is not an array.
    $scope.selectedDate = null;

    // If you want multi-date select, initialize it as an array.
    $scope.selectedDate = [];

    $scope.firstDayOfWeek = 1; // First day of the week, 0 for Sunday, 1 for Monday, etc.
    $scope.setDirection = function(direction) {
        $scope.direction = direction;
        $scope.dayFormat = direction === "vertical" ? "EEEE, MMMM d" : "d";
    };

    $scope.dayClick = function(date) {
        $scope.msg = "You clicked " + $filter("date")(date, "MMM d, y h:mm:ss a Z");
    };

    $scope.prevMonth = function(data) {
        $scope.msg = "You clicked (prev) month " + data.month + ", " + data.year;
    };

    $scope.nextMonth = function(data) {
        $scope.msg = "You clicked (next) month " + data.month + ", " + data.year;
    };

    $scope.tooltips = true;
    $scope.setDayContent = function(date) {

        // You would inject any HTML you wanted for
        // that particular date here.
        return "<p></p>";

        // You could also use an $http function directly.
        return $http.get("/some/external/api");

        // You could also use a promise.
        var deferred = $q.defer();
        $timeout(function() {
            deferred.resolve("<p></p>");
        }, 1000);
        return deferred.promise;

    };

});


