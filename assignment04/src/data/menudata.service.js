(function(){
	'use strict';

	angular.module('data')
		.service('MenuDataService', MenuDataService)
		.constant('APIBasePath', 'https://davids-restaurant.herokuapp.com');

	MenuDataService.$inject = ['$http', 'APIBasePath'];

	function MenuDataService($http, APIBasePath){

		this.getAllCategories = function(){
			
			return $http({
				method: 'GET',
				url: (APIBasePath + '/categories.json')
			})
			.then(function(result){
				
				return result.data;
			})
			.catch(function(err){

				return err;
			});
		};

		this.getItemsForCategory = function(categoryShortName){
			
			return $http({
				method: 'GET',
				url: (APIBasePath + '/menu_items.json'),
				params: {
					category: categoryShortName
				}
			})
			.then(function(result){
				
				return result.data.menu_items;
			})
			.catch(function(err){

				return err;
			});
		};

	};

})();