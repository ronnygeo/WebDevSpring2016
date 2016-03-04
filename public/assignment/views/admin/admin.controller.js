/**
 * Created by ronnygeo on 2/14/16.
 */
(function(){
    'use strict';
    angular.module("FormBuilderApp")
        .controller("AdminController", AdminController);

    AdminController.$inject = ['$scope', 'UserService'];
    function AdminController($scope, UserService){
        $scope.user = {};
        //Event Handlers
        $scope.edit = edit;
        $scope.remove = remove;
        $scope.add = add;
        $scope.update = update;

        UserService.findAllUsers(render);
        function render(data){
            $scope.users = data;
        }

        function add() {
            UserService.createUser($scope.user, render);
            $scope.user = {};
        }

        function update() {}

        //Add to the edit boxes.
        function edit(index){
            $scope.user = $scope.users[index];
            $scope.user = {};
        }

        function remove(index){
            $scope.user = $scope.users[index];
            UserService.deleteUserById($scope.user._id, render)
            $scope.user = {};
        }
        }
})();