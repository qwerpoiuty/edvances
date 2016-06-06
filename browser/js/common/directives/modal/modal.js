app.controller('ModalInstanceCtrl', function ($scope, $modalInstance) {

    $scope.selected = {

    };

    $scope.ok = function () {

    };

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
});
