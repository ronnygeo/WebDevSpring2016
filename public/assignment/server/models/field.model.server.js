module.exports = function (mongoose) {

    var q = require('q');
    var FormSchema = require("./form.schema.server.js")(mongoose);
    var FormModel = mongoose.model('Form', FormSchema);

    var api = {
        getFormFields: getFormFields,
        getFormFieldById: getFormFieldById,
        deleteFormField: deleteFormField,
        createFormField: createFormField,
        updateFormField: updateFormField,
        updateAllFormFields: updateAllFormFields
    };
    return api;

    function getFormFields(formId) {
        var deferred = q.defer();
        FormModel.findById(formId, function (err, data) {});

        return form.fields;
    }

    function getFormFieldById(formId, fieldId) {
        var deferred = q.defer();
        var form = findById(formId);
        for (var i = 0; i < form.fields.length; i++) {
            field = form.fields[i];
            if (field._id === fieldId) {
                return field;
            }
        }
        return null;
    }

    function deleteFormField(formId, fieldId) {
        var deferred = q.defer();
        var form = findById(formId);
        // console.log(form);
        for (var i = 0; i < form.fields.length; i++) {
            // console.log(fieldId);
            // console.log(form.fields[i]);
            if (form.fields[i]._id == fieldId) {
                // console.log(form.fields[i]);
                form.fields.splice(i, 1);
            }
        }
        // console.log(form.fields);
        return form.fields;
    }

    function createFormField(formId, field) {
        var deferred = q.defer();
        var form = findById(formId);
        field._id = uuid.v1();
        //field._id = "ID_" + (new Date()).getTime();
        if (form.fields) {
            form.fields.push(field);
        } else {
            form.fields = [];
            form.fields.push(field);
        }
        return form.fields;
    }

    function updateFormField(formId, fieldId, obj) {
        var deferred = q.defer();
        var form = findById(formId);
        for (var i = 0; i < form.fields.length; i++) {
            field = form.fields[i];
            if (field._id === fieldId) {
                for (var key in obj) {
                    field[key] = obj[key];
                }
                return field;
            }
        }
        return null;
    }

    function updateAllFormFields(formId, obj) {
        var deferred = q.defer();
        var form = findById(formId);
        // console.log(obj);
        form.fields = obj;
        // console.log(form.fields);
        return obj;
    }
};