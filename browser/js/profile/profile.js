app.config(function($stateProvider) {
    $stateProvider.state('profile', {
        url: '/profile',
        templateUrl: 'js/profile/profile.html',
        controller: 'profileCtrl',
        resolve: {
            user: function(AuthService) {
                return AuthService.getLoggedInUser().then(function(user) {
                    return user
                })
            }
        },
        data: {
            authenticate: true
        }
    });

})

app.controller('profileCtrl', function($scope, dataFactory, user, fileUpload, $q, $timeout) {
    $scope.user = {
        email: user.email,
        firstName: "Stan",
        lastName: "Le",
        title: "TEACHERMAN",
        summary: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores unde quae ipsum facere expedita perferendis illum minus nobis nesciunt dicta. Voluptates rerum mollitia eveniet beatae ipsam fugiat dicta quaerat officiis.",
        subjectArea: ["Math", "Computers", "Chinese"],
        gradeLevels: ["College/University", "High School", "Middle School", "Elementary School"],
        certification:["English as A Second Language"],
        dateOfCertification: ["2008"],
        education: ["Economics", "Bachelor of Arts", "Swarthmore College", "2014"]
    }
    $scope.uploadFile = function() {
        var file = $scope.myFile;

        console.log('file is ');
        console.dir(file);

        var uploadUrl = "/api/users/docs/" + $scope.user._id;
        fileUpload.uploadFileToUrl(file, uploadUrl);
    };

    // if ($scope.user.completed) {
    //     $scope.fullprofile = true
    // } else {
    //     $scope.fullprofile = false
    // }
    $scope.fullprofile = true
    //form controlling
    $scope.form = {};
    $scope.update = function(userData) {
        $scope.form = angular.copy(userData);
    };
    $scope.formsValid = false;
    $scope.registerUser = function() {
        if ($scope.parentForm.$valid) {
            // Connect with the server
        }
        $scope.formsValid = $scope.parentForm.$valid;
    };

    $scope.registerFormScope = function(form, id) {
        $scope.parentForm['childForm' + id] = form;
        console.log(form);
    };

    $scope.validateChildForm = function(form, data) {
        // Reset the forms so they are no longer valid
        $scope.formsValid = false;
        var deferred = $q.defer();
        $timeout(function() {
            if (angular.isUndefined(data.amount)) {
                return deferred.reject(['amount']);
            }

            if ((data.amount < product.minAmount) || (data.amount > product.maxAmount)) {
                return deferred.reject(['amount']);
            }
            deferred.resolve();
        });

        return deferred.promise;

    }
});
