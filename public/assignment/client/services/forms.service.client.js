/**
 * Created by ronnygeo on 3/4/16.
 */

(function(){
    'use strict';
    angular.module("FormBuilderApp")
        .factory('FormService', FormService);

    function FormService() {
        var api = {
            createFormForUser: createFormForUser,
            findAllFormsForUser: findAllFormsForUser,
            deleteFormById: deleteFormById,
            updateFormById: updateFormById
        };
        return api;

        //Accepts parameters user id, form object, and callback function
        //Adds property called _id with unique id. You can use (new Date).getTime() to create a unique number
        //Adds property called userId equal to user id parameter
        //Adds new form to local array of forms
        //Calls back with new form
        function createFormForUser(userId, form) {
            return $http.post('/api/assignment/user/'+userId+'/form', form);
        }

        //Accepts parameters user id, form object, and callback function
        //Adds property called _id with unique id. You can use (new Date).getTime() to create a unique number
        //Adds property called userId equal to user id parameter
        //Adds new form to local array of forms
        //Calls back with new form
        function findAllFormsForUser(userId) {
            return $http.get('/api/assignment/user/'+userId+'/form');
        }

        //Accepts parameter form id and callback function
        //Iterates over array of forms looking for form whose id is form id parameter
        //If found, removes form from current array of forms
        //Calls back with remaining array of forms
        function deleteFormById(formId) {
            return $http.delete('/api/assignment/form/'+formId);
        }
        //Accepts parameter form id, new form object, and callback function
        //Iterates over array of forms looking for form whose id is form id parameter
        //If found, updates form object with new form values
        //Calls back with update form

        function updateFormById(formId, newForm) {
            return $http.get('/api/assignment/form/'+formId, newForm);
        }
    }
})();