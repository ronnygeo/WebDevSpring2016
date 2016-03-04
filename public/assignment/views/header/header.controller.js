/**
 * Created by ronnygeo on 2/14/16.
 */
(function(){
    'use strict';
    angular.module('FormBuilderApp')
        .controller('HeaderController', HeaderController);

    function HeaderController($scope, $location){
        $scope.$location = $location;
        $scope.isActive = function(loc){
            if ($location.url == loc)
                return 'active';
        };

        };

})();