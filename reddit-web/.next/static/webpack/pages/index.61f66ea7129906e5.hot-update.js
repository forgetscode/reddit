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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_urql__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next-urql */ \"./node_modules/next-urql/dist/next-urql.es.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./src/components/Layout.tsx\");\n/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../generated/graphql */ \"./src/generated/graphql.tsx\");\n/* harmony import */ var _utils_createUrqlClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/createUrqlClient */ \"./src/utils/createUrqlClient.ts\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_UpvoteSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/UpvoteSection */ \"./src/components/UpvoteSection.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nvar _this = undefined;\nvar _s1 = $RefreshSig$();\nvar Index = function() {\n    var _this1 = _this;\n    _s1();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({\n        limit: 10,\n        cursor: null\n    }), variables = ref[0], setVariables = ref[1];\n    var ref1 = _slicedToArray((0,_generated_graphql__WEBPACK_IMPORTED_MODULE_2__.usePostsQuery)({\n        variables: variables\n    }), 1), ref2 = ref1[0], data = ref2.data, fetching = ref2.fetching;\n    var ref3 = _slicedToArray((0,_generated_graphql__WEBPACK_IMPORTED_MODULE_2__.useVoteMutation)(), 2), vote = ref3[1];\n    if (!fetching && !data) {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n            __source: {\n                fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/index.tsx\",\n                lineNumber: 20,\n                columnNumber: 16\n            },\n            __self: _this,\n            children: \" query failed\"\n        }));\n    }\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__.Layout, {\n        __source: {\n            fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/index.tsx\",\n            lineNumber: 24,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Flex, {\n                align: \"center\",\n                __source: {\n                    fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/index.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Heading, {\n                        __source: {\n                            fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/index.tsx\",\n                            lineNumber: 26,\n                            columnNumber: 13\n                        },\n                        __self: _this,\n                        children: \"Post Office\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                        href: \"/create-post\",\n                        __source: {\n                            fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/index.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 13\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Link, {\n                            ml: \"auto\",\n                            __source: {\n                                fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/index.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 17\n                            },\n                            __self: _this,\n                            children: \"create post\"\n                        })\n                    })\n                ]\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {\n                __source: {\n                    fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/index.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 13\n                },\n                __self: _this\n            }),\n            fetching && !data ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                __source: {\n                    fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/index.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 17\n                },\n                __self: _this,\n                children: \"loading...\"\n            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Stack, {\n                spacing: 8,\n                __source: {\n                    fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/index.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: data.posts.posts.map(function(p) {\n                    /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Flex, {\n                        p: 5,\n                        shadow: \"md\",\n                        borderWidth: \"1px\",\n                        __source: {\n                            fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/index.tsx\",\n                            lineNumber: 39,\n                            columnNumber: 21\n                        },\n                        __self: _this1,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_UpvoteSection__WEBPACK_IMPORTED_MODULE_6__.UpvoteSection, {\n                                post: p,\n                                __source: {\n                                    fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/index.tsx\",\n                                    lineNumber: 40,\n                                    columnNumber: 25\n                                },\n                                __self: _this1\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Box, {\n                                __source: {\n                                    fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/index.tsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 25\n                                },\n                                __self: _this1,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                        href: \"/post/[id]\",\n                                        as: \"/post/\".concat(p.id),\n                                        __source: {\n                                            fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/index.tsx\",\n                                            lineNumber: 42,\n                                            columnNumber: 29\n                                        },\n                                        __self: _this1,\n                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Link, {\n                                            __source: {\n                                                fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/index.tsx\",\n                                                lineNumber: 43,\n                                                columnNumber: 33\n                                            },\n                                            __self: _this1,\n                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Heading, {\n                                                fontSize: \"xl\",\n                                                __source: {\n                                                    fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/index.tsx\",\n                                                    lineNumber: 44,\n                                                    columnNumber: 37\n                                                },\n                                                __self: _this1,\n                                                children: [\n                                                    \" \",\n                                                    p.title,\n                                                    \" \"\n                                                ]\n                                            })\n                                        })\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Text, {\n                                        __source: {\n                                            fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/index.tsx\",\n                                            lineNumber: 47,\n                                            columnNumber: 29\n                                        },\n                                        __self: _this1,\n                                        children: [\n                                            \" by: \",\n                                            p.creator.username,\n                                            \" \"\n                                        ]\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Text, {\n                                        mt: 4,\n                                        __source: {\n                                            fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/index.tsx\",\n                                            lineNumber: 48,\n                                            columnNumber: 29\n                                        },\n                                        __self: _this1,\n                                        children: p.textSnippet + \"...\"\n                                    })\n                                ]\n                            })\n                        ]\n                    }, p.id);\n                })\n            }),\n            data && data.posts.hasMore ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Flex, {\n                __source: {\n                    fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/index.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 17\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                    onClick: function() {\n                        setVariables({\n                            limit: variables.limit,\n                            cursor: data.posts.posts[data.posts.posts.length - 1].createdAt\n                        });\n                    },\n                    isLoading: fetching,\n                    m: \"auto\",\n                    my: 6,\n                    __source: {\n                        fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/index.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 17\n                    },\n                    __self: _this,\n                    children: \" load more\"\n                })\n            }) : null\n        ]\n    }));\n};\n_s1(Index, \"6X1woMMw+U619LsoQ7+bbMEHbjg=\", false, function() {\n    return [\n        _generated_graphql__WEBPACK_IMPORTED_MODULE_2__.usePostsQuery,\n        _generated_graphql__WEBPACK_IMPORTED_MODULE_2__.useVoteMutation\n    ];\n});\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,next_urql__WEBPACK_IMPORTED_MODULE_8__.withUrqlClient)(_utils_createUrqlClient__WEBPACK_IMPORTED_MODULE_3__.createUrqlClient, {\n    ssr: true\n})(Index));\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUNTLEtBQUssQ0FBQ0EsS0FBSyxDQUFDVCxJQUFJLENBQUNTLEtBQUssQ0FBQ0EsS0FBSyxDQUFDaUIsTUFBTSxHQUFFLENBQUMsRUFBRUMsU0FBUzt3QkFDbEUsQ0FBQztvQkFDTCxDQUFDO29CQUFDQyxTQUFTLEVBQUkzQixRQUFRO29CQUFFNEIsQ0FBQyxFQUFDLENBQU07b0JBQUNDLEVBQUUsRUFBRSxDQUFDOzs7Ozs7OzhCQUFFLENBQVU7O2lCQUVwRCxJQUFJOzs7QUFHbkIsQ0FBQztJQXhES25DLEtBQUs7O1FBSW9CYiw2REFBYTtRQUd0QkMsK0RBQWU7OztLQVAvQlksS0FBSztBQTBEWCwrREFBZWYseURBQWMsQ0FBQ0kscUVBQWdCLEVBQUUsQ0FBQytDO0lBQUFBLEdBQUcsRUFBRSxJQUFJO0FBQUEsQ0FBQyxFQUFFcEMsS0FBSyxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHdpdGhVcnFsQ2xpZW50IH0gZnJvbSBcIm5leHQtdXJxbFwiO1xuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgeyB1c2VQb3N0c1F1ZXJ5LCB1c2VWb3RlTXV0YXRpb24gfSBmcm9tIFwiLi4vZ2VuZXJhdGVkL2dyYXBocWxcIjtcbmltcG9ydCB7IGNyZWF0ZVVycWxDbGllbnQgfSBmcm9tIFwiLi4vdXRpbHMvY3JlYXRlVXJxbENsaWVudFwiO1xuaW1wb3J0IHsgQm94LCBCdXR0b24sIEZsZXgsIEhlYWRpbmcsIEljb25CdXR0b24sIExpbmssIFN0YWNrLCBUZXh0IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCBOZXh0TGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFVwdm90ZVNlY3Rpb24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9VcHZvdGVTZWN0aW9uXCI7XG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuICAgIGNvbnN0IFt2YXJpYWJsZXMsIHNldFZhcmlhYmxlc10gPSB1c2VTdGF0ZSh7IFxuICAgICAgICBsaW1pdDoxMCxcbiAgICAgICAgY3Vyc29yOiBudWxsIGFzIG51bGwgfCBzdHJpbmd9KTtcbiAgICBjb25zdCBbe2RhdGEsIGZldGNoaW5nfV0gPSB1c2VQb3N0c1F1ZXJ5KHtcbiAgICAgICAgdmFyaWFibGVzLFxuICAgIH0pO1xuICAgIGNvbnN0IFssIHZvdGUgXSA9IHVzZVZvdGVNdXRhdGlvbigpO1xuXG4gICAgaWYgKCFmZXRjaGluZyAmJiAhZGF0YSkge1xuICAgICAgICByZXR1cm4gPGRpdj4gcXVlcnkgZmFpbGVkPC9kaXY+XG4gICAgfVxuXG4gICAgcmV0dXJuKFxuICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgPEZsZXggYWxpZ249XCJjZW50ZXJcIj5cbiAgICAgICAgICAgIDxIZWFkaW5nPlBvc3QgT2ZmaWNlPC9IZWFkaW5nPiBcbiAgICAgICAgICAgIDxOZXh0TGluayBocmVmPVwiL2NyZWF0ZS1wb3N0XCI+XG4gICAgICAgICAgICAgICAgPExpbmsgbWw9XCJhdXRvXCI+XG4gICAgICAgICAgICAgICAgY3JlYXRlIHBvc3RcbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L05leHRMaW5rPlxuICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgIHtmZXRjaGluZyAmJiAhZGF0YSA/IChcbiAgICAgICAgICAgICAgICA8ZGl2PmxvYWRpbmcuLi48L2Rpdj5cbiAgICAgICAgICAgICkgICA6ICAgKFxuICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9ezh9ID4gXG4gICAgICAgICAgICAgICAge2RhdGEhLnBvc3RzLnBvc3RzLm1hcCggKHApID0+IChcbiAgICAgICAgICAgICAgICAgICAgPEZsZXgga2V5ID17cC5pZH0gcD17NX0gc2hhZG93PSdtZCcgYm9yZGVyV2lkdGg9JzFweCc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VXB2b3RlU2VjdGlvbiBwb3N0ID0ge3B9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOZXh0TGluayBocmVmPVwiL3Bvc3QvW2lkXVwiIGFzPXtgL3Bvc3QvJHtwLmlkfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkaW5nIGZvbnRTaXplPVwieGxcIj4geyBwLnRpdGxlIH0gPC9IZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OZXh0TGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dD4gYnk6IHsgcC5jcmVhdG9yLnVzZXJuYW1lIH0gPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IG10PXs0fT57cC50ZXh0U25pcHBldCArXCIuLi5cIn08L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7IGRhdGEgJiYgZGF0YS5wb3N0cy5oYXNNb3JlID8gKFxuICAgICAgICAgICAgICAgIDxGbGV4PlxuICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRWYXJpYWJsZXMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQ6dmFyaWFibGVzLmxpbWl0LFxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBkYXRhLnBvc3RzLnBvc3RzW2RhdGEucG9zdHMucG9zdHMubGVuZ3RoIC0xXS5jcmVhdGVkQXQsXG4gICAgICAgICAgICAgICAgICAgIH0pIFxuICAgICAgICAgICAgICAgIH19aXNMb2FkaW5nID0ge2ZldGNoaW5nfSBtPSdhdXRvJyBteT17Nn0+IGxvYWQgbW9yZTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICk6IG51bGx9XG4gICAgICAgIDwvTGF5b3V0PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoVXJxbENsaWVudChjcmVhdGVVcnFsQ2xpZW50LCB7c3NyOiB0cnVlfSkoSW5kZXgpO1xuXG5cbiJdLCJuYW1lcyI6WyJ3aXRoVXJxbENsaWVudCIsIkxheW91dCIsInVzZVBvc3RzUXVlcnkiLCJ1c2VWb3RlTXV0YXRpb24iLCJjcmVhdGVVcnFsQ2xpZW50IiwiQm94IiwiQnV0dG9uIiwiRmxleCIsIkhlYWRpbmciLCJMaW5rIiwiU3RhY2siLCJUZXh0IiwiTmV4dExpbmsiLCJ1c2VTdGF0ZSIsIlVwdm90ZVNlY3Rpb24iLCJJbmRleCIsImxpbWl0IiwiY3Vyc29yIiwidmFyaWFibGVzIiwic2V0VmFyaWFibGVzIiwiZGF0YSIsImZldGNoaW5nIiwidm90ZSIsImRpdiIsImFsaWduIiwiaHJlZiIsIm1sIiwiYnIiLCJzcGFjaW5nIiwicG9zdHMiLCJtYXAiLCJwIiwia2V5Iiwic2hhZG93IiwiYm9yZGVyV2lkdGgiLCJwb3N0IiwiYXMiLCJpZCIsImZvbnRTaXplIiwidGl0bGUiLCJjcmVhdG9yIiwidXNlcm5hbWUiLCJtdCIsInRleHRTbmlwcGV0IiwiaGFzTW9yZSIsIm9uQ2xpY2siLCJsZW5ndGgiLCJjcmVhdGVkQXQiLCJpc0xvYWRpbmciLCJtIiwibXkiLCJzc3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

});