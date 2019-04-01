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
/***/ (function(module, exports) {

eval("(function () {\n  'use strict';\n\n  var GENERATE_BTN = document.getElementById('GenerateMealList'),\n      URL = 'http://www.thebrianpye.com/Recipes/meals.json';\n  GENERATE_BTN.addEventListener('click', function (ev) {\n    var mealList = [],\n        days = 5; // setting hard value for now\n    // Call for the JSON and pass anon callback function\n\n    getMeals(function (response) {\n      // Cycle through each obj in the JSON arr\n      response.forEach(function (item, index) {\n        console.log(\"\".concat(index, \" : \").concat(item.name, \" : \").concat(item.owner));\n        mealList.push(item);\n      });\n      selectRandomMeals(days, mealList, createMealListHTML);\n    });\n  });\n\n  var getMeals = function getMeals(callback) {\n    // Set up JSON data request\n    var xhr = new XMLHttpRequest();\n    xhr.responseType = 'json';\n    xhr.open('GET', URL); // Pass the response in a callback function\n\n    xhr.onload = function () {\n      callback(xhr.response);\n    };\n\n    xhr.send();\n  };\n\n  var selectRandomMeals = function selectRandomMeals(days, arr, callback) {\n    // Reorder array in random sequence\n    var randomlyOrderedArray = arr.sort(function () {\n      return .5 - Math.random();\n    }); // Take re-ordered array and only keep as many as needed\n\n    var newArray = randomlyOrderedArray.slice(0, days);\n    callback(newArray);\n  };\n\n  var createMealListHTML = function createMealListHTML(arr) {\n    var container = document.createElement('section'),\n        main = document.querySelector('main'),\n        list = document.createElement('ul'),\n        item = document.createElement('li'),\n        itemLink = document.createElement('a'),\n        listItem = item.append(itemLink); // Build list for meals\n\n    main.append(container);\n    container.append(list); // console.log(arr);\n\n    arr.forEach(function (item) {\n      console.log(item.name);\n    });\n  }; // createMealListHTML();\n  // \tvar myMeals = Meals.filter(function(whom){ return whom.owner === 'Brian'}).map(function(whom){ return whom.name; });\n\n})();\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ })

/******/ });