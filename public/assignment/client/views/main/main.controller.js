/**
 * Created by ronnygeo on 2/16/16.
 */

(function () {
    'use strict';
    angular.module("FormBuilderApp")
    .controller('MainController', MainController);

    MainController.$inject = ['$location', '$rootScope'];

    function MainController($location, $rootScope){
        var vm = this;
        vm.$location = $location;
        vm.logout = logout;
        vm.isActive = isActive;
        vm.isLocation = isLocation;

        function isLocation(loc) {
            return loc === $location.url;
        }

        function isActive(loc) {
            if ($location.url == loc)
                return 'active';
        }

        function logout() {
            delete $rootScope.user;
            //console.log($rootScope.user);
            $location.url('/');
        }
    }
})();