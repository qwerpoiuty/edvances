app.factory('userFactory', function($http) {
    var userFactory = {}
        //user fetches
    userFactory.createUser = function(user) {
        return $http.post("/signup", user)
            .then(function(response) {
                if (response.data) {
                    var credentials = {
                        email: user.email,
                        password: user.password
                    }
                    return credentials
                } else {
                    return response.data
                }
            });
    }
    userFactory.updateUser = function(user) {
        return $http.put("/api/users/update" + user.id, user)
            .then(function(response) {
                return response.data;
            })
    }
    userFactory.deleteUser = function(user) {
        return $http.delete("/api/users/delete", user)
            .then(function(response) {
                return response.data
            })
    }
    userFactory.getUsers = function(user) {
        return $http.get("/api/users/")
            .then(function(response) {
                return response.data
            })
    }
    userFactory.getUserById = function(id) {
        return $http.get("/api/users/" + id)
            .then(function(response) {
                return response.data
            })
    }
    userFactory.getVerifiedTeachers = function() {
        return $http.get("/api/users/verified")
            .then(function(response) {
                return response.data
            })
    }
    //these two add and remove classes from the classroom array on the dashboard
    classroomFactory.addClass = function(classroom_id, studentId) {
        return $http.put('/api/dashboard/add' + classroom_id, studentId)
            .then(function(response) {
                return response.data
            })
    }

    classroomFactory.removeClass = function(classroom_id, sudentId) {
        return $http.put('/api/dashboard/remove' + classrom_id, studentId)
            .then(function(response) {
                return response.data
            })
    }

    return userFactory
});