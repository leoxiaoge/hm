(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["hm"] = factory();
	else
		root["hm"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 147:
/***/ ((module) => {

module.exports = JSON.parse('{"name":"name","version":"1.0","description":"","private":true,"scripts":{"build":"webpack","build:sdk":"webpack --mode production --config webpack.config.js","test":"TZ=UTC jest"},"keywords":[],"author":"","license":"ISC","devDependencies":{"@babel/core":"^7.22.17","@babel/eslint-parser":"^7.22.15","@babel/plugin-transform-flow-comments":"^7.22.10","@babel/plugin-transform-react-jsx":"^7.22.15","@babel/plugin-transform-runtime":"^7.22.15","@babel/preset-env":"^7.22.15","@babel/preset-flow":"^7.22.15","@typescript-eslint/eslint-plugin":"^6.7.0","babel-loader":"^9.1.3","babel-plugin-es6-promise":"^1.1.1","css-loader":"^6.8.1","es6-promise":"^4.2.8","eslint":"^8.49.0","eslint-plugin-flowtype":"^8.0.3","eslint-plugin-jest":"^27.2.3","eslint-webpack-plugin":"^4.0.1","flow-bin":"^0.216.1","flowtype-webpack-plugin":"^0.0.3","fork-ts-checker-webpack-plugin":"^8.0.0","style-loader":"^3.3.3","terser-webpack-plugin":"^5.3.9","typescript":"^5.2.2","webpack":"^5.88.2","webpack-cli":"^5.1.4"},"dependencies":{"@babel/polyfill":"^7.12.1","core-js":"3"}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

;// CONCATENATED MODULE: ./src/globals.ts
var packageJson = __webpack_require__(147);
var Globals = {
  name: packageJson.name,
  version: packageJson.version,
  env: "production"
};
/* harmony default export */ const globals = (Globals);
;// CONCATENATED MODULE: ./src/hm.js

console.log(globals);
})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});