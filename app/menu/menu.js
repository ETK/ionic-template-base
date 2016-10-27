(function() {
  'use strict';

  angular
    .module('app')
    .controller('menuController', menuController);

  menuController.$inject = ['$state'];

  function menuController($state) {
    var vm = this;
  }
})();
