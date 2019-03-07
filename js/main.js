'use strict';

/*  
On clicking the Add Meal button:
	1. Grab the value of each input and assign to a variable - DONE!
	2. Use those input values to create a new meal object
		a. Do both inputs have a value? - DONE!
			i. Yes: proceed with adding the meal
			ii. No: alert user and bail
		b. Does the item name already exist?
			i. Yes: do not validate, prompt user to change name
			ii. No: then create the meal obj
	3. Populate the mealList array with the new meal object - DONE!
*/

var mealList = [];

// Meal object proto
const Meal = function(meal_name, meal_type) {
	this.meal_name = meal_name,
	this.meal_type = meal_type;
}

document.addEventListener('click', function (event) {

	// !!! querySelectorAll returned undefined - not sure why but would like to find out
	var meal_name = document.querySelector('input[name="meal_name"]').value,
		meal_type = document.querySelector('input[name="meal_type"]').value;

	if (event.target.matches('#AddMealBtn')) {
		// console.log("Meal Name: " + meal_name);
		// console.log("Meal Type: " + meal_type);

		// If the name & type both have values then proceed
		if (!meal_type == "" && !meal_name == "") {

			var listLength = mealList.length,
				newMeal = new  Meal(meal_name, meal_type);

			// Add meal to array
			mealList.push(newMeal);
		}
		// alert the user inputs cannot be empty and bail
		else { 
			window.alert("Inputs cannot be blank");
			return;
		}
	}
	// If it doesn't match do nothing
	// I don't think I need this but will leave it for now
	else { return; }

	// Kill the default behavior
	event.preventDefault();

	// Log the clicked element in the console
	console.log(event.target);

}, false);