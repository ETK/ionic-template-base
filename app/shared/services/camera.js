(function() {
  'use strict';

  angular
    .module('app')
    .service('CameraService', CameraService);

  CameraService.$inject = ['$q'];

  function CameraService($q) {
    return {
      start: start
    };

    function start(isSelfie, camQuality) {
      var deferred = $q.defer(),
        options = {
          quality: 30,
          destinationType: Camera.DestinationType.DATA_URL,
          sourceType: Camera.PictureSourceType.CAMERA,
          encodingType: Camera.EncodingType.JPEG,
          mediaType: Camera.MediaType.PICTURE,
          cameraDirection: isSelfie ? Camera.Direction.FRONT : Camera.Direction.BACK,
          allowEdit: false,
          correctOrientation: true,
          saveToPhotoAlbum: false
        };

      navigator.camera
        .getPicture(function(result) {
          deferred.resolve(result);
        }, function(err) {
          deferred.reject(err);
        }, options);

      return deferred.promise;
    }
  }
})();
