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
eval("\n/*  \nOn clicking the Add Meal button:\n\t1. Grab the value of each input and assign to a variable - DONE!\n\t2. Use those input values to create a new meal object\n\t\ta. Do both inputs have a value? - DONE!\n\t\t\ti. Yes: proceed with adding the meal \n\t\t\tii. No: alert user and bail\n\t\tb. Does the item name already exist?\n\t\t\ti. Yes: do not validate, prompt user to change name\n\t\t\tii. No: then create the meal obj\n\t3. Populate the mealList array with the new meal object - DONE!\n*/\n// Soon this will grab an existing list of meals\n// not sure how to have it persist yet... can it be an external json? db? idk..\n\nvar mealList = []; // Meal object - should this be const, var, or let?\n\nvar Meal = function Meal(meal_name, meal_type) {\n  this.meal_name = meal_name, this.meal_type = meal_type;\n};\n\ndocument.addEventListener('click', function (event) {\n  if (event.target.matches('#AddMealBtn')) {\n    // Killing submit button for now\n    event.preventDefault();\n    var meal_name = document.querySelector('input[name=\"meal_name\"]').value,\n        meat_check = document.querySelector('input[name = \"has_meat\"]:checked');\n\n    if (meat_check !== null && meal_name !== \"\") {\n      var meal_type = meat_check.value == \"true\" ? \"meat-eater\" : \"vegetarian\",\n          newMeal = new Meal(meal_name, meal_type);\n      console.log(\"Meal Name: \".concat(meal_name, \" \\nMeal Type: \").concat(meal_type));\n      mealList.push(newMeal);\n      console.log(mealList);\n      return mealList;\n    } else {\n      // alert the user and bail\n      window.alert(\"Inputs cannot be blank\");\n      return;\n    }\n  }\n}, false);\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ })

/******/ });