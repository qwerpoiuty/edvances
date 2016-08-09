app.factory('classroomFactory', function($http, AuthService) {
    var classroomFactory = {}
        //user fetches
    classroomFactory.createClassroom = function(classroom) {
        return $http.post("/api/classrooms/", classroom)
            .then(function(response) {
                return response.data
            })
    }
    classroomFactory.updateClassroom = function(classroom) {
        return $http.put("/api/classrooms/", classroom)
            .then(function(response) {
                return response.data
            })
    }
    classroomFactory.getClassrooms = function() {
        return $http.get("/api/classrooms/")
            .then(function(response) {
                console.log(response.data)
            })
    }

    //basic fetches for classrooms
    classroomFactory.getClassroomById = function(id) {
        return $http.get("/api/classrooms/" + id)
            .then(function(response) {
                console.log('hello', response)
                return response.data
            })
    }
    classroomFactory.delClassroom = function(id, classroom) {
        return $http.delete("/api/classrooms/" + id, classroom)
            .then(function(response) {
                return response.data
            })
    }



    return classroomFactory
});