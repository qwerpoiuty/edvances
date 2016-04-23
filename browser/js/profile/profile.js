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
    $scope.user = user
    if ($scope.user.completed) {
        $scope.fullprofile = true
    } else {
        $scope.fullprofile = false
    }

    //editing section
    $scope.editObject = {
        about: {
            firstName: "",
            lastName: "",
            title: "",
            statement: ""
        },
        preferences: {
            area: "",
            grades: []
        },
        certification: {
            education: [],

        }
    }
    $scope.edits = {
        about: false,
        preferences: false,
        certification: false
    };
    $scope.edit = function(bool) {
        console.log($scope.user)
        $scope.edits[bool] = true
        for (var key in $scope.editObject[bool]) {
            $scope.editObject[bool][key] = $scope.user[key]
        }
    }

    $scope.save = function(bool) {
        for (var key in $scope.editObject[bool]) {

            if (Array.isArray($scope.editObject[bool][key])) {
                for (var i = 0; i < $scope.editObject[bool][key].length; i++) {
                    if ($scope.editObject[bool][key][i] === "") {
                        return alert(key + " is required")
                    }
                }

            }

            $scope.user[key] = $scope.editObject[bool][key]
        }
        $scope.submit($scope.user)
        $scope.edits[bool] = false
    }

    $scope.drawingProfile = function(image) {
        var binary = '';
        var bytes = new Uint8Array(image.data);
        var len = bytes.byteLength;
        for (var i = 0; i < len; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        $scope.profileSrc = "data:image/png;base64," + window.btoa(binary)
        // document.getElementById('profilePic').src = "data:image/png;base64," + src;

    }
   // $scope.drawingProfile($scope.user.photo)
    $scope.cancel = function(bool) {
        $scope.edits[bool] = false

    };

   // $scope.uploadPhoto = function() {
   //     console.dir($scope.photo);
   //     fileUpload.uploadPhoto($scope.user, $scope.photo[0])
   // };

    $scope.uploadDocument = function() {
        console.dir($scope.document[0])
        fileUpload.uploadDocument($scope.user, $scope.document[0])
    }

    console.log($scope.user)
    $scope.submit = function(user) {
        user.email = $scope.user.email
        //  $scope.uploadPhoto()
        // console.log(user.photo)
        console.log(user);
         user.education = Object.keys(user.education).map(function(key) {
             return user.education[key]
         });
         user.grades = Object.keys(user.grades).map(function(key) {
             return user.grades[key]
         })
         dataFactory.updateUser(user)
    }





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
