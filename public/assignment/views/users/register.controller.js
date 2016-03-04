/**
 * Created by ronnygeo on 2/14/16.
 */
(function(){
    'use strict';
    angular.module("FormBuilderApp")
        .controller("RegisterController", RegisterController);

    RegisterController.$inject = ['UserService', '$location', '$rootScope', '$scope'];

    function RegisterController(UserService, $location, $rootScope, $scope) {
        $scope.user = {};

        //Event Handlers
        $scope.register = register;

        function register() {
            //var user = {username: $scope.username, password: $scope.password, email: $scope.email};
            UserService.createUser($scope.user, render);
        }
        function render(data){
        $rootScope.user = data;
        $location.url('/profile/');
        }
    }
})();