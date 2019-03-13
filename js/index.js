'use strict';
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
      
      // Does item name already exist?
      // var match = doesMealExist(MealList, mealName);
      if(doesMealExist(MealList, mealName)) { 
      console.log('there\'s a match baby!');}

      let mealType = meatCheck.value == 'true' ? 'meat-eater' : 'vegetarian',
          newMeal = new  MEAL(mealName, mealType);

      console.log(`Meal Name: ${mealName}\nMeal Type: ${mealType}`);
      console.log(MealList);

      MealList.push(newMeal);
      // Add meals to appropriate lists
      populateMealLists(MealList);
      // Reset form
      MEALFORM.reset();

      return MealList;

    } else {
      // alert the user and bail
      window.alert('Inputs cannot be blank');
      return;
    }
  }
}, false);

// Check if meal already exists
var doesMealExist = function checkForMatch(array, name) {

  let count = 0,
      mealExists;
  // If there's a name match up the counter
  array.forEach(function(item) { if(item.mealName === name) { count++ }})
  // This is the only method that's worked so far for detecting
  // whether the name already exists
  if(count >= 1) { mealExists = true; } else { mealExists = false; }

  return mealExists;
}

// Build html container + lists
var createHtmlBlock = function makeHtml() {

  let divElem = document.createElement('div'),
      meatList = document.createElement('ul'), 
      vegList = document.createElement('ul'), 
      appendBlock = document.querySelector('main');

  // Create classes for js hooks
  divElem.className = 'js-container'
  meatList.className = 'js-meatList';
  vegList.className = 'js-vegList';
  // Build container + list html then append to the main elem
  divElem.appendChild(meatList);
  divElem.appendChild(vegList);
  appendBlock.appendChild(divElem);
}

// Populate lists with MealList data
var populateMealLists = function thing(listArray) {

  let divElem = document.querySelector('.js-container');
  // Do the lists already exist?
  if(!divElem) {
    createHtmlBlock();
  }

  let meatList = document.querySelector('.js-meatList'),
      vegList = document.querySelector('.js-vegList');

  // Build html list
  listArray.forEach(function(item) {
    // Create list elem
    let listItem = document.createElement('li'),
        linkTag = document.createElement('a');

    listItem.appendChild(linkTag);
    // Inject the meal name 
    linkTag.innerHTML = item.mealName; 
    // Add to appropriate list
    switch(item.mealType) {
      case 'meat-eater':
        meatList.appendChild(listItem);
        break;
      case 'vegetarian':
        vegList.appendChild(listItem);
        break;
    }
  })
};
