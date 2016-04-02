module.exports = function (mongoose) {
    // var forms = require('./form.mock.json');

    var q = require('q');
    var FormSchema = require("./form.schema.server.js")(mongoose);
    var FormModel = mongoose.model('Form', FormSchema);

    // var FieldModel = require("./field.model.server.js")(mongoose, formId);

    var api = {
        create: create,
        findAll: findAll,
        findById: findById,
        findFormByTitle: findFormByTitle,
        findByUserId: findByUserId,
        update: update,
        delete: del
    };
    return api;

    //Create - should accept an instance object, add it to a corresponding collection, and return the collection
    function create(data) {
        var deferred = q.defer();
        // console.log(data);
        // var form = new FormModel({title: data.title, userId: data.userId});
            FormModel.create(data, function (err, doc) {
                if (err) {
                    deferred.reject(err);
                } else {
                    // console.log(doc);
                    deferred.resolve(doc);
                }
            });
        // forms.push(form);
        return deferred.promise;
    }

    //FindAll - should take no arguments, and return the corresponding collection
    function findAll() {
        var deferred = q.defer();
        FormModel.find(function(err, data) {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(data);
            }
        });
        return deferred.promise;
    }

    //findFormByTitle(title) - returns a single form whose title is equal to title parameter, null otherwise
    function findFormByTitle(title) {
        var deferred = q.defer();

        FormModel.findOne({title: title}, function(err, data) {
            if (err){
                deferred.reject(err);
            } else {
                deferred.resolve(data);
            }
        });
        return deferred.promise;
    }

    //FindById - should take an ID as an argument, find an instance object in the corresponding collection whose ID property is equal to the ID argument, return the instance found, null otherwise
    function findById(id) {
        var deferred = q.defer();

        FormModel.findById(id, function (err, data) {
            if (err){
                deferred.reject(err);
            } else {
                deferred.resolve(data);
            }
        });
        return deferred.promise;
    }

    //findByUserId: finds all the forms by the particular user
    function findByUserId(userId) {
        var deferred = q.defer();
        FormModel.find({userId: userId}, function (err, data){
            if (err){
                deferred.reject(err);
            } else {
                // console.log(data);
                deferred.resolve(data);
            }
        });
        return deferred.promise;
    }

    //Update - should take an ID and object instance as arguments, find the object instance in the corresponding collection whose ID property is equal to the ID argument, update the found instance with property values in the argument instance object
    function update(id, obj) {
        var deferred = q.defer();

        FormModel.update({_id: id}, {$set: obj}, function (err, data){
            if (err){
                deferred.reject(err);
            } else {
                deferred.resolve(data);
            }
        });
        return deferred.promise;
    }

    //Delete - should accept an ID as an argument, remove the instance object from the corresponding collection whose ID property s equal to the ID argument
    function del(id) {
        var deferred = q.defer();
        console.log(id);
        FormModel.remove({_id: id}, function (err, data) {
            if (err) {
                deferred.reject(err);
            }
            else deferred.resolve(data);
        });
        return deferred.promise;
    }
};
