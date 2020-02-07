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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/background/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Setting.ts":
/*!************************!*\
  !*** ./src/Setting.ts ***!
  \************************/
/*! exports provided: storageKey, dateFormat, defaultSettings, settings, reloadSettings, getSettingsAsync, setSettingsAsync */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storageKey", function() { return storageKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateFormat", function() { return dateFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultSettings", function() { return defaultSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reloadSettings", function() { return reloadSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSettingsAsync", function() { return getSettingsAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSettingsAsync", function() { return setSettingsAsync; });
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var storageKey = 'settings';
var dateFormat = 'YYYY-MM-DD';
var defaultSettings = {
    isEnabled: true,
    scanSpeed: 5000,
    city: 4951,
    checkIn: ''
};
var settings = __assign({}, defaultSettings);
function reloadSettings() {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _b = (_a = Object).assign;
                    _c = [settings];
                    return [4 /*yield*/, getSettingsAsync()];
                case 1:
                    _b.apply(_a, _c.concat([_d.sent()]));
                    return [2 /*return*/];
            }
        });
    });
}
;
function getSettingsAsync() {
    return new Promise(function (resolve, reject) {
        if (!chrome.storage)
            resolve(defaultSettings);
        else
            chrome.storage.sync.get(storageKey, function (_a) {
                var _b = storageKey, currentSettings = _a[_b];
                currentSettings.scanSpeed = Number(currentSettings.scanSpeed);
                resolve(currentSettings);
            });
    });
}
;
function setSettingsAsync(settings) {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    var _a;
                    if (!chrome.storage)
                        resolve();
                    else
                        chrome.storage.sync.set((_a = {}, _a[storageKey] = settings, _a), function () { return __awaiter(_this, void 0, void 0, function () {
                            var setted;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, getSettingsAsync()];
                                    case 1:
                                        setted = _a.sent();
                                        console.log('Setting updated:');
                                        console.log(setted);
                                        resolve();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                })];
        });
    });
}
;


/***/ }),

/***/ "./src/background/main.ts":
/*!********************************!*\
  !*** ./src/background/main.ts ***!
  \********************************/
/*! exports provided: module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "module", function() { return module; });
/* harmony import */ var _Setting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Setting */ "./src/Setting.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

debugger;
!function () {
    return __awaiter(this, void 0, void 0, function () {
        var currentSettings, settings;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Object(_Setting__WEBPACK_IMPORTED_MODULE_0__["getSettingsAsync"])()];
                case 1:
                    currentSettings = _a.sent();
                    settings = __assign({}, _Setting__WEBPACK_IMPORTED_MODULE_0__["defaultSettings"]);
                    Object.keys(_Setting__WEBPACK_IMPORTED_MODULE_0__["defaultSettings"]).forEach(function (key) {
                        settings[key] = currentSettings[key];
                    });
                    return [4 /*yield*/, Object(_Setting__WEBPACK_IMPORTED_MODULE_0__["setSettingsAsync"])(settings)];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}();
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    chrome.browserAction.setBadgeText({ text: message });
    sendResponse("回覆");
});
var module = null;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NldHRpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pGTyxJQUFNLFVBQVUsR0FBRyxVQUFVLENBQUM7QUFDOUIsSUFBTSxVQUFVLEdBQUcsWUFBWSxDQUFDO0FBRWhDLElBQU0sZUFBZSxHQUFHO0lBQzNCLFNBQVMsRUFBRSxJQUFJO0lBQ2YsU0FBUyxFQUFFLElBQUk7SUFDZixJQUFJLEVBQUUsSUFBSTtJQUNWLE9BQU8sRUFBRSxFQUFFO0NBQ2QsQ0FBQztBQUNLLElBQU0sUUFBUSxnQkFBUSxlQUFlLENBQUUsQ0FBQztBQUN4QyxTQUFlLGNBQWM7Ozs7OztvQkFDaEMsaUJBQU0sRUFBQyxNQUFNOzBCQUFDLFFBQVE7b0JBQUUscUJBQU0sZ0JBQWdCLEVBQUU7O29CQUFoRCx3QkFBd0IsU0FBd0IsR0FBQyxDQUFDOzs7OztDQUNyRDtBQUFBLENBQUM7QUFLSyxTQUFTLGdCQUFnQjtJQUM1QixPQUFPLElBQUksT0FBTyxDQUFXLFVBQUMsT0FBTyxFQUFFLE1BQU07UUFDekMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPO1lBQUUsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDOztZQUN6QyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLFVBQUMsRUFBaUM7b0JBQS9CLGVBQVksRUFBWix3QkFBNkI7Z0JBQ3JFLGVBQWUsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDOUQsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQzdCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDO0FBQUEsQ0FBQztBQUVLLFNBQWUsZ0JBQWdCLENBQUMsUUFBa0I7Ozs7WUFDckQsc0JBQU8sSUFBSSxPQUFPLENBQVcsVUFBQyxPQUFPLEVBQUUsTUFBTTs7b0JBQ3pDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTzt3QkFBRSxPQUFPLEVBQUUsQ0FBQzs7d0JBQzFCLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsV0FBRyxHQUFDLFVBQVUsSUFBRyxRQUFRLE9BQUk7Ozs7NENBQ3RDLHFCQUFNLGdCQUFnQixFQUFFOzt3Q0FBakMsTUFBTSxHQUFHLFNBQXdCO3dDQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7d0NBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7d0NBQ3BCLE9BQU8sRUFBRSxDQUFDOzs7OzZCQUNiLENBQUMsQ0FBQztnQkFDUCxDQUFDLENBQUMsRUFBQzs7O0NBQ047QUFBQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q3lGO0FBRTNGLFFBQVEsQ0FBQztBQUVULENBQUM7Ozs7O3dCQUMwQixxQkFBTSxpRUFBZ0IsRUFBRTs7b0JBQTFDLGVBQWUsR0FBRyxTQUF3QjtvQkFDMUMsUUFBUSxHQUFHLGFBQUksd0RBQWUsQ0FBUSxDQUFDO29CQUM3QyxNQUFNLENBQUMsSUFBSSxDQUFDLHdEQUFlLENBQUMsQ0FBQyxPQUFPLENBQUMsYUFBRzt3QkFDcEMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFDLGVBQWUsQ0FBQyxHQUFxQixDQUFDLENBQUM7b0JBQ3hELENBQUMsQ0FBQyxDQUFDO29CQUNKLHFCQUFNLGlFQUFnQixDQUFDLFFBQVEsQ0FBQzs7b0JBQWhDLFNBQWdDLENBQUM7Ozs7O0NBQ25DLEVBQUUsQ0FBQztBQUVKLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsWUFBWTtJQUMvRCxNQUFNLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxFQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDO0lBQ2xELFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN2QixDQUFDLENBQUMsQ0FBQztBQUVJLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyIsImZpbGUiOiJiYWNrZ3JvdW5kLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvYmFja2dyb3VuZC9tYWluLnRzXCIpO1xuIiwiXHJcbmV4cG9ydCBjb25zdCBzdG9yYWdlS2V5ID0gJ3NldHRpbmdzJztcclxuZXhwb3J0IGNvbnN0IGRhdGVGb3JtYXQgPSAnWVlZWS1NTS1ERCc7XHJcblxyXG5leHBvcnQgY29uc3QgZGVmYXVsdFNldHRpbmdzID0ge1xyXG4gICAgaXNFbmFibGVkOiB0cnVlLFxyXG4gICAgc2NhblNwZWVkOiA1MDAwLFxyXG4gICAgY2l0eTogNDk1MSxcclxuICAgIGNoZWNrSW46ICcnXHJcbn07XHJcbmV4cG9ydCBjb25zdCBzZXR0aW5ncyA9IHsgLi4uZGVmYXVsdFNldHRpbmdzIH07XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWxvYWRTZXR0aW5ncygpIHtcclxuICAgIE9iamVjdC5hc3NpZ24oc2V0dGluZ3MsIGF3YWl0IGdldFNldHRpbmdzQXN5bmMoKSk7XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IHR5cGUgU2V0dGluZ3MgPSB0eXBlb2YgZGVmYXVsdFNldHRpbmdzO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNldHRpbmdzQXN5bmMoKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8U2V0dGluZ3M+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBpZiAoIWNocm9tZS5zdG9yYWdlKSByZXNvbHZlKGRlZmF1bHRTZXR0aW5ncyk7XHJcbiAgICAgICAgZWxzZSBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldChzdG9yYWdlS2V5LCAoeyBbc3RvcmFnZUtleV06IGN1cnJlbnRTZXR0aW5ncyB9KSA9PiB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRTZXR0aW5ncy5zY2FuU3BlZWQgPSBOdW1iZXIoY3VycmVudFNldHRpbmdzLnNjYW5TcGVlZCk7XHJcbiAgICAgICAgICAgIHJlc29sdmUoY3VycmVudFNldHRpbmdzKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNldFNldHRpbmdzQXN5bmMoc2V0dGluZ3M6IFNldHRpbmdzKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8U2V0dGluZ3M+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBpZiAoIWNocm9tZS5zdG9yYWdlKSByZXNvbHZlKCk7XHJcbiAgICAgICAgZWxzZSBjaHJvbWUuc3RvcmFnZS5zeW5jLnNldCh7IFtzdG9yYWdlS2V5XTogc2V0dGluZ3MgfSwgYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzZXR0ZWQgPSBhd2FpdCBnZXRTZXR0aW5nc0FzeW5jKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZXR0aW5nIHVwZGF0ZWQ6Jyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNldHRlZCk7XHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBTZXR0aW5ncywgZGVmYXVsdFNldHRpbmdzLCBnZXRTZXR0aW5nc0FzeW5jLCBzZXRTZXR0aW5nc0FzeW5jIH0gZnJvbSBcIi4uL1NldHRpbmdcIjsgXHJcblxyXG5kZWJ1Z2dlcjtcclxuIFxyXG4hYXN5bmMgZnVuY3Rpb24oKXsgXHJcbiAgIGNvbnN0IGN1cnJlbnRTZXR0aW5ncyA9IGF3YWl0IGdldFNldHRpbmdzQXN5bmMoKTtcclxuICAgY29uc3Qgc2V0dGluZ3MgPSB7Li4uZGVmYXVsdFNldHRpbmdzfSBhcyBhbnk7IFxyXG4gICBPYmplY3Qua2V5cyhkZWZhdWx0U2V0dGluZ3MpLmZvckVhY2goa2V5PT57XHJcbiAgICAgICBzZXR0aW5nc1trZXldPWN1cnJlbnRTZXR0aW5nc1trZXkgYXMga2V5b2YgU2V0dGluZ3NdO1xyXG4gICAgfSk7ICBcclxuICAgYXdhaXQgc2V0U2V0dGluZ3NBc3luYyhzZXR0aW5ncyk7XHJcbn0oKTtcclxuXHJcbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigobWVzc2FnZSwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHsgXHJcbiAgICBjaHJvbWUuYnJvd3NlckFjdGlvbi5zZXRCYWRnZVRleHQoe3RleHQ6bWVzc2FnZX0pO1xyXG4gICAgc2VuZFJlc3BvbnNlKFwi5Zue6KaGXCIpOyAgXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IG1vZHVsZSA9IG51bGw7Il0sInNvdXJjZVJvb3QiOiIifQ==