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

/***/ "./src/utils/createUrqlClient.ts":
/*!***************************************!*\
  !*** ./src/utils/createUrqlClient.ts ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createUrqlClient\": function() { return /* binding */ createUrqlClient; }\n/* harmony export */ });\n/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! urql */ \"./node_modules/urql/dist/urql.es.js\");\n/* harmony import */ var _urql_exchange_graphcache__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @urql/exchange-graphcache */ \"./node_modules/@urql/exchange-graphcache/dist/urql-exchange-graphcache.mjs\");\n/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../generated/graphql */ \"./src/generated/graphql.tsx\");\n/* harmony import */ var _betterUpdateQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./betterUpdateQuery */ \"./src/utils/betterUpdateQuery.ts\");\n/* harmony import */ var wonka__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! wonka */ \"./node_modules/wonka/dist/wonka.mjs\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\nvar errorExchange = function(param1) {\n    var forward = param1.forward;\n    return function(ops$) {\n        return (0,wonka__WEBPACK_IMPORTED_MODULE_3__.pipe)(forward(ops$), (0,wonka__WEBPACK_IMPORTED_MODULE_3__.tap)(function(param) {\n            var error = param.error;\n            if (error === null || error === void 0 ? void 0 : error.message.includes(\"not authenticated\")) {\n                router.push(\"/login\");\n            }\n        }));\n    };\n};\nvar createUrqlClient = function(ssrExchange) {\n    return {\n        url: \"http://localhost:4000/graphql\",\n        fetchOptions: {\n            credentials: \"include\",\n            headers: {\n                \"X-Forwarded-Proto\": \"https\"\n            }\n        },\n        exchanges: [\n            urql__WEBPACK_IMPORTED_MODULE_4__.dedupExchange,\n            (0,_urql_exchange_graphcache__WEBPACK_IMPORTED_MODULE_5__.cacheExchange)({\n                updates: {\n                    Mutation: {\n                        logout: function(_result, args, cache, info) {\n                            (0,_betterUpdateQuery__WEBPACK_IMPORTED_MODULE_1__.betterUpdateQuery)(cache, {\n                                query: _generated_graphql__WEBPACK_IMPORTED_MODULE_0__.MeDocument\n                            }, _result, function() {\n                                return {\n                                    me: null\n                                };\n                            });\n                        },\n                        login: function(_result, args, cache, info) {\n                            (0,_betterUpdateQuery__WEBPACK_IMPORTED_MODULE_1__.betterUpdateQuery)(cache, {\n                                query: _generated_graphql__WEBPACK_IMPORTED_MODULE_0__.MeDocument\n                            }, _result, function(result, query) {\n                                if (result.login.errors) {\n                                    return query;\n                                } else {\n                                    return {\n                                        me: result.login.user\n                                    };\n                                }\n                            });\n                        },\n                        register: function(_result, args, cache, info) {\n                            (0,_betterUpdateQuery__WEBPACK_IMPORTED_MODULE_1__.betterUpdateQuery)(cache, {\n                                query: _generated_graphql__WEBPACK_IMPORTED_MODULE_0__.MeDocument\n                            }, _result, function(result, query) {\n                                if (result.register.errors) {\n                                    return query;\n                                } else {\n                                    return {\n                                        me: result.register.user\n                                    };\n                                }\n                            });\n                        }\n                    }\n                }\n            }),\n            errorExchange,\n            ssrExchange,\n            urql__WEBPACK_IMPORTED_MODULE_4__.fetchExchange, \n        ]\n    };\n};\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUM7d0NBQ0xDLEVBQUUsRUFBRUUsTUFBTSxDQUFDRyxRQUFRLENBQUNELElBQUk7b0NBQzFCLENBQUM7Z0NBQ0gsQ0FBQzs0QkFDSCxDQUFDO3dCQUVQLENBQUM7b0JBQ0gsQ0FBQztnQkFDSCxDQUFDO1lBQ0gsQ0FBQztZQUNEMUIsYUFBYTtZQUNiUSxXQUFXO1lBQ1hoQiwrQ0FBYTtRQUNiLENBQUM7SUFDTCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy91dGlscy9jcmVhdGVVcnFsQ2xpZW50LnRzPzkyNmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgIGRlZHVwRXhjaGFuZ2UsIGZldGNoRXhjaGFuZ2UgfSBmcm9tIFwidXJxbFwiXG5pbXBvcnQgeyBjYWNoZUV4Y2hhbmdlIH0gZnJvbSAnQHVycWwvZXhjaGFuZ2UtZ3JhcGhjYWNoZSc7XG5pbXBvcnQgeyBMb2dvdXRNdXRhdGlvbixcbiAgICAgICAgIE1lUXVlcnksIFxuICAgICAgICAgTWVEb2N1bWVudCwgXG4gICAgICAgICBMb2dpbk11dGF0aW9uLCBcbiAgICAgICAgIFJlZ2lzdGVyTXV0YXRpb24gfSBmcm9tIFwiLi4vZ2VuZXJhdGVkL2dyYXBocWxcIjtcbmltcG9ydCB7IGJldHRlclVwZGF0ZVF1ZXJ5IH0gZnJvbSBcIi4vYmV0dGVyVXBkYXRlUXVlcnlcIjtcbmltcG9ydCB7IHBpcGUsIHRhcCB9IGZyb20gJ3dvbmthJztcbmltcG9ydCB7IEV4Y2hhbmdlIH0gZnJvbSAndXJxbCc7XG5pbXBvcnQgeyBSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5jb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG5jb25zdCBlcnJvckV4Y2hhbmdlOiBFeGNoYW5nZSA9ICh7IGZvcndhcmQgfSkgPT4gKG9wcyQpID0+IHtcbiAgcmV0dXJuIHBpcGUoXG4gICAgZm9yd2FyZChvcHMkKSxcbiAgICB0YXAoKHsgZXJyb3IgfSkgPT4ge1xuICAgICAgaWYgKGVycm9yPy5tZXNzYWdlLmluY2x1ZGVzKFwibm90IGF1dGhlbnRpY2F0ZWRcIikpIHtcbiAgICAgICAgcm91dGVyLnB1c2goXCIvbG9naW5cIik7XG4gICAgICB9XG4gICAgfSlcbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVVcnFsQ2xpZW50ID0gKHNzckV4Y2hhbmdlOiBhbnkpID0+ICh7XG4gICAgdXJsOiBcImh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC9ncmFwaHFsXCIsXG4gICAgZmV0Y2hPcHRpb25zOiB7XG4gICAgICBjcmVkZW50aWFsczogXCJpbmNsdWRlXCIgIGFzIGNvbnN0ICxcbiAgICAgIGhlYWRlcnM6IHsgXCJYLUZvcndhcmRlZC1Qcm90b1wiOiBcImh0dHBzXCIgfSxcbiAgICB9LFxuICAgIGV4Y2hhbmdlczpbZGVkdXBFeGNoYW5nZSwgY2FjaGVFeGNoYW5nZSh7XG4gICAgICB1cGRhdGVzOiB7XG4gICAgICAgIE11dGF0aW9uOiB7XG4gICAgICAgICAgbG9nb3V0OiAoX3Jlc3VsdCwgYXJncywgY2FjaGUsIGluZm8pID0+IHtcbiAgICAgICAgICAgIGJldHRlclVwZGF0ZVF1ZXJ5PExvZ291dE11dGF0aW9uLCBNZVF1ZXJ5PiAoXG4gICAgICAgICAgICAgIGNhY2hlLFxuICAgICAgICAgICAgICB7cXVlcnk6TWVEb2N1bWVudH0sXG4gICAgICAgICAgICAgIF9yZXN1bHQsXG4gICAgICAgICAgICAgICgpID0+ICh7bWU6bnVsbH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSxcbiAgICAgICAgICBsb2dpbjogKF9yZXN1bHQsIGFyZ3MsIGNhY2hlLCBpbmZvKSA9PiB7XG4gICAgICAgICAgICBiZXR0ZXJVcGRhdGVRdWVyeTxMb2dpbk11dGF0aW9uLCBNZVF1ZXJ5PiAoXG4gICAgICAgICAgICAgIGNhY2hlLFxuICAgICAgICAgICAgICB7cXVlcnk6TWVEb2N1bWVudH0sXG4gICAgICAgICAgICAgIF9yZXN1bHQsXG4gICAgICAgICAgICAgIChyZXN1bHQsIHF1ZXJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmxvZ2luLmVycm9ycyl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBxdWVyeVxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJue1xuICAgICAgICAgICAgICAgICAgICAgIG1lOiByZXN1bHQubG9naW4udXNlcixcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgcmVnaXN0ZXI6IChfcmVzdWx0LCBhcmdzLCBjYWNoZSwgaW5mbykgPT4ge1xuICAgICAgICAgICAgYmV0dGVyVXBkYXRlUXVlcnk8UmVnaXN0ZXJNdXRhdGlvbiwgTWVRdWVyeT4gKFxuICAgICAgICAgICAgICBjYWNoZSxcbiAgICAgICAgICAgICAge3F1ZXJ5Ok1lRG9jdW1lbnR9LFxuICAgICAgICAgICAgICBfcmVzdWx0LFxuICAgICAgICAgICAgICAocmVzdWx0LCBxdWVyeSkgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5yZWdpc3Rlci5lcnJvcnMpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcXVlcnlcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybntcbiAgICAgICAgICAgICAgICAgICAgICBtZTogcmVzdWx0LnJlZ2lzdGVyLnVzZXIsXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICAgIGVycm9yRXhjaGFuZ2UsXG4gICAgc3NyRXhjaGFuZ2UsXG4gICAgZmV0Y2hFeGNoYW5nZSxcbiAgICBdLFxufSkgOyJdLCJuYW1lcyI6WyJkZWR1cEV4Y2hhbmdlIiwiZmV0Y2hFeGNoYW5nZSIsImNhY2hlRXhjaGFuZ2UiLCJNZURvY3VtZW50IiwiYmV0dGVyVXBkYXRlUXVlcnkiLCJwaXBlIiwidGFwIiwidXNlUm91dGVyIiwicm91dGVyIiwiZXJyb3JFeGNoYW5nZSIsImZvcndhcmQiLCJvcHMkIiwiZXJyb3IiLCJtZXNzYWdlIiwiaW5jbHVkZXMiLCJwdXNoIiwiY3JlYXRlVXJxbENsaWVudCIsInNzckV4Y2hhbmdlIiwidXJsIiwiZmV0Y2hPcHRpb25zIiwiY3JlZGVudGlhbHMiLCJoZWFkZXJzIiwiZXhjaGFuZ2VzIiwidXBkYXRlcyIsIk11dGF0aW9uIiwibG9nb3V0IiwiX3Jlc3VsdCIsImFyZ3MiLCJjYWNoZSIsImluZm8iLCJxdWVyeSIsIm1lIiwibG9naW4iLCJyZXN1bHQiLCJlcnJvcnMiLCJ1c2VyIiwicmVnaXN0ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/utils/createUrqlClient.ts\n");

/***/ })

});