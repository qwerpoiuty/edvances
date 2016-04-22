app.factory('dataFactory', function($http, AuthService) {
    return {
        createUser: function(user) {
            console.log('hello', user)
            return $http.post("/signup", user)
                .then(function(response) {
                    return response.data;
                });
        },
        updateUser: function(user) {
            return $http.put("/api/users/update", user)
                .then(function(response) {
                    return response.data;
                })
        },
        getUsers: function(user) {
            return $http.get("/api/users/")
                .then(function(response) {
                    return response.data
                })
        }
    }
});