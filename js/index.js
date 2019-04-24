(function() {
	'use strict';

	const genMenuBtn = document.getElementById('GenerateMealList');
	const url = 'http://www.thebrianpye.com/Recipes/meals.json';
	const origMessage = genMenuBtn.textContent;
	const btnText = [
		`Make it again`,
		`Nope, try again`, 
		`Keep on trying`, 
		`I Don't like this`
	];
	// Click event to create the menu list
	genMenuBtn.addEventListener('click', () => {
		document.querySelector('.js-list-container') ? removeList() : undefined;

		getMeals();		
	});

	// Make call to external json file
	function getMeals(e) {
		fetch(url)
			.then(response => response.json())
			.then(response => createMenu(response))
			.catch(err => errorLog(err)); 
	};

	// Build and inject menu based on fetch() response
	function createMenu(response) {
		const days = document.getElementById('dayOptions').value;

		selectRandomMeals(response, days, createListHTML);
		genMenuBtn.textContent = btnText[Math.floor(Math.random() * btnText.length)];
	}

	// Create a randomly generated array from fetch() response
	function selectRandomMeals(arr, days, makeMenu) {
		const randomlyOrderedArray = arr.sort(() => { return .5 - Math.random(); });
		const newArray = randomlyOrderedArray.slice(0, days);

		makeMenu(newArray);
	}

	// Create HTML elements and inject into DOM
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
	
	// Create HTML list items from array and inject into DOM
	function populateList(arr) {	
		const menuList = document.querySelector('.js-list');

		arr.forEach(function(item) {
			const link = document.createElement('a');
			const linkItem = document.createElement('li');
			const removeBtn = document.createElement('button');
		
			link.innerHTML = item.name;
			link.className = 'js-link-item';
			removeBtn.className = 'secondary-btn --link js-btn--remove';
			removeBtn.innerHTML = 'x';
			removeBtn.addEventListener('click', removeListItem);
			// link.addEventListener('click', showDetails);

			linkItem.appendChild(link);
			linkItem.appendChild(removeBtn);
			menuList.appendChild(linkItem);
		});
	}

	// Remove menu from DOM
	function removeList() {
		const listContainer = document.querySelector('.js-list-container');
		listContainer.remove();
		genMenuBtn.textContent = origMessage;
	}

	// Remove individual menu item
	function removeListItem(e) {
		const listItem = e.target.closest('li');		
		listItem.remove();
	}
	
	// Refresh individual menu item
	function refreshItem(arr) {
		// compare arrays and return unrepeated obj to replace current
	}

	function errorLog(err) {
		console.log(`Something went wrong:\n${err}`);
		// inject error warning into UI
		// telling user to try again
	}

	// const showDetails = function showDetails(e) {
	// 	let listItem = this.closest('li');
	// }

	// const myMeals = Meals.filter(function(whom){ return whom.owner === 'Brian'}).map(function(whom){ return whom.name; });

}());