'use strict';

app.directive('sidenav', function() {
    return {
        templateUrl: 'js/common/directives/dashy/sidenav/sidenav.html',
        restrict: 'E',
        replace: true,
        controller: function($scope, $timeout, $rootScope, AuthService, AUTH_EVENTS) {
            var setUser = function() {
                AuthService.getLoggedInUser().then(function(user) {
                    $scope.user = user;
                });
            };
            var removeUser = function() {
                $scope.user = null;
            };
            $scope.tabActive = [];

            $scope.$watch('tabActive', function() {

                if ($scope.perfectSCrollbarObj) {
                    setTimeout(function() {
                        $scope.perfectSCrollbarObj.perfectScrollbar('update');
                    }, 100);
                }
            }, true);

            $scope.menuToggle = function() {
                $('body').toggleClass('menu-hidden');
                $scope.tabActive = [1];
                console.log($('body').hasClass('menu-hidden'));
                if ($('body').hasClass('menu-hidden') == 1) {
                    $rootScope.$broadcast('resize');
                    $scope.perfectSCrollbarObj.perfectScrollbar('destroy');
                    $(document).click(function(e) {


                        if (!$(".sidenav-sub-menu").is(e.target)) {
                            $(".sidenav-sub-menu").hide();
                        }
                    });

                } else {
                    $timeout(function() {
                        $rootScope.$broadcast('resize');
                        $scope.perfectSCrollbarObj.perfectScrollbar();
                    }, 100);
                    $(document).click(function(e) {


                        if (!$(".sidenav-sub-menu").is(e.target)) {
                            $(".sidenav-sub-menu").show();
                        }
                    });
                }


            }
            setUser();
            $rootScope.$on(AUTH_EVENTS.loginSuccess, setUser);
            $rootScope.$on(AUTH_EVENTS.logoutSuccess, removeUser);
            $rootScope.$on(AUTH_EVENTS.sessionTimeout, removeUser);

        },
        link: function(scope, el, attrs) {

            setTimeout(function() {

                scope.perfectSCrollbarObj = el.find('.tab-content').perfectScrollbar();

            }, 0);


        }
    }
});