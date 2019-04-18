(function() {
	'use strict';

	const genButton = document.getElementById('GenerateMealList');
	const url = 'http://www.thebrianpye.com/Recipes/meals.json';
	const btnText = [
		`Make it again`,
		`Nope, try again`, 
		`Keep on trying`, 
		`I Don't like this`
	];

	// Click event to create the initial list
	genButton.addEventListener('click', (ev) => jsonResponse(ev)); // unclear about this part (ev) => jsonResponse(ev)

	const jsonResponse = function jsonResponse(e) {
		
		const listContainer = document.querySelector('.js-list-container');
		const days = 7; // setting hard days value for now
		const newMessage = btnText[Math.floor(Math.random() * btnText.length)];
		// Remove meal list if it exists already
		if (listContainer !== null) { removeList(); }

		genButton.textContent = newMessage;
		// genButton.innerHTML = newMessage;

		fetch(url).then(response => response.json())
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
	function selectRandomMeals(days, arr, callback) {
		// Reorder array in random sequence
		const randomlyOrderedArray = arr.sort(() => { 
			return .5 - Math.random(); 
		});
		// Take re-ordered array and only keep as many as needed
		const newArray = randomlyOrderedArray.slice(0, days);
		callback(newArray);
	}

	// Create HTML list elements and inject into DOM
	function createListHTML(arr) {
		const container = document.createElement('section');
		const main = document.querySelector('main');
		const list = document.createElement('ul');
		const btnWrapper = document.createElement('div');

		container.className = 'content-container --no-border js-list-container';
		list.className = 'list js-list';
		btnWrapper.className = 'btn-wrapper';

		main.appendChild(container);
		container.appendChild(list);
		container.appendChild(btnWrapper);

		populateList(arr);
	} 
	
	// Create list items from array and inject into DOM
	function populateList(arr) {	
		const menuList = document.querySelector('ul');

		arr.forEach(function(item) {
			const link = document.createElement('a');
			const linkItem = document.createElement('li');
			const removeBtn = document.createElement('button');
		
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
	function removeList() {
		const listContainer = document.querySelector('.js-list-container');
		listContainer.remove();
	}

	// Remove individual list item
	function removeListItem(e) {
		const listItem = e.target.closest('li');		
		listItem.remove();
	}
	
	function refreshItem(arr) {
		// compare arrays and return unrepeated obj to replace current
	}

	// const showDetails = function showDetails(e) {
	// 	let listItem = this.closest('li');
	// }
	// 	const myMeals = Meals.filter(function(whom){ return whom.owner === 'Brian'}).map(function(whom){ return whom.name; });

}());
