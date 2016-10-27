(function() {
  'use strict';

  angular
    .module('app')
    .factory('facebookFactory', facebookFactory);

  facebookFactory.$inject = ['$http'];

  function facebookFactory($http) {
    return {
      getFacebookUserData : getFacebookUserData
    };

    function getFacebookUserData(token) {
      return $http({
        method: 'GET',
        url: "https://graph.facebook.com/v2.2/me",
        params: {
          access_token: token,
          fields: "id,name,email,gender,location,website,picture,relationship_status",
          format: "json"
        }
      });
    }
  }
})();
