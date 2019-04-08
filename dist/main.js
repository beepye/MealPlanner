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

eval("(function () {\n  'use strict';\n\n  var GENERATE_BTN = document.getElementById('GenerateMealList'),\n      URL = 'http://www.thebrianpye.com/Recipes/meals.json',\n      BTN_TEXT = [\"Try again\", \"Give it another spin\", \"Keep trying\", \"Don't like this one\", \"Ew\", \"Gross\"];\n  var count = 0; // Click event to create the initial list\n\n  GENERATE_BTN.addEventListener('click', function (ev) {\n    var listContainer = document.querySelectorAll('.content-container')[1],\n        mealList = [],\n        days = 7,\n        // setting hard days value for now\n    newMessage = BTN_TEXT[Math.floor(Math.random() * BTN_TEXT.length)];\n    count++; // Remove meal list if it exists already\n\n    if (listContainer !== undefined) {\n      removeList();\n    } // Change button messaging\n\n\n    GENERATE_BTN.innerHTML = newMessage; // Hahaha\n\n    if (count % 10 === 0) {\n      GENERATE_BTN.innerHTML = \"Are you effing serious?\";\n    } // JSON call\n\n\n    getMeals(function (response) {\n      // Add items to meal list\n      response.forEach(function (item, index) {\n        mealList.push(item);\n      }); // Create new list based off of the response\n\n      selectRandomMeals(days, mealList, createListHTML);\n      var list = document.querySelector('.js-list'),\n          removeBtn = document.querySelectorAll('.js-remove'); // Clear the individual list item\n\n      list.addEventListener('click', removeListItem);\n    });\n  }); // Create XHR request\n\n  var getMeals = function getMeals(callback) {\n    // Set up JSON data request\n    var xhr = new XMLHttpRequest();\n    xhr.responseType = 'json';\n    xhr.open('GET', URL); // Pass the response in a callback function\n\n    xhr.onload = function () {\n      callback(xhr.response);\n    };\n\n    xhr.send();\n  }; // Create a randomly generated array from JSON response\n\n\n  var selectRandomMeals = function selectRandomMeals(days, arr, callback) {\n    // Reorder array in random sequence\n    var randomlyOrderedArray = arr.sort(function () {\n      return .5 - Math.random();\n    }); // Take re-ordered array and only keep as many as needed\n\n    var newArray = randomlyOrderedArray.slice(0, days);\n    callback(newArray);\n  }; // Create HTML list elements and inject into DOM\n\n\n  var createListHTML = function createListHTML(arr) {\n    // Create html elems\n    var container = document.createElement('section'),\n        main = document.querySelector('main'),\n        list = document.createElement('ul'),\n        btnWrapper = document.createElement('div'); // Add props to elems\n\n    container.className = 'content-container --no-border';\n    list.className = 'list js-list';\n    btnWrapper.className = 'btn-wrapper'; // Build the list\n\n    main.appendChild(container);\n    container.appendChild(list);\n    container.appendChild(btnWrapper);\n    populateList(arr);\n  }; // Create list items from array and inject into DOM\n\n\n  var populateList = function populateList(arr) {\n    var menuList = document.querySelector('ul');\n    arr.forEach(function (item) {\n      // Create list html elems\n      var link = document.createElement('a'),\n          linkItem = document.createElement('li'),\n          removeBtn = document.createElement('button'); // Add props to elems\n\n      link.innerHTML = item.name;\n      removeBtn.className = 'secondary-btn kill-item-btn js-remove';\n      removeBtn.innerHTML = 'x'; // Build the list item\n\n      linkItem.appendChild(link);\n      linkItem.appendChild(removeBtn);\n      menuList.appendChild(linkItem);\n    });\n  }; // Remove list from DOM\n\n\n  var removeList = function removeList() {\n    var listContainer = document.querySelectorAll('.content-container')[1];\n    listContainer.remove();\n  }; // Remove individual list item\n\n\n  var removeListItem = function removeListItem(e) {\n    var listItem = e.target.closest('li');\n    listItem.remove();\n  };\n\n  var refreshItem = function refreshItem(arr) {} // compare arrays and return unrepeated obj to replace current\n  // \tvar myMeals = Meals.filter(function(whom){ return whom.owner === 'Brian'}).map(function(whom){ return whom.name; });\n  ;\n})();\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ })

/******/ });