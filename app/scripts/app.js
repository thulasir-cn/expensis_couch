'use strict';

/**
 * @ngdoc overview
 * @name expensesApp
 * @description
 * # expensesApp
 *
 * Main module of the application.
 */
angular
  .module('expensesApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      }).otherwise({
        redirectTo: '/'
      });
      
  }).constant('appSettings', {
    db: 'http://127.0.0.1:5984/expenses'
   });

// .when('/about', {
//         templateUrl: 'views/about.html',
//         controller: 'AboutCtrl'
//       })
//       