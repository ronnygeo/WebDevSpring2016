module.exports = function (mongoose) {
    var q = require('q');
    // load user schema
    var UserSchema = require("./user.schema.server.js")(mongoose);
    var UserModel = mongoose.model('User', UserSchema);
    // var mock = require("./user.mock.json");

    var api = {
        create: create,
        findAll: findAll,
        findById: findById,
        update: update,
        delete: del,
        findUserByUsername: findUserByUsername,
        findUserByCredentials: findUserByCredentials
    };
    return api;
    
    //Create - should accept an instance object, add it to a corresponding collection, and return the collection
    function create(user) {
        //user._id = "ID_" + (new Date()).getTime();
        var deferred = q.defer();
        var email = user.email;
        user.emails = [];
        user.emails.push(email);
        UserModel.create(user, function (err, data){
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(data);
            }
        });
        return deferred.promise;
    };

    //FindAll - should take no arguments, and return the corresponding collection
    function findAll() {
        var deferred = q.defer();
        UserModel.find(function (err, data) {
            if (err) {
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
        UserModel.findById(id, function(err, data) {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(data);
            }
        });
        return deferred.promise;
    }

    //Update - should take an ID and object instance as arguments, find the object instance in the corresponding collection whose ID property is equal to the ID argument, update the found instance with property values in the argument instance object
    function update(id, obj) {
        var deferred = q.defer();
        var email = obj.email;
        if (!(email in obj.emails)){
        obj.emails.push(email);
        }
        UserModel.update({ _id: id}, obj,
            function (err, data) {
            if (err) {
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
        UserModel.remove({_id: id}, function (err, data) {
            if (err) {
                deferred.reject(err);
            }
            deferred.resolve(data);
        });
        return deferred.promise;
    }

    //returns a single user whose username is equal to username parameter, null otherwise
    function findUserByUsername(username) {
        var deferred = q.defer();
        UserModel.findOne({username: username}, function (err, data) {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(data);
            }
        });
        return deferred.promise;
    }

    //returns a single user whose username is equal to username parameter, null otherwise
    function findUserByCredentials(credentials) {
        var deferred = q.defer();
        UserModel.findOne({username: credentials.username, password: credentials.password}, function (err, data) {
            if (err) {
                deferred.reject(err);
            } else {
                deferred.resolve(data);
            }
        });
        return deferred.promise;
    }
};
