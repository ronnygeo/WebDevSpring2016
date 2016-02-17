/**
 * Created by ronnygeo on 2/16/16.
 */

var MainController = (function(){
    'use strict';
    angular.module("FormBuilderApp")
    .controller('MainController', ['$scope', '$location', function($scope, $location){
        $scope.$location = $location;
    }]);
})();