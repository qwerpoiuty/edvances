app.config(function($stateProvider) {
    $stateProvider.state('profiles', {
        url: '/profile/:id',
        templateUrl: 'js/profile/profile.html',
        controller: 'profileCtrl',
        resolve: {
            user: function(AuthService) {
                return AuthService.getLoggedInUser().then(function(user) {
                    return user
                })
            },
            person: function(dataFactory, $stateParams) {
                return dataFactory.getUserById($stateParams.id).then(function(person) {
                    return person
                })
            }
        },
        data: {
            authenticate: true
        }
    });

})

app.controller('profileCtrl', function($scope, dataFactory, user, fileUpload, $q, $timeout, person) {


    //determining who's looking at the profile and adjust view accordingly
    // $scope.admin = ($scope.person.powerlevel >= 3)
    $scope.person = person
    $scope.user = user
    $scope.viewing = false;
    if ($scope.user.id === $scope.person.id) {
        if ($scope.user.completed) {
            $scope.fullprofile = true
        } else {
            $scope.fullprofile = false
        }
    } else {
        $scope.fullprofile = true
        $scope.viewing = true
    }


    //documents and photo loading

    if ($scope.user.photo !== null) {
        var binary = '';
        var bytes = new Uint8Array($scope.user.photo.data);
        var len = bytes.byteLength;
        for (var i = 0; i < len; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        $scope.proPhoto = "data:image/png;base64," + window.btoa(binary)
    } else {
        $scope.proPhoto = "http://placekitten.com.s3.amazonaws.com/homepage-samples/200/286.jpg"
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

        $scope.edits[bool] = true
        for (var key in $scope.editObject[bool]) {
            $scope.editObject[bool][key] = $scope.user[key]
        }
    }

    $scope.save = function(bool) {
        if ($scope.user.id !== $scope.person.id) {
            alert('You can\'t do that')
            return
        }
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



    $scope.cancel = function(bool) {
        $scope.edits[bool] = false

    };


    $scope.uploadDocument = function() {
        console.dir($scope.document[0], $scope.documentName)
        // fileUpload.uploadDocument($scope.user, $scope.document[0], $scope.documentName)
    }

    $scope.submit = function(user) {
        user.email = $scope.user.email
        user.education = Object.keys(user.education).map(function(key) {
            return user.education[key]
        });
        user.grades = Object.keys(user.grades).map(function(key) {
            return user.grades[key]
        })
        dataFactory.updateUser(user).then(function(user) {
            $scope.person = user
            console.log($scope.person)
            $scope.fullprofile = true
        })
    }

    $scope.uploadPhoto = function() {
        fileUpload.uploadPhoto($scope.user, $scope.photo[0])
    }

    $scope.removeDoc = function(index) {
        $scope.user.documents.splice(index, 1)
        console.log($scope.user)
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