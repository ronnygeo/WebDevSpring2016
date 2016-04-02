/**
 * Created by ronnygeo on 2/14/16.
 */
(function () {
    'use strict';
    angular.module("FormBuilderApp")
        .controller("FormController", FormController);

    FormController.$inject = ['$rootScope','FormService', '$location'];

    function FormController($rootScope, FormService, $location) {
        var vm = this;
        vm.form = {};

        //Event Handlers
        vm.addForm = addForm;
        vm.deleteForm = deleteForm;
        vm.selectForm = selectForm;
        vm.openField = openField;
        vm.updateForm = updateForm;

        FormService.findAllFormsForUser($rootScope.user._id)
            .then(renderList);

        function selectForm(index) {
            vm.form = vm.forms[index];
        }

        function updateForm(form) {
            FormService.updateFormById(form._id, vm.form)
                .then(function (){
                    vm.form = {};
            });
        }

        function addForm() {
            FormService.createFormForUser($rootScope.user._id, vm.form)
                .then(function (data){
                    // console.log(data);
                    vm.forms.push(data.data);
                    vm.form = {};
            });
        }

        function deleteForm(index) {
            FormService.deleteFormById(vm.forms[index]._id)
                .then(function (){
                    vm.forms.splice(index, 1);
            });
        }

        function openField(form) {
            var id = form._id;
            $location.url('/form/'+id+'/fields');
        }

        function renderList(res) {
            //console.log(data);
            vm.forms = res.data;
        }

    }

})();