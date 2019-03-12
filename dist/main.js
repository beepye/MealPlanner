/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/*  \nOn clicking the Add Meal button:\n\t1. Grab the value of each input and assign to a variable - DONE!\n\t2. Use those input values to create a new meal object\n\t\ta. Do both inputs have a value? - DONE!\n\t\t\ti. Yes: proceed with adding the meal \n\t\t\tii. No: alert user and bail\n\t\tb. Does the item name already exist?\n\t\t\ti. Yes: do not validate, prompt user to change name\n\t\t\tii. No: then create the meal obj\n\t3. Populate the mealList array with the new meal object - DONE!\n*/\n// Meal object - should this be const, var, or let?\n\nvar MEAL = function MEAL(mealName, mealType) {\n  this.mealName = mealName, this.mealType = mealType;\n};\n\nvar MEALFORM = document.getElementById('MealForm');\nvar MealList = [];\ndocument.addEventListener('click', function (event) {\n  if (event.target.matches('#AddMealBtn')) {\n    // Killing submit button for now\n    event.preventDefault();\n    var mealName = document.querySelector('input[name=\"meal_name\"]').value,\n        meatCheck = document.querySelector('input[name = \"has_meat\"]:checked');\n\n    if (meatCheck !== null && mealName !== \"\") {\n      var mealType = meatCheck.value == 'true' ? 'meat-eater' : 'vegetarian',\n          newMeal = new MEAL(mealName, mealType);\n      console.log(\"Meal Name: \".concat(mealName, \"\\nMeal Type: \").concat(mealType));\n      MealList.push(newMeal);\n      createHtmlBlock(MealList);\n      return MealList;\n    } else {\n      // alert the user and bail\n      window.alert('Inputs cannot be blank');\n      return;\n    }\n  }\n}, false);\n\nvar createHtmlBlock = function makeHtml(listArray) {\n  var divElem = document.createElement('div'),\n      meatList = document.createElement('ul'),\n      vegList = document.createElement('ul'),\n      listItem = document.createElement('li'),\n      appendBlock = document.querySelector('main'); // Create classes for js hooks\n\n  meatList.className = \"js-meatList\";\n  vegList.className = \"js-vegList\"; // Build container & list html then append to the main elem\n\n  divElem.appendChild(meatList);\n  divElem.appendChild(vegList);\n  appendBlock.appendChild(divElem); // Build html list\n\n  listArray.forEach(function (item) {\n    // Set the name \n    listItem.innerHTML = item.mealName; // Add to appropriate list\n\n    switch (item.mealType) {\n      case 'meat-eater':\n        console.log(' it\\'s a bloodlusting carnivor!');\n        meatList.appendChild(listItem);\n        break;\n\n      case 'vegetarian':\n        console.log(' it\\'s a hippy-dippy veg head!');\n        vegList.appendChild(listItem);\n        break;\n    }\n  });\n}; // createHtmlBlock(MealList);\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ })

/******/ });