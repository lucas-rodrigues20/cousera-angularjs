(function(){
	'use strict';

	angular.module('NarrowItDownApp', [])
		.controller('NarrowItDownController', NarrowItDownController)
		.service('MenuSearchService', MenuSearchService)
		.filter('menuItems', MenuItemsFilter)
		.directive('foundItems', FoundItemsDirective);

	NarrowItDownController.$inject = ['MenuSearchService'];
	MenuSearchService.$inject = ['$http', 'menuItemsFilter'];	

	function NarrowItDownController(MenuSearchService){

		var ctrl = this;
		ctrl.searchItem = '';
		ctrl.isSubmitting = false;

		ctrl.search = function(){
			ctrl.isSubmitting = true;
			
			MenuSearchService.getMatchedMenuItems(ctrl.searchItem)
				.then(function(data){
					
					ctrl.found = data;
				})
				.catch(function(err){
	
					console.log(err);
				})
				.finally(function(){
					
					ctrl.isSubmitting = false;
				});
		};

		ctrl.removeItem = function(index){

			ctrl.found.splice(index, 1);
		};

	};

	function MenuSearchService($http, menuItemsFilter){
		
		this.getMatchedMenuItems = function(searchItem){

			return $http({
				method: 'GET',
				url: 'https://davids-restaurant.herokuapp.com/menu_items.json'
			})
			.then(function(result){

				var foundItems = result.data.menu_items;
				foundItems = menuItemsFilter(foundItems, searchItem);

				return foundItems;
			})
			.catch(function(err){
				
				return err;
			});
		};

	};

	function MenuItemsFilter(){

		return function(arr, match){
			var regex = new RegExp(match, 'gi');

			return arr.filter(function(item){
				return regex.test(item.description);
			});
		};

	};

	function FoundItemsDirective(){

		return {
			restrict: 'E',
			templateUrl: 'found-items.html',
			scope: {
				items: '<',
				onRemove: '&'
			},
			controller: FoundItemsDirectiveController,
			controllerAs: 'foundItemsCtrl',
			bindToController: true
		};

	};

	function FoundItemsDirectiveController(){};

})();