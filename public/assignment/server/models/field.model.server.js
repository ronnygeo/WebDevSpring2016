module.exports = function (mongoose) {

    var q = require('q');
    var FormSchema = require("./form.schema.server.js")(mongoose);
    var FormModel = mongoose.model('Form');

    var FieldSchema = require("./field.schema.server.js")(mongoose);
    var FieldModel = mongoose.model('Field', FormSchema);

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
        FormModel.findById(formId, function (err, data) {
            if (err) {
                deferred.reject(err);
            } else {
                console.log(data);
                if (!data.fields)
                    data.fields = []
                deferred.resolve(data.fields);
            }
        });
        return deferred.promise;
    }

    function getFormFieldById(formId, fieldId) {
        var deferred = q.defer();
        getFormFields(formId).then(function (data) {
            if (data != []) {
                data.findById(fieldId, function (err, field) {
                    if (err) {
                        deferred.reject(err);
                    } else {
                        console.log(field)
                        deferred.resolve(field);
                    }
                });
            }
        });
        // var form = findById(formId);
        // for (var i = 0; i < form.fields.length; i++) {
        //     field = form.fields[i];
        //     if (field._id === fieldId) {
        //         return field;
        //     }
        // }
        return deferred.promise;
    }

    function deleteFormField(formId, fieldId) {
        var deferred = q.defer();
        FormModel.findById(formId, function (err, form) {
            if (err) {
                deferred.reject(err);
            }    else {
                for (var i = 0; i < form.fields.length; i++) {
                    if (form.fields[i]._id == fieldId) {
                        form.fields.splice(i, 1);
                    }
                }
                form.save(function (err, data) {
                    if (err) {
                        deferred.reject(err);
                    } else {
                        deferred.resolve(data.fields);
                    }
                });
            }
        });
        // console.log(form.fields);
        return deferred.promise;
    }

    function createFormField(formId, field) {
        var deferred = q.defer();
        console.log("client:", field);
        FormModel.findById(formId, function(err, form) {
            if (err) {
                deferred.reject(err);
            } else {
                if (!form.hasOwnProperty("options")) {
                    form.options = [];
                    console.log("No options!");
                }
                var newField = FieldModel(field);
                form.fields.push(newField);
                console.log(form.fields)
                form.save(function (err, data) {
                    if (err) {
                        deferred.reject(err);
                    } else {
                     console.log(data.fields);
                        deferred.resolve(data.fields);
                    }
                });
            }
        });
        return deferred.promise;
    }

    function updateFormField(formId, fieldId, obj) {
        var deferred = q.defer();
        FormModel.findById(formId, function (err, data) {
            if (err) {
                deferred.reject(err);
            } else {
                for (var i in data.fields) {
                    if (data.fields[i]._id == fieldId) {
                        data.fields[i] = obj;
                    }
                }
                data.save(function (err, data) {
                    if (err) {
                        deferred.reject(err);
                    } else {
                        deferred.resolve(data.fields);
                    }
                });
            }
        });
        return deferred.promise;
    }

    function updateAllFormFields(formId, obj) {

        var deferred = q.defer();
        FormModel.findById(formId, function(err, form) {
            if (err) {
                deferred.reject(err);
            } else {
                form.fields = obj;
                form.save(function (err, data) {
                    if (err) {
                        deferred.reject(err);
                    } else {
                        deferred.resolve(data.fields);
                    }
                });
            }
        })
        return deferred.promise;
    }
};