/**
 * Created by ronnygeo on 2/16/16.
 */

(function () {
    'use strict';
    angular.module("FormBuilderApp")
    .controller('MainController', MainController);

    MainController.$inject = ['$scope', '$location'];

    function MainController($scope, $location){
        $scope.$location = $location;

        $scope.isActive = isActive;
        $scope.isLocation = isLocation;

        function isLocation(loc) {
            return loc === $location.url;
        }
        function isActive(loc) {
            if ($location.url == loc)
                return 'active';
        }
    }
})();