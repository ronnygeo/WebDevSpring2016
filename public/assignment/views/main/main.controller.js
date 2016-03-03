/**
 * Created by ronnygeo on 2/16/16.
 */

(function(){
    'use strict';
    angular.module("FormBuilderApp")
    .controller('MainController', ['$scope', '$location', MainController]);

    var MainController = function($scope, $location){
        $scope.$location = $location;
        $scope.isLocation = function(loc){
            return loc === $location.url;
        };
    };
})();