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

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/brianpye/PROJECTS/MEALPREP/js/index.js: Unexpected token, expected \\\"(\\\" (52:28)\\n\\n\\u001b[0m \\u001b[90m 50 | \\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 51 | \\u001b[39m\\t\\u001b[90m// Create a randomly generated array from JSON response\\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 52 | \\u001b[39m\\t\\u001b[36mfunction\\u001b[39m selectRandomMeals \\u001b[33m=\\u001b[39m \\u001b[36mfunction\\u001b[39m selectRandomMeals(days\\u001b[33m,\\u001b[39m arr\\u001b[33m,\\u001b[39m callback) {\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m\\t                           \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 53 | \\u001b[39m\\t\\t\\u001b[90m// Reorder array in random sequence\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 54 | \\u001b[39m\\t\\tlet randomlyOrderedArray \\u001b[33m=\\u001b[39m arr\\u001b[33m.\\u001b[39msort(\\u001b[36mfunction\\u001b[39m() { \\u001b[36mreturn\\u001b[39m \\u001b[35m.5\\u001b[39m \\u001b[33m-\\u001b[39m \\u001b[33mMath\\u001b[39m\\u001b[33m.\\u001b[39mrandom()\\u001b[33m;\\u001b[39m })\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 55 | \\u001b[39m\\t\\t\\u001b[90m// Take re-ordered array and only keep as many as needed\\u001b[39m\\u001b[0m\\n    at Parser.raise (/Users/brianpye/PROJECTS/MEALPREP/node_modules/@babel/parser/lib/index.js:3851:17)\\n    at Parser.unexpected (/Users/brianpye/PROJECTS/MEALPREP/node_modules/@babel/parser/lib/index.js:5165:16)\\n    at Parser.expect (/Users/brianpye/PROJECTS/MEALPREP/node_modules/@babel/parser/lib/index.js:5151:28)\\n    at Parser.parseFunctionParams (/Users/brianpye/PROJECTS/MEALPREP/node_modules/@babel/parser/lib/index.js:8029:10)\\n    at Parser.parseFunction (/Users/brianpye/PROJECTS/MEALPREP/node_modules/@babel/parser/lib/index.js:8012:10)\\n    at Parser.parseFunctionStatement (/Users/brianpye/PROJECTS/MEALPREP/node_modules/@babel/parser/lib/index.js:7650:17)\\n    at Parser.parseStatementContent (/Users/brianpye/PROJECTS/MEALPREP/node_modules/@babel/parser/lib/index.js:7331:21)\\n    at Parser.parseStatement (/Users/brianpye/PROJECTS/MEALPREP/node_modules/@babel/parser/lib/index.js:7293:17)\\n    at Parser.parseBlockOrModuleBlockBody (/Users/brianpye/PROJECTS/MEALPREP/node_modules/@babel/parser/lib/index.js:7879:25)\\n    at Parser.parseBlockBody (/Users/brianpye/PROJECTS/MEALPREP/node_modules/@babel/parser/lib/index.js:7866:10)\\n    at Parser.parseBlock (/Users/brianpye/PROJECTS/MEALPREP/node_modules/@babel/parser/lib/index.js:7850:10)\\n    at Parser.parseFunctionBody (/Users/brianpye/PROJECTS/MEALPREP/node_modules/@babel/parser/lib/index.js:6911:24)\\n    at Parser.parseFunctionBodyAndFinish (/Users/brianpye/PROJECTS/MEALPREP/node_modules/@babel/parser/lib/index.js:6881:10)\\n    at withTopicForbiddingContext (/Users/brianpye/PROJECTS/MEALPREP/node_modules/@babel/parser/lib/index.js:8014:12)\\n    at Parser.withTopicForbiddingContext (/Users/brianpye/PROJECTS/MEALPREP/node_modules/@babel/parser/lib/index.js:7187:14)\\n    at Parser.parseFunction (/Users/brianpye/PROJECTS/MEALPREP/node_modules/@babel/parser/lib/index.js:8013:10)\\n    at Parser.parseFunctionExpression (/Users/brianpye/PROJECTS/MEALPREP/node_modules/@babel/parser/lib/index.js:6366:17)\\n    at Parser.parseExprAtom (/Users/brianpye/PROJECTS/MEALPREP/node_modules/@babel/parser/lib/index.js:6279:21)\\n    at Parser.parseExprSubscripts (/Users/brianpye/PROJECTS/MEALPREP/node_modules/@babel/parser/lib/index.js:5916:23)\\n    at Parser.parseMaybeUnary (/Users/brianpye/PROJECTS/MEALPREP/node_modules/@babel/parser/lib/index.js:5896:21)\\n    at Parser.parseExprOps (/Users/brianpye/PROJECTS/MEALPREP/node_modules/@babel/parser/lib/index.js:5783:23)\\n    at Parser.parseMaybeConditional (/Users/brianpye/PROJECTS/MEALPREP/node_modules/@babel/parser/lib/index.js:5756:23)\\n    at Parser.parseMaybeAssign (/Users/brianpye/PROJECTS/MEALPREP/node_modules/@babel/parser/lib/index.js:5703:21)\\n    at Parser.parseParenAndDistinguishExpression (/Users/brianpye/PROJECTS/MEALPREP/node_modules/@babel/parser/lib/index.js:6468:28)\\n    at Parser.parseExprAtom (/Users/brianpye/PROJECTS/MEALPREP/node_modules/@babel/parser/lib/index.js:6262:21)\\n    at Parser.parseExprSubscripts (/Users/brianpye/PROJECTS/MEALPREP/node_modules/@babel/parser/lib/index.js:5916:23)\\n    at Parser.parseMaybeUnary (/Users/brianpye/PROJECTS/MEALPREP/node_modules/@babel/parser/lib/index.js:5896:21)\\n    at Parser.parseExprOps (/Users/brianpye/PROJECTS/MEALPREP/node_modules/@babel/parser/lib/index.js:5783:23)\\n    at Parser.parseMaybeConditional (/Users/brianpye/PROJECTS/MEALPREP/node_modules/@babel/parser/lib/index.js:5756:23)\\n    at Parser.parseMaybeAssign (/Users/brianpye/PROJECTS/MEALPREP/node_modules/@babel/parser/lib/index.js:5703:21)\");\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ })

/******/ });