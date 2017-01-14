(function(){
	'use strict';

	angular.module('MenuApp')
		.component('categories', {
			templateUrl: 'src/menuApp/templates/components/categories.template.html',
			bindings: {
				items: '<'
			},
			controller: CategoriesComponentController
		});

		CategoriesComponentController.$inject = ['$location'];

		function CategoriesComponentController($location){

			this.isActive = function(category){
				var regex = new RegExp('/' + category + '$');
				return regex.test($location.path());
			};

		};

})();