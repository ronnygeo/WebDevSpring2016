/**
 * Created by ronnygeo on 3/17/16.
 */

'use strict';
module.exports = function () {
    var forms = require('./form.mock.json');

    var api = {
        create: create,
        findAll: findAll,
        findById: findById,
        findByUserId: findByUserId,
        update: update,
        delete: del,
        findFormByTitle: findFormByTitle
    };
    return api;

    //Create - should accept an instance object, add it to a corresponding collection, and return the collection
    function create(form) {
        form._id = "ID_" + (new Date()).getTime();
        forms.push(form);
        return forms;
    }

    //FindAll - should take no arguments, and return the corresponding collection
    function findAll() {
        return forms;
    }

    //FindById - should take an ID as an argument, find an instance object in the corresponding collection whose ID property is equal to the ID argument, return the instance found, null otherwise
    function findById(id) {
        for(var form of forms) {
            if( form._id === id ) {
                return form;
            }
        }
        return null;
    }

    //findByUserId: finds all the forms by the particular user
    function findByUserId(userId) {
        var collection = [];
        for (form of forms) {
            if (form.userId === userId){
                collection.push(form);
            }
        }
        return collection;
    }

    //Update - should take an ID and object instance as arguments, find the object instance in the corresponding collection whose ID property is equal to the ID argument, update the found instance with property values in the argument instance object
    function update(id, obj) {
        var form = findById(id);
        if (form) {
            for (var key in form) {
                form[key] = obj[key];
            }
        }
        return form;
    }

    //Delete - should accept an ID as an argument, remove the instance object from the corresponding collection whose ID property s equal to the ID argument
    function del(id) {
        for (var i = 0; i < forms.length; i++){
            if (id === forms[i]._id)
            {
                forms.splice(i, 1);
                break;
            }
        }
        return forms;
    }

    //findFormByTitle(title) - returns a single form whose title is equal to title parameter, null otherwise
    function findFormByTitle(title) {
        for (var form of forms) {
            if (form.title === title) {
                return form;
            }
        }
        return null;
    }
};
