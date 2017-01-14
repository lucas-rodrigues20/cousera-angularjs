(function(){
	'use strict';

	angular.module('MenuApp')
		.component('items', {
			templateUrl: 'src/menuApp/templates/components/items.template.html',
			bindings: {
				items: '<'
			}
		});

})();