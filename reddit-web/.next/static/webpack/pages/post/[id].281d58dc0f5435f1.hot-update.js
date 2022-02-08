"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/post/[id]",{

/***/ "./src/utils/withApollo.ts":
/*!*********************************!*\
  !*** ./src/utils/withApollo.ts ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"withApollo\": function() { return /* binding */ withApollo; }\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _createWithApollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createWithApollo */ \"./src/utils/createWithApollo.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) {\n        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){\n            arr2[i] = arr[i];\n        }\n        return arr2;\n    }\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArray(iter) {\n    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();\n}\nvar createClient = function(ctx) {\n    var ref;\n    return new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.ApolloClient({\n        uri: \"http://localhost:4000/graphql\",\n        credentials: \"include\",\n        headers: {\n            cookie: ( false ? 0 : undefined) || \"\"\n        },\n        cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_1__.InMemoryCache({\n            typePolicies: {\n                Query: {\n                    fields: {\n                        posts: {\n                            keyArgs: [],\n                            merge: function(existing, incoming) {\n                                return _objectSpread({\n                                }, incoming, {\n                                    posts: _toConsumableArray((existing === null || existing === void 0 ? void 0 : existing.posts) || []).concat(_toConsumableArray(incoming.posts))\n                                });\n                            }\n                        }\n                    }\n                }\n            }\n        })\n    });\n};\nvar withApollo = (0,_createWithApollo__WEBPACK_IMPORTED_MODULE_0__.createWithApollo)(client);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvd2l0aEFwb2xsby50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTREO0FBQ1A7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXJELEdBQUssQ0FBQ0csWUFBWSxHQUFHLFFBQVEsQ0FBUEMsR0FBb0I7UUFLREEsR0FBTztXQUxELEdBQUcsQ0FBQ0osd0RBQVksQ0FBQyxDQUFDO1FBQzdESyxHQUFHLEVBQUUsQ0FBK0I7UUFDcENDLFdBQVcsRUFBRSxDQUFTO1FBQ3RCQyxPQUFPLEVBQUUsQ0FBQztZQUNOQyxNQUFNLEdBQ0wsTUFBNkIsR0FBRyxDQUF1QixHQUFHRSxTQUFTLEtBQ3BFLENBQUU7UUFDTixDQUFDO1FBQ0RDLEtBQUssRUFBRSxHQUFHLENBQUNWLHlEQUFhLENBQUMsQ0FBQztZQUN4QlcsWUFBWSxFQUFDLENBQUM7Z0JBQ1pDLEtBQUssRUFBQyxDQUFDO29CQUNMQyxNQUFNLEVBQUMsQ0FBQzt3QkFDTkMsS0FBSyxFQUFDLENBQUM7NEJBQ0xDLE9BQU8sRUFBQyxDQUFDLENBQUM7NEJBQ1ZDLEtBQUssRUFBTEEsUUFDYixDQUFlQyxRQUFvQyxFQUNwQ0MsUUFBdUIsRUFDUCxDQUFDO2dDQUNqQixNQUFNO21DQUNBQSxRQUFRO29DQUNYSixLQUFLLHNCQUFNRyxRQUFRLGFBQVJBLFFBQVEsS0FBUkEsSUFBSSxDQUFKQSxDQUFlLEdBQWZBLElBQUksQ0FBSkEsQ0FBZSxHQUFmQSxRQUFRLENBQUVILEtBQUssS0FBSSxDQUFDLENBQUMsNEJBQU1JLFFBQVEsQ0FBQ0osS0FBSzs7NEJBRXpELENBQUM7d0JBQ0gsQ0FBQztvQkFDSCxDQUFDO2dCQUNILENBQUM7WUFDSCxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7O0FBQ00sR0FBSyxDQUFDSyxVQUFVLEdBQUdsQixtRUFBZ0IsQ0FBQ21CLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL3dpdGhBcG9sbG8udHM/YjJjOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcG9sbG9DbGllbnQsIEluTWVtb3J5Q2FjaGUgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XG5pbXBvcnQgeyBjcmVhdGVXaXRoQXBvbGxvIH0gZnJvbSAnLi9jcmVhdGVXaXRoQXBvbGxvJztcbmltcG9ydCB7IFBhZ2luYXRlZFBvc3RzIH0gZnJvbSAnLi4vZ2VuZXJhdGVkL2dyYXBocWwnO1xuaW1wb3J0IHsgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnbmV4dCc7XG5cbmNvbnN0IGNyZWF0ZUNsaWVudCA9IChjdHg6IE5leHRQYWdlQ29udGV4dCkgPT4gbmV3IEFwb2xsb0NsaWVudCh7XG4gICAgdXJpOiBcImh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9ncmFwaHFsXCIsXG4gICAgY3JlZGVudGlhbHM6IFwiaW5jbHVkZVwiICBhcyBjb25zdCAsXG4gICAgaGVhZGVyczoge1xuICAgICAgICBjb29raWU6XG4gICAgICAgICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/IGN0eC5yZXE/LmhlYWRlcnMuY29va2llIDogdW5kZWZpbmVkKSB8fFxuICAgICAgICBcIlwiLCBcbiAgICB9LFxuICAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSh7XG4gICAgICB0eXBlUG9saWNpZXM6e1xuICAgICAgICBRdWVyeTp7XG4gICAgICAgICAgZmllbGRzOntcbiAgICAgICAgICAgIHBvc3RzOntcbiAgICAgICAgICAgICAga2V5QXJnczpbXSxcbiAgICAgICAgICAgICAgbWVyZ2UoXG4gICAgICAgICAgICAgICAgZXhpc3Rpbmc6IFBhZ2luYXRlZFBvc3RzIHwgdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIGluY29taW5nOlBhZ2luYXRlZFBvc3RzXG4gICAgICAgICAgICAgICk6IFBhZ2luYXRlZFBvc3RzIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgIC4uLmluY29taW5nLFxuICAgICAgICAgICAgICAgICAgIHBvc3RzOlsuLi4oZXhpc3Rpbmc/LnBvc3RzIHx8IFtdKSwgLi4uaW5jb21pbmcucG9zdHNdLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KTtcbiAgZXhwb3J0IGNvbnN0IHdpdGhBcG9sbG8gPSBjcmVhdGVXaXRoQXBvbGxvKGNsaWVudCkiXSwibmFtZXMiOlsiQXBvbGxvQ2xpZW50IiwiSW5NZW1vcnlDYWNoZSIsImNyZWF0ZVdpdGhBcG9sbG8iLCJjcmVhdGVDbGllbnQiLCJjdHgiLCJ1cmkiLCJjcmVkZW50aWFscyIsImhlYWRlcnMiLCJjb29raWUiLCJyZXEiLCJ1bmRlZmluZWQiLCJjYWNoZSIsInR5cGVQb2xpY2llcyIsIlF1ZXJ5IiwiZmllbGRzIiwicG9zdHMiLCJrZXlBcmdzIiwibWVyZ2UiLCJleGlzdGluZyIsImluY29taW5nIiwid2l0aEFwb2xsbyIsImNsaWVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils/withApollo.ts\n");

/***/ })

});