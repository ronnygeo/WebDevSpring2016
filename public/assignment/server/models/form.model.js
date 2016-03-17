/**
 * Created by ronnygeo on 3/17/16.
 */

(function () {
    'use strict';
    module.exports = function (app) {
        require('form.mock.json');
        
        var api = {
            create: create,
            findAll: findAll,
            findById: findById,
            update: update,
            delete: del,
            findFormByTitle: findFormByTitle
        };
        return api;

        function create(obj) {}
        function findAll() {}
        function findById(id) {}
        function update(id, obj) {}
        function del(id) {}

        //findFormByTitle(title) - returns a single form whose title is equal to title parameter, null otherwise
        function findFormByTitle(title) {}
    }
})();