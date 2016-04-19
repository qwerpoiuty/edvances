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


    $scope.user = user;

    $scope.form = {};

    $scope.update = function(userData){
      $scope.form = angular.copy(userData);
    };

    $scope.uploadFile = function() {
        var file = $scope.myFile;

        console.log('file is ');
        console.dir(file);

        var uploadUrl = "/api/users/docs/" + $scope.user._id;
        fileUpload.uploadFileToUrl(file, uploadUrl);
    };

    //$scope.users = [
    //  {userData: {name: "Test User A"}},
    //];

    $scope.formsValid = false;

    $scope.registerUser = function () {
      if ($scope.parentForm.$valid) {
        // Connect with the server
      }
      $scope.formsValid = $scope.parentForm.$valid;
    };

    $scope.registerFormScope = function (form, id) {
      $scope.parentForm['childForm' + id] = form;
      console.log(form);
    };

    $scope.validateChildForm = function (form, data) {
      // Reset the forms so they are no longer valid
      $scope.formsValid = false;
      var deferred = $q.defer();

      $timeout(function () {
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
