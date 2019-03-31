(function() {
	'use strict';

	const GENERATE_BTN = document.getElementById('GenerateMealList'),
		 		URL = 'http://www.thebrianpye.com/Recipes/meals.json';
				
	var mealList = []

	GENERATE_BTN.addEventListener('click', function(ev) {
		// Call for the JSON and pass anon callback function
		getMeals(function(response) {
			// Cycle through each obj in the JSON arr
			response.forEach(function(item) {
				console.log(item);
				mealList.push(item);
			});

			console.log(mealList.length);
		});
	});

	var getMeals = function(callback) {
		// Set up JSON data request
		var	xhr = new XMLHttpRequest();
		xhr.responseType = 'json';
		xhr.open('GET', URL);
		// Pass the response in a callback function
		xhr.onload = function() { callback(xhr.response); };

		xhr.send();
	}

	// var getBriansMeals = function() {
	// 	const Meals = request.response;
	// 	var myMeals = Meals.filter(function(whom){ return whom.owner === 'Brian'}).map(function(whom){ return whom.name; });
	// 	console.log(myMeals);
	// }

}());
