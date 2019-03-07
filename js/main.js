'use strict';

/*  
	On clicking the Add Meal button:
		1. Grab the value of each input and assign to a variable
		2. Use those input values to create a new meal object
			a. Does the item name already exist?
			b. If yes do not validate, prompt user to change name
			c. If no then create the meal obj
		3. Populate the mealList array with the new meal object
*/

var mealList = [],
	meal_name = document.querySelectorAll('[name="meal_name"]'),
	meal_typel = document.querySelectorAll('[name="meal_type"]');

// Meal object proto
const Meal = function(meal_name, meal_type) {
	this.meal_name = meal_name,
	this.meal_type = meal_type;
}