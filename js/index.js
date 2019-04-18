(function() {
	'use strict';

	const GENERATE_BTN = document.getElementById('GenerateMealList');
	const URL = 'http://www.thebrianpye.com/Recipes/meals.json';
	const BTN_TEXT = [
		`Make it again`,
		`Nope, try again`, 
		`Keep on trying`, 
		`I Don't like this`
	];

	// Click event to create the initial list
	GENERATE_BTN.addEventListener('click', (ev) => XHR_Events(ev)); // unclear about this part (ev) => XHR_Events(ev)

	const XHR_Events = function XHR_Events(e) {
		
		const listContainer = document.querySelector('.js-list-container');
		const days = 7; // setting hard days value for now
		const newMessage = BTN_TEXT[Math.floor(Math.random() * BTN_TEXT.length)];
		// Remove meal list if it exists already
		if (listContainer !== null) { removeList(); }

		GENERATE_BTN.textContent = newMessage;
		// GENERATE_BTN.innerHTML = newMessage;

		fetch(URL).then(response => response.json())
			.then(response => createList(response));

		function createList(response) {
			// Create new list based off of the response array
			selectRandomMeals(days, response, createListHTML);

			const list = document.querySelector('.js-list');
			const removeBtnArr = document.querySelectorAll('.js-remove');
			const linkItemArr = document.querySelectorAll('.js-link-item');

			// linkItemArr.forEach(function(item) {
			// 	let link = item.closest('a')
			// 	link.addEventListener('click', showDetails);
			// });

			// Add event listeners to X btns
			removeBtnArr.forEach((item) => {
				const button = item.closest('button');
				button.addEventListener('click', removeListItem);
			});
		}
	};

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
		let container = document.createElement('section'),
				main = document.querySelector('main'),
				list = document.createElement('ul'),
				btnWrapper = document.createElement('div');

		container.className = 'content-container --no-border js-list-container';
		list.className = 'list js-list';
		btnWrapper.className = 'btn-wrapper';

		main.appendChild(container);
		container.appendChild(list);
		container.appendChild(btnWrapper);

		populateList(arr);
	} 
	
	// Create list items from array and inject into DOM
	const populateList = function populateList(arr) {	
		let menuList = document.querySelector('ul');

		arr.forEach(function(item) {
			let	link = document.createElement('a'),
					linkItem = document.createElement('li'),
					removeBtn = document.createElement('button');
		
			link.innerHTML = item.name;
			link.className = 'js-link-item'
			removeBtn.className = 'secondary-btn kill-item-btn js-remove';
			removeBtn.innerHTML = 'x';

			linkItem.appendChild(link);
			linkItem.appendChild(removeBtn);
			menuList.appendChild(linkItem);
		});
	}

	// Remove list from DOM
	const removeList = function removeList() {
		let listContainer = document.querySelector('.js-list-container');
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
