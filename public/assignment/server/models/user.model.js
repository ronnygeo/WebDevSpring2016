module.exports = function (mongoose) {
    var q = require('q');
    var bcrypt = require('bcrypt-nodejs');
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
        var pwd = bcrypt.hashSync(user.password);
        user.password = pwd;
        UserModel.create(user).then(function (data){
                deferred.resolve(data);
            }, function (err) {
            deferred.reject(err);
        });
        return deferred.promise;
    };

    //FindAll - should take no arguments, and return the corresponding collection
    function findAll() {
        var deferred = q.defer();
        UserModel.find().then(function (data) {
                deferred.resolve(data);
        }, function (err) {
            deferred.reject(err);
        });
        return deferred.promise;
    }

    //FindById - should take an ID as an argument, find an instance object in the corresponding collection whose ID property is equal to the ID argument, return the instance found, null otherwise
    function findById(id) {
        var deferred = q.defer();
        UserModel.findById(id).then(function(data) {
                deferred.resolve(data);
            },function (err) {
            deferred.reject(err);
        });
        return deferred.promise;
    }

    //Update - should take an ID and object instance as arguments, find the object instance in the corresponding collection whose ID property is equal to the ID argument, update the found instance with property values in the argument instance object
    function update(id, obj) {
        var deferred = q.defer();
        // console.log(obj);
           UserModel.update({_id: id}, obj).then(function(data){
                // console.log(data);
                deferred.resolve(data);
            }, function (err) {
                deferred.reject(err);
            });
        return deferred.promise;
    }
    
    //Delete - should accept an ID as an argument, remove the instance object from the corresponding collection whose ID property s equal to the ID argument
    function del(id) {
        var deferred = q.defer();
        UserModel.remove({_id: id}).then(function (data) {
            deferred.resolve(data);
        }, function (err) {
            deferred.reject(err);
        });
        return deferred.promise;
    }

    //returns a single user whose username is equal to username parameter, null otherwise
    function findUserByUsername(username) {
        var deferred = q.defer();
        UserModel.findOne({username: username}).then(function (data) {
            deferred.resolve(data);
        }, function (err){
            deferred.reject(err);
        });
        return deferred.promise;
    }

    //returns a single user whose username is equal to username parameter, null otherwise
    function findUserByCredentials(credentials) {
        var deferred = q.defer();
        UserModel.findOne({username: credentials.username}).then(function (data) {
                // console.log(data, credentials);
                if (bcrypt.compareSync(credentials.password, data.password)) {
                deferred.resolve(data);
                } else {
                    deferred.reject(404);
                }
            },
        function (err) {
            deferred.reject(err);
        });
        return deferred.promise;
    }
};
