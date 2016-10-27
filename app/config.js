(function() {
  'use strict';

  angular
    .module('app')
    .config(Configurations);

  Configurations.$inject = ['$httpProvider', '$ionicConfigProvider'];

  function Configurations($httpProvider, $ionicConfigProvider) {
    $ionicConfigProvider.scrolling.jsScrolling(false);
    $httpProvider.interceptors.push('httpInterceptorFactory');
  }
})();
