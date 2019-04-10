(function() {
	'use strict';

	const GENERATE_BTN = document.getElementById('GenerateMealList'),
		 		URL = 'http://www.thebrianpye.com/Recipes/meals.json',
				BTN_TEXT = [
					`Make it again`,
					`Nope, try again`, 
					`Keep on trying`, 
					`I Don\'t like this`
				];

	let count = 0;
	// Click event to create the initial list
	GENERATE_BTN.addEventListener('click', function(ev) {
		
		let listContainer = document.querySelectorAll('.content-container')[1],
				days = 7, // setting hard days value for now
				newMessage = BTN_TEXT[Math.floor(Math.random() * BTN_TEXT.length)];

		// Remove meal list if it exists already
		if(listContainer !== undefined) { removeList(); }

		GENERATE_BTN.innerHTML = newMessage;
		count++
		if(count % 10 === 0) { GENERATE_BTN.innerHTML = `Are you effing serious?`; }

		getMeals(function(response) {
			// Create new list based off of the response array
			selectRandomMeals(days, response, createListHTML);

			let list = document.querySelector('.js-list'),
					removeBtnArr = document.querySelectorAll('.js-remove'),
					linkItemArr = document.querySelectorAll('.js-link-item');

			// linkItemArr.forEach(function(item) {
			// 	let link = item.closest('a')
			// 	link.addEventListener('click', showDetails);
			// });

			// Add event listeners to X btns
			removeBtnArr.forEach(function(item) {
				let button = item.closest('button');
				// Remove individual list item
				button.addEventListener('click', removeListItem);
			});
		});
	});

	// Create XHR request
	const getMeals = function getMeals(callback) {
		// Set up JSON data request
		let	xhr = new XMLHttpRequest();
		xhr.responseType = 'json';
		xhr.open('GET', URL);
		// Pass the response in a callback function
		xhr.onload = function() { callback(xhr.response); };
		xhr.send();
	}

	// Create a randomly generated array from JSON response
	const selectRandomMeals = function selectRandomMeals(days, arr, callback) {
		// Reorder array in random sequence
		let randomlyOrderedArray = arr.sort(function() { return .5 - Math.random(); });
		// Take re-ordered array and only keep as many as needed
		let newArray = randomlyOrderedArray.slice(0, days);
		callback(newArray);
	}

	// Create HTML list elements and inject into DOM
	const createListHTML = function createListHTML(arr) {
		// Create html elems
		let container = document.createElement('section'),
				main = document.querySelector('main'),
				list = document.createElement('ul'),
				btnWrapper = document.createElement('div');

		// Add props to elems
		container.className = 'content-container --no-border';
		list.className = 'list js-list';
		btnWrapper.className = 'btn-wrapper';

		// Build the list
		main.appendChild(container);
		container.appendChild(list);
		container.appendChild(btnWrapper);

		populateList(arr);
	} 
	
	// Create list items from array and inject into DOM
	const populateList = function populateList(arr) {	
		let menuList = document.querySelector('ul');

		arr.forEach(function(item) {
			// Create list html elems
			let	link = document.createElement('a'),
					linkItem = document.createElement('li'),
					removeBtn = document.createElement('button');
		
			// Add props to elems
			link.innerHTML = item.name;
			link.className = 'js-link-item'
			removeBtn.className = 'secondary-btn kill-item-btn js-remove';
			removeBtn.innerHTML = 'x';

			// Build the list item
			linkItem.appendChild(link);
			linkItem.appendChild(removeBtn);
			menuList.appendChild(linkItem);
		});
	}

	// Remove list from DOM
	const removeList = function removeList() {
		let listContainer = document.querySelectorAll('.content-container')[1];
		listContainer.remove();
	}

	// Remove individual list item
	const removeListItem = function removeListItem(e) {
		let listItem = e.target.closest('li');		
		listItem.remove();
	}
	
	const refreshItem = function refreshItem(arr) {
		// compare arrays and return unrepeated obj to replace current
	}

	// const showDetails = function showDetails(e) {
	// 	let listItem = this.closest('li');
	// }
	// 	const myMeals = Meals.filter(function(whom){ return whom.owner === 'Brian'}).map(function(whom){ return whom.name; });

}());
