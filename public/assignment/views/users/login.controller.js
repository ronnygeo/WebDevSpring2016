/**
 * Created by ronnygeo on 2/14/16.
 */
(function(){
    'use strict';
    angular.module("FormBuilderApp")
        .controller("LoginController", LoginController);

    LoginController.$inject = ['UserService','$location','$scope', '$rootScope'];

    function LoginController(UserService, $location, $scope, $rootScope){
        $scope.login =login;

        function login() {
            //console.log($scope.username+$scope.password);
            UserService.findUserByCredentials($scope.username, $scope.password, render);
    }

        function render(data){
            if (data !== null){
            $rootScope.user = data;
            $location.url('/profile/');
            }
            //console.log($rootScope.user);
        }

    }
})();