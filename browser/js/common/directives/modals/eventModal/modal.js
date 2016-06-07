app.controller('ModalInstanceCtrl', function($scope, $modalInstance) {

    $scope.classData = {}

    $scope.ok = function() {

    };

    $scope.cancel = function() {
        $modalInstance.dismiss('cancel');
    };
});