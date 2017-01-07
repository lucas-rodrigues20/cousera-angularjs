(function(){
	'use strict';

	angular.module('LunchCheck', [])
	.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];

	function LunchCheckController($scope){

		$scope.message = {};
		$scope.dishes = '';

		$scope.checkLunch = function(){

			var numberOfItems = checkNumberOfItems($scope.dishes);

			if(numberOfItems === 0){
				$scope.message = {
					message: 'Please enter data first.',
					class: 'alert-danger'
				};
			} else if(numberOfItems <=3){
				$scope.message = {
					message: 'Enjoy!',
					class: 'alert-success'
				};
			} else {
				$scope.message = {
					message: 'Too Much!',
					class: 'alert-success'
				};
			}
		};

		function isStringEmpty(txt){
			return txt === '';
		};

		function isStringNotEmpty(txt){
			return !isStringEmpty(txt);
		};

		function checkNumberOfItems(dishes){
			// looks for commas followed by an optional space
			var regex = new RegExp('\,\s?');
			var dishesArr = dishes.split(regex);

			dishesArr = dishesArr
				.map(function(item){
					return item.trim();
				})
				.filter(function(item){
					return isStringNotEmpty(item);
				});

			return dishesArr.length;
		};

	};

})();