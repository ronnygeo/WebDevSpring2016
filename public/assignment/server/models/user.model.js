module.exports = function (uuid) {
    var mock = require("./user.mock.json");
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
        user._id = uuid.v1();
        mock.push(user);
        return user;
    }

    //FindAll - should take no arguments, and return the corresponding collection
    function findAll() {
        return mock;
    }

    //FindById - should take an ID as an argument, find an instance object in the corresponding collection whose ID property is equal to the ID argument, return the instance found, null otherwise
    function findById(id) {
        for(var u in mock) {
            if( mock[u]._id === id ) {
                return mock[u];
            }
        }
        return null;
    }

    //Update - should take an ID and object instance as arguments, find the object instance in the corresponding collection whose ID property is equal to the ID argument, update the found instance with property values in the argument instance object
    function update(id, obj) {
        var user = findById(id);
        if (user) {
        for (var key in obj) {
            user[key] = obj[key];
        }
        }
        return user;
    }
    //Delete - should accept an ID as an argument, remove the instance object from the corresponding collection whose ID property s equal to the ID argument
    function del(id) {
        for (var i = 0; i < mock.length; i++){
            if (id === mock[i]._id)
            {
                mock.splice(i, 1);
                break;
            }
        }
        return mock;
    }

    //returns a single user whose username is equal to username parameter, null otherwise
    function findUserByUsername(username) {
        for (var i = 0; i < mock.length; i++) {
            user = mock[i];
            if (user.username == username) {
                return user;
            }
        }
        return null;
    }

    //returns a single user whose username is equal to username parameter, null otherwise
    function findUserByCredentials(credentials) {
        for (var i = 0; i < mock.length; i++) {
            user = mock[i];
            if( user.username === credentials.username &&
                user.password === credentials.password) {
                return u;
            }
        }
        return null;
    }
};
