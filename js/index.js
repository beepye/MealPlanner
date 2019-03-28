(function() {
	'use strict';

	const GENERATE_BTN = document.getElementById('GenerateMealList');

	var requestURL = 'http://www.thebrianpye.com/Recipes/meals.json',
			request = new XMLHttpRequest();

	request.responseType = 'json';
	// request.addEventListener('load', doTheDamnThing);
	request.open('GET', requestURL);
	request.send();

	request.onload = function() {
	  const MEALS = request.response;
	  console.log(MEALS);
	}

	// GENERATE_BTN.addEventListener('click', function (e) {
	// 	alert('Nothing is functioning yet');
	// })

	// function doTheDamnThing() {
	//   getBriansMeals();
	// }

	// var getBriansMeals = function() {
	//   const Meals = request.response;
	// 	var myMeals = Meals.filter(function(whom){ return whom.owner === 'Brian'}).map(function(whom){ return whom.name; });
	// 	console.log(myMeals);
	// }

}());
