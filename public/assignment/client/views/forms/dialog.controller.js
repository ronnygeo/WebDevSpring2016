/**
 * Created by ronnygeo on 3/19/16.
 */
(function (){
    angular.module('FormBuilderApp')
        .controller('DialogController', DialogController);

    DialogController.$inject = ['$rootScope', '$scope', 'FieldService'];

    function DialogController($rootScope, $scope, FieldService){
        console.log($scope);
    }

})();