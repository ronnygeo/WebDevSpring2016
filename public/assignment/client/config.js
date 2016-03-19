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
                templateUrl: 'views/home/home.view.html'
            })
            .when('/profile', {
                controller: 'ProfileController',
                templateUrl: "views/users/profile.view.html",
                controllerAs: 'user'
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
                controllerAs: 'admin'
            })
            .otherwise({
                redirectTo: '/'
            })
    });
    }
)();
