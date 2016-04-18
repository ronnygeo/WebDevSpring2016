/**
 * Created by ronnygeo on 2/16/16.
 */

(function () {
        'use strict';
    angular.module("FormBuilderApp")
        .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'HomeController',
                templateUrl: 'views/home/home.view.html',
                resolve: {
                    loggedin: checkCurrentUser
                }
            })
            .when('/profile', {
                controller: 'ProfileController',
                templateUrl: "views/users/profile.view.html",
                controllerAs: 'user',
                resolve: {
                    loggedin: checkLoggedin
                }
            })
            .when('/login',{
                controller: 'LoginController',
                templateUrl: "views/users/login.view.html",
                controllerAs: 'user'
            })
            .when('/register',{
                controller: 'RegisterController',
                templateUrl: "views/users/register.view.html",
                controllerAs: 'user'
            })
            .when('/forms',{
                controller: 'FormController',
                templateUrl: "views/forms/forms.view.html",
                controllerAs: 'fc'
            })
            .when('/form/:formId/fields', {
                controller: 'FieldController',
                templateUrl: "views/forms/fields.view.html",
                controllerAs: 'model'
            })
            .when('/admin', {
                controller: 'AdminController',
                templateUrl: "views/admin/admin.view.html",
                controllerAs: 'admin',
                resolve: {
                    loggedin: checkAdmin
                }
            })
            .otherwise({
                redirectTo: '/'
            })
    });

        var checkAdmin = function($q, $timeout, $http, $location, $rootScope)
        {
            var deferred = $q.defer();

            $http.get('/api/assignment/loggedin').success(function(user)
            {
                $rootScope.errorMessage = null;
                // User is Authenticated
                if (user !== '0' && user.roles.indexOf('admin') != -1)
                {
                    $rootScope.user = user;
                    deferred.resolve();
                } else {
                    $rootScope.errorMessage = 'You need to log in.';
                    deferred.reject();
                    $location.url('/login');
                }
            });

            return deferred.promise;
        };


        var checkLoggedin = function($q, $timeout, $http, $location, $rootScope)
        {
            var deferred = $q.defer();

            $http.get('/api/assignment/loggedin').success(function(user)
            {
                // User is Authenticated
                if (user !== '0')
                {
                    $rootScope.user = user;
                    deferred.resolve(user);
                }
                // User is Not Authenticated
                else
                {
                    $rootScope.errorMessage = 'You need to log in.';
                    deferred.reject();
                    $location.url('/login');
                }
            });

            return deferred.promise;
        };

        var checkCurrentUser = function($q, $timeout, $http, $location, $rootScope)
        {
            var deferred = $q.defer();

            $http.get('/api/assignment/loggedin').success(function(user)
            {
                $rootScope.errorMessage = null;
                // User is Authenticated
                if (user !== '0')
                {
                    $rootScope.user = user;
                }
                deferred.resolve();
            });

            return deferred.promise;
        };
    }


)();
