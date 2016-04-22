app.service('fileUpload', function($http) {
    this.uploadPhoto = function(user, photo) {
        var fd = new FormData();

        fd.append('file', photo);
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
});