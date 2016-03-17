/**
 * Created by ronnygeo on 3/17/16.
 */
'use strict';
var mock = require("./user.mock.json");

module.exports = function (app) {
    var api = {
        create: create,
        findAll: findAll,
        findById: findById,
        update: update,
        delete: del,
        findUserByUsername: findUserByUsername,
        findUserByCredentials: findUserByCredentials,

    };
    return api;

    function create(user) {
        user._id = "ID_" + (new Date()).getTime();
        mock.push(user);
        return user;
    }

    function findAll() {

    }

    function findById(id) {
        for(var u in mock) {
            if( mock[u]._id === id ) {
                return mock[u];
            }
        }
        return null;
    }

    function update(id, obj) {

    }

    function del(id) {

    }

    //returns a single user whose username is equal to username parameter, null otherwise
    function findUserByUsername(username) {

    }

    //returns a single user whose username is equal to username parameter, null otherwise
    function findUserByCredentials(credentials) {
        for(var u in mock) {
            if( mock[u].username === credentials.username &&
                mock[u].password === credentials.password) {
                return mock[u];
            }
        }
        return null;
    }
    };
