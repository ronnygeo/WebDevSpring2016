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

        function createFormForUser(userId, form, callback) {
            form._id = (new Date).getTime();
            form.userId = userId;
            forms.push(form);
            return callback(form);
        }

        function findAllFormsForUser(userId, callback) {
            var found = [];
            for (var f of forms) {
                if (f.userId === userId)
                    found.push(f);
            }
            return callback(found);
        }

        function deleteFormById(formId, callback) {
            for (i=0; i < forms.length; i++){
                if (forms[i]._id === formId) {
                    forms.splice(i, 1);
                    break;
                }
            }
            return callback(forms);
        }

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