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

/***/ "./src/components/UpvoteSection.tsx":
/*!******************************************!*\
  !*** ./src/components/UpvoteSection.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UpvoteSection\": function() { return /* binding */ UpvoteSection; }\n/* harmony export */ });\n/* harmony import */ var _home_forgets_code_react_reddit_reddit_web_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/regenerator-runtime/runtime.js */ \"./node_modules/next/node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_forgets_code_react_reddit_reddit_web_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_forgets_code_react_reddit_reddit_web_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/chakra-ui-icons.esm.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../generated/graphql */ \"./src/generated/graphql.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nvar _this = undefined;\nvar _s1 = $RefreshSig$();\nvar UpvoteSection = function(param) {\n    var post = param.post;\n    _s1();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('not-loading'), loadingState = ref[0], setLoadingstate = ref[1];\n    var ref1 = _slicedToArray((0,_generated_graphql__WEBPACK_IMPORTED_MODULE_3__.useVoteMutation)(), 2), vote = ref1[1];\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Flex, {\n        direction: \"column\",\n        justifyContent: \"center\",\n        alignItems: \"center\",\n        mr: 5,\n        __source: {\n            fileName: \"/home/forgets_code/react/reddit/reddit-web/src/components/UpvoteSection.tsx\",\n            lineNumber: 20,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.IconButton, {\n                \"aria-label\": \"upvote post\",\n                icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_5__.ChevronUpIcon, {\n                    size: \"24px\"\n                }),\n                backgroundColor: post.voteStatus === 1 ? \"turqoiste\" : undefined,\n                onClick: _asyncToGenerator(_home_forgets_code_react_reddit_reddit_web_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    return _home_forgets_code_react_reddit_reddit_web_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                setLoadingstate('upvote-loading');\n                                _ctx.next = 3;\n                                return vote({\n                                    postId: post.id,\n                                    value: 1\n                                });\n                            case 3:\n                                setLoadingstate('not-loading');\n                            case 4:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee);\n                })),\n                isLoading: loadingState === 'upvote-loading',\n                __source: {\n                    fileName: \"/home/forgets_code/react/reddit/reddit-web/src/components/UpvoteSection.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                },\n                __self: _this\n            }),\n            post.points,\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.IconButton, {\n                \"aria-label\": \"downvote post\",\n                icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_5__.ChevronDownIcon, {\n                    size: \"24px\"\n                }),\n                backgroundColor: post.voteStatus === -1 ? \"red\" : undefined,\n                onClick: _asyncToGenerator(_home_forgets_code_react_reddit_reddit_web_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    return _home_forgets_code_react_reddit_reddit_web_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                setLoadingstate('downvote-loading');\n                                _ctx.next = 3;\n                                return vote({\n                                    postId: post.id,\n                                    value: -1\n                                });\n                            case 3:\n                                setLoadingstate('not-loading');\n                            case 4:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee);\n                })),\n                isLoading: loadingState === 'downvote-loading',\n                __source: {\n                    fileName: \"/home/forgets_code/react/reddit/reddit-web/src/components/UpvoteSection.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                },\n                __self: _this\n            })\n        ]\n    }));\n};\n_s1(UpvoteSection, \"TebK5niO9fII8i5oZk/zZQdVtUI=\", false, function() {\n    return [\n        _generated_graphql__WEBPACK_IMPORTED_MODULE_3__.useVoteMutation\n    ];\n});\n_c = UpvoteSection;\nvar _c;\n$RefreshReg$(_c, \"UpvoteSection\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9VcHZvdGVTZWN0aW9uLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQWlFO0FBQ2Q7QUFDWjtBQUNvQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT3BFLEdBQUssQ0FBQ08sYUFBYSxHQUFpQyxRQUFRLFFBQU0sQ0FBQztRQUFaQyxJQUFJLFNBQUpBLElBQUk7O0lBQzlELEdBQUssQ0FDTEgsR0FJZ0IsR0FKaEJBLCtDQUFRLENBSU4sQ0FBYSxlQUxSSSxZQUFZLEdBQ25CSixHQUlnQixLQUxLSyxlQUFlLEdBQ3BDTCxHQUlnQjtJQUNoQixHQUFLLENBQWFDLElBQWlCLGtCQUFqQkEsbUVBQWUsUUFBeEJLLElBQUksR0FBS0wsSUFBaUI7SUFDbkMsTUFBTSx1RUFDREosa0RBQUk7UUFBQ1UsU0FBUyxFQUFHLENBQVE7UUFBQ0MsY0FBYyxFQUFDLENBQVE7UUFBQ0MsVUFBVSxFQUFDLENBQVE7UUFBRUMsRUFBRSxFQUFHLENBQUM7Ozs7Ozs7O2lGQUM3RVosd0RBQVU7Z0JBQ1BhLENBQVUsYUFBQyxDQUFhO2dCQUN4QkMsSUFBSSx1RUFBS2pCLDJEQUFhO29CQUFDa0IsSUFBSSxFQUFDLENBQU07O2dCQUNsQ0MsZUFBZSxFQUFFWCxJQUFJLENBQUNZLFVBQVUsS0FBSyxDQUFDLEdBQUUsQ0FBVyxhQUFHQyxTQUFTO2dCQUMvREMsT0FBTyx5S0FBRSxRQUFRLFdBQUksQ0FBQzs7OztnQ0FDbEJaLGVBQWUsQ0FBQyxDQUFnQjs7dUNBQzFCQyxJQUFJLENBQUMsQ0FBQztvQ0FDUlksTUFBTSxFQUFFZixJQUFJLENBQUNnQixFQUFFO29DQUNmQyxLQUFLLEVBQUUsQ0FBQztnQ0FDWixDQUFDOztnQ0FDRGYsZUFBZSxDQUFDLENBQWE7Ozs7OztnQkFDakMsQ0FBQztnQkFDRGdCLFNBQVMsRUFBRWpCLFlBQVksS0FBSSxDQUFnQjs7Ozs7Ozs7WUFJOUNELElBQUksQ0FBQ21CLE1BQU07aUZBRVh4Qix3REFBVTtnQkFDUGEsQ0FBVSxhQUFDLENBQWU7Z0JBQzFCQyxJQUFJLHVFQUFLaEIsNkRBQWU7b0JBQUNpQixJQUFJLEVBQUMsQ0FBTTs7Z0JBQ3BDQyxlQUFlLEVBQUVYLElBQUksQ0FBQ1ksVUFBVSxNQUFNLENBQUMsR0FBRSxDQUFLLE9BQUdDLFNBQVM7Z0JBQzFEQyxPQUFPLHlLQUFFLFFBQVEsV0FBSSxDQUFDOzs7O2dDQUNsQlosZUFBZSxDQUFDLENBQWtCOzt1Q0FDNUJDLElBQUksQ0FBQyxDQUFDO29DQUNSWSxNQUFNLEVBQUVmLElBQUksQ0FBQ2dCLEVBQUU7b0NBQ2ZDLEtBQUssR0FBRyxDQUFDO2dDQUNiLENBQUM7O2dDQUNEZixlQUFlLENBQUMsQ0FBYTs7Ozs7O2dCQUNqQyxDQUFDO2dCQUVEZ0IsU0FBUyxFQUFFakIsWUFBWSxLQUFJLENBQWtCOzs7Ozs7Ozs7O0FBSXpELENBQUM7SUE3Q1lGLGFBQWE7O1FBT0pELCtEQUFlOzs7S0FQeEJDLGFBQWEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVXB2b3RlU2VjdGlvbi50c3g/YzViYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGV2cm9uVXBJY29uLCBDaGV2cm9uRG93bkljb24gfSBmcm9tICdAY2hha3JhLXVpL2ljb25zJztcbmltcG9ydCB7IEZsZXgsIEljb25CdXR0b24gfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFBvc3RTbmlwcGV0RnJhZ21lbnQsIHVzZVZvdGVNdXRhdGlvbiB9IGZyb20gJy4uL2dlbmVyYXRlZC9ncmFwaHFsJztcblxuXG5pbnRlcmZhY2UgVXB2b3RlU2VjdGlvblByb3BzIHtcbiAgICBwb3N0OiBQb3N0U25pcHBldEZyYWdtZW50O1xufVxuXG5leHBvcnQgY29uc3QgVXB2b3RlU2VjdGlvbjogUmVhY3QuRkM8VXB2b3RlU2VjdGlvblByb3BzPiA9ICh7IHBvc3QgfSkgPT4ge1xuICAgIGNvbnN0IFtsb2FkaW5nU3RhdGUsIHNldExvYWRpbmdzdGF0ZV0gPSBcbiAgICB1c2VTdGF0ZTxcbiAgICAndXB2b3RlLWxvYWRpbmcnIHwgXG4gICAgJ2Rvd252b3RlLWxvYWRpbmcnIHwgXG4gICAgJ25vdC1sb2FkaW5nJyBcbiAgICA+KCdub3QtbG9hZGluZycpO1xuICAgIGNvbnN0IFssIHZvdGUgXSA9IHVzZVZvdGVNdXRhdGlvbigpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxGbGV4IGRpcmVjdGlvbiA9ICdjb2x1bW4nIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgYWxpZ25JdGVtcz0nY2VudGVyJyAgbXIgPXs1fT5cbiAgICAgICAgPEljb25CdXR0b24gXG4gICAgICAgICAgICBhcmlhLWxhYmVsPSd1cHZvdGUgcG9zdCcgXG4gICAgICAgICAgICBpY29uID0gezxDaGV2cm9uVXBJY29uIHNpemU9XCIyNHB4XCIvPn1cbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj17cG9zdC52b3RlU3RhdHVzID09PSAxPyBcInR1cnFvaXN0ZVwiIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgb25DbGljaz17YXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNldExvYWRpbmdzdGF0ZSgndXB2b3RlLWxvYWRpbmcnKVxuICAgICAgICAgICAgICAgIGF3YWl0IHZvdGUoe1xuICAgICAgICAgICAgICAgICAgICBwb3N0SWQ6IHBvc3QuaWQsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAxLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHNldExvYWRpbmdzdGF0ZSgnbm90LWxvYWRpbmcnKVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGlzTG9hZGluZz17bG9hZGluZ1N0YXRlID09PSd1cHZvdGUtbG9hZGluZyd9XG4gICAgICAgICAgICBcbiAgICAgICAgLz5cblxuICAgICAgICB7cG9zdC5wb2ludHN9XG5cbiAgICAgICAgPEljb25CdXR0b24gXG4gICAgICAgICAgICBhcmlhLWxhYmVsPSdkb3dudm90ZSBwb3N0JyBcbiAgICAgICAgICAgIGljb24gPSB7PENoZXZyb25Eb3duSWNvbiBzaXplPVwiMjRweFwiLz59XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9e3Bvc3Qudm90ZVN0YXR1cyA9PT0gLTE/IFwicmVkXCIgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICBvbkNsaWNrPXthc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZ3N0YXRlKCdkb3dudm90ZS1sb2FkaW5nJylcbiAgICAgICAgICAgICAgICBhd2FpdCB2b3RlKHtcbiAgICAgICAgICAgICAgICAgICAgcG9zdElkOiBwb3N0LmlkLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogLTEsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZ3N0YXRlKCdub3QtbG9hZGluZycpXG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpc0xvYWRpbmc9e2xvYWRpbmdTdGF0ZSA9PT0nZG93bnZvdGUtbG9hZGluZyd9XG4gICAgICAgIC8+XG4gICAgPC9GbGV4PlxuICAgIClcbn0iXSwibmFtZXMiOlsiQ2hldnJvblVwSWNvbiIsIkNoZXZyb25Eb3duSWNvbiIsIkZsZXgiLCJJY29uQnV0dG9uIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVZvdGVNdXRhdGlvbiIsIlVwdm90ZVNlY3Rpb24iLCJwb3N0IiwibG9hZGluZ1N0YXRlIiwic2V0TG9hZGluZ3N0YXRlIiwidm90ZSIsImRpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsIm1yIiwiYXJpYS1sYWJlbCIsImljb24iLCJzaXplIiwiYmFja2dyb3VuZENvbG9yIiwidm90ZVN0YXR1cyIsInVuZGVmaW5lZCIsIm9uQ2xpY2siLCJwb3N0SWQiLCJpZCIsInZhbHVlIiwiaXNMb2FkaW5nIiwicG9pbnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/UpvoteSection.tsx\n");

/***/ })

});