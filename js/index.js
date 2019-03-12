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
// Soon this will grab an existing list of meals
// not sure how to have it persist yet... can it be an external json? db? idk..
var mealList = [];

// Meal object - should this be const, var, or let?
const Meal = function(meal_name, meal_type) {
	this.meal_name = meal_name,
  this.meal_type = meal_type;
}

document.addEventListener('click', function (event) {

	if(event.target.matches('#AddMealBtn')) {
    // Killing submit button for now
    event.preventDefault();

    let meal_name = document.querySelector('input[name="meal_name"]').value,
        meat_check = document.querySelector('input[name = "has_meat"]:checked');

    if(meat_check !== null && meal_name !== "") {

      let meal_type = meat_check.value == "true" ? "meat-eater" : "vegetarian",
          newMeal = new  Meal(meal_name, meal_type);

      console.log(`Meal Name: ${meal_name} \nMeal Type: ${meal_type}`);

      mealList.push(newMeal);
    
      console.log(mealList);

      return mealList;
    } 
    else {
      // alert the user and bail
      window.alert("Inputs cannot be blank");
      return;
    }
	}
}, false);


