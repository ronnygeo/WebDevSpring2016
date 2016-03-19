/**
 * Created by ronnygeo on 2/14/16.
 */
(function () {
    'use strict';
    angular.module("FormBuilderApp")
        .controller("RegisterController", RegisterController);

    RegisterController.$inject = ['UserService', '$location', '$rootScope'];

    function RegisterController(UserService, $location, $rootScope) {
        var vm = this;

        vm.user = {};

        //Event Handlers
        vm.register = register;

        function register() {
            //var user = {username: vm.username, password: vm.password, email: vm.email};
            UserService.createUser(vm.user).then(render);
        }
        function render(data) {
        $rootScope.user = data.data;
        $location.url('/profile/');
        }
    }
})();