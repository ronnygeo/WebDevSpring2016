/**
 * Created by ronnygeo on 2/14/16.
 */
(function(){
    'use strict';
    angular.module("FormBuilderApp")
        .controller("RegisterController", RegisterController);

    var RegisterController = function (UserService, $location, $scope) {
        $scope.username = "";
        $scope.password = "";
        $scope.verifyPassword = "";
        $scope.email = "";

        $scope.register = function () {
            var user = {"username": $scope.username, "password": $scope.password, "email": $scope.email};
            UserService.createUser(user);
            $rootScope = UserService.findUserByCredentials($scope.username, $scope.password);
        };
        $location.url = '/profile';
        };
})();