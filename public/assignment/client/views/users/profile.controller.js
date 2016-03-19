/**
 * Created by ronnygeo on 2/14/16.
 */
(function () {
    'use strict';
    angular.module("FormBuilderApp")
        .controller("ProfileController", ProfileController);

    ProfileController.$inject = ['$scope', '$rootScope', 'UserService'];

    function ProfileController($scope, $rootScope, UserService) {
        $scope.user = $rootScope.user;

        $scope.update = function () {
            //console.log($scope.user);
            UserService.updateUser($scope.user._id, $scope.user).
                then(render);
        };

        function render(data) {
            // console.log(data.roles);
        }
    }
})();