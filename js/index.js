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

// Meal object - should this be const, var, or let?
const MEAL = function(mealName, mealType) {
              	this.mealName = mealName,
                this.mealType = mealType;
              };

const MEALFORM = document.getElementById('MealForm');

let MealList = [];
    
document.addEventListener('click', function (event) {

	if(event.target.matches('#AddMealBtn')) {
    // Killing submit button for now
    event.preventDefault();

    let mealName = document.querySelector('input[name="meal_name"]').value,
        meatCheck = document.querySelector('input[name = "has_meat"]:checked');

    if(meatCheck !== null && mealName !== "") {

      let mealType = meatCheck.value == 'true' ? 'meat-eater' : 'vegetarian',
          newMeal = new  MEAL(mealName, mealType);

      console.log(`Meal Name: ${mealName}\nMeal Type: ${mealType}`);

      MealList.push(newMeal);
    
      createHtmlBlock(MealList);

      return MealList;

    } else {
      // alert the user and bail
      window.alert('Inputs cannot be blank');
      return;
    }
	}
}, false);

var createHtmlBlock = function makeHtml(listArray) {

  var divElem = document.createElement('div'),
      meatList = document.createElement('ul'), 
      vegList = document.createElement('ul'), 
      listItem = document.createElement('li'),
      appendBlock = document.querySelector('main');

  // Create classes for js hooks
  meatList.className = "js-meatList";
  vegList.className = "js-vegList";
  // Build container & list html then append to the main elem
  divElem.appendChild(meatList);
  divElem.appendChild(vegList);
  appendBlock.appendChild(divElem);

  // Build html list
  listArray.forEach(function(item) {
    // Set the name 
    listItem.innerHTML = item.mealName; 
    // Add to appropriate list
    switch(item.mealType) {
      case 'meat-eater':
        console.log(' it\'s a bloodlusting carnivor!');
        meatList.appendChild(listItem);
        break;
      case 'vegetarian':
        console.log(' it\'s a hippy-dippy veg head!');
        vegList.appendChild(listItem);
        break;
    }
  })
};

// createHtmlBlock(MealList);