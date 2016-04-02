module.exports = function (app, fieldModel) {

    // GET /api/assignment/form/:formId/field
    // returns an array of fields belonging to a form object whose id is equal to the formId path parameter
    app.get('/api/assignment/form/:formId/field', getFormFields);

    // GET /api/assignment/form/:formId/field/:fieldId
    // returns a field object whose id is equal to the fieldId path parameter and belonging to a form object whose id is equal to the formId path parameter
    app.get('/api/assignment/form/:formId/field/:fieldId', getFormFieldById);

    // DELETE /api/assignment/form/:formId/field/:fieldId
    // removes a field object whose id is equal to the fieldId path parameter and belonging to a form object whose id is equal to the formId path parameter
    app.delete('/api/assignment/form/:formId/field/:fieldId', deleteFormField);

    // POST /api/assignment/form/:formId/field
    // creates a new field whose properties are the same as the field object embedded in the request's body and the field belongs to a form whose id is equal to the formId path parameter. The field object's id is initially null since it is a new record. The id of the new form field should be set dynamically using Node.js guid or node-uuid libraries. These will eventually be set by the database when they are inserted into a collection
    app.post('/api/assignment/form/:formId/field', createFormField);

    // PUT /api/assignment/form/:formId/field/:fieldId
    // updates a field object whose id is equal to the fieldId path parameter and belonging to a form object whose id is equal to the formId path parameter so that its properties are the same as the property values of the field object embedded in the request's body
    app.put('/api/assignment/form/:formId/field/:fieldId', updateFormField);

    app.put('/api/assignment/form/:formId/field', updateAllFormFields);

    function getFormFields(req, res) {
        var formId = req.params.formId;
        fieldModel.getFormFields(formId).then(function(data){res.json(data);});
    }
    function getFormFieldById(req, res) {
        var formId = req.params.formId;
        var fieldId = req.params.fieldId;
        fieldModel.getFormFieldById(formId, fieldId).then(function(data){
            res.json(data);
        });
    }
    function deleteFormField(req, res) {
        var formId = req.params.formId;
        var fieldId = req.params.fieldId;
        fieldModel.deleteFormField(formId, fieldId).then(function (data){
            res.json(data);
        });
    }
    function createFormField(req, res) {
        var formId = req.params.formId;
        var field = req.body;
        fieldModel.createFormField(formId, field).then(function (data) {
            res.json(data);
        });
    }

    function updateFormField(req, res) {
        var formId = req.params.formId;
        var fieldId = req.params.fieldId;
        var field = req.body;
        delete field._id;
        fieldModel.updateFormField(formId, fieldId, field).then(function (data) {
            res.json(data);
        });
    }

    function updateAllFormFields(req, res) {
        var formId = req.params.formId;
        var fields = req.body;
        fieldModel.updateAllFormFields(formId, fields).then(function (data) {
            res.json(data);
        });
    }

};