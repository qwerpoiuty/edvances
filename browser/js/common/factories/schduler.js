app.factory('scheduler', function($http) {
    var scheduler = {}
    var s = scheduler

    //USER SCHEDULING STUFF
    //returns a specific calendar
    s.getCalendar = function(dashboardId) {
        return http.get("/api/dashboard/" + dashboardId)
            .then(function(response) {
                return response.data
            })
    }

    //add a class
    s.addClass = function(dashboardId, classroom) {
        return http.put("/api/dashboard/addClass/" + dashboardId, classroom)
            .then(function(response) {
                return response.data
            })
    }

    //remove a class
    s.removeClass = function(dashboardId, classroom) {
        return http.put("/api/dashboard/removeClass/" + dashboardId, classroom)
            .then(function(response) {
                return response.data
            })
    }

    //CLASSROOM SCHEDULING STUFF
    s.createSchedule = function(classroomId, blocks) {
        return http.put('/classroom/schdeul' + classroomId)
            .then(function(response) {
                return response.data
            })
    }
    s.addBlock = function(classroomId, block) {
        return http.put("/api/classroom/addblock" + classroomId, block)
            .then(function(response) {
                return response.data
            })
    }
    return scheduler
})