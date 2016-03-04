/**
 * Created by ronnygeo on 3/3/16.
 */
(function () {
    'use strict';
    angular.module("FormBuilderApp")
        .factory('UserService', UserService);

    function UserService(){
        var users = [];
        var api;

        users = [
            {	"_id":123, "firstName":"Alice",            "lastName":"Wonderland",
                "username":"alice",  "password":"alice",   "roles": ["student"]		},
            {	"_id":234, "firstName":"Bob",              "lastName":"Hope",
                "username":"bob",    "password":"bob",     "roles": ["admin"]		},
            {	"_id":345, "firstName":"Charlie",          "lastName":"Brown",
                "username":"charlie","password":"charlie", "roles": ["faculty"]		},
            {	"_id":456, "firstName":"Dan",              "lastName":"Craig",
                "username":"dan",    "password":"dan",     "roles": ["faculty", "admin"]},
            {	"_id":567, "firstName":"Edward",           "lastName":"Norton",
                "username":"ed",     "password":"ed",      "roles": ["student"]		}
        ];

        api = {
            findUserByCredentials: findUserByCredentials,
            findAllUsers: findAllUsers,
            createUser: createUser,
            deleteUserById: deleteUserById,
            updateUser: updateUser
        };
        return api;

        //Accepts parameters username, password, and callback function
        //Iterates over the array of current users looking for user object whose username and password match the parameters
        //Calls back with user found or null otherwise
        function findUserByCredentials(username, password, callback) {
            for (var user of users) {
                //console.log(user.username);
                if ((user.username === username) && (user.password === password)){
                    //console.log('success');
                    return callback (user);
                }

            }
            return callback(null);
        }

        //Accepts parameter callback function
        //Calls back with array of all users
        function findAllUsers(callback) {
            return callback(users);
        }

        //Accepts parameters user object and callback function
        //Adds property called _id with unique value to the user object parameter. You can use (new Date).getTime() to get a unique time stamp
        //Adds the new user to local array of users
        //Calls back with new user
            function createUser(user, callback) {
            if (user) {
                user._id = (new Date).getTime();
                //console.log(user);
                users.push(user);
                return callback(user);
            }
                else callback(null);
        }

        //Accepts parameters user id and callback function
        //Iterates over the array of current users looking for a user object whose user id is equal to parameter user id
        //If found, removes user from the array of current users
        //Calls back with remaining array of all users
        function deleteUserById(userId, callback) {
            if (userId) {
                for (var i = 0; i < users.length; i++){
                    if (userId === users[i]._id)
                    {
                       users.splice(i, 1);
                        break;
                    }
                }

            }
            return callback(users);
        }

        //Accepts parameters user id, user object and callback function
        //Iterates over the array of current users looking for a user object whose user id is equal to parameter user id
        //If found, updates user with new user properties
        //Calls back with updated user
        function updateUser(userId, user, callback) {
            var index;
            for (var i = 0; i < users.length; i++){
                if (userId === users[i]._id)
                {
                    index = i;
                    break;
                }
            }

            for (var key in user){
                users[index][key] = user[key];
            }
            return callback(user);
        }
    }
})();