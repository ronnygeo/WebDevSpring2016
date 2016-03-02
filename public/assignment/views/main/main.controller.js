/**
 * Created by ronnygeo on 2/16/16.
 */

var MainController = (function(){
    'use strict';
    angular.module("FormBuilderApp")
    .controller('MainController', MainController);

    var MainController = function($scope, $location){
        $scope.$location = $location;
        $scope.isLocation = function(loc){
            return loc === $location.url;
        };
    };
})();