app.factory('userFactory', function($http, AuthService) {
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
                    AuthService.login(credentials)
                    return response.data
                } else {
                    return response.data
                }
            });
    }
    userFactory.updateUser = function(user) {
        return $http.put("/api/users/update", user)
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
    return userFactory
});