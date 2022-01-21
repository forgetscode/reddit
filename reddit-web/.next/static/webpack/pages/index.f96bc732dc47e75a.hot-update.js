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

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_urql__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next-urql */ \"./node_modules/next-urql/dist/next-urql.es.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./src/components/Layout.tsx\");\n/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../generated/graphql */ \"./src/generated/graphql.tsx\");\n/* harmony import */ var _utils_createUrqlClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/createUrqlClient */ \"./src/utils/createUrqlClient.ts\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nvar _this = undefined;\nvar _s1 = $RefreshSig$();\nvar Index = function() {\n    var _this1 = _this;\n    _s1();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({\n        limit: 10,\n        cursor: null\n    }), variables = ref[0], setVariables = ref[1];\n    var ref1 = _slicedToArray((0,_generated_graphql__WEBPACK_IMPORTED_MODULE_2__.usePostsQuery)({\n        variables: variables\n    }), 1), ref2 = ref1[0], data = ref2.data, fetching = ref2.fetching;\n    if (!fetching && !data) {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n            __source: {\n                fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/index.tsx\",\n                lineNumber: 18,\n                columnNumber: 16\n            },\n            __self: _this,\n            children: \" query failed\"\n        }));\n    }\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__.Layout, {\n        __source: {\n            fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/index.tsx\",\n            lineNumber: 22,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                align: \"center\",\n                __source: {\n                    fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/index.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Heading, {\n                        __source: {\n                            fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/index.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 13\n                        },\n                        __self: _this,\n                        children: \"Post Office\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        href: \"/create-post\",\n                        __source: {\n                            fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/index.tsx\",\n                            lineNumber: 25,\n                            columnNumber: 13\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Link, {\n                            ml: \"auto\",\n                            __source: {\n                                fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/index.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 17\n                            },\n                            __self: _this,\n                            children: \"create post\"\n                        })\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {\n                __source: {\n                    fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/index.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 13\n                },\n                __self: _this\n            }),\n            fetching && !data ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                __source: {\n                    fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/index.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 17\n                },\n                __self: _this,\n                children: \"loading...\"\n            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Stack, {\n                spacing: 8,\n                __source: {\n                    fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/index.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: data.posts.posts.map(function(p) {\n                    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                        p: 5,\n                        shadow: \"md\",\n                        borderWidth: \"1px\",\n                        __source: {\n                            fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/index.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 21\n                        },\n                        __self: _this1,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Heading, {\n                                fontSize: \"xl\",\n                                __source: {\n                                    fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/index.tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 25\n                                },\n                                __self: _this1,\n                                children: p.title\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                                mt: 4,\n                                __source: {\n                                    fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/index.tsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 25\n                                },\n                                __self: _this1,\n                                children: p.textSnippet + \"...\"\n                            })\n                        ]\n                    }, p.id);\n                })\n            }),\n            data && data.posts.hasMore ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                __source: {\n                    fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/index.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 17\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                    onClick: function() {\n                        setVariables({\n                            limit: variables.limit,\n                            cursor: data.posts.posts[data.posts.posts.length - 1].createdAt\n                        });\n                    },\n                    isLoading: fetching,\n                    m: \"auto\",\n                    my: 6,\n                    __source: {\n                        fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/index.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 17\n                    },\n                    __self: _this,\n                    children: \" load more\"\n                })\n            }) : null\n        ]\n    }));\n};\n_s1(Index, \"f6HQW+SCYAAsRIbZ3uTK7lrjhnE=\", false, function() {\n    return [\n        _generated_graphql__WEBPACK_IMPORTED_MODULE_2__.usePostsQuery\n    ];\n});\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,next_urql__WEBPACK_IMPORTED_MODULE_7__.withUrqlClient)(_utils_createUrqlClient__WEBPACK_IMPORTED_MODULE_3__.createUrqlClient, {\n    ssr: true\n})(Index));\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB3aXRoVXJxbENsaWVudCB9IGZyb20gXCJuZXh0LXVycWxcIjtcbmltcG9ydCB7IExheW91dCB9IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IHsgdXNlUG9zdHNRdWVyeSB9IGZyb20gXCIuLi9nZW5lcmF0ZWQvZ3JhcGhxbFwiO1xuaW1wb3J0IHsgY3JlYXRlVXJxbENsaWVudCB9IGZyb20gXCIuLi91dGlscy9jcmVhdGVVcnFsQ2xpZW50XCI7XG5pbXBvcnQgeyBCb3gsIEJ1dHRvbiwgRmxleCwgSGVhZGluZywgTGluaywgU3RhY2ssIFRleHQgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IE5leHRMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcbiAgICBjb25zdCBbdmFyaWFibGVzLCBzZXRWYXJpYWJsZXNdID0gdXNlU3RhdGUoeyBcbiAgICAgICAgbGltaXQ6MTAsXG4gICAgICAgIGN1cnNvcjogbnVsbCBhcyBudWxsIHwgc3RyaW5nfSk7XG4gICAgY29uc3QgW3tkYXRhLCBmZXRjaGluZ31dID0gdXNlUG9zdHNRdWVyeSh7XG4gICAgICAgIHZhcmlhYmxlcyxcbiAgICB9KTtcblxuICAgIGlmICghZmV0Y2hpbmcgJiYgIWRhdGEpIHtcbiAgICAgICAgcmV0dXJuIDxkaXY+IHF1ZXJ5IGZhaWxlZDwvZGl2PlxuICAgIH1cblxuICAgIHJldHVybihcbiAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgIDxGbGV4IGFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICA8SGVhZGluZz5Qb3N0IE9mZmljZTwvSGVhZGluZz5cbiAgICAgICAgICAgIDxOZXh0TGluayBocmVmPVwiL2NyZWF0ZS1wb3N0XCI+XG4gICAgICAgICAgICAgICAgPExpbmsgbWw9XCJhdXRvXCI+XG4gICAgICAgICAgICAgICAgY3JlYXRlIHBvc3RcbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L05leHRMaW5rPlxuICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgIHtmZXRjaGluZyAmJiAhZGF0YSA/IChcbiAgICAgICAgICAgICAgICA8ZGl2PmxvYWRpbmcuLi48L2Rpdj5cbiAgICAgICAgICAgICkgICA6ICAgKFxuICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezh9PlxuICAgICAgICAgICAgICAgIHtkYXRhIS5wb3N0cy5wb3N0cy5tYXAoIChwKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxCb3gga2V5ID17cC5pZH0gcD17NX0gc2hhZG93PSdtZCcgYm9yZGVyV2lkdGg9JzFweCc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGluZyBmb250U2l6ZT0neGwnPntwLnRpdGxlfTwvSGVhZGluZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IG10PXs0fT57cC50ZXh0U25pcHBldCArXCIuLi5cIn08L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7IGRhdGEgJiYgZGF0YS5wb3N0cy5oYXNNb3JlID8gKFxuICAgICAgICAgICAgICAgIDxGbGV4PlxuICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRWYXJpYWJsZXMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQ6dmFyaWFibGVzLmxpbWl0LFxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBkYXRhLnBvc3RzLnBvc3RzW2RhdGEucG9zdHMucG9zdHMubGVuZ3RoIC0xXS5jcmVhdGVkQXQsXG4gICAgICAgICAgICAgICAgICAgIH0pIFxuICAgICAgICAgICAgICAgIH19aXNMb2FkaW5nID0ge2ZldGNoaW5nfSBtPSdhdXRvJyBteT17Nn0+IGxvYWQgbW9yZTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICk6IG51bGx9XG4gICAgICAgIDwvTGF5b3V0PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoVXJxbENsaWVudChjcmVhdGVVcnFsQ2xpZW50LCB7c3NyOiB0cnVlfSkoSW5kZXgpO1xuXG5cbiJdLCJuYW1lcyI6WyJ3aXRoVXJxbENsaWVudCIsIkxheW91dCIsInVzZVBvc3RzUXVlcnkiLCJjcmVhdGVVcnFsQ2xpZW50IiwiQm94IiwiQnV0dG9uIiwiRmxleCIsIkhlYWRpbmciLCJMaW5rIiwiU3RhY2siLCJUZXh0IiwiTmV4dExpbmsiLCJ1c2VTdGF0ZSIsIkluZGV4IiwibGltaXQiLCJjdXJzb3IiLCJ2YXJpYWJsZXMiLCJzZXRWYXJpYWJsZXMiLCJkYXRhIiwiZmV0Y2hpbmciLCJkaXYiLCJhbGlnbiIsImhyZWYiLCJtbCIsImJyIiwic3BhY2luZyIsInBvc3RzIiwibWFwIiwicCIsInNoYWRvdyIsImJvcmRlcldpZHRoIiwiZm9udFNpemUiLCJ0aXRsZSIsIm10IiwidGV4dFNuaXBwZXQiLCJpZCIsImhhc01vcmUiLCJvbkNsaWNrIiwibGVuZ3RoIiwiY3JlYXRlZEF0IiwiaXNMb2FkaW5nIiwibSIsIm15Iiwic3NyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

});