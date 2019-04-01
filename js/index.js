(function() {
	'use strict';

	const GENERATE_BTN = document.getElementById('GenerateMealList'),
		 		URL = 'http://www.thebrianpye.com/Recipes/meals.json';

	GENERATE_BTN.addEventListener('click', function(ev) {
		
		let mealList = [],
				days = 5; // setting hard value for now
		// Call for the JSON and pass anon callback function
		getMeals(function(response) {
			// Cycle through each obj in the JSON arr
			response.forEach(function(item, index) {
				console.log(`${index} : ${item.name} : ${item.owner}`);
				mealList.push(item);
			});

			selectRandomMeals(days, mealList);
		});
	});

	var getMeals = function getMeals(callback) {
		// Set up JSON data request
		var	xhr = new XMLHttpRequest();
		xhr.responseType = 'json';
		xhr.open('GET', URL);
		// Pass the response in a callback function
		xhr.onload = function() { callback(xhr.response); };

		xhr.send();
	}
	
	var selectRandomMeals = function selectRandomMeals(days, arr) {
		// Reorder array in random sequence
		let randomlyOrderedArray = arr.sort(function() { return .5 - Math.random(); });
		// Take re-ordered array and only keep as many as needed
		let newArray = randomlyOrderedArray.slice(0, days);
		console.log(newArray);
	}

	// 	var myMeals = Meals.filter(function(whom){ return whom.owner === 'Brian'}).map(function(whom){ return whom.name; });

}());
