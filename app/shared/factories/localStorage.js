(function() {
  'use strict';

  angular
    .module('app')
    .factory('localStorageFactory', localStorage);

  localStorage.$inject = [];

  function localStorage() {
    return {
      getItem: getItem,
      getObject: getObject,
      setItem: setItem,
      setObject: setObject,
      updateObject: updateObject
    };
  }

  function getItem(key) {
    return window.localStorage[key];
  }

  function setItem(key, value) {
    window.localStorage[key] = value;
  }

  function getObject(key) {
    try {
      var json = JSON.parse(window.localStorage[key]);
      return json;
    } catch (e) {
      console.log('Unable to retrieve object.\n' + e);
    }
  }

  function setObject(key, value) {
    try {
      window.localStorage[key] = JSON.stringify(value);
    } catch (e) {
      console.log('Unable to store object.\n' + e);
    }
  }

  function updateObject(keyPath, value) {
    var path = keyPath.split('.'),
      baseObject = getObject(path[0]),
      auxObject = baseObject,
      key = path[path.length - 1];

    try {
      for (var step = 1; step < path.length - 1; step++) {
        auxObject = auxObject[path[step]];
      }
      auxObject[key] = value;
      localStorage[path[0]] = JSON.stringify(baseObject);
    } catch (e) {
      console.log('Unable to update object.\n' + e);
    }
  }
})();
