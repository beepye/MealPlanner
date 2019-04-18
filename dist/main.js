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

eval("(function () {\n  'use strict';\n\n  var GENERATE_BTN = document.getElementById('GenerateMealList');\n  var URL = 'http://www.thebrianpye.com/Recipes/meals.json';\n  var BTN_TEXT = [\"Make it again\", \"Nope, try again\", \"Keep on trying\", \"I Don't like this\"]; // Click event to create the initial list\n\n  GENERATE_BTN.addEventListener('click', function (ev) {\n    return XHR_Events(ev);\n  }); // unclear about this part (ev) => XHR_Events(ev)\n\n  var XHR_Events = function XHR_Events(e) {\n    var listContainer = document.querySelector('.js-list-container');\n    var days = 7; // setting hard days value for now\n\n    var newMessage = BTN_TEXT[Math.floor(Math.random() * BTN_TEXT.length)]; // Remove meal list if it exists already\n\n    if (listContainer !== null) {\n      removeList();\n    }\n\n    GENERATE_BTN.textContent = newMessage; // GENERATE_BTN.innerHTML = newMessage;\n\n    fetch(URL).then(function (response) {\n      return response.json();\n    }).then(function (response) {\n      return createList(response);\n    });\n\n    function createList(response) {\n      // Create new list based off of the response array\n      selectRandomMeals(days, response, createListHTML);\n      var list = document.querySelector('.js-list');\n      var removeBtnArr = document.querySelectorAll('.js-remove');\n      var linkItemArr = document.querySelectorAll('.js-link-item'); // linkItemArr.forEach(function(item) {\n      // \tlet link = item.closest('a')\n      // \tlink.addEventListener('click', showDetails);\n      // });\n      // Add event listeners to X btns\n\n      removeBtnArr.forEach(function (item) {\n        var button = item.closest('button');\n        button.addEventListener('click', removeListItem);\n      });\n    }\n  }; // Create a randomly generated array from JSON response\n\n\n  var selectRandomMeals = function selectRandomMeals(days, arr, callback) {\n    // Reorder array in random sequence\n    var randomlyOrderedArray = arr.sort(function () {\n      return .5 - Math.random();\n    }); // Take re-ordered array and only keep as many as needed\n\n    var newArray = randomlyOrderedArray.slice(0, days);\n    callback(newArray);\n  }; // Create HTML list elements and inject into DOM\n\n\n  var createListHTML = function createListHTML(arr) {\n    var container = document.createElement('section'),\n        main = document.querySelector('main'),\n        list = document.createElement('ul'),\n        btnWrapper = document.createElement('div');\n    container.className = 'content-container --no-border js-list-container';\n    list.className = 'list js-list';\n    btnWrapper.className = 'btn-wrapper';\n    main.appendChild(container);\n    container.appendChild(list);\n    container.appendChild(btnWrapper);\n    populateList(arr);\n  }; // Create list items from array and inject into DOM\n\n\n  var populateList = function populateList(arr) {\n    var menuList = document.querySelector('ul');\n    arr.forEach(function (item) {\n      var link = document.createElement('a'),\n          linkItem = document.createElement('li'),\n          removeBtn = document.createElement('button');\n      link.innerHTML = item.name;\n      link.className = 'js-link-item';\n      removeBtn.className = 'secondary-btn kill-item-btn js-remove';\n      removeBtn.innerHTML = 'x';\n      linkItem.appendChild(link);\n      linkItem.appendChild(removeBtn);\n      menuList.appendChild(linkItem);\n    });\n  }; // Remove list from DOM\n\n\n  var removeList = function removeList() {\n    var listContainer = document.querySelector('.js-list-container');\n    listContainer.remove();\n  }; // Remove individual list item\n\n\n  var removeListItem = function removeListItem(e) {\n    var listItem = e.target.closest('li');\n    listItem.remove();\n  };\n\n  var refreshItem = function refreshItem(arr) {} // compare arrays and return unrepeated obj to replace current\n  // const showDetails = function showDetails(e) {\n  // \tlet listItem = this.closest('li');\n  // }\n  // \tconst myMeals = Meals.filter(function(whom){ return whom.owner === 'Brian'}).map(function(whom){ return whom.name; });\n  ;\n})();\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ })

/******/ });