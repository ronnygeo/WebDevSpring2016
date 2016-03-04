/**
 * Created by ronnygeo on 2/16/16.
 */

(function(){
    'use strict';
    angular.module("FormBuilderApp")
    .controller('MainController', MainController);

    MainController.$inject = ['$scope', '$location'];
    function MainController($scope, $location){
        $scope.$location = $location;
        $scope.isLocation = function(loc){
            return loc === $location.url;
        };
        $scope.isActive = function(loc){
            if ($location.url == loc)
                return 'active';
        };
    }
})();