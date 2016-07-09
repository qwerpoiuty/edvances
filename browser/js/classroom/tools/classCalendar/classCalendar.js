app.config(function($stateProvider) {
    $stateProvider.state('classCalendar', {
        templateUrl: 'js/classroom/tools/classCalendar/classCalendar.html',
        controller: 'classCalendarCtrl',
        parent: 'tools'
    })
});

app.controller("classCalendarCtrl", function($scope, $filter, $http, $q, $modal, user, scheduler, MaterialCalendarData) {
    $scope.user = user
    scheduler.getCalendar($scope.user.id).then(function(calendar) {
        $scope.schedule = calendar
        console.log($scope.schedule)
    })


    $scope.events = {}

    $scope.open = function(size) {

        console.log("hello world");

        var modalInstance = $modal.open({
            templateUrl: 'js/common/directives/modals/eventModal/modal.html',
            controller: 'ModalInstanceCtrl',
            size: size
        });

        modalInstance.result.then(function(classData) {
            $scope.selected = classData;
            MaterialCalendarData.setDayContent(classData.start, '<span>' + classData.title + '</span>');

        }, function() {
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
        $scope.msg = $filter("date")(date, "MMM d, y h:mm:ss a Z");
        if ($scope.selectedDate.indexOf($scope.msg) != -1) {
            $scope.selectedDate.splice($scope.selectedDate.indexof($scope.msg), 1)
        } else {
            $scope.selectedDate.push($scope.msg)
        }
    };

    $scope.prevMonth = function(data) {
        $scope.msg = "You clicked (prev) month " + data.month + ", " + data.year;
    };

    $scope.nextMonth = function(data) {
        $scope.msg = "You clicked (next) month " + data.month + ", " + data.year;
    };

    $scope.tooltips = true;
    $scope.setDayContent = function(date) {
        return "<p></p>"

        // You would inject any HTML you wanted for
        // that particular date here.


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