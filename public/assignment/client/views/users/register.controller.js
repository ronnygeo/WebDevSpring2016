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
            
            vm.user

            if(vm.user.password != vm.verifyPassword || !vm.user.password || !vm.verifyPassword)
            {
                $scope.error = "Your passwords don't match";
            }
            else {
                UserService.register(vm.user).then(render);
            }
        }
        function render(data) {
        $rootScope.user = data.data;
        $location.url('/profile/');
        }
    }
})();