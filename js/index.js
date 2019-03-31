(function() {
	'use strict';

	const GENERATE_BTN = document.getElementById('GenerateMealList'),
		 		URL = 'http://www.thebrianpye.com/Recipes/meals.json';
				
	var mealList = []

	function getMeals(callback) {
		// Set up initial request
		var	xhr = new XMLHttpRequest();
		xhr.responseType = 'json';
		xhr.open('GET', URL);

		xhr.onload = function() { callback(xhr.response); };

		xhr.send();
	}

	getMeals(function(response) {
		// Cycle through each obj in the arr
		response.forEach(function(item) {
			console.log(item);
			mealList.push(item);
		});

		console.log(mealList.length);
	});

	// function doTheDamnThing() {
	//   getBriansMeals();
	// }

	// var getBriansMeals = function() {
	// 	const Meals = request.response;
	// 	var myMeals = Meals.filter(function(whom){ return whom.owner === 'Brian'}).map(function(whom){ return whom.name; });
	// 	console.log(myMeals);
	// }

}());
