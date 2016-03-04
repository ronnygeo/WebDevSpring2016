/**
 * Created by ronnygeo on 3/3/16.
 */
(function(){
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

        function findAllUsers(callback) {
            callback(users);
        }

        function createUser(user, callback) {
            if (user) {
                user._id = (new Date).getTime();
                console.log(user);
                users.push(user);
                callback(user);
            }
        }

        function deleteUserById(userId, callback) {
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
                callback(users);
            }
        }

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
            //console.log(users[index]);
            callback(user);
        }
    }

})();