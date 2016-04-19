app.factory('dataFactory', function($http, AuthService) {
    return {
        createUser: function(user) {
            console.log('hello', user)
            return $http.post("/signup", user)
                .then(function(response) {
                    return response.data;
                });
        }
    }
});