/**
 * Created by ronnygeo on 2/14/16.
 */
(function(){
    'use strict';
    angular.module("FormBuilderApp")
        .controller("LoginController", LoginController);

    var LoginController = function(UserService, $scope){
        $scope.username = "";
        $scope.password = "";
        var user = UserService.findUserByCredentials($scope.username, $scope.password);
        if (user) {
            $rootScope.user = user;
            $location.url = '/profile';
        }
        };
})();