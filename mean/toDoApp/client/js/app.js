/**
 * app.js
 * Contains angular module
 *
 * Created by David Chia on 07/10/15.
 */

todoApp = angular.module('todoApp', ['ngRoute'])
    .config(function($routeProvider){
        $routeProvider
            .when('/', {
                templateUrl: '/partials/todo.html',
                controller: 'TodoCtrl'
            }).otherwise({
                redirectTo: '/'
            });
    });