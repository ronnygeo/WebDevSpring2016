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

        vm.user = {};

        //Event Handlers
        vm.selectUser = selectUser;
        vm.removeUser = removeUser;
        vm.addUser = addUser;
        vm.updateUser = updateUser;

        UserService.findAllUsers().then(render);

        function render(data) {
            vm.users = [];
            vm.users = data.data;
            vm.user = {};
        }

        function addUser() {
            UserService.createUser(vm.user).then(function(data){
                vm.users.push(data.data);
            });
        }

        function updateUser() {
            // console.log(vm.user);
            UserService.updateUser(vm.user._id, vm.user).then(function(){
                vm.user = {};
            });
        }

        //Add to the edit boxes.
        function selectUser(index) {
            vm.user = vm.users[index];
        }

        function removeUser(index) {
            UserService.deleteUserById(vm.users[index]._id).then(render);
        }
        }
})();