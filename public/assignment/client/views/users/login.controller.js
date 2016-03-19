/**
 * Created by ronnygeo on 2/14/16.
 */
(function () {
    'use strict';
    angular.module("FormBuilderApp")
        .controller("LoginController", LoginController);

    LoginController.$inject = ['UserService','$location','$scope', '$rootScope'];

    function LoginController(UserService, $location, $scope, $rootScope) {
        $scope.login =login;

        function login() {
            //console.log($scope.username+$scope.password);
            UserService.findUserByCredentials($scope.username, $scope.password).then(render);
    }

        function render(res) {
            if (res.data){
            $rootScope.user = res.data;
            $location.url('/profile/');
            }
            else {
                $('#login-alert').show();
            }
            //console.log($rootScope.user);
        }

    }
})();