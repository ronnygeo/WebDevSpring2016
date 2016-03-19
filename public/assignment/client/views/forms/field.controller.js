/**
 * Created by ronnygeo on 2/14/16.
 */
(function(){
    angular.module('FormBuilderApp')
        .controller('FieldController', FieldController);

    FieldController.$inject = ['$rootScope','FieldService', 'FormService', '$routeParams', '$uibModal'];

    function FieldController($rootScope, FieldService, FormService, $routeParams, $uibModal) {
        var vm = this;
        formId = $routeParams.formId;
        FormService.findById(formId).then(function(data){
            vm.model = data.data;
        });
        userId = $rootScope.user._id;
        vm.model = {};
        vm.model.fields = [];
        FieldService.getFieldsForForm(formId).then(function(data){
            // console.log(data);
            vm.model.fields = data.data;
        });

        vm.editField = editField;
        vm.removeField = removeField;
        vm.addField = addField;
        vm.rearrange = rearrange;
        vm.open = open;
        
        // vm.$watch(vm.model.fields, function() {
        //     for (var f of vm.model.fields) {
        //         console.log(f);
        //         FieldService.updateField($vm.model._id, f._id, f).then(function(data){
        //             f = data.data;
        //         })
        //     }
        // }, true);


        vm.sortableOptions = {
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
                animation: vm.animationsEnabled,
                controller: 'DialogController',
                controllerAs: 'dc',
                templateUrl: './views/forms/dialogContent.html',
                size: size,
                resolve: {
                    info: function (){
                    return field;
                }
                    // model: function(){
                    //     return vm.model;
                    // }
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

                FieldService.rearrangeFields(vm.model._id, vm.model.fields).then(function(data){
                    vm.model.fields = data.data;
                })

            });
        }


        function removeField(field) {
            FieldService.deleteFieldFromForm(formId, field._id).then(function (data) {
                vm.model.fields = data.data;
            }, function (err) {console.log(err);});
        }
        
        function rearrange() {
            // console.log("Rearrange");
            FieldService.rearrangeFields(formId, vm.model.fields).then(function (data) {
                // console.log(data);
                    vm.model.fields = data.data;
            });
        }

        function addField(f) {
            if (f != null) {
                var fieldType = f.type.toLowerCase();
            } else {
                var fieldType = vm.model.fieldType;
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
                vm.model.fields = data.data;
            }, function (err) {console.log(err);});
        }
    }
})();