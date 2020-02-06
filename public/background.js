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
/*! exports provided: storageKey, defaultSettings, settings, reloadSettings, getSettingsAsync, setSettingsAsync */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storageKey", function() { return storageKey; });
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
var defaultSettings = {
    isEnabled: true,
    scanSpeed: 5000,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL1NldHRpbmcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakZPLElBQU0sVUFBVSxHQUFHLFVBQVUsQ0FBQztBQUU5QixJQUFNLGVBQWUsR0FBRztJQUMzQixTQUFTLEVBQUUsSUFBSTtJQUNmLFNBQVMsRUFBRSxJQUFJO0NBQ2xCLENBQUM7QUFFSyxJQUFNLFFBQVEsZ0JBQVEsZUFBZSxDQUFFLENBQUM7QUFFeEMsU0FBZSxjQUFjOzs7Ozs7b0JBQ2hDLGlCQUFNLEVBQUMsTUFBTTswQkFBQyxRQUFRO29CQUFFLHFCQUFNLGdCQUFnQixFQUFFOztvQkFBaEQsd0JBQXdCLFNBQXdCLEdBQUMsQ0FBQzs7Ozs7Q0FDckQ7QUFBQSxDQUFDO0FBS0ssU0FBUyxnQkFBZ0I7SUFDNUIsT0FBTyxJQUFJLE9BQU8sQ0FBVyxVQUFDLE9BQU8sRUFBRSxNQUFNO1FBQ3pDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTztZQUFFLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQzs7WUFDekMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxVQUFDLEVBQWlDO29CQUEvQixlQUFZLEVBQVosd0JBQTZCO2dCQUNyRSxlQUFlLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQzlELE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUM3QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUFBLENBQUM7QUFFSyxTQUFlLGdCQUFnQixDQUFDLFFBQWtCOzs7O1lBQ3JELHNCQUFPLElBQUksT0FBTyxDQUFXLFVBQUMsT0FBTyxFQUFFLE1BQU07O29CQUN6QyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU87d0JBQUUsT0FBTyxFQUFFLENBQUM7O3dCQUMxQixNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLFdBQUcsR0FBQyxVQUFVLElBQUcsUUFBUSxPQUFJOzs7OzRDQUN0QyxxQkFBTSxnQkFBZ0IsRUFBRTs7d0NBQWpDLE1BQU0sR0FBRyxTQUF3Qjt3Q0FDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO3dDQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO3dDQUNwQixPQUFPLEVBQUUsQ0FBQzs7Ozs2QkFDYixDQUFDLENBQUM7Z0JBQ1AsQ0FBQyxDQUFDLEVBQUM7OztDQUNOO0FBQUEsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckN5RjtBQUUzRixRQUFRLENBQUM7QUFFVCxDQUFDOzs7Ozt3QkFDMEIscUJBQU0saUVBQWdCLEVBQUU7O29CQUExQyxlQUFlLEdBQUcsU0FBd0I7b0JBQzFDLFFBQVEsR0FBRyxhQUFJLHdEQUFlLENBQVEsQ0FBQztvQkFDN0MsTUFBTSxDQUFDLElBQUksQ0FBQyx3REFBZSxDQUFDLENBQUMsT0FBTyxDQUFDLGFBQUc7d0JBQ3BDLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBQyxlQUFlLENBQUMsR0FBcUIsQ0FBQyxDQUFDO29CQUN4RCxDQUFDLENBQUMsQ0FBQztvQkFDSixxQkFBTSxpRUFBZ0IsQ0FBQyxRQUFRLENBQUM7O29CQUFoQyxTQUFnQyxDQUFDOzs7OztDQUNuQyxFQUFFLENBQUM7QUFFSixNQUFNLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFlBQVk7SUFDL0QsTUFBTSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsRUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQztJQUNsRCxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDdkIsQ0FBQyxDQUFDLENBQUM7QUFFSSxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMiLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2JhY2tncm91bmQvbWFpbi50c1wiKTtcbiIsIlxyXG5leHBvcnQgY29uc3Qgc3RvcmFnZUtleSA9ICdzZXR0aW5ncyc7XHJcblxyXG5leHBvcnQgY29uc3QgZGVmYXVsdFNldHRpbmdzID0ge1xyXG4gICAgaXNFbmFibGVkOiB0cnVlLFxyXG4gICAgc2NhblNwZWVkOiA1MDAwLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldHRpbmdzID0geyAuLi5kZWZhdWx0U2V0dGluZ3MgfTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWxvYWRTZXR0aW5ncygpIHtcclxuICAgIE9iamVjdC5hc3NpZ24oc2V0dGluZ3MsIGF3YWl0IGdldFNldHRpbmdzQXN5bmMoKSk7XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IHR5cGUgU2V0dGluZ3MgPSB0eXBlb2YgZGVmYXVsdFNldHRpbmdzO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNldHRpbmdzQXN5bmMoKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8U2V0dGluZ3M+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBpZiAoIWNocm9tZS5zdG9yYWdlKSByZXNvbHZlKGRlZmF1bHRTZXR0aW5ncyk7XHJcbiAgICAgICAgZWxzZSBjaHJvbWUuc3RvcmFnZS5zeW5jLmdldChzdG9yYWdlS2V5LCAoeyBbc3RvcmFnZUtleV06IGN1cnJlbnRTZXR0aW5ncyB9KSA9PiB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRTZXR0aW5ncy5zY2FuU3BlZWQgPSBOdW1iZXIoY3VycmVudFNldHRpbmdzLnNjYW5TcGVlZCk7XHJcbiAgICAgICAgICAgIHJlc29sdmUoY3VycmVudFNldHRpbmdzKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNldFNldHRpbmdzQXN5bmMoc2V0dGluZ3M6IFNldHRpbmdzKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8U2V0dGluZ3M+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBpZiAoIWNocm9tZS5zdG9yYWdlKSByZXNvbHZlKCk7XHJcbiAgICAgICAgZWxzZSBjaHJvbWUuc3RvcmFnZS5zeW5jLnNldCh7IFtzdG9yYWdlS2V5XTogc2V0dGluZ3MgfSwgYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzZXR0ZWQgPSBhd2FpdCBnZXRTZXR0aW5nc0FzeW5jKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZXR0aW5nIHVwZGF0ZWQ6Jyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHNldHRlZCk7XHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG4iLCJpbXBvcnQgeyBTZXR0aW5ncywgZGVmYXVsdFNldHRpbmdzLCBnZXRTZXR0aW5nc0FzeW5jLCBzZXRTZXR0aW5nc0FzeW5jIH0gZnJvbSBcIi4uL1NldHRpbmdcIjsgXHJcblxyXG5kZWJ1Z2dlcjtcclxuIFxyXG4hYXN5bmMgZnVuY3Rpb24oKXsgXHJcbiAgIGNvbnN0IGN1cnJlbnRTZXR0aW5ncyA9IGF3YWl0IGdldFNldHRpbmdzQXN5bmMoKTtcclxuICAgY29uc3Qgc2V0dGluZ3MgPSB7Li4uZGVmYXVsdFNldHRpbmdzfSBhcyBhbnk7IFxyXG4gICBPYmplY3Qua2V5cyhkZWZhdWx0U2V0dGluZ3MpLmZvckVhY2goa2V5PT57XHJcbiAgICAgICBzZXR0aW5nc1trZXldPWN1cnJlbnRTZXR0aW5nc1trZXkgYXMga2V5b2YgU2V0dGluZ3NdO1xyXG4gICAgfSk7ICBcclxuICAgYXdhaXQgc2V0U2V0dGluZ3NBc3luYyhzZXR0aW5ncyk7XHJcbn0oKTtcclxuXHJcbmNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcigobWVzc2FnZSwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpID0+IHsgXHJcbiAgICBjaHJvbWUuYnJvd3NlckFjdGlvbi5zZXRCYWRnZVRleHQoe3RleHQ6bWVzc2FnZX0pO1xyXG4gICAgc2VuZFJlc3BvbnNlKFwi5Zue6KaGXCIpOyAgXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IG1vZHVsZSA9IG51bGw7Il0sInNvdXJjZVJvb3QiOiIifQ==