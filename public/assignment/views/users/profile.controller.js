/**
 * Created by ronnygeo on 2/14/16.
 */
(function(){
    'use strict';
    angular.module("FormBuilderApp")
        .controller("ProfileController", ProfileController);

    var ProfileController = function($scope, UserService){
        $scope.user = $rootScope.user;
        //$scope.username = user.username;
        //$scope.password = user.password;
        //$scope.firstname = user.firstname;
        //$scope.lastname = user.lastname;
        //$scope.email = user.email;

        $scope.update = function () {
            UserService.updateUser($scope.user);
        }
    };
})();