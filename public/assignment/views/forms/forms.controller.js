/**
 * Created by ronnygeo on 2/14/16.
 */
(function(){
    'use strict';
    angular.module("FormBuilderApp")
        .controller("FormController", FormController);

    FormController.$inject = ['$rootScope','$scope','FormService'];

    function FormController($rootScope, $scope, FormService){
        $scope.form = {};

        //Event Handlers
        $scope.addForm = addForm;
        $scope.updateForm = updateForm;
        $scope.deleteForm = deleteForm;
        $scope.selectForm = selectForm;
        FormService.findAllFormsForUser($rootScope.user._id, renderList);

        function selectForm(index){
            $scope.form = $scope.forms[index];
        }

        function updateForm(){
            FormService.updateFormById($scope.form._id, $scope.form, function (data){
                $scope.form = {};
            });
        }

        function addForm(){
            FormService.createFormForUser($rootScope.user._id, $scope.form, function (data){
                $scope.forms.push(data);
                $scope.form = {};
            });
        }

        function deleteForm(index){
            FormService.deleteFormbyId($scope.forms[index]._id, function (data){
                $scope.forms = data;
            });
        }

        function renderList(data){
            console.log($scope.forms);
            $scope.forms = [];
            $scope.forms = data;
        }

        function clearInput(){
            $scope.form = {};
        }

    }

})();