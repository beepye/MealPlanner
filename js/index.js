(function() {
	'use strict';

	var requestURL = 'http://www.thebrianpye.com/Recipes/meals.json',
			request = new XMLHttpRequest();

	request.responseType = 'json';
	request.addEventListener('load', doTheDamnThing);
	request.open('GET', requestURL);
	request.send();

	// request.onload = function() {
	//   const Meals = request.response;
	//   console.log(Meals[0]);
	// }

	function doTheDamnThing() {
	  logOurMealLists();
	}

	var logOurMealLists = function() {
	  getBriansMeals();
	  getRonsMeals();
	}

	var getBriansMeals = function() {
	  const Meals = request.response;
		var myMeals = Meals.filter(function(whom){ return whom.owner === 'Brian'}).map(function(whom){ return whom.name; });
		console.log(myMeals);
	}

	var getRonsMeals = function() {
	  const Meals = request.response;
		var myMeals = Meals.filter(function(whom){ return whom.owner === 'Ronnie'}).map(function(whom){ return whom.name; });
		console.log(myMeals);
	}

}());
