/**
 * Created by ronnygeo on 2/14/16.
 */
(function(){
    angular.module('FormBuilderApp')
        .controller('FieldController', FieldController);

    FieldController.$inject = ['$rootScope', '$scope', 'FieldService', 'FormService', '$routeParams', '$uibModal'];

    function FieldController($rootScope, $scope, FieldService, FormService, $routeParams, $uibModal) {
        formId = $routeParams.formId;
        FormService.findById(formId).then(function(data){
            $scope.model = data.data;
        });
        userId = $rootScope.user._id;
        $scope.model = {};
        $scope.model.fields = [];
        FieldService.getFieldsForForm(formId).then(function(data){
            // console.log(data);
            $scope.model.fields = data.data;
        });

        $scope.editField = editField;
        $scope.removeField = removeField;
        $scope.addField = addField;
        $scope.rearrange = rearrange;
        $scope.open = open;

        $scope.$watch($scope.model.fields, function() {
            for (var f of $scope.model.fields) {
                console.log(f);
                FieldService.updateField($scope.model._id, f._id, f).then(function(data){
                    f = data.data;
                })
            }
        }, true);


        $scope.sortableOptions = {
            handle: '.myHandle',
            update: function(e, ui) {
                rearrange();
            }
        };
        
        function editField(size, field) {
            // $dialog.dialog({}).open('modalContent.html');
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
            // console.log(field);
            var modalInstance = $uibModal.open({
                animation: $scope.animationsEnabled,
                controller: 'DialogController',
                templateUrl: './views/forms/dialogContent.html',
                size: size,
                resolve: {
                    info: function (){
                    return field;
                },
                    model: function(){
                        return $scope.model;
                    }
                }
            });

            modalInstance.result.then(function (optionsData){
                if (optionsData) {
                    options = [];
                    opt = optionsData.split('\n');
                    for (var o of opt){
                        data = o.split(':');
                        label = data[0];
                        value = data[1];
                        options.push({"label": label, "value": value});
                    }
                    field.options = options;
                }

                FieldService.rearrangeFields($scope.model._id, $scope.model.fields).then(function(data){
                    $scope.model.fields = data.data;
                })

            });
        }


        function removeField(field) {
            FieldService.deleteFieldFromForm(formId, field._id).then(function (data) {
                // console.log(data.data);
                $scope.model.fields = data.data;
            }, function (err) {console.log(err);});
        }
        
        function rearrange() {
            FieldService.rearrangeFields(formId, $scope.model.fields).then(function (data) {
                // console.log($scope.model.fields);
                $scope.model.fields = data.data;
            });
        }

        function addField(f) {
            if (f != null) {
                var fieldType = f.type.toLowerCase();
            } else {
                var fieldType = $scope.model.fieldType;
            }
            // console.log(fieldType);
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
            }, function (err) {console.log(err);});
        }
    }
})();