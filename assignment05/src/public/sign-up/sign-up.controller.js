(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService', '$timeout', 'UserInfoService'];

function SignUpController(MenuService, $timeout, UserInfoService) {

	var ctrl = this;

	ctrl.clientInfo;
	ctrl.isSubmitting = false;
	ctrl.dishNumberInvalid = false;
	ctrl.clientInfoSaved = false;

	ctrl.signUp = function(){

		ctrl.isSubmitting = true;
		console.log(ctrl.clientInfo);

		MenuService.getMenuItem(ctrl.clientInfo.favorite)
			.success(function(data){

				console.log(data);
				ctrl.dishNumberInvalid = false;
				ctrl.clientInfoSaved = true;

				UserInfoService.setUserInfo(ctrl.clientInfo);

				ctrl.clientInfo = {};
				ctrl.signUpForm.$setPristine();
				ctrl.signUpForm.$setUntouched();
			})
			.error(function(err){

				console.log(err);
				ctrl.dishNumberInvalid = true;
				ctrl.clientInfoSaved = false;
			})
			.finally(function(){

				ctrl.isSubmitting = false;
			});
	};

};

})();
