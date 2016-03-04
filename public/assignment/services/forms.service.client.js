/**
 * Created by ronnygeo on 3/4/16.
 */

(function(){
    angular.module("FormBuilderApp")
        .factory('FormService', FormService);

    function FormService() {
        var forms = [];

        forms = [
            {"_id": "000", "title": "Contacts", "userId": 123},
            {"_id": "010", "title": "ToDo",     "userId": 123},
            {"_id": "020", "title": "CDs",      "userId": 234},
            {"_id": "020", "title": "Textbooks", "userId": 234}
        ];


        var api = {
            createFormForUser: createFormForUser,
            findAllFormsForUser: findAllFormsForUser,
            deleteFormbyId: deleteFormById,
            updateFormById: updateFormById
    };
        return api;

        //Accepts parameters user id, form object, and callback function
        //Adds property called _id with unique id. You can use (new Date).getTime() to create a unique number
        //Adds property called userId equal to user id parameter
        //Adds new form to local array of forms
        //Calls back with new form

            function createFormForUser(userId, form, callback) {
            form._id = (new Date).getTime();
            form.userId = userId;
            forms.push(form);
            return callback(form);
        }

        //Accepts parameters user id, form object, and callback function
        //Adds property called _id with unique id. You can use (new Date).getTime() to create a unique number
        //Adds property called userId equal to user id parameter
        //Adds new form to local array of forms
        //Calls back with new form

            function findAllFormsForUser(userId, callback) {
            var found = [];
            for (var f of forms) {
                if (f.userId === userId)
                    found.push(f);
            }
            return callback(found);
        }

        //Accepts parameter form id and callback function
        //Iterates over array of forms looking for form whose id is form id parameter
        //If found, removes form from current array of forms
        //Calls back with remaining array of forms

        function deleteFormById(formId, callback) {
            for (var i=0; i < forms.length; i++){
                if (forms[i]._id === formId) {
                    forms.splice(i, 1);
                    break;
                }
            }
            return callback(forms);
        }

        //Accepts parameter form id, new form object, and callback function
        //Iterates over array of forms looking for form whose id is form id parameter
        //If found, updates form object with new form values
        //Calls back with update form

        function updateFormById(formId, newForm, callback) {
                for (var i=0; i < forms.length; i++){
                    if (forms[i]._id === formId){
                        newForm._id = formId;
                        forms[i] = newForm;
                    }
                }
            return callback(newForm);
        }
    }
})();