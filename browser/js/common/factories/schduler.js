app.factory('scheduler', function($http) {
    var scheduler = {}
    var s = scheduler

    //USER SCHEDULING STUFF
    //returns a specific calendar
    s.getCalendar = function(dashboardId) {
        return $http.get("/api/dashboards/classes/" + dashboardId)
            .then(function(response) {
                return response.data
            })
    }

    //CLASSROOM SCHEDULING STUFF
    s.schedule = function(classroomId, blocks) {
        // var start = new Date(2016, 7, 1)
        // blocks.forEach(function(e) {
        //     return (e - start) / 1800000 + 1
        // })
        return $http.put('/api/classrooms/schedule/' + classroomId, blocks)
            .then(function(response) {
                return response.data
            })
    }


    return scheduler
})