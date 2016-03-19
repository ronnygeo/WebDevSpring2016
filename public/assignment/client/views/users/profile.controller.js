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

        vm.update = function () {
            //console.log($scope.user);
            UserService.updateUser(vm.user._id, vm.user).
                then(render);
        };

        function render(data) {
            // console.log(data.roles);
        }
    }
})();