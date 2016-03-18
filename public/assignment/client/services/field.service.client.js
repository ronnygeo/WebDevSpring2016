/**
 * Created by ronnygeo on 3/18/16.
 */

(function(){
    return {
        createFieldForForm: createFieldForForm,
        getFieldsForForm: getFieldsForForm,
        getFieldForForm: getFieldForForm,
        deleteFieldFromForm: deleteFieldFromForm,
        updateField: updateField
}

    //Use $http.post() to create a new field for form whose id is formId. Pass the field object as part of the post. Post to URL: /api/assignment/form/:formId/field
    function createFieldForForm(formId, field) {
        return $http.post('/api/assignment/form/'+formId+'/field', field);
    }

    //Use $http.get() to retrieve fields belonging to a form object whose id is equal to the formId. Use URL /api/assignment/form/:formId/field
    function getFieldsForForm(formId) {
        return $http.get('/api/assignment/form/'+formId+'/field');
    }

    //Use $http.get() to retrieve a field object whose id is equal to the fieldId and belonging to a form object whose id is equal to the formId. Use URL /api/assignment/form/:formId/field/:fieldId
    function getFieldForForm(formId, fieldId) {
        return $http.get('/api/assignment/form/'+formId+'/field/'+fieldId);
    }

    //Use $http.delete() to remove a field object whose id is equal to the fieldId and belonging to a form object whose id is equal to the formId. Use URL /api/assignment/form/:formId/field/:fieldId
    function deleteFieldFromForm(formId, fieldId) {
        return $http.delete('/api/assignment/form/'+formId+'/field/'+fieldId);
    }

    //Use $http.put() to update a field object whose id is equal to the fieldId and belonging to a form object whose id is equal to the formId so that its properties are the same as the property values of the field object parameter. Use URL: /api/assignment/form/:formId/field/:fieldId
    function updateField(formId, fieldId, field) {
        return $http.put('/api/assignment/form/'+formId+'/field/'+fieldId, field);
    }

})();