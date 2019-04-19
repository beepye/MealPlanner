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

eval("(function () {\n  'use strict';\n\n  var genMenuBtn = document.getElementById('GenerateMealList');\n  var url = 'http://www.thebrianpye.com/Recipes/meals.json';\n  var days = 7; // setting hard days value for now\n\n  var btnText = [\"Make it again\", \"Nope, try again\", \"Keep on trying\", \"I Don't like this\"]; // Click event to create the menu list\n\n  genMenuBtn.addEventListener('click', jsonResponse); // Make call to external json file\n\n  function jsonResponse(e) {\n    var listContainer = document.querySelector('.js-list-container');\n    var newMessage = btnText[Math.floor(Math.random() * btnText.length)];\n    listContainer ? removeList() : undefined; // Which of the following is more appropriate: textContent or innerHTML?\n\n    genMenuBtn.innerHTML = newMessage;\n    /* genMenuBtn.textContent = newMessage; */\n\n    fetch(url).then(function (response) {\n      return response.json();\n    }).then(function (response) {\n      return createMenu(response);\n    });\n  }\n\n  ; // Build and inject menu based on fetch() response\n\n  function createMenu(response) {\n    selectRandomMeals(days, response, createListHTML);\n    var removeBtnArr = document.querySelectorAll('.js-btn--remove');\n    var clearBtn = document.querySelector('js-btn--clear'); // linkItemArr.forEach(function(item) {\n    // \tlet link = item.closest('a')\n    // \tlink.addEventListener('click', showDetails);\n    // });\n    // Add event listeners to X btns\n\n    removeBtnArr.forEach(function (item) {\n      var button = item.closest('button');\n      button.addEventListener('click', removeListItem);\n    });\n  } // Create a randomly generated array from fetch() response\n\n\n  function selectRandomMeals(days, arr, callback) {\n    var randomlyOrderedArray = arr.sort(function () {\n      return .5 - Math.random();\n    });\n    var newArray = randomlyOrderedArray.slice(0, days);\n    callback(newArray);\n  } // Create HTML elements and inject into DOM\n\n\n  function createListHTML(arr) {\n    var container = document.createElement('section');\n    var main = document.querySelector('main');\n    var list = document.createElement('ul');\n    var btnWrapper = document.createElement('div');\n    var clearBtn = document.createElement('button');\n    container.className = 'content-container --no-border js-list-container';\n    list.className = 'list js-list';\n    btnWrapper.className = 'btn-wrapper';\n    clearBtn.className = 'secondary-btn --link js-btn--clear';\n    clearBtn.innerHTML = 'Clear list';\n    main.appendChild(container);\n    container.appendChild(list);\n    container.appendChild(btnWrapper);\n    btnWrapper.appendChild(clearBtn);\n    clearBtn.addEventListener('click', removeList);\n    populateList(arr);\n  } // Create HTML list items from array and inject into DOM\n\n\n  function populateList(arr) {\n    var menuList = document.querySelector('ul');\n    arr.forEach(function (item) {\n      var link = document.createElement('a');\n      var linkItem = document.createElement('li');\n      var removeBtn = document.createElement('button');\n      link.innerHTML = item.name;\n      link.className = 'js-link-item';\n      removeBtn.className = 'secondary-btn kill-item-btn js-btn--remove';\n      removeBtn.innerHTML = 'x';\n      linkItem.appendChild(link);\n      linkItem.appendChild(removeBtn);\n      menuList.appendChild(linkItem);\n    });\n  } // Remove menu from DOM\n\n\n  function removeList() {\n    var listContainer = document.querySelector('.js-list-container');\n    listContainer.remove();\n  } // Remove individual menu item\n\n\n  function removeListItem(e) {\n    var listItem = e.target.closest('li');\n    listItem.remove();\n  } // Refresh individual menu item\n\n\n  function refreshItem(arr) {} // compare arrays and return unrepeated obj to replace current\n  // const showDetails = function showDetails(e) {\n  // \tlet listItem = this.closest('li');\n  // }\n  // \tconst myMeals = Meals.filter(function(whom){ return whom.owner === 'Brian'}).map(function(whom){ return whom.name; });\n\n})();\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ })

/******/ });