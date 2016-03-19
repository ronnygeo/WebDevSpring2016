/**
 * Created by ronnygeo on 2/14/16.
 */
(function(){
    angular.module('FormBuilderApp')
        .controller('FieldController', FieldController);

    FieldController.$inject = ['$rootScope', '$scope', 'FieldService', '$routeParams'];

    function FieldController($rootScope, $scope, FieldService, $routeParams) {
        formId = $routeParams.formId;
        userId = $rootScope.user._id;
        $scope.model = {};
        FieldService.getFieldsForForm(formId).then(function(data){
            // console.log(data);
            $scope.model.fields = data.data;
        });

        $scope.editField = editField;
        $scope.removeField = removeField;
        $scope.addField = addField;

        function editField() {
            // If the field type is a Single Line of Text the popup should allow users to enter:
            //     Label
            // Placeholder
            // If the field type is a Multi Line Text field, the popup should allow users to enter:
            //     Label
            // Placeholder
            // If the field type is a Dropdown field, the popup should allow users to enter:
            //     Label
            // Options
            // These can be entered in a textarea, one option per line
            // You can use the following format: LABEL:VALUE
            // If the field type is a Checkbox field, the popup should allow users to enter:
            //     Label
            // Options
            // These can be entered in a textarea, one option per line
            // You can use the following format: LABEL:VALUE

        }

        function removeField(field) {
            FieldService.deleteFieldFromForm(formId, field._id).then(function (data) {
                $scope.model.fields = data.data;
            });
        }

        function addField() {
            var fieldType = $scope.model.fieldType;
            if (fieldType === "textarea") {
                var field = {"_id": null, "label": "New Text Field", "type": "TEXTAREA", "placeholder": "New Field"};
            }
            else if (fieldType === "date") {
                field = {"_id": null, "label": "New Date Field", "type": "DATE"};
            }
            else if (fieldType === "options") {
                field = {"_id": null, "label": "New Dropdown", "type": "OPTIONS", "options": [
                {"label": "Option 1", "value": "OPTION_1"},
                {"label": "Option 2", "value": "OPTION_2"},
                {"label": "Option 3", "value": "OPTION_3"}
            ]};
            } else if (fieldType === "checkboxes") {
            field = {"_id": null, "label": "New Checkboxes", "type": "CHECKBOXES", "options": [
                {"label": "Option A", "value": "OPTION_A"},
                {"label": "Option B", "value": "OPTION_B"},
                {"label": "Option C", "value": "OPTION_C"}
            ]};
            } else if (fieldType === "radios") {
            // Radio Buttons Field
                field = {"_id": null, "label": "New Radio Buttons", "type": "RADIOS", "options": [
                {"label": "Option X", "value": "OPTION_X"},
                {"label": "Option Y", "value": "OPTION_Y"},
                {"label": "Option Z", "value": "OPTION_Z"}
            ]};
            } else {
                //any other option create a text field.
                field = {"_id": null, "label": "New Text Field", "type": "TEXT", "placeholder": "New Field"};
            }

            FieldService.createFieldForForm(formId, field).then(function (data) {
                $scope.model.fields = data.data;
            });
        }
    }
})();