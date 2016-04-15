/**
 * Created by ronnygeo on 2/14/16.
 */
(function () {
    'use strict';
    angular.module("FormBuilderApp")
        .controller("AdminController", AdminController);

    AdminController.$inject = ['UserService'];
    function AdminController(UserService) {
        var vm = this;
        vm.users = [];
        vm.user = {};

        vm.predicate = '';
        vm.reverse = false;

        //Event Handlers
        vm.selectUser = selectUser;
        vm.removeUser = removeUser;
        vm.addUser = addUser;
        vm.updateUser = updateUser;
        vm.order = order;

        function order(predicate) {
            vm.reverse = (vm.predicate === predicate) ? !vm.reverse : false;
            vm.predicate = predicate;
        };

        UserService.adminFindAllUsers().then(render, function (err) {console.log(err);});

        function render(data) {
            vm.users = data.data;
            vm.user = {};
        }

        function addUser() {
            vm.user.roles = convertRoles(vm.user.roles);
            UserService.adminCreateUser(vm.user).then(function(data){
                vm.users.push(data.data);
                vm.user = {};
            });
        }

        function updateUser() {
            vm.user.roles = convertRoles(vm.user.roles);

            UserService.adminUpdateUser(vm.user._id, vm.user).then(function(data){
                //console.log(data.data);
                vm.user = {};
            });
        }

        //Add to the edit boxes.
        function selectUser(index) {
            vm.user = vm.users[index];
        }

        function removeUser(index) {
            UserService.adminDeleteUserById(vm.users[index]._id).then(function () {
                vm.users.splice(index, 1);
            });
        }

        function convertRoles(a) {
            return a.split(",");
        }
        }
})();