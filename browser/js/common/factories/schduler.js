app.factory('scheduler', function($http) {
    var scheduler = {}
    var s = scheduler
    var start = new Date(2016, 7, 1, 1, 30)
        //USER SCHEDULING STUFF
        //returns a specific calendar
    s.getCalendar = function(dashboardId) {
        return $http.get("/api/dashboards/classes" + dashboardId)
            .then(function(response) {
                return response.data
            })
    }

    //CLASSROOM SCHEDULING STUFF
    s.schedule = function(classroomId, blocks) {
        blocks.forEach(function(e) {
            return e - start
        })
        return $http.put('/classroom/schedule' + classroomId, blocks)
            .then(function(response) {
                return response.data
            })
    }


    return scheduler
})