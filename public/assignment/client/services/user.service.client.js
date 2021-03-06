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
            adminFindAllUsers: adminFindAllUsers,
            register: register,
            adminDeleteUserById: deleteUserById,
            updateUser: updateUser,
            login: login,
            logout: logout,
            adminCreateUser: adminCreateUser,
            adminUpdateUser: adminUpdateUser,
            adminFindUserById: adminFindUserById
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
        function adminFindAllUsers() {
            return $http.get('/api/assignment/admin/user');
        }

        //Accepts parameters user object and callback function
        //Adds property called _id with unique value to the user object parameter. You can use (new Date).getTime() to get a unique time stamp
        //Adds the new user to local array of users
        //Calls back with new user
            function register(user) {
                return $http.post('/api/assignment/register', user);
        }

        //Accepts parameters user object and callback function
        //Adds property called _id with unique value to the user object parameter. You can use (new Date).getTime() to get a unique time stamp
        //Adds the new user to local array of users
        //Calls back with new user
        function adminCreateUser(user) {
            return $http.post('/api/assignment/admin/user', user);
        }

        //Accepts parameters user id and callback function
        //Iterates over the array of current users looking for a user object whose user id is equal to parameter user id
        //If found, removes user from the array of current users
        //Calls back with remaining array of all users
        function deleteUserById(userId) {
            return $http.delete('/api/assignment/admin/user/'+userId);
        }

        //Accepts parameters user id, user object and callback function
        //Iterates over the array of current users looking for a user object whose user id is equal to parameter user id
        //If found, updates user with new user properties
        //Calls back with updated user
        function updateUser(userId, user) {
            // console.log(user);
            return $http.put('/api/assignment/user/'+userId, user);
        }

        //Accepts parameters user id, user object and callback function
        //Iterates over the array of current users looking for a user object whose user id is equal to parameter user id
        //If found, updates user with new user properties
        //Calls back with updated user
        function adminUpdateUser(userId, user) {
            return $http.put('/api/assignment/admin/user/'+userId, user);
        }

        function adminFindUserById(userId) {
            return $http.get('/api/assignment/user/'+userId);
        }

        function login(user) {
            return $http.post("/api/assignment/login", user);
        }

        function logout() {
            return $http.post("/api/assignment/logout");
        }
    }
})();