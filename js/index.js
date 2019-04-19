(function() {
	'use strict';

	const genMenuBtn = document.getElementById('GenerateMealList');
	const url = 'http://www.thebrianpye.com/Recipes/meals.json';
	const days = 7; // setting hard days value for now
	const btnText = [
		`Make it again`,
		`Nope, try again`, 
		`Keep on trying`, 
		`I Don't like this`
	];

	// Click event to create the menu item list
	genMenuBtn.addEventListener('click', jsonResponse);
  
	function jsonResponse(e) {
		const listContainer = document.querySelector('.js-list-container');
		const newMessage = btnText[Math.floor(Math.random() * btnText.length)];
		// Remove meal list if it exists already
		listContainer ? removeList() : undefined;
		// Which of the following is more appropriate: textContent or innerHTML?
		genMenuBtn.innerHTML = newMessage; /* genMenuBtn.textContent = newMessage; */

		fetch(url).then(response => response.json())
			.then(response => createMenu(response));
	};

	function createMenu(response) {
			// Create new list based off of the response array
			selectRandomMeals(days, response, createListHTML);

			const removeBtnArr = document.querySelectorAll('.js-btn--remove');
			const	clearBtn = document.querySelector('js-btn--clear')
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

	// Create a randomly generated array from JSON response
	function selectRandomMeals(days, arr, callback) {
		const randomlyOrderedArray = arr.sort(() => { return .5 - Math.random(); });
		const newArray = randomlyOrderedArray.slice(0, days);

		callback(newArray);
	}

	// Create HTML list elements and inject into DOM
	function createListHTML(arr) {
		const container = document.createElement('section');
		const main = document.querySelector('main');
		const list = document.createElement('ul');
		const btnWrapper = document.createElement('div');
		const clearBtn = document.createElement('button');

		container.className = 'content-container --no-border js-list-container';
		list.className = 'list js-list';
		btnWrapper.className = 'btn-wrapper';
		clearBtn.className = 'secondary-btn --link js-btn--clear';
		clearBtn.innerHTML = 'Clear list';

		main.appendChild(container);
		container.appendChild(list);
		container.appendChild(btnWrapper);
		btnWrapper.appendChild(clearBtn);
		clearBtn.addEventListener('click', removeList);

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
			removeBtn.className = 'secondary-btn kill-item-btn js-btn--remove';
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
