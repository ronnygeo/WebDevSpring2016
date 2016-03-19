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
                // scope.field = function() {
                //     return info;
                // }
                // scope.removeField = function (field) {
                //     console.log(scope.$parent);
                //     scope.$parent.$parent.removeField(field);
                // };
                //
                // scope.addField = function (fieldType) {
                //     scope.$parent.$parent.addField(fieldType);
                // };
                //
                // scope.editField = function (size, field) {
                //     var modal = $uibModal.open({
                //         //animation: $scope.animationsEnabled,
                //         // controller: 'DialogController',
                //         templateUrl: './views/forms/dialogContent.html',
                //         size: size,
                //         resolve: {
                //             info: function (){
                //                 return field;
                //             }
                //         },
                //         // scope: $scope
                //     });
                // };
        }
        }
    }
})();