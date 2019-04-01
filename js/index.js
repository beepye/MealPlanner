(function() {
	'use strict';

	const GENERATE_BTN = document.getElementById('GenerateMealList'),
		 		URL = 'http://www.thebrianpye.com/Recipes/meals.json';

	GENERATE_BTN.addEventListener('click', function(ev) {
		
		let mealList = [], days = 5; // setting hard days value for now
		
		getMeals(function(response) {
			response.forEach(function(item, index) { mealList.push(item); });

			selectRandomMeals(days, mealList, createListHTML);
		});
	});

	// Create XHR request
	var getMeals = function getMeals(callback) {
		// Set up JSON data request
		var	xhr = new XMLHttpRequest();
		xhr.responseType = 'json';
		xhr.open('GET', URL);
		// Pass the response in a callback function
		xhr.onload = function() { callback(xhr.response); };
		xhr.send();
	}

	// Create a randomly generated array from JSON response
	var selectRandomMeals = function selectRandomMeals(days, arr, callback) {
		// Reorder array in random sequence
		let randomlyOrderedArray = arr.sort(function() { return .5 - Math.random(); });
		// Take re-ordered array and only keep as many as needed
		let newArray = randomlyOrderedArray.slice(0, days);
		callback(newArray);
	}

	// Create HTML list elements and inject into DOM
	var createListHTML = function createListHTML(arr) {
		let container = document.createElement('section'),
				main = document.querySelector('main'),
				list = document.createElement('ul');
		// Build list for meals
		list.className = "meal-list";
		main.append(container);
		container.append(list);

		populateList(arr);
	} 
	
	// Create list items from array and inject into DOM
	var populateList = function populateList(arr) {	
		let menuList = document.querySelector('ul');

		arr.forEach(function(item) {
			let	link = document.createElement('a'),
					linkItem = document.createElement('li');
			// Build each list item and inject into DOM
			link.innerHTML = item.name;
			linkItem.append(link);
			menuList.append(linkItem);
		});
	}

	// 	var myMeals = Meals.filter(function(whom){ return whom.owner === 'Brian'}).map(function(whom){ return whom.name; });

}());
