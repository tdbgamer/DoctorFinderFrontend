(function () {
  'use strict';

  /**
   * @ngdoc overview
   * @name doctorFinderApp
   * @description
   * # doctorFinderApp
   *
   * Main module of the application.
   */
  angular
    .module('doctorFinderApp', [
      'ngAnimate',
      'ngAria',
      'ngCookies',
      'ngMessages',
      'ngResource',
      'ngRoute',
      'ngSanitize',
      'ngMaterial',
      'ngTouch'
      // 'uiGmapgoogle-maps'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl',
          controllerAs: 'main'
        })
        .when('/about', {
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl',
          controllerAs: 'about'
        })
        .otherwise({
          redirectTo: '/'
        });

      // uiGmapGoogleMapApiProvider.configure({
      //   //    key: 'your api key',
      //   v: '3.20', //defaults to latest 3.X anyhow
      //   libraries: 'weather,geometry,visualization'
      // });
    });


})();
