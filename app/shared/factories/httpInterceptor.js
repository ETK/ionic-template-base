(function() {
  'use strict';

  angular
    .module('app')
    .factory('httpInterceptorFactory', httpInterceptor);

  httpInterceptor.$inject = ['$window', '$location', 'localStorageFactory', 'appConfig'];

  function httpInterceptor($window, $location, localStorageFactory, appConfig) {
    return {
      request: function(config) {
        if(!(config.url.indexOf(appConfig.FIPEAPI) > -1)) {
          config.headers[appConfig.ACCESSTOKEN] = localStorageFactory.getItem(appConfig.ACCESSTOKEN);
        }
        return config;
      },
      responseError: function (rejection) {
         if(rejection.status == 401 || rejection.status == 403) {
           $window.localStorage.clear();
           $location.path('/login');
         }

        throw rejection;
      }
    };
  }
})();
