/**
 * Created by ronnygeo on 3/3/16.
 */
(function () {
    'use strict';
    angular.module("FormBuilderApp")
        .factory('UserService', UserService);

    UserService.$inject = ['$http'];
    function UserService($http){
        var api;

        api = {
            findUserByUsername: findUserByUsername,
            findUserByCredentials: findUserByCredentials,
            findAllUsers: findAllUsers,
            createUser: createUser,
            deleteUserById: deleteUserById,
            updateUser: updateUser
        };
        return api;


        function findUserByUsername(username) {
            return $http.get('/api/assignment/user?username='+username);
        }

        //Accepts parameters username, password, and callback function
        //Iterates over the array of current users looking for user object whose username and password match the parameters
        //Calls back with user found or null otherwise
        function findUserByCredentials(username, password) {
            return $http.get('/api/assignment/user?username='+username+'&password='+password);
        }

        //Accepts parameter callback function
        //Calls back with array of all users
        function findAllUsers() {
            return $http.get('/api/assignment/user');
        }

        //Accepts parameters user object and callback function
        //Adds property called _id with unique value to the user object parameter. You can use (new Date).getTime() to get a unique time stamp
        //Adds the new user to local array of users
        //Calls back with new user
            function createUser(user) {
                return $http.post('/api/assignment/user', user);
        }

        //Accepts parameters user id and callback function
        //Iterates over the array of current users looking for a user object whose user id is equal to parameter user id
        //If found, removes user from the array of current users
        //Calls back with remaining array of all users
        function deleteUserById(userId) {
            return $http.delete('/api/assignment/user/'+userId);
        }

        //Accepts parameters user id, user object and callback function
        //Iterates over the array of current users looking for a user object whose user id is equal to parameter user id
        //If found, updates user with new user properties
        //Calls back with updated user
        function updateUser(userId, user) {
            return $http.put('/api/assignment/user/'+userId, user);
        }
    }
})();