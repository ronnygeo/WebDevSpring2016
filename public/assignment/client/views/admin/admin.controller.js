/**
 * Created by ronnygeo on 2/14/16.
 */
(function () {
    'use strict';
    angular.module("FormBuilderApp")
        .controller("AdminController", AdminController);

    AdminController.$inject = ['$scope', 'UserService'];
    function AdminController($scope, UserService) {
        $scope.user = {};

        //Event Handlers
        $scope.selectUser = selectUser;
        $scope.removeUser = removeUser;
        $scope.addUser = addUser;
        $scope.updateUser = updateUser;

        UserService.findAllUsers(render);

        function render(data) {
            $scope.users = [];
            $scope.users = data;
            $scope.user = {};
        }

        function addUser() {
            UserService.createUser($scope.user, function(data){
               $scope.user = {};
            });
        }

        function updateUser() {
            UserService.updateUser($scope.user._id, $scope.user, function(){
                $scope.user = {};
            })
        }

        //Add to the edit boxes.
        function selectUser(index) {
            $scope.user = $scope.users[index];
        }

        function removeUser(index) {
            UserService.deleteUserById($scope.users[index]._id, render);
        }
        }
})();