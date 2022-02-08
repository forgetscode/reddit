"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../theme */ \"./src/theme.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) {\n        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){\n            arr2[i] = arr[i];\n        }\n        return arr2;\n    }\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _iterableToArray(iter) {\n    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance\");\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();\n}\nvar client = new _apollo_client__WEBPACK_IMPORTED_MODULE_2__.ApolloClient({\n    uri: \"http://localhost:4000/graphql\",\n    credentials: \"include\",\n    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_2__.InMemoryCache({\n        typePolicies: {\n            Query: {\n                fields: {\n                    posts: {\n                        keyArgs: [\n                            'limit',\n                            'cursor'\n                        ],\n                        merge: function(existing, incoming) {\n                            return _objectSpread({\n                            }, incoming, {\n                                posts: _toConsumableArray((existing === null || existing === void 0 ? void 0 : existing.posts) || []).concat(_toConsumableArray(incoming.posts))\n                            });\n                        }\n                    }\n                }\n            }\n        }\n    })\n});\nfunction MyApp(param) {\n    var Component = param.Component, pageProps = param.pageProps;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_apollo_client__WEBPACK_IMPORTED_MODULE_2__.ApolloProvider, {\n        client: client,\n        __source: {\n            fileName: \"/home/forgets_code/react/reddit_apollo/reddit/reddit-web/src/pages/_app.tsx\",\n            lineNumber: 34,\n            columnNumber: 5\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.ThemeProvider, {\n            theme: _theme__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n            __source: {\n                fileName: \"/home/forgets_code/react/reddit_apollo/reddit/reddit-web/src/pages/_app.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            },\n            __self: this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.CSSReset, {\n                    __source: {\n                        fileName: \"/home/forgets_code/react/reddit_apollo/reddit/reddit-web/src/pages/_app.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    },\n                    __self: this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, _objectSpread({\n                }, pageProps, {\n                    __source: {\n                        fileName: \"/home/forgets_code/react/reddit_apollo/reddit/reddit-web/src/pages/_app.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 13\n                    },\n                    __self: this\n                }))\n            ]\n        })\n    }));\n}\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBNEU7QUFDbEI7QUFFOUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVCLEdBQUssQ0FBQ00sTUFBTSxHQUFHLEdBQUcsQ0FBQ04sd0RBQVksQ0FBQyxDQUFDO0lBQy9CTyxHQUFHLEVBQUUsQ0FBK0I7SUFDcENDLFdBQVcsRUFBRSxDQUFTO0lBQ3RCQyxLQUFLLEVBQUUsR0FBRyxDQUFDUCx5REFBYSxDQUFDLENBQUM7UUFDeEJRLFlBQVksRUFBQyxDQUFDO1lBQ1pDLEtBQUssRUFBQyxDQUFDO2dCQUNMQyxNQUFNLEVBQUMsQ0FBQztvQkFDTkMsS0FBSyxFQUFDLENBQUM7d0JBQ0xDLE9BQU8sRUFBQyxDQUFDOzRCQUFBLENBQU87NEJBQUUsQ0FBUTt3QkFBQSxDQUFDO3dCQUMzQkMsS0FBSyxFQUFMQSxRQUNYLENBQWFDLFFBQW9DLEVBQ3BDQyxRQUF1QixFQUNQLENBQUM7NEJBQ2pCLE1BQU07K0JBQ0FBLFFBQVE7Z0NBQ1hKLEtBQUssc0JBQU1HLFFBQVEsYUFBUkEsUUFBUSxLQUFSQSxJQUFJLENBQUpBLENBQWUsR0FBZkEsSUFBSSxDQUFKQSxDQUFlLEdBQWZBLFFBQVEsQ0FBRUgsS0FBSyxLQUFJLENBQUMsQ0FBQyw0QkFBTUksUUFBUSxDQUFDSixLQUFLOzt3QkFFekQsQ0FBQztvQkFDSCxDQUFDO2dCQUNILENBQUM7WUFDSCxDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDO1NBR1FLLEtBQUssQ0FBQyxLQUF3QixFQUFFLENBQUM7UUFBekJDLFNBQVMsR0FBWCxLQUF3QixDQUF0QkEsU0FBUyxFQUFFQyxTQUFTLEdBQXRCLEtBQXdCLENBQVhBLFNBQVM7SUFDbkMsTUFBTSxzRUFDSG5CLDBEQUFjO1FBQUNLLE1BQU0sRUFBRUEsTUFBTTs7Ozs7Ozt3RkFDM0JILDJEQUFhO1lBQUNFLEtBQUssRUFBRUEsOENBQUs7Ozs7Ozs7O3FGQUN0QkQsc0RBQVE7Ozs7Ozs7O3FGQUNOZSxTQUFTO21CQUFLQyxTQUFTOzs7Ozs7Ozs7OztBQUtwQyxDQUFDO0tBVlFGLEtBQUs7QUFZZCwrREFBZUEsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvX2FwcC50c3g/ZjlkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcG9sbG9DbGllbnQsIEFwb2xsb1Byb3ZpZGVyLCBJbk1lbW9yeUNhY2hlIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyLCBDU1NSZXNldCB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnXG5pbXBvcnQgeyBQYWdpbmF0ZWRQb3N0cyB9IGZyb20gJy4uL2dlbmVyYXRlZC9ncmFwaHFsJztcbmltcG9ydCB0aGVtZSBmcm9tICcuLi90aGVtZSdcblxuY29uc3QgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XG4gIHVyaTogXCJodHRwOi8vbG9jYWxob3N0OjQwMDAvZ3JhcGhxbFwiLFxuICBjcmVkZW50aWFsczogXCJpbmNsdWRlXCIgIGFzIGNvbnN0ICxcbiAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKHtcbiAgICB0eXBlUG9saWNpZXM6e1xuICAgICAgUXVlcnk6e1xuICAgICAgICBmaWVsZHM6e1xuICAgICAgICAgIHBvc3RzOntcbiAgICAgICAgICAgIGtleUFyZ3M6WydsaW1pdCcsICdjdXJzb3InXSxcbiAgICAgICAgICAgIG1lcmdlKFxuICAgICAgICAgICAgICBleGlzdGluZzogUGFnaW5hdGVkUG9zdHMgfCB1bmRlZmluZWQsXG4gICAgICAgICAgICAgIGluY29taW5nOlBhZ2luYXRlZFBvc3RzXG4gICAgICAgICAgICApOiBQYWdpbmF0ZWRQb3N0cyB7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgIC4uLmluY29taW5nLFxuICAgICAgICAgICAgICAgICBwb3N0czpbLi4uKGV4aXN0aW5nPy5wb3N0cyB8fCBbXSksIC4uLmluY29taW5nLnBvc3RzXSxcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pXG59KTtcblxuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXtjbGllbnR9PlxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgICA8Q1NTUmVzZXQgLz5cbiAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICBcbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cbiAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXSwibmFtZXMiOlsiQXBvbGxvQ2xpZW50IiwiQXBvbGxvUHJvdmlkZXIiLCJJbk1lbW9yeUNhY2hlIiwiVGhlbWVQcm92aWRlciIsIkNTU1Jlc2V0IiwidGhlbWUiLCJjbGllbnQiLCJ1cmkiLCJjcmVkZW50aWFscyIsImNhY2hlIiwidHlwZVBvbGljaWVzIiwiUXVlcnkiLCJmaWVsZHMiLCJwb3N0cyIsImtleUFyZ3MiLCJtZXJnZSIsImV4aXN0aW5nIiwiaW5jb21pbmciLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ })

});