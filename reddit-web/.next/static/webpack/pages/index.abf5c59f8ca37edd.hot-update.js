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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_urql__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next-urql */ \"./node_modules/next-urql/dist/next-urql.es.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ \"./src/components/Layout.tsx\");\n/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../generated/graphql */ \"./src/generated/graphql.tsx\");\n/* harmony import */ var _utils_createUrqlClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/createUrqlClient */ \"./src/utils/createUrqlClient.ts\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_UpvoteSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/UpvoteSection */ \"./src/components/UpvoteSection.tsx\");\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/chakra-ui-icons.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nvar _this = undefined;\nvar _s1 = $RefreshSig$();\nvar Index = function() {\n    var _this1 = _this;\n    _s1();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({\n        limit: 10,\n        cursor: null\n    }), variables = ref[0], setVariables = ref[1];\n    var ref1 = _slicedToArray((0,_generated_graphql__WEBPACK_IMPORTED_MODULE_2__.usePostsQuery)({\n        variables: variables\n    }), 1), ref2 = ref1[0], data = ref2.data, fetching = ref2.fetching;\n    var ref3 = _slicedToArray((0,_generated_graphql__WEBPACK_IMPORTED_MODULE_2__.useDeletePostMutation)(), 2), deletePost = ref3[1];\n    if (!fetching && !data) {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n            __source: {\n                fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/index.tsx\",\n                lineNumber: 23,\n                columnNumber: 16\n            },\n            __self: _this,\n            children: \" query failed\"\n        }));\n    }\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__.Layout, {\n        __source: {\n            fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/index.tsx\",\n            lineNumber: 27,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Flex, {\n                align: \"center\",\n                __source: {\n                    fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/index.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 13\n                },\n                __self: _this\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"br\", {\n                __source: {\n                    fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/index.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 13\n                },\n                __self: _this\n            }),\n            fetching && !data ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                __source: {\n                    fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/index.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 17\n                },\n                __self: _this,\n                children: \"loading...\"\n            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Stack, {\n                spacing: 8,\n                __source: {\n                    fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/index.tsx\",\n                    lineNumber: 34,\n                    columnNumber: 13\n                },\n                __self: _this,\n                children: data.posts.posts.map(function(p) {\n                    return !p ? null : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Flex, {\n                        p: 5,\n                        shadow: \"md\",\n                        borderWidth: \"1px\",\n                        __source: {\n                            fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/index.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 21\n                        },\n                        __self: _this1,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_UpvoteSection__WEBPACK_IMPORTED_MODULE_6__.UpvoteSection, {\n                                post: p,\n                                __source: {\n                                    fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/index.tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 25\n                                },\n                                __self: _this1\n                            }),\n                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Box, {\n                                flex: 1,\n                                __source: {\n                                    fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/index.tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 25\n                                },\n                                __self: _this1,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                        href: \"/post/[id]\",\n                                        as: \"/post/\".concat(p.id),\n                                        __source: {\n                                            fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/index.tsx\",\n                                            lineNumber: 39,\n                                            columnNumber: 29\n                                        },\n                                        __self: _this1,\n                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Link, {\n                                            __source: {\n                                                fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/index.tsx\",\n                                                lineNumber: 40,\n                                                columnNumber: 33\n                                            },\n                                            __self: _this1,\n                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Heading, {\n                                                fontSize: \"xl\",\n                                                __source: {\n                                                    fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/index.tsx\",\n                                                    lineNumber: 41,\n                                                    columnNumber: 37\n                                                },\n                                                __self: _this1,\n                                                children: [\n                                                    \" \",\n                                                    p.title,\n                                                    \" \"\n                                                ]\n                                            })\n                                        })\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Text, {\n                                        __source: {\n                                            fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/index.tsx\",\n                                            lineNumber: 44,\n                                            columnNumber: 29\n                                        },\n                                        __self: _this1,\n                                        children: [\n                                            \" by: \",\n                                            p.creator.username,\n                                            \" \"\n                                        ]\n                                    }),\n                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Flex, {\n                                        __source: {\n                                            fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/index.tsx\",\n                                            lineNumber: 45,\n                                            columnNumber: 29\n                                        },\n                                        __self: _this1,\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Text, {\n                                                flex: 1,\n                                                mt: 4,\n                                                __source: {\n                                                    fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/index.tsx\",\n                                                    lineNumber: 46,\n                                                    columnNumber: 33\n                                                },\n                                                __self: _this1,\n                                                children: p.textSnippet + \"...\"\n                                            }),\n                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.IconButton, {\n                                                ml: \"auto\",\n                                                backgroundColor: \"red\",\n                                                \"aria-label\": \"Delete Post\",\n                                                icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_8__.DeleteIcon, {\n                                                    size: \"24px\"\n                                                }),\n                                                onClick: function() {\n                                                    deletePost({\n                                                        id: p.id\n                                                    });\n                                                },\n                                                __source: {\n                                                    fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/index.tsx\",\n                                                    lineNumber: 47,\n                                                    columnNumber: 33\n                                                },\n                                                __self: _this1\n                                            })\n                                        ]\n                                    })\n                                ]\n                            })\n                        ]\n                    }, p.id);\n                })\n            }),\n            data && data.posts.hasMore ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Flex, {\n                __source: {\n                    fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/index.tsx\",\n                    lineNumber: 65,\n                    columnNumber: 17\n                },\n                __self: _this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                    onClick: function() {\n                        setVariables({\n                            limit: variables.limit,\n                            cursor: data.posts.posts[data.posts.posts.length - 1].createdAt\n                        });\n                    },\n                    isLoading: fetching,\n                    m: \"auto\",\n                    my: 6,\n                    __source: {\n                        fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/index.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 17\n                    },\n                    __self: _this,\n                    children: \" load more\"\n                })\n            }) : null\n        ]\n    }));\n};\n_s1(Index, \"dGkLqgbd2Sa51Rag2HjZPT144fM=\", false, function() {\n    return [\n        _generated_graphql__WEBPACK_IMPORTED_MODULE_2__.usePostsQuery,\n        _generated_graphql__WEBPACK_IMPORTED_MODULE_2__.useDeletePostMutation\n    ];\n});\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,next_urql__WEBPACK_IMPORTED_MODULE_9__.withUrqlClient)(_utils_createUrqlClient__WEBPACK_IMPORTED_MODULE_3__.createUrqlClient, {\n    ssr: true\n})(Index));\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDTyxFQUFFOzs7WUE0QnRCaEIsSUFBSSxJQUFJQSxJQUFJLENBQUNPLEtBQUssQ0FBQ3NCLE9BQU8sd0VBQ3ZCNUMsa0RBQUk7Ozs7Ozs7K0ZBQ0pELG9EQUFNO29CQUFDNEMsT0FBTyxFQUFFLFFBQ2pDLEdBRHVDLENBQUM7d0JBQ3BCN0IsWUFBWSxDQUFDLENBQUM7NEJBQ1ZILEtBQUssRUFBQ0UsU0FBUyxDQUFDRixLQUFLOzRCQUNyQkMsTUFBTSxFQUFFRyxJQUFJLENBQUNPLEtBQUssQ0FBQ0EsS0FBSyxDQUFDUCxJQUFJLENBQUNPLEtBQUssQ0FBQ0EsS0FBSyxDQUFDdUIsTUFBTSxHQUFFLENBQUMsRUFBRUMsU0FBUzt3QkFDbEUsQ0FBQztvQkFDTCxDQUFDO29CQUFDQyxTQUFTLEVBQUkvQixRQUFRO29CQUFFZ0MsQ0FBQyxFQUFDLENBQU07b0JBQUNDLEVBQUUsRUFBRSxDQUFDOzs7Ozs7OzhCQUFFLENBQVU7O2lCQUVwRCxJQUFJOzs7QUFHbkIsQ0FBQztJQWpFS3ZDLEtBQUs7O1FBS29CZCw2REFBYTtRQUloQkQscUVBQXFCOzs7S0FUM0NlLEtBQUs7QUFtRVgsK0RBQWVqQix5REFBYyxDQUFDSSxxRUFBZ0IsRUFBRSxDQUFDcUQ7SUFBQUEsR0FBRyxFQUFFLElBQUk7QUFBQSxDQUFDLEVBQUV4QyxLQUFLLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXgudHN4PzE5YTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgd2l0aFVycWxDbGllbnQgfSBmcm9tIFwibmV4dC11cnFsXCI7XG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCB7IHVzZURlbGV0ZVBvc3RNdXRhdGlvbiwgdXNlUG9zdHNRdWVyeX0gZnJvbSBcIi4uL2dlbmVyYXRlZC9ncmFwaHFsXCI7XG5pbXBvcnQgeyBjcmVhdGVVcnFsQ2xpZW50IH0gZnJvbSBcIi4uL3V0aWxzL2NyZWF0ZVVycWxDbGllbnRcIjtcbmltcG9ydCB7IEJveCwgQnV0dG9uLCBGbGV4LCBIZWFkaW5nLCBJY29uQnV0dG9uLCBMaW5rLCBTdGFjaywgVGV4dCB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgTmV4dExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBVcHZvdGVTZWN0aW9uIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvVXB2b3RlU2VjdGlvblwiO1xuaW1wb3J0IHsgRGVsZXRlSWNvbiB9IGZyb20gXCJAY2hha3JhLXVpL2ljb25zXCI7XG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuICAgIGNvbnN0IFt2YXJpYWJsZXMsIHNldFZhcmlhYmxlc10gPSB1c2VTdGF0ZSh7IFxuICAgICAgICBsaW1pdDoxMCxcbiAgICAgICAgY3Vyc29yOiBudWxsIGFzIG51bGwgfCBzdHJpbmd9KTtcblxuICAgIGNvbnN0IFt7ZGF0YSwgZmV0Y2hpbmd9XSA9IHVzZVBvc3RzUXVlcnkoe1xuICAgICAgICB2YXJpYWJsZXMsXG4gICAgfSk7XG5cbiAgICBjb25zdCBbICwgZGVsZXRlUG9zdF0gPSB1c2VEZWxldGVQb3N0TXV0YXRpb24oKTtcblxuICAgIGlmICghZmV0Y2hpbmcgJiYgIWRhdGEpIHtcbiAgICAgICAgcmV0dXJuIDxkaXY+IHF1ZXJ5IGZhaWxlZDwvZGl2PlxuICAgIH1cblxuICAgIHJldHVybihcbiAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgIDxGbGV4IGFsaWduPVwiY2VudGVyXCI+XG4gICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAge2ZldGNoaW5nICYmICFkYXRhID8gKFxuICAgICAgICAgICAgICAgIDxkaXY+bG9hZGluZy4uLjwvZGl2PlxuICAgICAgICAgICAgKSAgIDogICAoXG4gICAgICAgICAgICA8U3RhY2sgc3BhY2luZz17OH0gPiBcbiAgICAgICAgICAgICAgICB7ZGF0YSEucG9zdHMucG9zdHMubWFwKCAocCkgPT4gIXAgPyBudWxsOihcbiAgICAgICAgICAgICAgICAgICAgPEZsZXgga2V5ID17cC5pZH0gcD17NX0gc2hhZG93PSdtZCcgYm9yZGVyV2lkdGg9JzFweCc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VXB2b3RlU2VjdGlvbiBwb3N0ID0ge3B9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94IGZsZXg9ezF9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOZXh0TGluayBocmVmPVwiL3Bvc3QvW2lkXVwiIGFzPXtgL3Bvc3QvJHtwLmlkfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxIZWFkaW5nIGZvbnRTaXplPVwieGxcIj4geyBwLnRpdGxlIH0gPC9IZWFkaW5nPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OZXh0TGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dD4gYnk6IHsgcC5jcmVhdG9yLnVzZXJuYW1lIH0gPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBmbGV4PXsxfSBtdD17NH0+e3AudGV4dFNuaXBwZXQgK1wiLi4uXCJ9PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1sPVwiYXV0b1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9J3JlZCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9J0RlbGV0ZSBQb3N0JyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb24gPSB7PERlbGV0ZUljb24gc2l6ZT1cIjI0cHhcIi8+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZVBvc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDpwLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgeyBkYXRhICYmIGRhdGEucG9zdHMuaGFzTW9yZSA/IChcbiAgICAgICAgICAgICAgICA8RmxleD5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VmFyaWFibGVzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0OnZhcmlhYmxlcy5saW1pdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogZGF0YS5wb3N0cy5wb3N0c1tkYXRhLnBvc3RzLnBvc3RzLmxlbmd0aCAtMV0uY3JlYXRlZEF0LFxuICAgICAgICAgICAgICAgICAgICB9KSBcbiAgICAgICAgICAgICAgICB9fWlzTG9hZGluZyA9IHtmZXRjaGluZ30gbT0nYXV0bycgbXk9ezZ9PiBsb2FkIG1vcmU8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICApOiBudWxsfVxuICAgICAgICA8L0xheW91dD5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFVycWxDbGllbnQoY3JlYXRlVXJxbENsaWVudCwge3NzcjogdHJ1ZX0pKEluZGV4KTtcblxuXG4iXSwibmFtZXMiOlsid2l0aFVycWxDbGllbnQiLCJMYXlvdXQiLCJ1c2VEZWxldGVQb3N0TXV0YXRpb24iLCJ1c2VQb3N0c1F1ZXJ5IiwiY3JlYXRlVXJxbENsaWVudCIsIkJveCIsIkJ1dHRvbiIsIkZsZXgiLCJIZWFkaW5nIiwiSWNvbkJ1dHRvbiIsIkxpbmsiLCJTdGFjayIsIlRleHQiLCJOZXh0TGluayIsInVzZVN0YXRlIiwiVXB2b3RlU2VjdGlvbiIsIkRlbGV0ZUljb24iLCJJbmRleCIsImxpbWl0IiwiY3Vyc29yIiwidmFyaWFibGVzIiwic2V0VmFyaWFibGVzIiwiZGF0YSIsImZldGNoaW5nIiwiZGVsZXRlUG9zdCIsImRpdiIsImFsaWduIiwiYnIiLCJzcGFjaW5nIiwicG9zdHMiLCJtYXAiLCJwIiwic2hhZG93IiwiYm9yZGVyV2lkdGgiLCJwb3N0IiwiZmxleCIsImhyZWYiLCJhcyIsImlkIiwiZm9udFNpemUiLCJ0aXRsZSIsImNyZWF0b3IiLCJ1c2VybmFtZSIsIm10IiwidGV4dFNuaXBwZXQiLCJtbCIsImJhY2tncm91bmRDb2xvciIsImFyaWEtbGFiZWwiLCJpY29uIiwic2l6ZSIsIm9uQ2xpY2siLCJoYXNNb3JlIiwibGVuZ3RoIiwiY3JlYXRlZEF0IiwiaXNMb2FkaW5nIiwibSIsIm15Iiwic3NyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

});