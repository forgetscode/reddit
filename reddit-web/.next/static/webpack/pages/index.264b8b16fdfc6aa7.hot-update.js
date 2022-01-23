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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_urql__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next-urql */ \"./node_modules/next-urql/dist/next-urql.es.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./src/components/Layout.tsx\");\n/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../generated/graphql */ \"./src/generated/graphql.tsx\");\n/* harmony import */ var _utils_createUrqlClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/createUrqlClient */ \"./src/utils/createUrqlClient.ts\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/chakra-ui-icons.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nvar _this = undefined;\nvar _s1 = $RefreshSig$();\nvar Index = function() {\n    var _this1 = _this;\n    _s1();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({\n        limit: 10,\n        cursor: null\n    }), variables = ref[0], setVariables = ref[1];\n    var ref1 = _slicedToArray((0,_generated_graphql__WEBPACK_IMPORTED_MODULE_2__.usePostsQuery)({\n        variables: variables\n    }), 1), ref2 = ref1[0], data = ref2.data, fetching = ref2.fetching;\n    if (!fetching && !data) {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n            __source: {\n                fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/index.tsx\",\n                lineNumber: 19,\n                columnNumber: 16\n            },\n            __self: _this,\n            children: \" query failed\"\n        }));\n    }\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__.Layout, {\n        __source: {\n            fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/index.tsx\",\n            lineNumber: 23,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                align: \"center\",\n                __source: {\n                    fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/index.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Heading, {\n                        __source: {\n                            fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/index.tsx\",\n                            lineNumber: 25,\n                            columnNumber: 13\n                        },\n                        __self: _this,\n                        children: \"Post Office\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        href: \"/create-post\",\n                        __source: {\n                            fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/index.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 13\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Link, {\n                            ml: \"auto\",\n                            __source: {\n                                fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/index.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 17\n                            },\n                            __self: _this,\n                            children: \"create post\"\n                        })\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {\n                __source: {\n                    fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/index.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 13\n                },\n                __self: _this\n            }),\n            fetching && !data ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                __source: {\n                    fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/index.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 17\n                },\n                __self: _this,\n                children: \"loading...\"\n            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Stack, {\n                spacing: 8,\n                __source: {\n                    fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/index.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: data.posts.posts.map(function(p) {\n                    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                        p: 5,\n                        shadow: \"md\",\n                        borderWidth: \"1px\",\n                        __source: {\n                            fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/index.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 21\n                        },\n                        __self: _this1,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                                mr: 5,\n                                __source: {\n                                    fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/index.tsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 25\n                                },\n                                __self: _this1,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                                        __source: {\n                                            fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/index.tsx\",\n                                            lineNumber: 40,\n                                            columnNumber: 29\n                                        },\n                                        __self: _this1,\n                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_7__.ChevronUpIcon, {\n                                            size: \"24px\",\n                                            __source: {\n                                                fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/index.tsx\",\n                                                lineNumber: 41,\n                                                columnNumber: 33\n                                            },\n                                            __self: _this1\n                                        })\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                                        __source: {\n                                            fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/index.tsx\",\n                                            lineNumber: 43,\n                                            columnNumber: 29\n                                        },\n                                        __self: _this1,\n                                        children: p.points\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                                        __source: {\n                                            fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/index.tsx\",\n                                            lineNumber: 46,\n                                            columnNumber: 29\n                                        },\n                                        __self: _this1,\n                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_7__.ChevronDownIcon, {\n                                            size: \"24px\",\n                                            __source: {\n                                                fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/index.tsx\",\n                                                lineNumber: 47,\n                                                columnNumber: 33\n                                            },\n                                            __self: _this1\n                                        })\n                                    })\n                                ]\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Box, {\n                                __source: {\n                                    fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/index.tsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 25\n                                },\n                                __self: _this1,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Heading, {\n                                        fontSize: \"xl\",\n                                        __source: {\n                                            fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/index.tsx\",\n                                            lineNumber: 51,\n                                            columnNumber: 29\n                                        },\n                                        __self: _this1,\n                                        children: p.title\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                                        __source: {\n                                            fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/index.tsx\",\n                                            lineNumber: 52,\n                                            columnNumber: 29\n                                        },\n                                        __self: _this1,\n                                        children: [\n                                            \" by: \",\n                                            p.creator.username,\n                                            \" \"\n                                        ]\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Text, {\n                                        mt: 4,\n                                        __source: {\n                                            fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/index.tsx\",\n                                            lineNumber: 53,\n                                            columnNumber: 29\n                                        },\n                                        __self: _this1,\n                                        children: p.textSnippet + \"...\"\n                                    })\n                                ]\n                            })\n                        ]\n                    }, p.id);\n                })\n            }),\n            data && data.posts.hasMore ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n                __source: {\n                    fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/index.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 17\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                    onClick: function() {\n                        setVariables({\n                            limit: variables.limit,\n                            cursor: data.posts.posts[data.posts.posts.length - 1].createdAt\n                        });\n                    },\n                    isLoading: fetching,\n                    m: \"auto\",\n                    my: 6,\n                    __source: {\n                        fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/index.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 17\n                    },\n                    __self: _this,\n                    children: \" load more\"\n                })\n            }) : null\n        ]\n    }));\n};\n_s1(Index, \"f6HQW+SCYAAsRIbZ3uTK7lrjhnE=\", false, function() {\n    return [\n        _generated_graphql__WEBPACK_IMPORTED_MODULE_2__.usePostsQuery\n    ];\n});\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,next_urql__WEBPACK_IMPORTED_MODULE_8__.withUrqlClient)(_utils_createUrqlClient__WEBPACK_IMPORTED_MODULE_3__.createUrqlClient, {\n    ssr: true\n})(Index));\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1IsSUFBSSxDQUFDUSxLQUFLLENBQUNBLEtBQUssQ0FBQ2tCLE1BQU0sR0FBRSxDQUFDLEVBQUVDLFNBQVM7d0JBQ2xFLENBQUM7b0JBQ0wsQ0FBQztvQkFBQ0MsU0FBUyxFQUFJM0IsUUFBUTtvQkFBRTRCLENBQUMsRUFBQyxDQUFNO29CQUFDQyxFQUFFLEVBQUUsQ0FBQzs7Ozs7Ozs4QkFBRSxDQUFVOztpQkFFcEQsSUFBSTs7O0FBR25CLENBQUM7SUE3REtuQyxLQUFLOztRQUlvQmIsNkRBQWE7OztLQUp0Q2EsS0FBSztBQStEWCwrREFBZWYseURBQWMsQ0FBQ0cscUVBQWdCLEVBQUUsQ0FBQ2dEO0lBQUFBLEdBQUcsRUFBRSxJQUFJO0FBQUEsQ0FBQyxFQUFFcEMsS0FBSyxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdpdGhVcnFsQ2xpZW50IH0gZnJvbSBcIm5leHQtdXJxbFwiO1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgeyB1c2VQb3N0c1F1ZXJ5IH0gZnJvbSBcIi4uL2dlbmVyYXRlZC9ncmFwaHFsXCI7XG5pbXBvcnQgeyBjcmVhdGVVcnFsQ2xpZW50IH0gZnJvbSBcIi4uL3V0aWxzL2NyZWF0ZVVycWxDbGllbnRcIjtcbmltcG9ydCB7IEJveCwgQnV0dG9uLCBGbGV4LCBIZWFkaW5nLCBMaW5rLCBTdGFjaywgVGV4dCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgTmV4dExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDaGV2cm9uVXBJY29uLCBDaGV2cm9uRG93bkljb24gfSBmcm9tIFwiQGNoYWtyYS11aS9pY29uc1wiO1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcbiAgICBjb25zdCBbdmFyaWFibGVzLCBzZXRWYXJpYWJsZXNdID0gdXNlU3RhdGUoeyBcbiAgICAgICAgbGltaXQ6MTAsXG4gICAgICAgIGN1cnNvcjogbnVsbCBhcyBudWxsIHwgc3RyaW5nfSk7XG4gICAgY29uc3QgW3tkYXRhLCBmZXRjaGluZ31dID0gdXNlUG9zdHNRdWVyeSh7XG4gICAgICAgIHZhcmlhYmxlcyxcbiAgICB9KTtcblxuICAgIGlmICghZmV0Y2hpbmcgJiYgIWRhdGEpIHtcbiAgICAgICAgcmV0dXJuIDxkaXY+IHF1ZXJ5IGZhaWxlZDwvZGl2PlxuICAgIH1cblxuICAgIHJldHVybihcbiAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgIDxGbGV4IGFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICA8SGVhZGluZz5Qb3N0IE9mZmljZTwvSGVhZGluZz4gXG4gICAgICAgICAgICA8TmV4dExpbmsgaHJlZj1cIi9jcmVhdGUtcG9zdFwiPlxuICAgICAgICAgICAgICAgIDxMaW5rIG1sPVwiYXV0b1wiPlxuICAgICAgICAgICAgICAgIGNyZWF0ZSBwb3N0XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgPC9OZXh0TGluaz5cbiAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICB7ZmV0Y2hpbmcgJiYgIWRhdGEgPyAoXG4gICAgICAgICAgICAgICAgPGRpdj5sb2FkaW5nLi4uPC9kaXY+XG4gICAgICAgICAgICApICAgOiAgIChcbiAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPXs4fT5cbiAgICAgICAgICAgICAgICB7ZGF0YSEucG9zdHMucG9zdHMubWFwKCAocCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8RmxleCBrZXkgPXtwLmlkfSBwPXs1fSBzaGFkb3c9J21kJyBib3JkZXJXaWR0aD0nMXB4Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggbXI9ezV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGV2cm9uVXBJY29uIHNpemU9XCIyNHB4XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3AucG9pbnRzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGV2cm9uRG93bkljb24gc2l6ZT1cIjI0cHhcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRpbmcgZm9udFNpemU9J3hsJz57cC50aXRsZX08L0hlYWRpbmc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQ+IGJ5OiB7IHAuY3JlYXRvci51c2VybmFtZSB9IDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBtdD17NH0+e3AudGV4dFNuaXBwZXQgK1wiLi4uXCJ9PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgeyBkYXRhICYmIGRhdGEucG9zdHMuaGFzTW9yZSA/IChcbiAgICAgICAgICAgICAgICA8RmxleD5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VmFyaWFibGVzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0OnZhcmlhYmxlcy5saW1pdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogZGF0YS5wb3N0cy5wb3N0c1tkYXRhLnBvc3RzLnBvc3RzLmxlbmd0aCAtMV0uY3JlYXRlZEF0LFxuICAgICAgICAgICAgICAgICAgICB9KSBcbiAgICAgICAgICAgICAgICB9fWlzTG9hZGluZyA9IHtmZXRjaGluZ30gbT0nYXV0bycgbXk9ezZ9PiBsb2FkIG1vcmU8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICApOiBudWxsfVxuICAgICAgICA8L0xheW91dD5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFVycWxDbGllbnQoY3JlYXRlVXJxbENsaWVudCwge3NzcjogdHJ1ZX0pKEluZGV4KTtcblxuXG4iXSwibmFtZXMiOlsid2l0aFVycWxDbGllbnQiLCJMYXlvdXQiLCJ1c2VQb3N0c1F1ZXJ5IiwiY3JlYXRlVXJxbENsaWVudCIsIkJveCIsIkJ1dHRvbiIsIkZsZXgiLCJIZWFkaW5nIiwiTGluayIsIlN0YWNrIiwiVGV4dCIsIk5leHRMaW5rIiwidXNlU3RhdGUiLCJDaGV2cm9uVXBJY29uIiwiQ2hldnJvbkRvd25JY29uIiwiSW5kZXgiLCJsaW1pdCIsImN1cnNvciIsInZhcmlhYmxlcyIsInNldFZhcmlhYmxlcyIsImRhdGEiLCJmZXRjaGluZyIsImRpdiIsImFsaWduIiwiaHJlZiIsIm1sIiwiYnIiLCJzcGFjaW5nIiwicG9zdHMiLCJtYXAiLCJwIiwia2V5Iiwic2hhZG93IiwiYm9yZGVyV2lkdGgiLCJtciIsInNpemUiLCJwb2ludHMiLCJmb250U2l6ZSIsInRpdGxlIiwiY3JlYXRvciIsInVzZXJuYW1lIiwibXQiLCJ0ZXh0U25pcHBldCIsImlkIiwiaGFzTW9yZSIsIm9uQ2xpY2siLCJsZW5ndGgiLCJjcmVhdGVkQXQiLCJpc0xvYWRpbmciLCJtIiwibXkiLCJzc3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

});