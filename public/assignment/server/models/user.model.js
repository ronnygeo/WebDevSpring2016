/**
 * Created by ronnygeo on 3/17/16.
 */

(function () {
    'use strict';
    require('user.mock.json');
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

        function create(obj) {
        }

        function findAll() {
        }

        function findById(id) {
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
            //credentials.username
            //credentials.password
        }
    }
})();