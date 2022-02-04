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

/***/ "./src/pages/post/[id].tsx":
/*!*********************************!*\
  !*** ./src/pages/post/[id].tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Post\": function() { return /* binding */ Post; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var next_urql__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next-urql */ \"./node_modules/next-urql/dist/next-urql.es.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_AlterPostButtons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/AlterPostButtons */ \"./src/components/AlterPostButtons.tsx\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Layout */ \"./src/components/Layout.tsx\");\n/* harmony import */ var _components_UpvoteSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/UpvoteSection */ \"./src/components/UpvoteSection.tsx\");\n/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../generated/graphql */ \"./src/generated/graphql.tsx\");\n/* harmony import */ var _utils_createUrqlClient__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/createUrqlClient */ \"./src/utils/createUrqlClient.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _e = undefined;\n    try {\n        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){\n            _arr.push(_s.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();\n}\nfunction _throw(e) {\n    throw e;\n}\nvar _this = undefined;\nvar _s1 = $RefreshSig$();\nvar Post = function(param) {\n    var param = param !== null ? param : _throw(new TypeError(\"Cannot destructure undefined\"));\n    var ref;\n    _s1();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var intId = typeof router.query.id === 'string' ? parseInt(router.query.id) : -1;\n    var ref1 = _slicedToArray((0,_generated_graphql__WEBPACK_IMPORTED_MODULE_5__.usePostQuery)({\n        pause: intId === -1,\n        variables: {\n            id: intId\n        }\n    }), 1), ref2 = ref1[0], data = ref2.data, error = ref2.error, fetching = ref2.fetching;\n    if (fetching) {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__.Layout, {\n            __source: {\n                fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/post/[id].tsx\",\n                lineNumber: 23,\n                columnNumber: 13\n            },\n            __self: _this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                __source: {\n                    fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/post/[id].tsx\",\n                    lineNumber: 24,\n                    columnNumber: 17\n                },\n                __self: _this,\n                children: \" ... loading... \"\n            })\n        }));\n    }\n    if (error) {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n            __source: {\n                fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/post/[id].tsx\",\n                lineNumber: 30,\n                columnNumber: 18\n            },\n            __self: _this,\n            children: error.message\n        }));\n    }\n    if (!(data === null || data === void 0 ? void 0 : data.post)) {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__.Layout, {\n            __source: {\n                fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/post/[id].tsx\",\n                lineNumber: 35,\n                columnNumber: 13\n            },\n            __self: _this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                __source: {\n                    fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/post/[id].tsx\",\n                    lineNumber: 36,\n                    columnNumber: 17\n                },\n                __self: _this,\n                children: \" Could not find post\"\n            })\n        }));\n    }\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Layout__WEBPACK_IMPORTED_MODULE_3__.Layout, {\n        __source: {\n            fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/post/[id].tsx\",\n            lineNumber: 42,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Flex, {\n            p: 10,\n            shadow: \"md\",\n            borderWidth: \"1px\",\n            __source: {\n                fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/post/[id].tsx\",\n                lineNumber: 43,\n                columnNumber: 13\n            },\n            __self: _this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Box, {\n                    m: \"auto\",\n                    __source: {\n                        fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/post/[id].tsx\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Heading, {\n                        __source: {\n                            fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/post/[id].tsx\",\n                            lineNumber: 45,\n                            columnNumber: 21\n                        },\n                        __self: _this,\n                        children: [\n                            \" \",\n                            data === null || data === void 0 ? void 0 : data.post.title\n                        ]\n                    })\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Box, {\n                    mb: 4,\n                    __source: {\n                        fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/post/[id].tsx\",\n                        lineNumber: 47,\n                        columnNumber: 17\n                    },\n                    __self: _this,\n                    children: data === null || data === void 0 ? void 0 : (ref = data.post) === null || ref === void 0 ? void 0 : ref.text\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_UpvoteSection__WEBPACK_IMPORTED_MODULE_4__.UpvoteSection, {\n                    post: data === null || data === void 0 ? void 0 : data.post,\n                    __source: {\n                        fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/post/[id].tsx\",\n                        lineNumber: 48,\n                        columnNumber: 17\n                    },\n                    __self: _this\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_AlterPostButtons__WEBPACK_IMPORTED_MODULE_2__.AlterPostButtons, {\n                    id: data.post.id,\n                    creatorId: data.post.creator.id,\n                    __source: {\n                        fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/post/[id].tsx\",\n                        lineNumber: 49,\n                        columnNumber: 17\n                    },\n                    __self: _this\n                })\n            ]\n        })\n    }));\n};\n_s1(Post, \"4BlYbPgbxzjVL3SL8XkEBcBkpGs=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        _generated_graphql__WEBPACK_IMPORTED_MODULE_5__.usePostQuery\n    ];\n});\n_c = Post;\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,next_urql__WEBPACK_IMPORTED_MODULE_8__.withUrqlClient)(_utils_createUrqlClient__WEBPACK_IMPORTED_MODULE_6__.createUrqlClient, {\n    ssr: true\n})(Post));\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SHhDRSxJQUFJO0FBK0NqQiwrREFBZVAseURBQWMsQ0FBRU0scUVBQWdCLEVBQUUsQ0FBQztJQUFDd0IsR0FBRyxFQUFFLElBQUk7QUFBQyxDQUFDLEVBQUt2QixJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9wb3N0L1tpZF0udHN4Pzg1OGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBGbGV4LCBIZWFkaW5nIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5pbXBvcnQgeyB3aXRoVXJxbENsaWVudCB9IGZyb20gJ25leHQtdXJxbCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBBbHRlclBvc3RCdXR0b25zIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9BbHRlclBvc3RCdXR0b25zJztcbmltcG9ydCB7IExheW91dCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCB7IFVwdm90ZVNlY3Rpb24gfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL1Vwdm90ZVNlY3Rpb24nO1xuaW1wb3J0IHsgdXNlUG9zdFF1ZXJ5IH0gZnJvbSAnLi4vLi4vZ2VuZXJhdGVkL2dyYXBocWwnO1xuaW1wb3J0IHsgY3JlYXRlVXJxbENsaWVudCB9IGZyb20gJy4uLy4uL3V0aWxzL2NyZWF0ZVVycWxDbGllbnQnO1xuXG5cbmV4cG9ydCBjb25zdCBQb3N0ID0gKHt9KSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgaW50SWQgPSB0eXBlb2Ygcm91dGVyLnF1ZXJ5LmlkID09PSAnc3RyaW5nJyA/IHBhcnNlSW50KHJvdXRlci5xdWVyeS5pZCk6IC0xO1xuICAgIGNvbnN0IFt7IGRhdGEsIGVycm9yLCAgZmV0Y2hpbmcgfV0gPSB1c2VQb3N0UXVlcnkoe1xuICAgICAgICBwYXVzZTogaW50SWQgPT09IC0xLFxuICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgIGlkOiBpbnRJZCxcbiAgICAgICAgfSxcbiAgICB9KTtcbiAgICBcbiAgICBpZiAoIGZldGNoaW5nICkge1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgICAgIDxkaXY+IC4uLiBsb2FkaW5nLi4uIDwvZGl2PlxuICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKCBlcnJvciApIHtcbiAgICAgICAgcmV0dXJuICggPGRpdj57IGVycm9yLm1lc3NhZ2UgfTwvZGl2PiApO1xuICAgIH1cblxuICAgIGlmICggIWRhdGE/LnBvc3QgKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgICAgIDxkaXY+IENvdWxkIG5vdCBmaW5kIHBvc3Q8L2Rpdj5cbiAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICA8RmxleCBwPXsxMH0gc2hhZG93PSdtZCcgYm9yZGVyV2lkdGg9JzFweCc+XG4gICAgICAgICAgICAgICAgPEJveCBtPVwiYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICA8SGVhZGluZz4geyBkYXRhPy5wb3N0LnRpdGxlIH08L0hlYWRpbmc+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgPEJveCBtYj17NH0+eyBkYXRhPy5wb3N0Py50ZXh0IH08L0JveD5cbiAgICAgICAgICAgICAgICA8VXB2b3RlU2VjdGlvbiBwb3N0ID0ge2RhdGE/LnBvc3R9IC8+XG4gICAgICAgICAgICAgICAgPEFsdGVyUG9zdEJ1dHRvbnMgXG4gICAgICAgICAgICAgICAgICAgIGlkID0geyBkYXRhLnBvc3QuaWQgfSBcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRvcklkID0geyBkYXRhLnBvc3QuY3JlYXRvci5pZCB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvRmxleD5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhVcnFsQ2xpZW50KCBjcmVhdGVVcnFsQ2xpZW50LCB7IHNzcjogdHJ1ZSB9ICkgKCBQb3N0ICk7Il0sIm5hbWVzIjpbIkJveCIsIkZsZXgiLCJIZWFkaW5nIiwid2l0aFVycWxDbGllbnQiLCJ1c2VSb3V0ZXIiLCJBbHRlclBvc3RCdXR0b25zIiwiTGF5b3V0IiwiVXB2b3RlU2VjdGlvbiIsInVzZVBvc3RRdWVyeSIsImNyZWF0ZVVycWxDbGllbnQiLCJQb3N0IiwiZGF0YSIsInJvdXRlciIsImludElkIiwicXVlcnkiLCJpZCIsInBhcnNlSW50IiwicGF1c2UiLCJ2YXJpYWJsZXMiLCJlcnJvciIsImZldGNoaW5nIiwiZGl2IiwibWVzc2FnZSIsInBvc3QiLCJwIiwic2hhZG93IiwiYm9yZGVyV2lkdGgiLCJtIiwidGl0bGUiLCJtYiIsInRleHQiLCJjcmVhdG9ySWQiLCJjcmVhdG9yIiwic3NyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/post/[id].tsx\n");

/***/ })

});