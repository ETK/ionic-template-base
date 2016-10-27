(function() {
  'use strict';

  angular
    .module('app')
    .config(routeConfiguration);

  routeConfiguration.$inject = ['$urlRouterProvider', '$stateProvider'];

  function routeConfiguration($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'menu/menu.html',
        controller: 'menuController as vm'
      })
      .state('login', {
        url: '/login',
        cache: false,
        templateUrl: 'login/login.html',
        controller: 'loginController as vm'
      })
      .state('app.home', {
        url: '/home',
        cache: false,
        views: {
          'menuContent' :{
            templateUrl: "home/home.html",
            controller: 'homeController as vm'
          }
        }
      });
  }
})();
