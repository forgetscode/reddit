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

/***/ "./src/components/UpvoteSection.tsx":
/*!******************************************!*\
  !*** ./src/components/UpvoteSection.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UpvoteSection\": function() { return /* binding */ UpvoteSection; }\n/* harmony export */ });\n/* harmony import */ var _home_forgets_code_react_reddit_apollo_reddit_reddit_web_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/regenerator-runtime/runtime.js */ \"./node_modules/next/node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_forgets_code_react_reddit_apollo_reddit_reddit_web_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_forgets_code_react_reddit_apollo_reddit_reddit_web_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/icons */ \"./node_modules/@chakra-ui/icons/dist/chakra-ui-icons.esm.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/lib/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../generated/graphql */ \"./src/generated/graphql.tsx\");\n/* harmony import */ var _utils_isServer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/isServer */ \"./src/utils/isServer.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nvar _this = undefined;\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n            fragment _ on Post {\\n                id\\n                points\\n                voteStatus\\n            }\\n            \"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n                fragment _ on Post {\\n                    points\\n                    voteStatus\\n                }\\n                \"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nvar _s1 = $RefreshSig$();\nvar updateAfterVote = function(value, postId, cache) {\n    var data = cache.readFragment({\n        id: 'Post:' + postId,\n        fragment: (0,graphql_tag__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_templateObject())\n    });\n    var newPoints = data === null || data === void 0 ? void 0 : data.points;\n    var newValue = value;\n    if (data) {\n        if (data.voteStatus === value) {\n            newPoints = newPoints - value;\n            newValue = null;\n        } else if (data.voteStatus === null) {\n            newPoints = newPoints + value;\n            newValue = value;\n        } else {\n            newPoints = newPoints + 2 * value;\n            newValue = value;\n        }\n    }\n    cache.writeFragment({\n        id: 'Post:' + postId,\n        fragment: (0,graphql_tag__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_templateObject1()),\n        data: {\n            points: newPoints,\n            voteStatus: newValue\n        }\n    });\n};\nvar UpvoteSection = function(param) {\n    var post = param.post;\n    _s1();\n    var data = (0,_generated_graphql__WEBPACK_IMPORTED_MODULE_3__.useMeQuery)({\n        skip: (0,_utils_isServer__WEBPACK_IMPORTED_MODULE_4__.isServer)()\n    }).data;\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('not-loading'), loadingState = ref[0], setLoadingstate = ref[1];\n    var ref1 = _slicedToArray((0,_generated_graphql__WEBPACK_IMPORTED_MODULE_3__.useVoteMutation)(), 1), vote = ref1[0];\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.Flex, {\n        direction: \"column\",\n        justifyContent: \"center\",\n        alignItems: \"center\",\n        mr: 5,\n        __source: {\n            fileName: \"/home/forgets_code/react/reddit_apollo/reddit/reddit-web/src/components/UpvoteSection.tsx\",\n            lineNumber: 80,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.IconButton, {\n                \"aria-label\": \"upvote post\",\n                icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_7__.ChevronUpIcon, {\n                    size: \"24px\"\n                }),\n                backgroundColor: post.voteStatus === 1 ? \"green\" : undefined,\n                onClick: _asyncToGenerator(_home_forgets_code_react_reddit_apollo_reddit_reddit_web_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    return _home_forgets_code_react_reddit_apollo_reddit_reddit_web_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                if (!(data === null || data === void 0 ? void 0 : data.me)) {\n                                    _ctx.next = 5;\n                                    break;\n                                }\n                                setLoadingstate('upvote-loading');\n                                _ctx.next = 4;\n                                return vote({\n                                    variables: {\n                                        postId: post.id,\n                                        value: 1\n                                    },\n                                    update: function(cache) {\n                                        return updateAfterVote(1, post.id, cache);\n                                    }\n                                });\n                            case 4:\n                                setLoadingstate('not-loading');\n                            case 5:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee);\n                })),\n                isLoading: loadingState === 'upvote-loading',\n                __source: {\n                    fileName: \"/home/forgets_code/react/reddit_apollo/reddit/reddit-web/src/components/UpvoteSection.tsx\",\n                    lineNumber: 81,\n                    columnNumber: 9\n                },\n                __self: _this\n            }),\n            post.points,\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_6__.IconButton, {\n                \"aria-label\": \"downvote post\",\n                icon: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_7__.ChevronDownIcon, {\n                    size: \"24px\"\n                }),\n                backgroundColor: post.voteStatus === -1 ? \"red\" : undefined,\n                onClick: _asyncToGenerator(_home_forgets_code_react_reddit_apollo_reddit_reddit_web_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                    return _home_forgets_code_react_reddit_apollo_reddit_reddit_web_node_modules_next_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                        while(1)switch(_ctx.prev = _ctx.next){\n                            case 0:\n                                if (!(data === null || data === void 0 ? void 0 : data.me)) {\n                                    _ctx.next = 5;\n                                    break;\n                                }\n                                setLoadingstate('downvote-loading');\n                                _ctx.next = 4;\n                                return vote({\n                                    variables: {\n                                        postId: post.id,\n                                        value: -1\n                                    },\n                                    update: function(cache) {\n                                        return updateAfterVote(-1, post.id, cache);\n                                    }\n                                });\n                            case 4:\n                                setLoadingstate('not-loading');\n                            case 5:\n                            case \"end\":\n                                return _ctx.stop();\n                        }\n                    }, _callee);\n                })),\n                isLoading: loadingState === 'downvote-loading',\n                __source: {\n                    fileName: \"/home/forgets_code/react/reddit_apollo/reddit/reddit-web/src/components/UpvoteSection.tsx\",\n                    lineNumber: 100,\n                    columnNumber: 9\n                },\n                __self: _this\n            })\n        ]\n    }));\n};\n_s1(UpvoteSection, \"9EVoYeJhq7e3hFUSHKmVcAqZp8M=\", false, function() {\n    return [\n        _generated_graphql__WEBPACK_IMPORTED_MODULE_3__.useMeQuery,\n        _generated_graphql__WEBPACK_IMPORTED_MODULE_3__.useVoteMutation\n    ];\n});\n_c = UpvoteSection;\nvar _c;\n$RefreshReg$(_c, \"UpvoteSection\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9VcHZvdGVTZWN0aW9uLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDaUU7QUFDZDtBQUN0QjtBQUNVO0FBQzhFO0FBQ3pFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztRQWdCbEIsQ0FNZDs7Ozs7Ozs7O1FBeUJjLENBS1Y7Ozs7Ozs7O0FBN0NoQixHQUFLLENBQUNVLGVBQWUsR0FBRyxRQUFRLENBQVBDLEtBQVksRUFBRUMsTUFBYyxFQUFHQyxLQUErQixFQUFLLENBQUM7SUFFekYsR0FBSyxDQUFDQyxJQUFJLEdBQUdELEtBQUssQ0FBQ0UsWUFBWSxDQUszQixDQUFDO1FBQ0dDLEVBQUUsRUFBRSxDQUFPLFNBQUdKLE1BQU07UUFDcEJLLFFBQVEsRUFBRWIsdURBQUc7SUFPakIsQ0FBQztJQUdMLEdBQUcsQ0FBQ2MsU0FBUyxHQUFHSixJQUFJLGFBQUpBLElBQUksS0FBSkEsSUFBSSxDQUFKQSxDQUFZLEdBQVpBLElBQUksQ0FBSkEsQ0FBWSxHQUFaQSxJQUFJLENBQUVLLE1BQU07SUFDNUIsR0FBRyxDQUFDQyxRQUFRLEdBQUdULEtBQUs7SUFFcEIsRUFBRSxFQUFFRyxJQUFJLEVBQUUsQ0FBQztRQUNQLEVBQUUsRUFBRUEsSUFBSSxDQUFDTyxVQUFVLEtBQUtWLEtBQUssRUFBRyxDQUFDO1lBQy9CTyxTQUFTLEdBQUdBLFNBQVMsR0FBR1AsS0FBSztZQUM3QlMsUUFBUSxHQUFHLElBQUk7UUFDakIsQ0FBQyxNQUNJLEVBQUUsRUFBRU4sSUFBSSxDQUFDTyxVQUFVLEtBQUssSUFBSSxFQUFDLENBQUM7WUFDakNILFNBQVMsR0FBR0EsU0FBUyxHQUFFUCxLQUFLO1lBQzVCUyxRQUFRLEdBQUdULEtBQUs7UUFDbEIsQ0FBQyxNQUNJLENBQUM7WUFDSk8sU0FBUyxHQUFHQSxTQUFTLEdBQUcsQ0FBQyxHQUFDUCxLQUFL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LEVBQUVjLElBQUksQ0FBQ1IsRUFBRSxFQUFFSCxLQUFLOztnQ0FDeEQsQ0FBQzs7Z0NBQ0RjLGVBQWUsQ0FBQyxDQUFhOzs7Ozs7Z0JBQ2hDLENBQUM7Z0JBQ0ZlLFNBQVMsRUFBRWhCLFlBQVksS0FBSSxDQUFrQjs7Ozs7Ozs7OztBQUl6RCxDQUFDO0lBckRZSCxhQUFhOztRQUNOaEIsMERBQVU7UUFZVEMsK0RBQWU7OztLQWJ2QmUsYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9VcHZvdGVTZWN0aW9uLnRzeD9jNWJiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwb2xsb0NhY2hlIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xuaW1wb3J0IHsgQ2hldnJvblVwSWNvbiwgQ2hldnJvbkRvd25JY29uIH0gZnJvbSAnQGNoYWtyYS11aS9pY29ucyc7XG5pbXBvcnQgeyBGbGV4LCBJY29uQnV0dG9uIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFBvc3RTbmlwcGV0RnJhZ21lbnQsIHVzZU1lUXVlcnksIHVzZVZvdGVNdXRhdGlvbiwgVm90ZU11dGF0aW9uLCBWb3RlTXV0YXRpb25GbiB9IGZyb20gJy4uL2dlbmVyYXRlZC9ncmFwaHFsJztcbmltcG9ydCB7IGlzU2VydmVyIH0gZnJvbSAnLi4vdXRpbHMvaXNTZXJ2ZXInO1xuXG5cbmludGVyZmFjZSBVcHZvdGVTZWN0aW9uUHJvcHMge1xuICAgIHBvc3Q6IFBvc3RTbmlwcGV0RnJhZ21lbnQ7XG59XG5cbmNvbnN0IHVwZGF0ZUFmdGVyVm90ZSA9ICh2YWx1ZTpudW1iZXIsIHBvc3RJZDogbnVtYmVyLCAgY2FjaGU6QXBvbGxvQ2FjaGU8Vm90ZU11dGF0aW9uPikgPT4ge1xuXG4gICAgY29uc3QgZGF0YSA9IGNhY2hlLnJlYWRGcmFnbWVudDx7XG4gICAgICAgIGlkOiBudW1iZXI7XG4gICAgICAgIHBvaW50czpudW1iZXI7XG4gICAgICAgIHZvdGVTdGF0dXM6bnVtYmVyIHwgbnVsbDtcbiAgICB9PihcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6ICdQb3N0OicgKyBwb3N0SWQsXG4gICAgICAgICAgICBmcmFnbWVudDogZ3FsYFxuICAgICAgICAgICAgZnJhZ21lbnQgXyBvbiBQb3N0IHtcbiAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgIHBvaW50c1xuICAgICAgICAgICAgICAgIHZvdGVTdGF0dXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGAsXG4gICAgICAgIH1cbiAgICApO1xuXG4gICAgbGV0IG5ld1BvaW50cyA9IGRhdGE/LnBvaW50cztcbiAgICBsZXQgbmV3VmFsdWUgPSB2YWx1ZTtcblxuICAgIGlmIChkYXRhKSB7XG4gICAgICAgIGlmIChkYXRhLnZvdGVTdGF0dXMgPT09IHZhbHVlICkge1xuICAgICAgICAgIG5ld1BvaW50cyA9IG5ld1BvaW50cyAtIHZhbHVlO1xuICAgICAgICAgIG5ld1ZhbHVlID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChkYXRhLnZvdGVTdGF0dXMgPT09IG51bGwpe1xuICAgICAgICAgIG5ld1BvaW50cyA9IG5ld1BvaW50cyArdmFsdWU7XG4gICAgICAgICAgbmV3VmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBuZXdQb2ludHMgPSBuZXdQb2ludHMgKyAyKnZhbHVlO1xuICAgICAgICAgIG5ld1ZhbHVlID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjYWNoZS53cml0ZUZyYWdtZW50KFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogJ1Bvc3Q6JyArIHBvc3RJZCwgXG4gICAgICAgICAgICBmcmFnbWVudDogZ3FsYFxuICAgICAgICAgICAgICAgIGZyYWdtZW50IF8gb24gUG9zdCB7XG4gICAgICAgICAgICAgICAgICAgIHBvaW50c1xuICAgICAgICAgICAgICAgICAgICB2b3RlU3RhdHVzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGAsXG4gICAgICAgICAgICBkYXRhOiB7IHBvaW50czogbmV3UG9pbnRzLCB2b3RlU3RhdHVzOiBuZXdWYWx1ZX0sXG4gICAgICAgIH1cbiAgICAgICk7XG59XG5cbmV4cG9ydCBjb25zdCBVcHZvdGVTZWN0aW9uOiBSZWFjdC5GQzxVcHZvdGVTZWN0aW9uUHJvcHM+ID0gKHsgcG9zdCB9KSA9PiB7XG4gICAgY29uc3Qge2RhdGEgfSA9IHVzZU1lUXVlcnkoXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNraXA6aXNTZXJ2ZXIoKSxcbiAgICAgICAgfVxuICAgICk7XG5cbiAgICBjb25zdCBbbG9hZGluZ1N0YXRlLCBzZXRMb2FkaW5nc3RhdGVdID0gXG4gICAgdXNlU3RhdGU8XG4gICAgJ3Vwdm90ZS1sb2FkaW5nJyB8IFxuICAgICdkb3dudm90ZS1sb2FkaW5nJyB8IFxuICAgICdub3QtbG9hZGluZycgXG4gICAgPignbm90LWxvYWRpbmcnKTtcbiAgICBjb25zdCBbIHZvdGUgXSA9IHVzZVZvdGVNdXRhdGlvbigpO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxGbGV4IGRpcmVjdGlvbiA9ICdjb2x1bW4nIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgYWxpZ25JdGVtcz0nY2VudGVyJyAgbXIgPXs1fT5cbiAgICAgICAgPEljb25CdXR0b24gXG4gICAgICAgICAgICBhcmlhLWxhYmVsPSd1cHZvdGUgcG9zdCcgXG4gICAgICAgICAgICBpY29uID0gezxDaGV2cm9uVXBJY29uIHNpemU9XCIyNHB4XCIvPn1cbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcj17cG9zdC52b3RlU3RhdHVzID09PSAxPyBcImdyZWVuXCIgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICBvbkNsaWNrPXthc3luYyAoKSA9PiB7aWYgKGRhdGE/Lm1lKXtcbiAgICAgICAgICAgICAgICBzZXRMb2FkaW5nc3RhdGUoJ3Vwdm90ZS1sb2FkaW5nJylcbiAgICAgICAgICAgICAgICBhd2FpdCB2b3RlKHt2YXJpYWJsZXM6e1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zdElkOiBwb3N0LmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDEsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZTooY2FjaGUpID0+IHVwZGF0ZUFmdGVyVm90ZSgxLCBwb3N0LmlkLCBjYWNoZSksXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHNldExvYWRpbmdzdGF0ZSgnbm90LWxvYWRpbmcnKTtcbiAgICAgICAgICAgIH19fVxuICAgICAgICAgICAgaXNMb2FkaW5nPXtsb2FkaW5nU3RhdGUgPT09J3Vwdm90ZS1sb2FkaW5nJ31cbiAgICAgICAgLz5cblxuICAgICAgICB7cG9zdC5wb2ludHN9XG5cbiAgICAgICAgPEljb25CdXR0b24gXG4gICAgICAgICAgICBhcmlhLWxhYmVsPSdkb3dudm90ZSBwb3N0JyBcbiAgICAgICAgICAgIGljb24gPSB7PENoZXZyb25Eb3duSWNvbiBzaXplPVwiMjRweFwiLz59XG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9e3Bvc3Qudm90ZVN0YXR1cyA9PT0gLTE/IFwicmVkXCIgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICBvbkNsaWNrPXthc3luYyAoKSA9PiB7IGlmIChkYXRhPy5tZSl7XG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZ3N0YXRlKCdkb3dudm90ZS1sb2FkaW5nJylcbiAgICAgICAgICAgICAgICBhd2FpdCB2b3RlKHt2YXJpYWJsZXM6e1xuICAgICAgICAgICAgICAgICAgICBwb3N0SWQ6IHBvc3QuaWQsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAtMSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlOihjYWNoZSkgPT4gdXBkYXRlQWZ0ZXJWb3RlKC0xLCBwb3N0LmlkLCBjYWNoZSksXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZ3N0YXRlKCdub3QtbG9hZGluZycpXG4gICAgICAgICAgICB9fX1cbiAgICAgICAgICAgIGlzTG9hZGluZz17bG9hZGluZ1N0YXRlID09PSdkb3dudm90ZS1sb2FkaW5nJ31cbiAgICAgICAgLz5cbiAgICA8L0ZsZXg+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJDaGV2cm9uVXBJY29uIiwiQ2hldnJvbkRvd25JY29uIiwiRmxleCIsIkljb25CdXR0b24iLCJncWwiLCJSZWFjdCIsInVzZVN0YXRlIiwidXNlTWVRdWVyeSIsInVzZVZvdGVNdXRhdGlvbiIsImlzU2VydmVyIiwidXBkYXRlQWZ0ZXJWb3RlIiwidmFsdWUiLCJwb3N0SWQiLCJjYWNoZSIsImRhdGEiLCJyZWFkRnJhZ21lbnQiLCJpZCIsImZyYWdtZW50IiwibmV3UG9pbnRzIiwicG9pbnRzIiwibmV3VmFsdWUiLCJ2b3RlU3RhdHVzIiwid3JpdGVGcmFnbWVudCIsIlVwdm90ZVNlY3Rpb24iLCJwb3N0Iiwic2tpcCIsImxvYWRpbmdTdGF0ZSIsInNldExvYWRpbmdzdGF0ZSIsInZvdGUiLCJkaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJtciIsImFyaWEtbGFiZWwiLCJpY29uIiwic2l6ZSIsImJhY2tncm91bmRDb2xvciIsInVuZGVmaW5lZCIsIm9uQ2xpY2siLCJtZSIsInZhcmlhYmxlcyIsInVwZGF0ZSIsImlzTG9hZGluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/UpvoteSection.tsx\n");

/***/ })

});