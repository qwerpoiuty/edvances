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
<<<<<<< HEAD
       var bool = true
       for (var key in user){
            if (user[key] == "" || user[key] == null){
                bool == false
                break
            }
       }
        if (bool == false) {
           return "Please fill out all the fields"
        }   
        return $http.put("/api/users/update", user)
=======
        return $http.put("/api/users/update" + user.id, user)
>>>>>>> master
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
    userFactory.addClass = function(classroom_id, studentId) {
        //can only pass an array or an object in the body
        var array = [classroom_id]

        return $http.put('/api/dashboards/students/add/' + studentId, array)
            .then(function(response) {
                console.log(response.data)
                return response.data
            })
    }

    userFactory.removeClass = function(classroom_id, studentId) {
        var array = [classroom_id]
        return $http.put('/api/dashboards/students/remove/' + studentId, array)
            .then(function(response) {
                return response.data
            })
    }

    return userFactory
});