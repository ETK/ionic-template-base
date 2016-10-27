(function() {
  'use strict';

  angular
    .module('app')
    .controller('homeController', homeController);

  homeController.$inject = ['$state'];

  function homeController($state) {
    var vm = this;
    vm.model = {};
  }
})();
