/**
 * Created by ronnygeo on 2/14/16.
 */
(function () {
    'use strict';
    angular.module('FormBuilderApp')
        .controller('HeaderController', HeaderController);

    HeaderController.$inject = ['$scope', '$rootScope', '$location'];
    function HeaderController($scope, $rootScope, $location) {
        //Event Handlers
        $scope.logout = logout;
        $scope.isActive = isActive;
        $scope.$location = $location;

        function isActive(loc) {
            if ($location.url == loc)
                return 'active';
        }

        function logout() {
            delete $rootScope.user;
            //console.log($rootScope.user);
            $location.url('/');
        }

        }

})();