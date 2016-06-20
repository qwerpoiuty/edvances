app.factory('dataFactory', function($http, AuthService) {
    var dataFactory = {}
        //user fetches
    dataFactory.createUser = function(user) {

        return $http.post("/signup", user)
            .then(function(response) {
                return response.data;
            });
    }
    dataFactory.updateUser = function(user) {
        return $http.put("/api/users/update", user)
            .then(function(response) {
                return response.data;
            })
    }
    dataFactory.getUsers = function(user) {
        return $http.get("/api/users/")
            .then(function(response) {
                return response.data
            })
    }
    dataFactory.getUserById = function(id) {
        return $http.get("/api/users/" + id)
            .then(function(response) {
                return response.data
            })
    }
    dataFactory.getVerifiedTeachers = function() {
        return $http.get("/api/users/verified")
            .then(function(response) {
                return response.data
            })
    }
    //classroom
    dataFactory.createClassroom = function(id, classroom) {
        return $http.post("/api/classrooms/" + id, classroom)
            .then(function(response) {
                return response.data
            })
    }
    dataFactory.getClassrooms = function() {

        return $http.get("/api/classrooms/")
            .then(function(response) {
                console.log(response.data)
            })
    }
    dataFactory.getClassroomById = function(id) {
        return $http.get("/api/classrooms/" + id)
            .then(function(response) {
                console.log('hello', response)
                return response.data
            })
    }
    return dataFactory
});