app.factory('classroomFactory', function($http, AuthService) {
    var classroomFactory = {}
        //user fetches
    classroomFactory.createClassroom = function(id, classroom) {
        console.log(id)
        return $http.post("/api/classrooms/" + id, classroom)
            .then(function(response) {
                return response.data
            })
    }
   classroomFactory.updateClassroom = function(id, classroom) {
        return $http.put("/api/classrooms/" + id, classroom)
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
    classroomFactory.getClassroomById = function(id) {
        return $http.get("/api/classrooms/" + id)
            .then(function(response) {
                console.log('hello', response)
                return response.data
            })
    }
    classroomFactory.delClassroom = function(id, classroom) {
        return $http.delete("/api/classrooms/" + id, classroom)
        .then(function(response){
            return response.data
        })
    }
    return classroomFactory
});