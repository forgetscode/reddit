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

/***/ "./src/components/NavBar.tsx":
/*!***********************************!*\
  !*** ./src/components/NavBar.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NavBar\": function() { return /* binding */ NavBar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../generated/graphql */ \"./src/generated/graphql.tsx\");\n/* harmony import */ var _utils_isServer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/isServer */ \"./src/utils/isServer.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nfunction _throw(e) {\n    throw e;\n}\nvar _this = undefined;\nvar _s1 = $RefreshSig$();\nvar NavBar = function(param) {\n    var param = param !== null ? param : _throw(new TypeError(\"Cannot destructure undefined\"));\n    _s1();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    var ref = _slicedToArray((0,_generated_graphql__WEBPACK_IMPORTED_MODULE_3__.useLogoutMutation)(), 2), ref1 = ref[0], logoutFetching = ref1.fetching, logout = ref[1];\n    var ref2 = _slicedToArray((0,_generated_graphql__WEBPACK_IMPORTED_MODULE_3__.useMeQuery)({\n        pause: (0,_utils_isServer__WEBPACK_IMPORTED_MODULE_4__.isServer)()\n    }), 1), ref3 = ref2[0], data = ref3.data, fetching = ref3.fetching;\n    var body = null;\n    if (fetching) {\n        body = null;\n    } else if (!(data === null || data === void 0 ? void 0 : data.me)) {\n        body = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/login\",\n                    __source: {\n                        fileName: \"/home/forgets_code/react/reddit/reddit-web/src/components/NavBar.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 13\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Link, {\n                        color: \"white\",\n                        mr: 2,\n                        __source: {\n                            fileName: \"/home/forgets_code/react/reddit/reddit-web/src/components/NavBar.tsx\",\n                            lineNumber: 25,\n                            columnNumber: 17\n                        },\n                        __self: _this,\n                        children: \"Login\"\n                    })\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/register\",\n                    __source: {\n                        fileName: \"/home/forgets_code/react/reddit/reddit-web/src/components/NavBar.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 13\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Link, {\n                        color: \"white\",\n                        __source: {\n                            fileName: \"/home/forgets_code/react/reddit/reddit-web/src/components/NavBar.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 17\n                        },\n                        __self: _this,\n                        children: \"Register\"\n                    })\n                })\n            ]\n        });\n    } else {\n        body = /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n            align: \"center\",\n            __source: {\n                fileName: \"/home/forgets_code/react/reddit/reddit-web/src/components/NavBar.tsx\",\n                lineNumber: 34,\n                columnNumber: 13\n            },\n            __self: _this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/create-post\",\n                    __source: {\n                        fileName: \"/home/forgets_code/react/reddit/reddit-web/src/components/NavBar.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 17\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                        as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Link,\n                        mr: 4,\n                        __source: {\n                            fileName: \"/home/forgets_code/react/reddit/reddit-web/src/components/NavBar.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 21\n                        },\n                        __self: _this,\n                        children: \"create post\"\n                    })\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                    mr: 2,\n                    __source: {\n                        fileName: \"/home/forgets_code/react/reddit/reddit-web/src/components/NavBar.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 17\n                    },\n                    __self: _this,\n                    children: data.me.username\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                    onClick: function() {\n                        logout();\n                        Router;\n                    },\n                    isLoading: logoutFetching,\n                    variant: \"link\",\n                    __source: {\n                        fileName: \"/home/forgets_code/react/reddit/reddit-web/src/components/NavBar.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 17\n                    },\n                    __self: _this,\n                    children: \"logout\"\n                })\n            ]\n        });\n    }\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n        position: \"sticky\",\n        top: 0,\n        bg: \"teal\",\n        p: 4,\n        zIndex: 1,\n        __source: {\n            fileName: \"/home/forgets_code/react/reddit/reddit-web/src/components/NavBar.tsx\",\n            lineNumber: 56,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n            flex: 1,\n            m: \"auto\",\n            align: \"center\",\n            maxW: 800,\n            __source: {\n                fileName: \"/home/forgets_code/react/reddit/reddit-web/src/components/NavBar.tsx\",\n                lineNumber: 57,\n                columnNumber: 13\n            },\n            __self: _this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/\",\n                    __source: {\n                        fileName: \"/home/forgets_code/react/reddit/reddit-web/src/components/NavBar.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 17\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Link, {\n                        __source: {\n                            fileName: \"/home/forgets_code/react/reddit/reddit-web/src/components/NavBar.tsx\",\n                            lineNumber: 59,\n                            columnNumber: 21\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Heading, {\n                            __source: {\n                                fileName: \"/home/forgets_code/react/reddit/reddit-web/src/components/NavBar.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 25\n                            },\n                            __self: _this,\n                            children: \"Post Office\"\n                        })\n                    })\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                    ml: 'auto',\n                    __source: {\n                        fileName: \"/home/forgets_code/react/reddit/reddit-web/src/components/NavBar.tsx\",\n                        lineNumber: 65,\n                        columnNumber: 17\n                    },\n                    __self: _this,\n                    children: body\n                })\n            ]\n        })\n    }));\n};\n_s1(NavBar, \"dPow7xTjYcVJE0oFu4nTDRndrBM=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter,\n        _generated_graphql__WEBPACK_IMPORTED_MODULE_3__.useLogoutMutation,\n        _generated_graphql__WEBPACK_IMPORTED_MODULE_3__.useMeQuery\n    ];\n});\n_c = NavBar;\nvar _c;\n$RefreshReg$(_c, \"NavBar\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBVTs7O0tBSDVCRyxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL05hdkJhci50c3g/ZDllYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEJ1dHRvbiwgRmxleCwgSGVhZGluZywgTGluayB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IE5leHRMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IHVzZUxvZ291dE11dGF0aW9uLCB1c2VNZVF1ZXJ5IH0gZnJvbSAnLi4vZ2VuZXJhdGVkL2dyYXBocWwnO1xuaW1wb3J0IHsgaXNTZXJ2ZXIgfSBmcm9tICcuLi91dGlscy9pc1NlcnZlcic7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5cbmV4cG9ydCBjb25zdCBOYXZCYXI9ICh7fSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IFt7ZmV0Y2hpbmc6bG9nb3V0RmV0Y2hpbmd9LCBsb2dvdXRdID0gdXNlTG9nb3V0TXV0YXRpb24oKTtcbiAgICBjb25zdCBbe2RhdGEsIGZldGNoaW5nfV0gPSB1c2VNZVF1ZXJ5KFxuICAgICAgICB7XG4gICAgICAgICAgICBwYXVzZTppc1NlcnZlcigpLFxuICAgICAgICB9XG4gICAgKTtcblxuICAgIGxldCBib2R5ID0gbnVsbFxuXG4gICAgaWYgKGZldGNoaW5nKSB7XG4gICAgICAgIGJvZHkgPSBudWxsO1xuICAgIH0gZWxzZSBpZiAoIWRhdGE/Lm1lKSB7XG4gICAgICAgIGJvZHkgPSAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8TmV4dExpbmsgaHJlZj1cIi9sb2dpblwiPlxuICAgICAgICAgICAgICAgIDxMaW5rIGNvbG9yPSd3aGl0ZScgbXI9ezJ9PkxvZ2luPC9MaW5rPlxuICAgICAgICAgICAgPC9OZXh0TGluaz5cbiAgICAgICAgICAgIDxOZXh0TGluayBocmVmPVwiL3JlZ2lzdGVyXCI+XG4gICAgICAgICAgICAgICAgPExpbmsgY29sb3I9J3doaXRlJz5SZWdpc3RlcjwvTGluaz5cbiAgICAgICAgICAgIDwvTmV4dExpbms+XG4gICAgICAgIDwvPlxuICAgICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgICAgYm9keSA9IChcbiAgICAgICAgICAgIDxGbGV4IGFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPE5leHRMaW5rIGhyZWY9XCIvY3JlYXRlLXBvc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBhcz17TGlua30gbXI9ezR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlIHBvc3RcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9OZXh0TGluaz5cbiAgICAgICAgICAgICAgICA8Qm94IG1yPXsyfT57ZGF0YS5tZS51c2VybmFtZX08L0JveD5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2sgPSB7XG4gICAgICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ291dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgUm91dGVyIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICBpc0xvYWRpbmc9e2xvZ291dEZldGNoaW5nfVxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9IFwibGlua1wiPlxuICAgICAgICAgICAgICAgIGxvZ291dFxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEZsZXggcG9zaXRpb249J3N0aWNreScgdG9wPXswfSBiZz0ndGVhbCcgcD17NH0gekluZGV4PXsxfT4gXG4gICAgICAgICAgICA8RmxleCBmbGV4PXsxfSBtPSdhdXRvJyBhbGlnbj1cImNlbnRlclwiIG1heFc9ezgwMH0+XG4gICAgICAgICAgICAgICAgPE5leHRMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRpbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUG9zdCBPZmZpY2VcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvTmV4dExpbms+XG4gICAgICAgICAgICAgICAgPEJveCAgbWw9eydhdXRvJ30+XG4gICAgICAgICAgICAgICAgICAgIHtib2R5fVxuICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICA8L0ZsZXg+XG4gICAgKTtcbn0iXSwibmFtZXMiOlsiQm94IiwiQnV0dG9uIiwiRmxleCIsIkhlYWRpbmciLCJMaW5rIiwiUmVhY3QiLCJOZXh0TGluayIsInVzZUxvZ291dE11dGF0aW9uIiwidXNlTWVRdWVyeSIsImlzU2VydmVyIiwidXNlUm91dGVyIiwiTmF2QmFyIiwicm91dGVyIiwibG9nb3V0RmV0Y2hpbmciLCJmZXRjaGluZyIsImxvZ291dCIsInBhdXNlIiwiZGF0YSIsImJvZHkiLCJtZSIsImhyZWYiLCJjb2xvciIsIm1yIiwiYWxpZ24iLCJhcyIsInVzZXJuYW1lIiwib25DbGljayIsIlJvdXRlciIsImlzTG9hZGluZyIsInZhcmlhbnQiLCJwb3NpdGlvbiIsInRvcCIsImJnIiwicCIsInpJbmRleCIsImZsZXgiLCJtIiwibWF4VyIsIm1sIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/NavBar.tsx\n");

/***/ })

});