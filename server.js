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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/step3/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js!./src/step3/share/pages/create/index.css":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/src!./node_modules/less-loader/dist/cjs.js!./src/step3/share/pages/create/index.css ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".todo-new--9fIZN {\\n  width: 400px;\\n  padding-top: 20px;\\n  margin: 0 auto;\\n}\\n.todo-new__input--1I-PA {\\n  width: 100%;\\n  height: 40px;\\n  font-size: 20px;\\n  border: none;\\n  outline: none;\\n  background: none;\\n  border-bottom: 1px solid #333;\\n}\\n\", \"\"]);\n\n// exports\nexports.locals = {\n\t\"todo-new\": \"todo-new--9fIZN\",\n\t\"todo-new__input\": \"todo-new__input--1I-PA\"\n};\n\n//# sourceURL=webpack:///./src/step3/share/pages/create/index.css?./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/src!./node_modules/less-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js!./src/step3/share/pages/edit/index.css":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/src!./node_modules/less-loader/dist/cjs.js!./src/step3/share/pages/edit/index.css ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".todo-edit--2xNSn {\\n  width: 400px;\\n  margin: 0 auto;\\n}\\n.todo-content--mzN8Q {\\n  font-size: 18px;\\n  border-bottom: 1px solid #333;\\n  padding: 10px 0;\\n}\\n.todo-btn--3NeLB {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: end;\\n      -ms-flex-pack: end;\\n          justify-content: flex-end;\\n}\\n.todo-btn__done--26MXZ,\\n.todo-btn__delete--31l9s {\\n  width: 50px;\\n  padding: 4px 0;\\n  color: #fff;\\n  border: none;\\n  background: none;\\n  outline: none;\\n  cursor: pointer;\\n}\\n.todo-btn__done--26MXZ {\\n  background-color: #45c5cd;\\n}\\n.todo-btn__delete--31l9s {\\n  background-color: #ff67b0;\\n  margin-left: 10px;\\n}\\n\", \"\"]);\n\n// exports\nexports.locals = {\n\t\"todo-edit\": \"todo-edit--2xNSn\",\n\t\"todo-content\": \"todo-content--mzN8Q\",\n\t\"todo-btn\": \"todo-btn--3NeLB\",\n\t\"todo-btn__done\": \"todo-btn__done--26MXZ\",\n\t\"todo-btn__delete\": \"todo-btn__delete--31l9s\"\n};\n\n//# sourceURL=webpack:///./src/step3/share/pages/edit/index.css?./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/src!./node_modules/less-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js!./src/step3/share/pages/home/index.css":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/src!./node_modules/less-loader/dist/cjs.js!./src/step3/share/pages/home/index.css ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \".todo-header--2uxzJ {\\n  border-bottom: 1px solid #333;\\n}\\n.todo-list--1cD6q {\\n  width: 400px;\\n  margin: 0 auto;\\n}\\n.todo-bar--3L6S3 {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: end;\\n      -ms-flex-pack: end;\\n          justify-content: flex-end;\\n  margin-bottom: 10px;\\n  padding: 0 5px;\\n}\\n.todo-ls--1S-Q- {\\n  padding-left: 0;\\n  list-style: none;\\n}\\n.todo-item--3NCry {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  background-color: #f1f1f1;\\n  margin-bottom: 10px;\\n  padding: 0 5px;\\n}\\n.todo-item__content--2aMPK {\\n  -webkit-box-flex: 1;\\n      -ms-flex-positive: 1;\\n          flex-grow: 1;\\n}\\n.todo-bar__new--bqVU-,\\n.todo-item__edit--29_jy {\\n  -ms-flex-negative: 0;\\n      flex-shrink: 0;\\n  color: #fff;\\n  width: 50px;\\n  text-decoration: none;\\n  text-align: center;\\n  padding: 2px 0;\\n  margin-left: 5px;\\n}\\n.todo-item__edit--29_jy {\\n  background-color: #169e4e;\\n}\\n.todo-bar__new--bqVU- {\\n  background-color: #da7934;\\n}\\n\", \"\"]);\n\n// exports\nexports.locals = {\n\t\"todo-header\": \"todo-header--2uxzJ\",\n\t\"todo-list\": \"todo-list--1cD6q\",\n\t\"todo-bar\": \"todo-bar--3L6S3\",\n\t\"todo-ls\": \"todo-ls--1S-Q-\",\n\t\"todo-item\": \"todo-item--3NCry\",\n\t\"todo-item__content\": \"todo-item__content--2aMPK\",\n\t\"todo-bar__new\": \"todo-bar__new--bqVU-\",\n\t\"todo-item__edit\": \"todo-item__edit--29_jy\"\n};\n\n//# sourceURL=webpack:///./src/step3/share/pages/home/index.css?./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/src!./node_modules/less-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function (useSourceMap) {\n\tvar list = [];\n\n\t// return the list of modules as css string\n\tlist.toString = function toString() {\n\t\treturn this.map(function (item) {\n\t\t\tvar content = cssWithMappingToString(item, useSourceMap);\n\t\t\tif (item[2]) {\n\t\t\t\treturn \"@media \" + item[2] + \"{\" + content + \"}\";\n\t\t\t} else {\n\t\t\t\treturn content;\n\t\t\t}\n\t\t}).join(\"\");\n\t};\n\n\t// import a list of modules into the list\n\tlist.i = function (modules, mediaQuery) {\n\t\tif (typeof modules === \"string\") modules = [[null, modules, \"\"]];\n\t\tvar alreadyImportedModules = {};\n\t\tfor (var i = 0; i < this.length; i++) {\n\t\t\tvar id = this[i][0];\n\t\t\tif (typeof id === \"number\") alreadyImportedModules[id] = true;\n\t\t}\n\t\tfor (i = 0; i < modules.length; i++) {\n\t\t\tvar item = modules[i];\n\t\t\t// skip already imported module\n\t\t\t// this implementation is not 100% perfect for weird media query combinations\n\t\t\t//  when a module is imported multiple times with different media queries.\n\t\t\t//  I hope this will never occur (Hey this way we have smaller bundles)\n\t\t\tif (typeof item[0] !== \"number\" || !alreadyImportedModules[item[0]]) {\n\t\t\t\tif (mediaQuery && !item[2]) {\n\t\t\t\t\titem[2] = mediaQuery;\n\t\t\t\t} else if (mediaQuery) {\n\t\t\t\t\titem[2] = \"(\" + item[2] + \") and (\" + mediaQuery + \")\";\n\t\t\t\t}\n\t\t\t\tlist.push(item);\n\t\t\t}\n\t\t}\n\t};\n\treturn list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n\tvar content = item[1] || '';\n\tvar cssMapping = item[3];\n\tif (!cssMapping) {\n\t\treturn content;\n\t}\n\n\tif (useSourceMap && typeof btoa === 'function') {\n\t\tvar sourceMapping = toComment(cssMapping);\n\t\tvar sourceURLs = cssMapping.sources.map(function (source) {\n\t\t\treturn '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';\n\t\t});\n\n\t\treturn [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n\t}\n\n\treturn [content].join('\\n');\n}\n\n// Adapted from convert-source-map (MIT)\nfunction toComment(sourceMap) {\n\t// eslint-disable-next-line no-undef\n\tvar base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n\tvar data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n\n\treturn '/*# ' + data + ' */';\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/lib/css-base.js?");

/***/ }),

/***/ "./node_modules/isomorphic-style-loader/lib/insertCss.js":
/*!***************************************************************!*\
  !*** ./node_modules/isomorphic-style-loader/lib/insertCss.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _stringify = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ \"babel-runtime/core-js/json/stringify\");\n\nvar _stringify2 = _interopRequireDefault(_stringify);\n\nvar _slicedToArray2 = __webpack_require__(/*! babel-runtime/helpers/slicedToArray */ \"babel-runtime/helpers/slicedToArray\");\n\nvar _slicedToArray3 = _interopRequireDefault(_slicedToArray2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * Isomorphic CSS style loader for Webpack\n *\n * Copyright © 2015-present Kriasoft, LLC. All rights reserved.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE.txt file in the root directory of this source tree.\n */\n\nvar prefix = 's';\nvar inserted = {};\n\n// Base64 encoding and decoding - The \"Unicode Problem\"\n// https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem\nfunction b64EncodeUnicode(str) {\n  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {\n    return String.fromCharCode('0x' + p1);\n  }));\n}\n\n/**\n * Remove style/link elements for specified node IDs\n * if they are no longer referenced by UI components.\n */\nfunction removeCss(ids) {\n  ids.forEach(function (id) {\n    if (--inserted[id] <= 0) {\n      var elem = document.getElementById(prefix + id);\n      if (elem) {\n        elem.parentNode.removeChild(elem);\n      }\n    }\n  });\n}\n\n/**\n * Example:\n *   // Insert CSS styles object generated by `css-loader` into DOM\n *   var removeCss = insertCss([[1, 'body { color: red; }']]);\n *\n *   // Remove it from the DOM\n *   removeCss();\n */\nfunction insertCss(styles) {\n  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},\n      _ref$replace = _ref.replace,\n      replace = _ref$replace === undefined ? false : _ref$replace,\n      _ref$prepend = _ref.prepend,\n      prepend = _ref$prepend === undefined ? false : _ref$prepend;\n\n  var ids = [];\n  for (var i = 0; i < styles.length; i++) {\n    var _styles$i = (0, _slicedToArray3.default)(styles[i], 4),\n        moduleId = _styles$i[0],\n        css = _styles$i[1],\n        media = _styles$i[2],\n        sourceMap = _styles$i[3];\n\n    var id = moduleId + '-' + i;\n\n    ids.push(id);\n\n    if (inserted[id]) {\n      if (!replace) {\n        inserted[id]++;\n        continue;\n      }\n    }\n\n    inserted[id] = 1;\n\n    var elem = document.getElementById(prefix + id);\n    var create = false;\n\n    if (!elem) {\n      create = true;\n\n      elem = document.createElement('style');\n      elem.setAttribute('type', 'text/css');\n      elem.id = prefix + id;\n\n      if (media) {\n        elem.setAttribute('media', media);\n      }\n    }\n\n    var cssText = css;\n    if (sourceMap && typeof btoa === 'function') {\n      // skip IE9 and below, see http://caniuse.com/atob-btoa\n      cssText += '\\n/*# sourceMappingURL=data:application/json;base64,' + b64EncodeUnicode((0, _stringify2.default)(sourceMap)) + '*/';\n      cssText += '\\n/*# sourceURL=' + sourceMap.file + '?' + id + '*/';\n    }\n\n    if ('textContent' in elem) {\n      elem.textContent = cssText;\n    } else {\n      elem.styleSheet.cssText = cssText;\n    }\n\n    if (create) {\n      if (prepend) {\n        document.head.insertBefore(elem, document.head.childNodes[0]);\n      } else {\n        document.head.appendChild(elem);\n      }\n    }\n  }\n\n  return removeCss.bind(null, ids);\n}\n\nmodule.exports = insertCss;\n\n//# sourceURL=webpack:///./node_modules/isomorphic-style-loader/lib/insertCss.js?");

/***/ }),

/***/ "./src/step3/server/gql/datasource/todo.js":
/*!*************************************************!*\
  !*** ./src/step3/server/gql/datasource/todo.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _model_todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../model/todo */ \"./src/step3/server/model/todo.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new _model_todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"]());\n\n//# sourceURL=webpack:///./src/step3/server/gql/datasource/todo.js?");

/***/ }),

/***/ "./src/step3/server/gql/resolvers.js":
/*!*******************************************!*\
  !*** ./src/step3/server/gql/resolvers.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  Query: {\n    list: (_, {}, { dataSources }, info) => {\n      const todos = dataSources.todo.list();\n      return {\n        todos\n      };\n    },\n\n    item: (_, { id }, { dataSources }) => {\n      return dataSources.todo.find(id);\n    }\n  },\n\n  Mutation: {\n    create: (_, { content }, { dataSources }) => {\n      try {\n        dataSources.todo.create(content);\n        return {\n          success: true\n        };\n      } catch (err) {\n        return {\n          success: false\n        };\n      }\n    },\n\n    done: (_, { id }, { dataSources }) => {\n      try {\n        dataSources.todo.done(id);\n        return {\n          success: true\n        };\n      } catch (err) {\n        console.log(err);\n        return {\n          success: false\n        };\n      }\n    },\n\n    delete: (_, { id }, { dataSources }) => {\n      try {\n        dataSources.todo.delete(id);\n        return {\n          success: true\n        };\n      } catch (err) {\n        return {\n          success: false\n        };\n      }\n    }\n  }\n});\n\n//# sourceURL=webpack:///./src/step3/server/gql/resolvers.js?");

/***/ }),

/***/ "./src/step3/server/gql/schema.js":
/*!****************************************!*\
  !*** ./src/step3/server/gql/schema.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var apollo_server_koa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-koa */ \"apollo-server-koa\");\n/* harmony import */ var apollo_server_koa__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_koa__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst typeDefs = apollo_server_koa__WEBPACK_IMPORTED_MODULE_0__[\"gql\"]`\n  \"\"\"\n  Query\n  \"\"\"\n  type Query {\n    list: TodoCollection!\n    item(id: ID!): Todo\n  }\n\n  \"\"\"\n  Todo Collection\n  \"\"\"\n  type TodoCollection {\n    todos: [Todo]!\n  }\n\n  \"\"\"\n  Todo\n  \"\"\"\n  type Todo {\n    id: ID!\n    content: String\n    updatedAt: String\n    createdAt: String\n    done: Boolean\n    delete: Boolean\n  }\n\n  \"\"\"\n  Mutation\n  \"\"\"\n  type Mutation {\n    create(\n      content: String!\n    ):Message\n\n    done(\n      id: ID!\n    ):Message\n\n    delete(\n      id: ID!\n    ): Message\n  }\n\n  type Message {\n    success: Boolean!\n  }\n`;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (typeDefs);\n\n//# sourceURL=webpack:///./src/step3/server/gql/schema.js?");

/***/ }),

/***/ "./src/step3/server/index.js":
/*!***********************************!*\
  !*** ./src/step3/server/index.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa */ \"koa\");\n/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koa-static */ \"koa-static\");\n/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(koa_static__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var koa_body__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! koa-body */ \"koa-body\");\n/* harmony import */ var koa_body__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(koa_body__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! koa-router */ \"koa-router\");\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var apollo_server_koa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! apollo-server-koa */ \"apollo-server-koa\");\n/* harmony import */ var apollo_server_koa__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(apollo_server_koa__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _share_App__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../share/App */ \"./src/step3/share/App.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _share_routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../share/routes */ \"./src/step3/share/routes.js\");\n/* harmony import */ var _gql_schema__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./gql/schema */ \"./src/step3/server/gql/schema.js\");\n/* harmony import */ var _gql_resolvers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./gql/resolvers */ \"./src/step3/server/gql/resolvers.js\");\n/* harmony import */ var _gql_datasource_todo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./gql/datasource/todo */ \"./src/step3/server/gql/datasource/todo.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst app = new koa__WEBPACK_IMPORTED_MODULE_0___default.a();\nconst router = new koa_router__WEBPACK_IMPORTED_MODULE_5___default.a();\n\nconst server = new apollo_server_koa__WEBPACK_IMPORTED_MODULE_6__[\"ApolloServer\"]({\n  typeDefs: _gql_schema__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n  resolvers: _gql_resolvers__WEBPACK_IMPORTED_MODULE_11__[\"default\"],\n  dataSources: () => ({\n    todo: _gql_datasource_todo__WEBPACK_IMPORTED_MODULE_12__[\"default\"]\n  })\n});\n\nserver.applyMiddleware({ app });\n\n// 因为接下来需要创建别的路由，所以不再使用*通配符\n_share_routes__WEBPACK_IMPORTED_MODULE_9__[\"default\"].forEach(r => {\n  router.get(r.path, async (ctx, next) => {\n    const css = new Set();\n    const cssContext = {\n      insertCss(...styles) {\n        styles.forEach(style => css.add(style._getCss()));\n      }\n    };\n    const markup = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_4__[\"renderToString\"])(react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(\n      react_router_dom__WEBPACK_IMPORTED_MODULE_8__[\"StaticRouter\"],\n      { location: ctx.request.url, context: {} },\n      react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_share_App__WEBPACK_IMPORTED_MODULE_7__[\"default\"], { cssContext: cssContext })\n    ));\n    const cssText = [...css].join('');\n    ctx.type = 'html';\n    ctx.body = `\n    <!DOCTYPE html>\n    <html>\n    <head>\n      <title>React 服务端渲染</title>\n      <meta charset=\"utf-8\">\n      <style>${cssText}</style>\n    </head>\n    <body>\n      <div id=\"app\">${markup}</div>\n      <script src=\"/bundle.js\"></script>\n    </body>\n    </html>\n    `;\n  });\n});\n\napp.use(koa_body__WEBPACK_IMPORTED_MODULE_2___default()({\n  multipart: true\n}));\n\n// 将public设置为静态资源文件目录\napp.use(koa_static__WEBPACK_IMPORTED_MODULE_1___default()('public', {}));\n\napp.use(router.routes());\n\napp.listen(3000);\n\n//# sourceURL=webpack:///./src/step3/server/index.js?");

/***/ }),

/***/ "./src/step3/server/model sync recursive":
/*!*************************************!*\
  !*** ./src/step3/server/model sync ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function webpackEmptyContext(req) {\n\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\te.code = 'MODULE_NOT_FOUND';\n\tthrow e;\n}\nwebpackEmptyContext.keys = function() { return []; };\nwebpackEmptyContext.resolve = webpackEmptyContext;\nmodule.exports = webpackEmptyContext;\nwebpackEmptyContext.id = \"./src/step3/server/model sync recursive\";\n\n//# sourceURL=webpack:///./src/step3/server/model_sync?");

/***/ }),

/***/ "./src/step3/server/model/todo.js":
/*!****************************************!*\
  !*** ./src/step3/server/model/todo.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst fileDir = path__WEBPACK_IMPORTED_MODULE_1___default.a.resolve(__dirname, '../data/todo.json');\n\nlet Todo = class Todo {\n\n  load() {\n    this.todos = __webpack_require__(\"./src/step3/server/model sync recursive\")(fileDir);\n  }\n\n  find(id) {\n    return this.todos.find(item => {\n      return item.id === id;\n    });\n  }\n\n  write() {\n    fs__WEBPACK_IMPORTED_MODULE_0___default.a.writeFileSync(fileDir, JSON.stringify(this.todos));\n  }\n\n  create(content) {\n    this.load();\n    this.todos.push({\n      id: Date.now() + '',\n      content,\n      done: false,\n      delete: false,\n      createdAt: Date.now() + '',\n      updatedAt: Date.now() + ''\n    });\n    this.write();\n  }\n\n  list() {\n    this.load();\n    return this.todos;\n  }\n\n  done(id) {\n    this.load();\n    const item = this.find(id);\n    item.done = true;\n    item.updatedAt = Date.now();\n    this.write();\n  }\n\n  delete(id) {\n    this.load();\n    const item = this.find(id);\n    item.delete = true;\n    item.updatedAt = Date.now();\n    this.write();\n  }\n};\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Todo);\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./src/step3/server/model/todo.js?");

/***/ }),

/***/ "./src/step3/share/App.js":
/*!********************************!*\
  !*** ./src/step3/share/App.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style-provider */ \"./src/step3/share/style-provider/index.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes */ \"./src/step3/share/routes.js\");\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nfunction _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }\n\n\n\n\n\n\nlet App = class App extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      _style_provider__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n      this.props,\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"],\n        null,\n        _routes__WEBPACK_IMPORTED_MODULE_3__[\"default\"].map((_ref) => {\n          let { path, exact, component: C } = _ref,\n              rest = _objectWithoutProperties(_ref, ['path', 'exact', 'component']);\n\n          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n            key: path,\n            path: path,\n            exact: exact,\n            render: props => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(C, _extends({}, props, rest))\n          });\n        })\n      )\n    );\n  }\n};\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\n//# sourceURL=webpack:///./src/step3/share/App.js?");

/***/ }),

/***/ "./src/step3/share/pages/create/index.css":
/*!************************************************!*\
  !*** ./src/step3/share/pages/create/index.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/postcss-loader/src!../../../../../node_modules/less-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js!./src/step3/share/pages/create/index.css\");\n    var insertCss = __webpack_require__(/*! ../../../../../node_modules/isomorphic-style-loader/lib/insertCss.js */ \"./node_modules/isomorphic-style-loader/lib/insertCss.js\");\n\n    if (typeof content === 'string') {\n      content = [[module.i, content, '']];\n    }\n\n    module.exports = content.locals || {};\n    module.exports._getContent = function() { return content; };\n    module.exports._getCss = function() { return content.toString(); };\n    module.exports._insertCss = function(options) { return insertCss(content, options) };\n    \n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/step3/share/pages/create/index.css?");

/***/ }),

/***/ "./src/step3/share/pages/create/index.js":
/*!***********************************************!*\
  !*** ./src/step3/share/pages/create/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ \"./src/step3/share/pages/create/index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-style-loader/lib/withStyles */ \"isomorphic-style-loader/lib/withStyles\");\n/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nlet Home = class Home extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(...args) {\n    var _temp;\n\n    return _temp = super(...args), this.handleInputKeyDown = e => {\n      // 按下回车键后创建新项目\n      if (e.keyCode === 13) {\n        const value = e.target.value.trim();\n        if (value === '') {\n          return;\n        }\n        // TODO 进行ajax请求\n      }\n    }, _temp;\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      'div',\n      { className: _index_css__WEBPACK_IMPORTED_MODULE_1___default.a['todo-new'] },\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('input', {\n        className: _index_css__WEBPACK_IMPORTED_MODULE_1___default.a['todo-new__input'],\n        placeholder: '\\u8F93\\u5165\\u4E00\\u6761\\u65B0Todo',\n        onKeyDown: this.handleInputKeyDown })\n    );\n  }\n};\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2___default()(_index_css__WEBPACK_IMPORTED_MODULE_1___default.a)(Home));\n\n//# sourceURL=webpack:///./src/step3/share/pages/create/index.js?");

/***/ }),

/***/ "./src/step3/share/pages/edit/index.css":
/*!**********************************************!*\
  !*** ./src/step3/share/pages/edit/index.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/postcss-loader/src!../../../../../node_modules/less-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js!./src/step3/share/pages/edit/index.css\");\n    var insertCss = __webpack_require__(/*! ../../../../../node_modules/isomorphic-style-loader/lib/insertCss.js */ \"./node_modules/isomorphic-style-loader/lib/insertCss.js\");\n\n    if (typeof content === 'string') {\n      content = [[module.i, content, '']];\n    }\n\n    module.exports = content.locals || {};\n    module.exports._getContent = function() { return content; };\n    module.exports._getCss = function() { return content.toString(); };\n    module.exports._insertCss = function(options) { return insertCss(content, options) };\n    \n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/step3/share/pages/edit/index.css?");

/***/ }),

/***/ "./src/step3/share/pages/edit/index.js":
/*!*********************************************!*\
  !*** ./src/step3/share/pages/edit/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.css */ \"./src/step3/share/pages/edit/index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-style-loader/lib/withStyles */ \"isomorphic-style-loader/lib/withStyles\");\n/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nlet Home = class Home extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n\n  constructor(props) {\n    super(props);\n    // 获取到编辑项目的ID\n\n    this.handleDoneClick = () => {\n      // TODO ajax同步完成操作\n    };\n\n    this.handleDeleteClick = () => {\n      // TODO ajax同步删除操作\n    };\n\n    this.id = props.match.params.id;\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      'div',\n      { className: _index_css__WEBPACK_IMPORTED_MODULE_1___default.a['todo-edit'] },\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        'p',\n        { className: _index_css__WEBPACK_IMPORTED_MODULE_1___default.a['todo-content'] },\n        '\\u5B66\\u4E60 SSR'\n      ),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        'div',\n        { className: _index_css__WEBPACK_IMPORTED_MODULE_1___default.a['todo-btn'] },\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          'button',\n          {\n            className: _index_css__WEBPACK_IMPORTED_MODULE_1___default.a['todo-btn__done'],\n            onClick: this.handleDoneClick },\n          '\\u5B8C\\u6210\\u2705'\n        ),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          'button',\n          {\n            className: _index_css__WEBPACK_IMPORTED_MODULE_1___default.a['todo-btn__delete'],\n            onClick: this.handleDeleteClick },\n          '\\u5220\\u9664'\n        )\n      )\n    );\n  }\n};\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_2___default()(_index_css__WEBPACK_IMPORTED_MODULE_1___default.a)(Home));\n\n//# sourceURL=webpack:///./src/step3/share/pages/edit/index.js?");

/***/ }),

/***/ "./src/step3/share/pages/home/index.css":
/*!**********************************************!*\
  !*** ./src/step3/share/pages/home/index.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\n    var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/postcss-loader/src!../../../../../node_modules/less-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js!./src/step3/share/pages/home/index.css\");\n    var insertCss = __webpack_require__(/*! ../../../../../node_modules/isomorphic-style-loader/lib/insertCss.js */ \"./node_modules/isomorphic-style-loader/lib/insertCss.js\");\n\n    if (typeof content === 'string') {\n      content = [[module.i, content, '']];\n    }\n\n    module.exports = content.locals || {};\n    module.exports._getContent = function() { return content; };\n    module.exports._getCss = function() { return content.toString(); };\n    module.exports._insertCss = function(options) { return insertCss(content, options) };\n    \n    // Hot Module Replacement\n    // https://webpack.github.io/docs/hot-module-replacement\n    // Only activated in browser context\n    if (false) { var removeCss; }\n  \n\n//# sourceURL=webpack:///./src/step3/share/pages/home/index.css?");

/***/ }),

/***/ "./src/step3/share/pages/home/index.js":
/*!*********************************************!*\
  !*** ./src/step3/share/pages/home/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ \"./src/step3/share/pages/home/index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-style-loader/lib/withStyles */ \"isomorphic-style-loader/lib/withStyles\");\n/* harmony import */ var isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nlet Home = class Home extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n      'div',\n      { className: _index_css__WEBPACK_IMPORTED_MODULE_2___default.a['todo-list'] },\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        'h1',\n        { className: _index_css__WEBPACK_IMPORTED_MODULE_2___default.a['todo-header'] },\n        'SSR Todo'\n      ),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        'div',\n        { className: _index_css__WEBPACK_IMPORTED_MODULE_2___default.a['todo-bar'] },\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"],\n          { className: _index_css__WEBPACK_IMPORTED_MODULE_2___default.a['todo-bar__new'], to: '/create' },\n          '\\u65B0\\u5EFA'\n        )\n      ),\n      react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n        'ul',\n        { className: _index_css__WEBPACK_IMPORTED_MODULE_2___default.a['todo-ls'] },\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          'li',\n          { className: _index_css__WEBPACK_IMPORTED_MODULE_2___default.a['todo-item'] },\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            'p',\n            { className: _index_css__WEBPACK_IMPORTED_MODULE_2___default.a['todo-item__content'] },\n            '\\u5B66\\u4E60SSR'\n          ),\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"],\n            { className: _index_css__WEBPACK_IMPORTED_MODULE_2___default.a['todo-item__edit'], to: '/edit/abcd' },\n            '\\u7F16\\u8F91'\n          )\n        ),\n        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n          'li',\n          { className: _index_css__WEBPACK_IMPORTED_MODULE_2___default.a['todo-item'] },\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            'p',\n            { className: _index_css__WEBPACK_IMPORTED_MODULE_2___default.a['todo-item__content'] },\n            '\\u5B66\\u4E60SSR'\n          ),\n          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\n            react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"],\n            { className: _index_css__WEBPACK_IMPORTED_MODULE_2___default.a['todo-item__edit'], to: '/edit/abcd' },\n            '\\u7F16\\u8F91'\n          )\n        )\n      )\n    );\n  }\n};\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (isomorphic_style_loader_lib_withStyles__WEBPACK_IMPORTED_MODULE_3___default()(_index_css__WEBPACK_IMPORTED_MODULE_2___default.a)(Home));\n\n//# sourceURL=webpack:///./src/step3/share/pages/home/index.js?");

/***/ }),

/***/ "./src/step3/share/routes.js":
/*!***********************************!*\
  !*** ./src/step3/share/routes.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home */ \"./src/step3/share/pages/home/index.js\");\n/* harmony import */ var _pages_create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/create */ \"./src/step3/share/pages/create/index.js\");\n/* harmony import */ var _pages_edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/edit */ \"./src/step3/share/pages/edit/index.js\");\n\n\n\n\nconst routes = [{\n  path: '/',\n  exact: true,\n  component: _pages_home__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n}, {\n  path: '/create',\n  exact: true,\n  component: _pages_create__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n}, {\n  path: '/edit/:id',\n  exact: true,\n  component: _pages_edit__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n}];\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (routes);\n\n//# sourceURL=webpack:///./src/step3/share/routes.js?");

/***/ }),

/***/ "./src/step3/share/style-provider/index.js":
/*!*************************************************!*\
  !*** ./src/step3/share/style-provider/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\nvar _class, _temp;\n\n\n\n\nlet StyleProvider = (_temp = _class = class StyleProvider extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n\n  getChildContext() {\n    return {\n      insertCss: this.props.cssContext.insertCss\n    };\n  }\n\n  render() {\n    return this.props.children;\n  }\n}, _class.propTypes = {\n  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node\n}, _class.childContextTypes = {\n  insertCss: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func\n}, _temp);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (StyleProvider);\n\n//# sourceURL=webpack:///./src/step3/share/style-provider/index.js?");

/***/ }),

/***/ "apollo-server-koa":
/*!************************************!*\
  !*** external "apollo-server-koa" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"apollo-server-koa\");\n\n//# sourceURL=webpack:///external_%22apollo-server-koa%22?");

/***/ }),

/***/ "babel-runtime/core-js/json/stringify":
/*!*******************************************************!*\
  !*** external "babel-runtime/core-js/json/stringify" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/core-js/json/stringify\");\n\n//# sourceURL=webpack:///external_%22babel-runtime/core-js/json/stringify%22?");

/***/ }),

/***/ "babel-runtime/helpers/slicedToArray":
/*!******************************************************!*\
  !*** external "babel-runtime/helpers/slicedToArray" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-runtime/helpers/slicedToArray\");\n\n//# sourceURL=webpack:///external_%22babel-runtime/helpers/slicedToArray%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "isomorphic-style-loader/lib/withStyles":
/*!*********************************************************!*\
  !*** external "isomorphic-style-loader/lib/withStyles" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"isomorphic-style-loader/lib/withStyles\");\n\n//# sourceURL=webpack:///external_%22isomorphic-style-loader/lib/withStyles%22?");

/***/ }),

/***/ "koa":
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa\");\n\n//# sourceURL=webpack:///external_%22koa%22?");

/***/ }),

/***/ "koa-body":
/*!***************************!*\
  !*** external "koa-body" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-body\");\n\n//# sourceURL=webpack:///external_%22koa-body%22?");

/***/ }),

/***/ "koa-router":
/*!*****************************!*\
  !*** external "koa-router" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-router\");\n\n//# sourceURL=webpack:///external_%22koa-router%22?");

/***/ }),

/***/ "koa-static":
/*!*****************************!*\
  !*** external "koa-static" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"koa-static\");\n\n//# sourceURL=webpack:///external_%22koa-static%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ })

/******/ });