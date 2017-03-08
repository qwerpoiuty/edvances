app.config(function($stateProvider) {
    $stateProvider.state('edit', {
        url: '/edit',
        templateUrl: 'js/profile/editProfile.html',
        controller: 'editProfileCtrl'
    });
});

app.controller('editProfileCtrl', function($scope, $sce, $uibModal) {
    $scope.openBrowse = function(evt, tabSelection) {
            console.log('hello')
                // Declare all variables
            var i, tabcontent, tablinks;
            // Get all elements with class="tabcontent" and hide them
            tabcontent = document.getElementsByClassName("tab-pane");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }

            // Get all elements with class="tablinks" and remove the class "active"
            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }
            // Show the current tab, and add an "active" class to the link that opened the tab
            document.getElementById(tabSelection).style.display = "block";
            evt.currentTarget.className += " active";
            $scope.tables = null
        }
        //detailed view transition

    $scope.detailedView = function(tableId) {
        $state.go('detailed', {
            tableId: tableId
        })
    }
});