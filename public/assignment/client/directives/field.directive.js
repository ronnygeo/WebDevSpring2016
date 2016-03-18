/**
 * Created by ronnygeo on 3/18/16.
 */
(function(){
    angular.module("FormBuilderApp")
        .directive('formField', formField);

    function formField() {
        return {
            restrict: 'E',
            scope: {
                info: '='
            },
            templateUrl: "./form-field.html"
        }
    }
})();