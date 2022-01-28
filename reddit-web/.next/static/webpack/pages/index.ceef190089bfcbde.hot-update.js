"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/NavBar.tsx":
/*!***********************************!*\
  !*** ./src/components/NavBar.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NavBar\": function() { return /* binding */ NavBar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../generated/graphql */ \"./src/generated/graphql.tsx\");\n/* harmony import */ var _utils_isServer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/isServer */ \"./src/utils/isServer.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nfunction _throw(e) {\n    throw e;\n}\nvar _this = undefined;\nvar _s1 = $RefreshSig$();\nvar NavBar = function(param) {\n    var param = param !== null ? param : _throw(new TypeError(\"Cannot destructure undefined\"));\n    _s1();\n    var ref = _slicedToArray((0,_generated_graphql__WEBPACK_IMPORTED_MODULE_3__.useLogoutMutation)(), 2), ref1 = ref[0], logoutFetching = ref1.fetching, logout = ref[1];\n    var ref2 = _slicedToArray((0,_generated_graphql__WEBPACK_IMPORTED_MODULE_3__.useMeQuery)({\n        pause: (0,_utils_isServer__WEBPACK_IMPORTED_MODULE_4__.isServer)()\n    }), 1), ref3 = ref2[0], data = ref3.data, fetching = ref3.fetching;\n    var body = null;\n    if (fetching) {\n        body = null;\n    } else if (!(data === null || data === void 0 ? void 0 : data.me)) {\n        body = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/login\",\n                    __source: {\n                        fileName: \"/home/forgets_code/react/reddit/reddit-web/src/components/NavBar.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 13\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Link, {\n                        color: \"white\",\n                        mr: 2,\n                        __source: {\n                            fileName: \"/home/forgets_code/react/reddit/reddit-web/src/components/NavBar.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 17\n                        },\n                        __self: _this,\n                        children: \"Login\"\n                    })\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/register\",\n                    __source: {\n                        fileName: \"/home/forgets_code/react/reddit/reddit-web/src/components/NavBar.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 13\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Link, {\n                        color: \"white\",\n                        __source: {\n                            fileName: \"/home/forgets_code/react/reddit/reddit-web/src/components/NavBar.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 17\n                        },\n                        __self: _this,\n                        children: \"Register\"\n                    })\n                })\n            ]\n        });\n    } else {\n        body = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n            __source: {\n                fileName: \"/home/forgets_code/react/reddit/reddit-web/src/components/NavBar.tsx\",\n                lineNumber: 36,\n                columnNumber: 13\n            },\n            __self: _this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                    mr: 2,\n                    __source: {\n                        fileName: \"/home/forgets_code/react/reddit/reddit-web/src/components/NavBar.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 17\n                    },\n                    __self: _this,\n                    children: data.me.username\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                    onClick: function() {\n                        logout();\n                    },\n                    isLoading: logoutFetching,\n                    variant: \"link\",\n                    __source: {\n                        fileName: \"/home/forgets_code/react/reddit/reddit-web/src/components/NavBar.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 17\n                    },\n                    __self: _this,\n                    children: \"logout\"\n                })\n            ]\n        });\n    }\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Flex, {\n        position: \"sticky\",\n        top: 0,\n        bg: \"teal\",\n        p: 4,\n        zIndex: 1,\n        __source: {\n            fileName: \"/home/forgets_code/react/reddit/reddit-web/src/components/NavBar.tsx\",\n            lineNumber: 52,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                __source: {\n                    fileName: \"/home/forgets_code/react/reddit/reddit-web/src/components/NavBar.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Link, {\n                    __source: {\n                        fileName: \"/home/forgets_code/react/reddit/reddit-web/src/components/NavBar.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 17\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Heading, {\n                        __source: {\n                            fileName: \"/home/forgets_code/react/reddit/reddit-web/src/components/NavBar.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 21\n                        },\n                        __self: _this,\n                        children: \"Post Office\"\n                    })\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Box, {\n                ml: 'auto',\n                __source: {\n                    fileName: \"/home/forgets_code/react/reddit/reddit-web/src/components/NavBar.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: body\n            })\n        ]\n    }));\n};\n_s1(NavBar, \"zWQonKBdSDivg014NWrcQgGy7IE=\", false, function() {\n    return [\n        _generated_graphql__WEBPACK_IMPORTED_MODULE_3__.useLogoutMutation,\n        _generated_graphql__WEBPACK_IMPORTED_MODULE_3__.useMeQuery\n    ];\n});\n_c = NavBar;\nvar _c;\n$RefreshReg$(_c, \"NavBar\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OYXZCYXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFtRTtBQUMxQztBQUNPO0FBQ29DO0FBQ3hCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXJDLEdBQUssQ0FBQ1UsTUFBTSxHQUEwQixRQUFRLFNBQUM7OztJQUNsRCxHQUFLLENBQXVDSCxHQUFtQixrQkFBbkJBLHFFQUFpQixlQUFqQkEsR0FBbUIsS0FBOUNJLGNBQWMsUUFBdkJDLFFBQVEsRUFBa0JDLE1BQU0sR0FBSU4sR0FBbUI7SUFDL0QsR0FBSyxDQUFzQkMsSUFJMUIsa0JBSjBCQSw4REFBVSxDQUNqQyxDQUFDO1FBQ0dNLEtBQUssRUFBQ0wseURBQVE7SUFDbEIsQ0FBQyxjQUhzQkQsSUFJMUIsS0FKT08sSUFBSSxRQUFKQSxJQUFJLEVBQUVILFFBQVEsUUFBUkEsUUFBUTtJQU10QixHQUFHLENBQUNJLElBQUksR0FBRyxJQUFJO0lBRWYsRUFBRSxFQUFFSixRQUFRLEVBQUUsQ0FBQztRQUNYSSxJQUFJLEdBQUcsSUFBSTtJQUNmLENBQUMsTUFBTSxFQUFFLElBQUdELElBQUksYUFBSkEsSUFBSSxLQUFKQSxJQUFJLENBQUpBLENBQVEsR0FBUkEsSUFBSSxDQUFKQSxDQUFRLEdBQVJBLElBQUksQ0FBRUUsRUFBRSxHQUFFLENBQUM7UUFDbkJELElBQUk7O3FGQUVDVixrREFBUTtvQkFBQ1ksSUFBSSxFQUFDLENBQVE7Ozs7Ozs7bUdBQ2xCZCxrREFBSTt3QkFBQ2UsS0FBSyxFQUFDLENBQU87d0JBQUNDLEVBQUUsRUFBRSxDQUFDOzs7Ozs7O2tDQUFFLENBQUs7OztxRkFFbkNkLGtEQUFRO29CQUFDWSxJQUFJLEVBQUMsQ0FBVzs7Ozs7OzttR0FDckJkLGtEQUFJO3dCQUFDZSxLQUFLLEVBQUMsQ0FBTzs7Ozs7OztrQ0FBQyxDQUFROzs7OztJQUl4QyxDQUFDLE1BQU0sQ0FBQztRQUNKSCxJQUFJLHlFQUNDZCxrREFBSTs7Ozs7Ozs7cUZBQ0FGLGlEQUFHO29CQUFDb0IsRUFBRSxFQUFFLENBQUM7Ozs7Ozs7OEJBQUdMLElBQUksQ0FBQ0UsRUFBRSxDQUFDSSxRQUFROztxRkFDNUJwQixvREFBTTtvQkFBQ3FCLE9BQU8sRUFDWCxRQUNwQixHQUQwQixDQUFDO3dCQUNIVCxNQUFNO29CQUNWLENBQUM7b0JBRUxVLFNBQVMsRUFBRVosY0FBYztvQkFDekJhLE9BQU8sRUFBRSxDQUFNOzs7Ozs7OzhCQUFDLENBRWhCOzs7O0lBR1osQ0FBQztJQUVELE1BQU0sdUVBQ0R0QixrREFBSTtRQUFDdUIsUUFBUSxFQUFDLENBQVE7UUFBQ0MsR0FBRyxFQUFFLENBQUM7UUFBRUMsRUFBRSxFQUFDLENBQU07UUFBQ0MsQ0FBQyxFQUFFLENBQUM7UUFBRUMsTUFBTSxFQUFFLENBQUM7Ozs7Ozs7O2lGQUNwRHZCLGtEQUFROzs7Ozs7OytGQUNKRixrREFBSTs7Ozs7OzttR0FDQUQscURBQU87Ozs7Ozs7a0NBQUMsQ0FFVDs7OztpRkFHUEgsaURBQUc7Z0JBQUU4QixFQUFFLEVBQUUsQ0FBTTs7Ozs7OzswQkFDWGQsSUFBSTs7OztBQUlyQixDQUFDO0lBdERZTixNQUFNOztRQUM2QkgsaUVBQWlCO1FBQ2xDQywwREFBVTs7O0tBRjVCRSxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL05hdkJhci50c3g/ZDllYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEJ1dHRvbiwgRmxleCwgSGVhZGluZywgTGluayB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IE5leHRMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IHVzZUxvZ291dE11dGF0aW9uLCB1c2VNZVF1ZXJ5IH0gZnJvbSAnLi4vZ2VuZXJhdGVkL2dyYXBocWwnO1xuaW1wb3J0IHsgaXNTZXJ2ZXIgfSBmcm9tICcuLi91dGlscy9pc1NlcnZlcic7XG5cbmludGVyZmFjZSBOYXZCYXJQcm9wcyB7XG5cbn1cblxuZXhwb3J0IGNvbnN0IE5hdkJhcjogUmVhY3QuRkM8TmF2QmFyUHJvcHM+ID0gKHt9KSA9PiB7XG4gICAgY29uc3QgW3tmZXRjaGluZzpsb2dvdXRGZXRjaGluZ30sIGxvZ291dF0gPSB1c2VMb2dvdXRNdXRhdGlvbigpO1xuICAgIGNvbnN0IFt7ZGF0YSwgZmV0Y2hpbmd9XSA9IHVzZU1lUXVlcnkoXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBhdXNlOmlzU2VydmVyKCksXG4gICAgICAgIH1cbiAgICApO1xuXG4gICAgbGV0IGJvZHkgPSBudWxsXG5cbiAgICBpZiAoZmV0Y2hpbmcpIHtcbiAgICAgICAgYm9keSA9IG51bGw7XG4gICAgfSBlbHNlIGlmICghZGF0YT8ubWUpIHtcbiAgICAgICAgYm9keSA9IChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxOZXh0TGluayBocmVmPVwiL2xvZ2luXCI+XG4gICAgICAgICAgICAgICAgPExpbmsgY29sb3I9J3doaXRlJyBtcj17Mn0+TG9naW48L0xpbms+XG4gICAgICAgICAgICA8L05leHRMaW5rPlxuICAgICAgICAgICAgPE5leHRMaW5rIGhyZWY9XCIvcmVnaXN0ZXJcIj5cbiAgICAgICAgICAgICAgICA8TGluayBjb2xvcj0nd2hpdGUnPlJlZ2lzdGVyPC9MaW5rPlxuICAgICAgICAgICAgPC9OZXh0TGluaz5cbiAgICAgICAgPC8+XG4gICAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgICBib2R5ID0gKFxuICAgICAgICAgICAgPEZsZXggPlxuICAgICAgICAgICAgICAgIDxCb3ggbXI9ezJ9PntkYXRhLm1lLnVzZXJuYW1lfTwvQm94PlxuICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljayA9IHtcbiAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9nb3V0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgIGlzTG9hZGluZz17bG9nb3V0RmV0Y2hpbmd9XG4gICAgICAgICAgICAgICAgdmFyaWFudD0gXCJsaW5rXCI+XG4gICAgICAgICAgICAgICAgbG9nb3V0XG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8RmxleCBwb3NpdGlvbj0nc3RpY2t5JyB0b3A9ezB9IGJnPSd0ZWFsJyBwPXs0fSB6SW5kZXg9ezF9PiBcbiAgICAgICAgICAgIDxOZXh0TGluaz5cbiAgICAgICAgICAgICAgICA8TGluaz5cbiAgICAgICAgICAgICAgICAgICAgPEhlYWRpbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICBQb3N0IE9mZmljZVxuICAgICAgICAgICAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9OZXh0TGluaz5cbiAgICAgICAgICAgIDxCb3ggIG1sPXsnYXV0byd9PlxuICAgICAgICAgICAgICAgIHtib2R5fVxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvRmxleD5cbiAgICApO1xufSJdLCJuYW1lcyI6WyJCb3giLCJCdXR0b24iLCJGbGV4IiwiSGVhZGluZyIsIkxpbmsiLCJSZWFjdCIsIk5leHRMaW5rIiwidXNlTG9nb3V0TXV0YXRpb24iLCJ1c2VNZVF1ZXJ5IiwiaXNTZXJ2ZXIiLCJOYXZCYXIiLCJsb2dvdXRGZXRjaGluZyIsImZldGNoaW5nIiwibG9nb3V0IiwicGF1c2UiLCJkYXRhIiwiYm9keSIsIm1lIiwiaHJlZiIsImNvbG9yIiwibXIiLCJ1c2VybmFtZSIsIm9uQ2xpY2siLCJpc0xvYWRpbmciLCJ2YXJpYW50IiwicG9zaXRpb24iLCJ0b3AiLCJiZyIsInAiLCJ6SW5kZXgiLCJtbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/NavBar.tsx\n");

/***/ })

});