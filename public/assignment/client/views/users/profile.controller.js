/**
 * Created by ronnygeo on 2/14/16.
 */
(function () {
    'use strict';
    angular.module("FormBuilderApp")
        .controller("ProfileController", ProfileController);

    ProfileController.$inject = ['$rootScope', 'UserService'];

    function ProfileController($rootScope, UserService) {
        var vm = this;

        vm.user = $rootScope.user;
        vm.update = update;
        // console.log("in scope: ", vm.user);

        function update() {
            //console.log($scope.user);
            // console.log(vm.user.emails);
            if (vm.user.emails) {
                vm.user.emails = vm.user.emails.split(',');
            }

            if (vm.user.phones !== undefined) {
                vm.user.phones = vm.user.phones.split(',');
            }
            UserService.updateUser(vm.user._id, vm.user).
                then(render);
        };

        function render(data) {
            $rootScope.user = vm.user;
            // console.log("returned:", data);
            // console.log(data.roles);
        }
    }
})();