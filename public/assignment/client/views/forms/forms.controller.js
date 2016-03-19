/**
 * Created by ronnygeo on 2/14/16.
 */
(function () {
    'use strict';
    angular.module("FormBuilderApp")
        .controller("FormController", FormController);

    FormController.$inject = ['$rootScope','$scope','FormService', '$location'];

    function FormController($rootScope, $scope, FormService, $location) {
        $scope.form = {};

        //Event Handlers
        $scope.addForm = addForm;
        $scope.updateForm = updateForm;
        $scope.deleteForm = deleteForm;
        $scope.selectForm = selectForm;
        $scope.openField = openField;

        FormService.findAllFormsForUser($rootScope.user._id)
            .then(renderList);

        function selectForm(index) {
            $scope.form = $scope.forms[index];
        }

        function updateForm(form) {
            FormService.updateFormById(form._id, $scope.form)
                .then(function (){
                $scope.form = {};
            });
        }

        function addForm() {
            // console.log($scope.form);
            FormService.createFormForUser($rootScope.user._id, $scope.form)
                .then(function (data){

                    $scope.forms = [];
                    for (var d of data.data) {
                        if ($rootScope.user._id === d.userId){
                            $scope.forms.push(d);
                        }
                    }
                    $scope.form = {};
            });
        }

        function deleteForm(index) {
            FormService.deleteFormById($scope.forms[index]._id)
                .then(function (data){
                $scope.forms = [];
                for (var d of data.data){
                    if (d.userId === $rootScope.user._id)
                    $scope.forms.push(d);
                }
            });
        }

        function openField(form) {
            var id = form._id;
            $location.url('/form/'+id+'/fields');
        }

        function renderList(res) {
            //console.log(data);
            $scope.forms = res.data;
        }

    }

})();