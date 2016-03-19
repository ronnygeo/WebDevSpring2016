/**
 * Created by ronnygeo on 2/14/16.
 */
(function () {
    'use strict';
    angular.module("FormBuilderApp")
        .controller("LoginController", LoginController);

    LoginController.$inject = ['UserService','$location', '$rootScope'];

    function LoginController(UserService, $location, $rootScope) {
        var vm = this;
        vm.login =login;

        function login() {
            //console.log($scope.username+$scope.password);
            UserService.findUserByCredentials(vm.username, vm.password).then(render);
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