(function(){
	'use strict';

	angular.module('MenuApp')
		.controller('CategoryItemsController', CategoryItemsController);

	CategoryItemsController.$inject = ['$stateParams', 'MenuDataService'];

	function CategoryItemsController($stateParams, MenuDataService){

		var ctrl = this;
		ctrl.category = $stateParams.category;

		MenuDataService.getItemsForCategory($stateParams.category)
			.then(function(data){

				ctrl.categoryItems = data;
			})
			.catch(function(err){

				console.log(err);
			});

	};

})();