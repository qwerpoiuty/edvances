app.factory('clasroomfactory', function($http, AuthService) {
    var clasroomfactory = {}
        //user fetches
    clasroomfactory.createClassroom = function(id, classroom) {
        return $http.post("/api/classrooms/" + id, classroom)
            .then(function(response) {
                return response.data
            })
    }
   clasroomfactory.updateClassrom = function(id, classroom) {
        return $http.put("/api/classrooms/" + id, classroom)
            .then(function(response) {
                return response.data
            })
    }
    clasroomfactory.getClassrooms = function() {
        return $http.get("/api/classrooms/")
            .then(function(response) {
                console.log(response.data)
            })
    }
    clasroomfactory.getClassroomById = function(id) {
        return $http.get("/api/classrooms/" + id)
            .then(function(response) {
                console.log('hello', response)
                return response.data
            })
    }
    clasroomfactory.delClassroom = function(id, classroom) {
        return $http.delete("/api/classrooms/" + id, classroom)
        .then(function(response){
            return response.data
        })
    }
    return clasroomfactory
});