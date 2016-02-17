/**
 * Created by ronnygeo on 2/14/16.
 */
(function(){
    'use strict';
    angular.module('FormBuilderApp')
    .controller('SidebarController', ['$scope', '$location', function($scope, $location){
        $scope.$location = '$location';
    }])
})();