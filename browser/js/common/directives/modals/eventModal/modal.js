app.controller('ModalInstanceCtrl', function($scope, $modalInstance) {

    $scope.classData = {}

    $scope.ok = function() {
        $modalInstance.close($scope.classData);
    };

    $scope.cancel = function() {
        $modalInstance.dismiss('cancel');
    };
});



