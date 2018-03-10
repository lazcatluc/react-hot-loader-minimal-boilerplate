import ApiUrl from './ApiUrl'
import jsonp from 'jsonp'

const handleFacebookUserId = (extension, successCallback, errorCallback) => {
  askPermissionFor(extension, "user_profile", function () {
      askPermissionFor(extension, "user_messaging", function () {
        getContext(extension, successCallback, errorCallback)
      }, errorCallback)
    }, errorCallback
  );
};

const getContext = (extension, successCallback, errorCallback) => {
  jsonp(ApiUrl.apiInfo, null, (error, response) => {
    if (error) {
      errorCallback(error);
    } else {
      extension.getContext(
        response.facebookAppId,
        function success(result) {
          successCallback(result);
        },
        function error(error, errorMessage) {
          if (errorCallback) {
            errorCallback(error, errorMessage);
          }
        });
    }
  });
};

const askPermissionFor = (extension, permission, isGrantedCallback, errorCallback) => {
  extension.askPermission(function (permission_response) {
      var isGranted = permission_response.isGranted;
      if (isGranted) {
        if (isGrantedCallback) {
          isGrantedCallback()
        }
      }
    }, function (errorCode, errorMessage) {
      if (errorCallback) {
        errorCallback(errorCode, errorMessage);
      }
    },
    permission);
};

export default new Promise((resolve, reject) => {
  window.extAsyncInit = function () {
    handleFacebookUserId(MessengerExtensions, function (result) {
      resolve(result.signed_request);
    }, function (error) {
      reject(error);
    });
  };
});
