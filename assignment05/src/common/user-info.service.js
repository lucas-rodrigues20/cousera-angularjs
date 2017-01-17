(function () {
"use strict";

angular.module('common')
.service('UserInfoService', UserInfoService);

function UserInfoService() {
  
  var service = this;
  var userInfo;

  service.setUserInfo = function(info){
    userInfo = info;
  };

  service.getUserInfo = function(){
    return userInfo;
  };

};

})();
