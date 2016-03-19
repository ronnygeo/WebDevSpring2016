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
            templateUrl: "./directives/form-field.html",
            link: function (scope, element, attrs) {
                // scope.$apply();
                scope.removeField = function (field) {
                    // console.log(scope.$parent.$parent);
                    scope.$parent.$parent.removeField(field);
                }
        }
        }
    }
})();