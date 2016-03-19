/**
 * Created by ronnygeo on 3/18/16.
 */
(function(){
    angular.module("FormBuilderApp")
        .directive('editDialog', editDialog);

    function editDialog() {
        return {
            restrict: 'E',
            scope: {
                info: '='
            },
            templateUrl: "./directives/edit-dialog.html"
        }
    }
})();