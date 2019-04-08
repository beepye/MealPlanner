(function() {
	'use strict';

	const GENERATE_BTN = document.getElementById('GenerateMealList'),
		 		URL = 'http://www.thebrianpye.com/Recipes/meals.json';

	// Click event to create the initial list
	GENERATE_BTN.addEventListener('click', function(ev) {
		
		let listContainer = document.querySelectorAll('.content-container')[1],
				mealList = [], days = 5; // setting hard days value for now
		// Remove meal list if it exists before creating a new one
		if(listContainer != undefined) { removeList(); }
		
		getMeals(function(response) {
			// Add items to meal list
			response.forEach(function(item, index) { mealList.push(item); });
			// Create new list based off of the response
			selectRandomMeals(days, mealList, createListHTML);

			let clearBtn = document.querySelector('.js-clear'),
					regenBtn = document.querySelector('.js-regen'),
					removeBtn = document.querySelectorAll('.js-remove');
			// Clear the list - remove from DOM
			clearBtn.addEventListener('click', removeList);
			// Clear the list and create another - remove old from DOM
			regenBtn.addEventListener('click', function() {
				regenerateList(days, mealList, createListHTML);
			});
			// Add event listener to each kill button
			removeBtn.forEach(function(item) { 
				item.addEventListener('click', removeListItem);
			});
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
		// Create html elems
		let container = document.createElement('section'),
				main = document.querySelector('main'),
				list = document.createElement('ul'),
				btnWrapper = document.createElement('div'),
				regenBtn = document.createElement('button'),
				clearBtn = document.createElement('button');

		// Add props to elems
		container.className = 'content-container --no-border';
		list.className = 'list js-list';
		btnWrapper.className = 'btn-wrapper';
		clearBtn.className = 'secondary-btn --link js-clear';
		clearBtn.innerHTML = 'Clear the list';
		regenBtn.className = 'secondary-btn --link js-regen';
		regenBtn.innerHTML = 'Try again';

		// Build the list
		main.appendChild(container);
		container.appendChild(list);
		container.appendChild(btnWrapper);
		btnWrapper.appendChild(clearBtn);
		btnWrapper.appendChild(regenBtn);

		populateList(arr);
	} 
	
	// Create list items from array and inject into DOM
	var populateList = function populateList(arr) {	
		let menuList = document.querySelector('ul');

		arr.forEach(function(item) {
			// Create list html elems
			let	link = document.createElement('a'),
					linkItem = document.createElement('li'),
					removeBtn = document.createElement('button');
		
			// Add props to elems
			link.innerHTML = item.name;
			removeBtn.className = 'secondary-btn kill-item-btn js-remove';
			removeBtn.innerHTML = 'x';

			// Build the list item
			linkItem.appendChild(link);
			linkItem.appendChild(removeBtn);
			menuList.appendChild(linkItem);
		});
	}

	// Remove container from DOM
	var removeList = function removeList() {
		let listContainer = document.querySelectorAll('.content-container')[1];
		listContainer.remove();
	}

	var removeListItem = function removeListItem() {
		let listItem = this.closest('li');
		listItem.remove();
	}
	
	// Create a new list and remove the old one
	var regenerateList = function regenerateList(days, mealList, createListHTML) {
		removeList();
		selectRandomMeals(days, mealList, createListHTML)
	}
	// 	var myMeals = Meals.filter(function(whom){ return whom.owner === 'Brian'}).map(function(whom){ return whom.name; });

}());
