app.service('fileUpload', function($http) {
    this.uploadPhoto = function(user, photo) {
        var fd = new FormData();

        fd.append('photo', photo);
        $http.post('/api/users/photo/' + user.id, fd, {
            transformRequest: angular.identity,
            headers: {
                'Content-Type': undefined
            }
        })

        .success(function(d) {
            console.log(d)
        })

        .error(function() {});
    }

    this.uploadDocument = function(user, doc) {
        var fd = new FormData();
        fd.append('doc', doc);
        $http.put('/api/users/doc/' + user.id, fd, {
            transformRequest: angular.identity,
            headers: {
                'Content-Type': undefined
            }
        })

        .success(function(d) {
            console.log(d)
        })

        .error(function() {})
    }
});