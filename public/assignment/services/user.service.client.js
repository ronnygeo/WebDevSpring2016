/**
 * Created by ronnygeo on 3/3/16.
 */
(function(){
    angular.module("FormBuilderApp")
        .factory('UserService', UserService);
    var UserService = function(){
        var users = [];
        var findUserByCredentials;
        var findAllUsers;
        var createUser;
        var deleteUserById;
        var updateUser;
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
            "findUserByCredentials": findUserByCredentials,
            "findAllUsers": findAllUsers,
            "createUser": createUser,
            "deleteUserById": deleteUserById,
            "updateUser": updateUser
        };
        return api;

        findUserByCredentials = function (username, password, callback) {
            for (user in users) {
                if ((user.username === username) && (user.password === password)){
                    return callback (user);
                }
            }
            return callback(null);
        };

        findAllUsers = function (callback) {
            return callback(users);
        };

        createUser = function (user, callback) {
            if (user) {
                var newUser = {};
                newUser = user;
                newUser._id = (new Date).getTime();
                users.append();
                return callback(newUser);
            }
        };

        deleteUserById = function (userId, callback) {
            if (userId) {
                var index;
                for (var i = 0; i < users.length; i++){
                    if (userId === users[i].userId)
                    {
                       index = i;
                        break;
                    }
                }
                users.splice(i, 1);
                return callback(users);
            }
        };

        updateUser = function (userId, user, callback) {
            for (var i = 0; i < users.length; i++){
                if (userId === users[i].userId)
                {
                    index = i;
                    break;
                }
            }

            for (key in user){
                users[index][key] = user[key];
            }
            return callback(user);
        };
    };

})();