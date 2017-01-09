(function(){
	'use strict';

	angular.module('ShoppingListCheckOff', [])
	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

	ToBuyController.$inject = ['ShoppingListCheckOffService'];
	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];	

	function ToBuyController(ShoppingListCheckOffService){

		this.toBuy = ShoppingListCheckOffService.getToBuy();

		this.buy = function(item){
			ShoppingListCheckOffService.buy(item);
		};
	};

	function AlreadyBoughtController(ShoppingListCheckOffService){

		this.bought = ShoppingListCheckOffService.getBought();
	};

	function ShoppingListCheckOffService(){

		var toBuy = [
			{
				name: 'Cookies',
				quantity: 10
			},
			{
				name: 'Chips',
				quantity: 7
			},
			{
				name: 'Candies',
				quantity: 8
			}
		];
		var bought = [];

		this.getToBuy = function(){
			return toBuy;
		};

		this.getBought = function(){
			return bought;
		};

		this.buy = function(item){
			bought.push(item);

			var index = toBuy.indexOf(item);
			toBuy.splice(index, 1);
		};

	};

})();