// S.O. article about loading jQ w/ webpack:
// https://stackoverflow.com/questions/28969861/managing-jquery-plugin-dependency-in-webpack
// var $ = require('jquery');
// var modernizr = require('modernizr');
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

// Soon this will grab and existing list of meals - not sure how to have it persist yet... json? db? idk..
var mealList = [];

// Meal object proto
const Meal = function(meal_name, meal_type) {
	this.meal_name = meal_name,
  this.meal_type = meal_type;
	// this.meal_type = meal_type;
}

document.addEventListener('click', function (event) {

	if(event.target.matches('#AddMealBtn')) {

    event.preventDefault();

    var meal_name = document.querySelector('input[name="meal_name"]').value,
        meat_check = document.querySelector('input[name = "has_meat"]:checked');

		// If the name & type both have values then proceed
    if(meat_check === null || meal_name == "") {
      // alert the user inputs cannot be empty and bail
      window.alert("Inputs cannot be blank");
      return;
    } 
    else {
      // setting the var meal_type here because clicks outside the button were throwing errors - will address later
      var meal_type = meat_check.value == "true" ? "meat-eater" : "vegetarian",
          newMeal = new  Meal(meal_name, meal_type);

      // console.log("Meal Name: " + meal_name + '\n' + "Meal Type: " + meal_type);

      // Add new meal to the list
      mealList.push(newMeal);
    }
    return mealList;
	}
	else { return; }
}, false);