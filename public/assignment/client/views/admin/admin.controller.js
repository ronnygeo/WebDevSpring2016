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

        //Event Handlers
        vm.selectUser = selectUser;
        vm.removeUser = removeUser;
        vm.addUser = addUser;
        vm.updateUser = updateUser;

        UserService.adminFindAllUsers().then(render, function (err) {console.log(err);});

        function render(data) {
            vm.users = data.data;
            vm.user = {};
        }

        function addUser() {
            UserService.adminCreateUser(vm.user).then(function(data){
                vm.users.push(data.data);
                vm.user = {};
            });
        }

        function updateUser() {
            console.log(vm.user);
            UserService.adminUpdateUser(vm.user._id, vm.user).then(function(){
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
        }
})();