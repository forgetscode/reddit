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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createUrqlClient\": function() { return /* binding */ createUrqlClient; },\n/* harmony export */   \"cursorPagination\": function() { return /* binding */ cursorPagination; }\n/* harmony export */ });\n/* harmony import */ var urql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! urql */ \"./node_modules/urql/dist/urql.es.js\");\n/* harmony import */ var _urql_exchange_graphcache__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @urql/exchange-graphcache */ \"./node_modules/@urql/exchange-graphcache/dist/urql-exchange-graphcache.mjs\");\n/* harmony import */ var _generated_graphql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../generated/graphql */ \"./src/generated/graphql.tsx\");\n/* harmony import */ var _betterUpdateQuery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./betterUpdateQuery */ \"./src/utils/betterUpdateQuery.ts\");\n/* harmony import */ var wonka__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! wonka */ \"./node_modules/wonka/dist/wonka.mjs\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _isServer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isServer */ \"./src/utils/isServer.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) {\n        for(var i = 0, arr2 = new Array(arr.length); i < arr.length; i++){\n            arr2[i] = arr[i];\n        }\n        return arr2;\n    }\n}\nfunction _iterableToArray(iter) {\n    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance\");\n}\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n                  fragment _ on Post {\\n                    id\\n                    points\\n                    voteStatus\\n                  }\\n                \"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n                    fragment _ on Post {\\n                      points\\n                      voteStatus\\n                    }\\n                  \"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nvar errorExchange = function(param1) {\n    var forward = param1.forward;\n    return function(ops$) {\n        return (0,wonka__WEBPACK_IMPORTED_MODULE_4__.pipe)(forward(ops$), (0,wonka__WEBPACK_IMPORTED_MODULE_4__.tap)(function(param) {\n            var error = param.error;\n            if (error === null || error === void 0 ? void 0 : error.message.includes(\"not authenticated\")) {\n                var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n                router.push(\"/login\");\n            }\n        }));\n    };\n};\nvar createUrqlClient = function(ssrExchange, ctx) {\n    var cookie = '';\n    if ((0,_isServer__WEBPACK_IMPORTED_MODULE_3__.isServer)()) {\n        cookie = ctx.req.headers.cookie;\n    }\n    return {\n        url: \"http://localhost:4000/graphql\",\n        fetchOptions: {\n            credentials: \"include\",\n            headers: cookie ? {\n                \"X-Forwarded-Proto\": \"https\",\n                cookie: cookie\n            } : {\n                \"X-Forwarded-Proto\": \"https\"\n            }\n        },\n        exchanges: [\n            urql__WEBPACK_IMPORTED_MODULE_5__.dedupExchange,\n            (0,_urql_exchange_graphcache__WEBPACK_IMPORTED_MODULE_6__.cacheExchange)({\n                keys: {\n                    PaginatedPosts: function() {\n                        return null;\n                    }\n                },\n                resolvers: {\n                    Query: {\n                        posts: cursorPagination()\n                    }\n                },\n                updates: {\n                    Mutation: {\n                        deletePost: function(_result, args, cache, info) {\n                            console.log(\"deleted\");\n                            cache.invalidate({\n                                __typename: \"Post\",\n                                id: args.id\n                            });\n                        },\n                        vote: function(_result, args, cache, info) {\n                            var postId = args.postId, value = args.value;\n                            var data = cache.readFragment((0,urql__WEBPACK_IMPORTED_MODULE_5__.gql)(_templateObject()), {\n                                id: postId\n                            });\n                            if (data) {\n                                var newPoints = data.points;\n                                var newValue = value;\n                                if (data.voteStatus === value) {\n                                    newPoints = newPoints - value;\n                                    newValue = null;\n                                } else if (data.voteStatus === null) {\n                                    newPoints = newPoints + value;\n                                    newValue = value;\n                                } else {\n                                    newPoints = newPoints + 2 * value;\n                                    newValue = value;\n                                }\n                                cache.writeFragment((0,urql__WEBPACK_IMPORTED_MODULE_5__.gql)(_templateObject1()), {\n                                    id: postId,\n                                    points: newPoints,\n                                    voteStatus: newValue\n                                });\n                            }\n                        },\n                        createPost: function(_result, args, cache, info1) {\n                            var allFields = cache.inspectFields('Query');\n                            var fieldInfos = allFields.filter(function(info) {\n                                return info.fieldName === 'posts';\n                            });\n                            fieldInfos.forEach(function(fi) {\n                                cache.invalidate(\"Query\", \"posts\", fi.arguments || {\n                                });\n                            });\n                        },\n                        logout: function(_result, args, cache, info) {\n                            (0,_betterUpdateQuery__WEBPACK_IMPORTED_MODULE_1__.betterUpdateQuery)(cache, {\n                                query: _generated_graphql__WEBPACK_IMPORTED_MODULE_0__.MeDocument\n                            }, _result, function() {\n                                return {\n                                    me: null\n                                };\n                            });\n                        },\n                        login: function(_result, args, cache, info) {\n                            (0,_betterUpdateQuery__WEBPACK_IMPORTED_MODULE_1__.betterUpdateQuery)(cache, {\n                                query: _generated_graphql__WEBPACK_IMPORTED_MODULE_0__.MeDocument\n                            }, _result, function(result, query) {\n                                if (result.login.errors) {\n                                    return query;\n                                } else {\n                                    return {\n                                        me: result.login.user\n                                    };\n                                }\n                            });\n                        },\n                        register: function(_result, args, cache, info) {\n                            (0,_betterUpdateQuery__WEBPACK_IMPORTED_MODULE_1__.betterUpdateQuery)(cache, {\n                                query: _generated_graphql__WEBPACK_IMPORTED_MODULE_0__.MeDocument\n                            }, _result, function(result, query) {\n                                if (result.register.errors) {\n                                    return query;\n                                } else {\n                                    return {\n                                        me: result.register.user\n                                    };\n                                }\n                            });\n                        }\n                    }\n                }\n            }),\n            errorExchange,\n            ssrExchange,\n            urql__WEBPACK_IMPORTED_MODULE_5__.fetchExchange, \n        ]\n    };\n};\nvar cursorPagination = function() {\n    return function(_parent, fieldArgs, cache, info2) {\n        var entityKey = info2.parentKey, fieldName = info2.fieldName;\n        var allFields = cache.inspectFields(entityKey);\n        var fieldInfos = allFields.filter(function(info) {\n            return info.fieldName === fieldName;\n        });\n        var size = fieldInfos.length;\n        if (size === 0) {\n            return undefined;\n        }\n        var fieldKey = \"\".concat(fieldName, \"(\").concat((0,urql__WEBPACK_IMPORTED_MODULE_5__.stringifyVariables)(fieldArgs), \")\");\n        var isItInTheCache = cache.resolve(cache.resolve(entityKey, fieldKey), 'posts');\n        info2.partial = !isItInTheCache;\n        var hasMore = true;\n        var results = [];\n        fieldInfos.forEach(function(fi) {\n            var _results;\n            var key = cache.resolve(entityKey, fi.fieldKey);\n            var data = cache.resolve(key, \"posts\");\n            var _hasMore = cache.resolve(key, \"hasMore\");\n            if (!_hasMore) {\n                hasMore = _hasMore;\n            }\n            (_results = results).push.apply(_results, _toConsumableArray(data));\n        });\n        return {\n            __typename: \"PaginatedPosts\",\n            hasMore: hasMore,\n            posts: results\n        };\n    /*\n    const visited = new Set();\n    let result: NullArray<string> = [];\n    let prevOffset: number | null = null;\n\n    for (let i = 0; i < size; i++) {\n      const { fieldKey, arguments: args } = fieldInfos[i];\n      if (args === null || !compareArgs(fieldArgs, args)) {\n        continue;\n      }\n\n      const links = cache.resolve(entityKey, fieldKey) as string[];\n      const currentOffset = args[offsetArgument];\n\n      if (\n        links === null ||\n        links.length === 0 ||\n        typeof currentOffset !== 'number'\n      ) {\n        continue;\n      }\n\n      const tempResult: NullArray<string> = [];\n\n      for (let j = 0; j < links.length; j++) {\n        const link = links[j];\n        if (visited.has(link)) continue;\n        tempResult.push(link);\n        visited.add(link);\n      }\n\n      if (\n        (!prevOffset || currentOffset > prevOffset) ===\n        (mergeMode === 'after')\n      ) {\n        result = [...result, ...tempResult];\n      } else {\n        result = [...tempResult, ...result];\n      }\n\n      prevOffset = currentOffset;\n    }\n\n    const hasCurrentPage = cache.resolve(entityKey, fieldName, fieldArgs);\n    if (hasCurrentPage) {\n      return result;\n    } else if (!(info as any).store.schema) {\n      return undefined;\n    } else {\n      info.partial = true;\n      return result;\n    }\n    */ };\n};\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvY3JlYXRlVXJxbENsaWVudC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUF3RTtBQUNMO0FBT0Y7QUFDVjtBQUN0QjtBQUNFO0FBQ0k7QUFDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1FBMkRqQixDQU1KOzs7Ozs7Ozs7UUFxQk0sQ0FLSjs7Ozs7OztBQXhGbEIsR0FBSyxDQUFDVyxhQUFhLEdBQWEsUUFBUTtRQUFMQyxPQUFPLFVBQVBBLE9BQU87V0FBTyxRQUFRLENBQVBDLElBQUksRUFBSyxDQUFDO1FBQzFELE1BQU0sQ0FBQ1AsMkNBQUksQ0FDVE0sT0FBTyxDQUFDQyxJQUFJLEdBQ1pOLDBDQUFHLENBQUMsUUFBUSxRQUFPLENBQUM7Z0JBQWJPLEtBQUssU0FBTEEsS0FBSztZQUNWLEVBQUUsRUFBRUEsS0FBSyxhQUFMQSxLQUFLLEtBQUxBLElBQUksQ0FBSkEsQ0FBYyxHQUFkQSxJQUFJLENBQUpBLENBQWMsR0FBZEEsS0FBSyxDQUFFQyxPQUFPLENBQUNDLFFBQVEsQ0FBQyxDQUFtQixxQkFBRyxDQUFDO2dCQUNqRCxHQUFLLENBQUNDLE1BQU0sR0FBR1Isc0RBQVM7Z0JBQ3hCUSxNQUFNLENBQUNDLElBQUksQ0FBQyxDQUFRO1lBQ3RCLENBQUM7UUFDSCxDQUFDO0lBRUwsQ0FBQzs7QUFFTSxHQUFLLENBQUNDLGdCQUFnQixHQUFHLFFBQVEsQ0FBUEMsV0FBZ0IsRUFBRUMsR0FBUSxFQUFLLENBQUM7SUFDL0QsR0FBRyxDQUFDQyxNQUFNLEdBQUUsQ0FBRTtJQUNkLEVBQUUsRUFBRVosbURBQVEsSUFBRyxDQUFDO1FBQ2RZLE1BQU0sR0FBR0QsR0FBRyxDQUFDRSxHQUFHLENBQUNDLE9BQU8sQ0FBQ0YsTUFBTTtJQUNqQyxDQUFDO0lBRUQsTUFBTSxDQUFDLENBQUM7UUFDTkcsR0FBRyxFQUFFLENBQStCO1FBQ3BDQyxZQUFZLEVBQUUsQ0FBQztZQUNiQyxXQUFXLEVBQUUsQ0FBUztZQUN0QkgsT0FB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Q0osQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3V0aWxzL2NyZWF0ZVVycWxDbGllbnQudHM/OTI2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyAgZGVkdXBFeGNoYW5nZSwgZmV0Y2hFeGNoYW5nZSwgc3RyaW5naWZ5VmFyaWFibGVzIH0gZnJvbSBcInVycWxcIlxuaW1wb3J0IHsgY2FjaGVFeGNoYW5nZSwgUmVzb2x2ZXIgfSBmcm9tICdAdXJxbC9leGNoYW5nZS1ncmFwaGNhY2hlJztcbmltcG9ydCB7IExvZ291dE11dGF0aW9uLFxuICAgICAgICAgTWVRdWVyeSwgXG4gICAgICAgICBNZURvY3VtZW50LCBcbiAgICAgICAgIExvZ2luTXV0YXRpb24sIFxuICAgICAgICAgUmVnaXN0ZXJNdXRhdGlvbixcbiAgICAgICAgIFZvdGVNdXRhdGlvblZhcmlhYmxlcyxcbiAgICAgICAgIERlbGV0ZVBvc3RNdXRhdGlvblZhcmlhYmxlc30gZnJvbSBcIi4uL2dlbmVyYXRlZC9ncmFwaHFsXCI7XG5pbXBvcnQgeyBiZXR0ZXJVcGRhdGVRdWVyeSB9IGZyb20gXCIuL2JldHRlclVwZGF0ZVF1ZXJ5XCI7XG5pbXBvcnQgeyBwaXBlLCB0YXAgfSBmcm9tICd3b25rYSc7XG5pbXBvcnQgeyBFeGNoYW5nZSwgZ3FsfSBmcm9tICd1cnFsJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgaXNTZXJ2ZXIgfSBmcm9tIFwiLi9pc1NlcnZlclwiO1xuXG5cbmNvbnN0IGVycm9yRXhjaGFuZ2U6IEV4Y2hhbmdlID0gKHsgZm9yd2FyZCB9KSA9PiAob3BzJCkgPT4ge1xuICByZXR1cm4gcGlwZShcbiAgICBmb3J3YXJkKG9wcyQpLFxuICAgIHRhcCgoeyBlcnJvciB9KSA9PiB7XG4gICAgICBpZiAoZXJyb3I/Lm1lc3NhZ2UuaW5jbHVkZXMoXCJub3QgYXV0aGVudGljYXRlZFwiKSkge1xuICAgICAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAgICAgICByb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcbiAgICAgIH1cbiAgICB9KVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVVycWxDbGllbnQgPSAoc3NyRXhjaGFuZ2U6IGFueSwgY3R4OiBhbnkpID0+IHtcbiAgbGV0IGNvb2tpZSA9Jyc7XG4gIGlmIChpc1NlcnZlcigpKXtcbiAgICBjb29raWUgPSBjdHgucmVxLmhlYWRlcnMuY29va2llO1xuICB9XG4gIFxuICByZXR1cm4ge1xuICAgIHVybDogXCJodHRwOi8vbG9jYWxob3N0OjQwMDAvZ3JhcGhxbFwiLFxuICAgIGZldGNoT3B0aW9uczoge1xuICAgICAgY3JlZGVudGlhbHM6IFwiaW5jbHVkZVwiICBhcyBjb25zdCAsXG4gICAgICBoZWFkZXJzOiBcbiAgICAgIGNvb2tpZVxuICAgICAgP3tcbiAgICAgICAgXCJYLUZvcndhcmRlZC1Qcm90b1wiOiBcImh0dHBzXCIsXG4gICAgICAgIGNvb2tpZVxuICAgICAgICB9XG4gICAgICAgIDpcbiAgICAgICAge1xuICAgICAgICBcIlgtRm9yd2FyZGVkLVByb3RvXCI6IFwiaHR0cHNcIlxuICAgICAgICB9LFxuICAgIH0sXG4gICAgZXhjaGFuZ2VzOltcbiAgICAgIGRlZHVwRXhjaGFuZ2UsXG4gICAgICBjYWNoZUV4Y2hhbmdlKHtcbiAgICAgICAga2V5czoge1xuICAgICAgICAgIFBhZ2luYXRlZFBvc3RzOiAoKSA9PiBudWxsLCBcbiAgICAgICAgfSxcbiAgICAgICAgcmVzb2x2ZXJzOntcbiAgICAgICAgICBRdWVyeTp7XG4gICAgICAgICAgICBwb3N0czogY3Vyc29yUGFnaW5hdGlvbigpLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHVwZGF0ZXM6IHtcbiAgICAgICAgICBNdXRhdGlvbjoge1xuICAgICAgICAgICAgZGVsZXRlUG9zdDogKF9yZXN1bHQsIGFyZ3MsIGNhY2hlLCBpbmZvKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGVsZXRlZFwiKTtcbiAgICAgICAgICAgICAgY2FjaGUuaW52YWxpZGF0ZSh7XG4gICAgICAgICAgICAgICAgX190eXBlbmFtZTogXCJQb3N0XCIsXG4gICAgICAgICAgICAgICAgaWQ6IChhcmdzIGFzIERlbGV0ZVBvc3RNdXRhdGlvblZhcmlhYmxlcykuaWQsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHZvdGU6IChfcmVzdWx0LCBhcmdzLCBjYWNoZSwgaW5mbykgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7cG9zdElkLCB2YWx1ZX0gPSBhcmdzIGFzIFZvdGVNdXRhdGlvblZhcmlhYmxlcztcbiAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGNhY2hlLnJlYWRGcmFnbWVudChcbiAgICAgICAgICAgICAgICBncWxgXG4gICAgICAgICAgICAgICAgICBmcmFnbWVudCBfIG9uIFBvc3Qge1xuICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICBwb2ludHNcbiAgICAgICAgICAgICAgICAgICAgdm90ZVN0YXR1c1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGAsXG4gICAgICAgICAgICAgICAgeyBpZDogcG9zdElkfVxuICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgbGV0IG5ld1BvaW50cyA9IGRhdGEucG9pbnRzO1xuICAgICAgICAgICAgICAgIGxldCBuZXdWYWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLnZvdGVTdGF0dXMgPT09IHZhbHVlICkge1xuICAgICAgICAgICAgICAgICAgbmV3UG9pbnRzID0gbmV3UG9pbnRzIC0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRhdGEudm90ZVN0YXR1cyA9PT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgICBuZXdQb2ludHMgPSBuZXdQb2ludHMgK3ZhbHVlO1xuICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICBuZXdQb2ludHMgPSBuZXdQb2ludHMgKyAyKnZhbHVlO1xuICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjYWNoZS53cml0ZUZyYWdtZW50KFxuICAgICAgICAgICAgICAgICAgZ3FsYFxuICAgICAgICAgICAgICAgICAgICBmcmFnbWVudCBfIG9uIFBvc3Qge1xuICAgICAgICAgICAgICAgICAgICAgIHBvaW50c1xuICAgICAgICAgICAgICAgICAgICAgIHZvdGVTdGF0dXNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgYCx7IGlkOiBwb3N0SWQsIHBvaW50czogbmV3UG9pbnRzLCB2b3RlU3RhdHVzOiBuZXdWYWx1ZX1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY3JlYXRlUG9zdDogKF9yZXN1bHQsIGFyZ3MsIGNhY2hlLCBpbmZvKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGFsbEZpZWxkcyA9IGNhY2hlLmluc3BlY3RGaWVsZHMoJ1F1ZXJ5Jyk7XG4gICAgICAgICAgICAgIGNvbnN0IGZpZWxkSW5mb3MgPSBhbGxGaWVsZHMuZmlsdGVyKChpbmZvKSA9PiBpbmZvLmZpZWxkTmFtZSA9PT0gJ3Bvc3RzJyk7XG4gICAgICAgICAgICAgIGZpZWxkSW5mb3MuZm9yRWFjaCgoZmkpID0+IHtcbiAgICAgICAgICAgICAgICBjYWNoZS5pbnZhbGlkYXRlKFwiUXVlcnlcIiwgXCJwb3N0c1wiLCBmaS5hcmd1bWVudHMgfHwge30gKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbG9nb3V0OiAoX3Jlc3VsdCwgYXJncywgY2FjaGUsIGluZm8pID0+IHtcbiAgICAgICAgICAgICAgYmV0dGVyVXBkYXRlUXVlcnk8TG9nb3V0TXV0YXRpb24sIE1lUXVlcnk+IChcbiAgICAgICAgICAgICAgICBjYWNoZSxcbiAgICAgICAgICAgICAgICB7cXVlcnk6TWVEb2N1bWVudH0sXG4gICAgICAgICAgICAgICAgX3Jlc3VsdCxcbiAgICAgICAgICAgICAgICAoKSA9PiAoe21lOm51bGx9KVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbG9naW46IChfcmVzdWx0LCBhcmdzLCBjYWNoZSwgaW5mbykgPT4ge1xuICAgICAgICAgICAgICBiZXR0ZXJVcGRhdGVRdWVyeTxMb2dpbk11dGF0aW9uLCBNZVF1ZXJ5PiAoXG4gICAgICAgICAgICAgICAgY2FjaGUsXG4gICAgICAgICAgICAgICAge3F1ZXJ5Ok1lRG9jdW1lbnR9LFxuICAgICAgICAgICAgICAgIF9yZXN1bHQsXG4gICAgICAgICAgICAgICAgKHJlc3VsdCwgcXVlcnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5sb2dpbi5lcnJvcnMpe1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBxdWVyeVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybntcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lOiByZXN1bHQubG9naW4udXNlcixcbiAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVnaXN0ZXI6IChfcmVzdWx0LCBhcmdzLCBjYWNoZSwgaW5mbykgPT4ge1xuICAgICAgICAgICAgICBiZXR0ZXJVcGRhdGVRdWVyeTxSZWdpc3Rlck11dGF0aW9uLCBNZVF1ZXJ5PiAoXG4gICAgICAgICAgICAgICAgY2FjaGUsXG4gICAgICAgICAgICAgICAge3F1ZXJ5Ok1lRG9jdW1lbnR9LFxuICAgICAgICAgICAgICAgIF9yZXN1bHQsXG4gICAgICAgICAgICAgICAgKHJlc3VsdCwgcXVlcnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5yZWdpc3Rlci5lcnJvcnMpe1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBxdWVyeVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybntcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lOiByZXN1bHQucmVnaXN0ZXIudXNlcixcbiAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgZXJyb3JFeGNoYW5nZSxcbiAgICAgIHNzckV4Y2hhbmdlLFxuICAgICAgZmV0Y2hFeGNoYW5nZSxcbiAgICAgIF0sXG4gIH07XG59O1xuXG5cbmV4cG9ydCB0eXBlIE1lcmdlTW9kZSA9ICdiZWZvcmUnIHwgJ2FmdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBQYWdpbmF0aW9uUGFyYW1zIHtcbiAgb2Zmc2V0QXJndW1lbnQ/OiBzdHJpbmc7XG4gIGxpbWl0QXJndW1lbnQ/OiBzdHJpbmc7XG4gIG1lcmdlTW9kZT86IE1lcmdlTW9kZTtcbn1cblxuZXhwb3J0IGNvbnN0IGN1cnNvclBhZ2luYXRpb24gPSAoKTogUmVzb2x2ZXIgPT4ge1xuICByZXR1cm4gKF9wYXJlbnQsIGZpZWxkQXJncywgY2FjaGUsIGluZm8pID0+IHtcbiAgICBjb25zdCB7IHBhcmVudEtleTogZW50aXR5S2V5LCBmaWVsZE5hbWUgfSA9IGluZm87XG4gICAgY29uc3QgYWxsRmllbGRzID0gY2FjaGUuaW5zcGVjdEZpZWxkcyhlbnRpdHlLZXkpO1xuICAgIGNvbnN0IGZpZWxkSW5mb3MgPSBhbGxGaWVsZHMuZmlsdGVyKGluZm8gPT4gaW5mby5maWVsZE5hbWUgPT09IGZpZWxkTmFtZSk7XG4gICAgY29uc3Qgc2l6ZSA9IGZpZWxkSW5mb3MubGVuZ3RoO1xuICAgIGlmIChzaXplID09PSAwKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIGNvbnN0IGZpZWxkS2V5ID0gYCR7ZmllbGROYW1lfSgke3N0cmluZ2lmeVZhcmlhYmxlcyhmaWVsZEFyZ3MpfSlgO1xuICAgIGNvbnN0IGlzSXRJblRoZUNhY2hlID0gY2FjaGUucmVzb2x2ZShjYWNoZS5yZXNvbHZlKGVudGl0eUtleSwgZmllbGRLZXkpIGFzIHN0cmluZywgJ3Bvc3RzJyk7XG4gICAgaW5mby5wYXJ0aWFsID0gIWlzSXRJblRoZUNhY2hlO1xuICAgIGxldCBoYXNNb3JlID0gdHJ1ZTtcbiAgICBjb25zdCByZXN1bHRzOiBzdHJpbmdbXSA9IFtdO1xuICAgIGZpZWxkSW5mb3MuZm9yRWFjaChmaSA9PiB7XG4gICAgICBjb25zdCBrZXkgPSBjYWNoZS5yZXNvbHZlKGVudGl0eUtleSwgZmkuZmllbGRLZXkpIGFzIHN0cmluZ1tdO1xuICAgICAgY29uc3QgZGF0YSA9IGNhY2hlLnJlc29sdmUoa2V5IGFzIGFueSwgXCJwb3N0c1wiKSBhcyBzdHJpbmdbXTtcbiAgICAgIGNvbnN0IF9oYXNNb3JlID0gY2FjaGUucmVzb2x2ZShrZXkgYXMgYW55LCBcImhhc01vcmVcIik7XG4gICAgICBpZiAoIV9oYXNNb3JlKXtcbiAgICAgICAgaGFzTW9yZSA9IF9oYXNNb3JlIGFzIGJvb2xlYW47XG4gICAgICB9XG4gICAgICByZXN1bHRzLnB1c2goLi4uZGF0YSk7XG4gICAgfSlcbiAgICByZXR1cm4ge1xuICAgICAgX190eXBlbmFtZTpcIlBhZ2luYXRlZFBvc3RzXCIsXG4gICAgICBoYXNNb3JlLCBcbiAgICAgIHBvc3RzOiByZXN1bHRzXG4gICAgfTtcblxuICAgIC8qXG4gICAgY29uc3QgdmlzaXRlZCA9IG5ldyBTZXQoKTtcbiAgICBsZXQgcmVzdWx0OiBOdWxsQXJyYXk8c3RyaW5nPiA9IFtdO1xuICAgIGxldCBwcmV2T2Zmc2V0OiBudW1iZXIgfCBudWxsID0gbnVsbDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICBjb25zdCB7IGZpZWxkS2V5LCBhcmd1bWVudHM6IGFyZ3MgfSA9IGZpZWxkSW5mb3NbaV07XG4gICAgICBpZiAoYXJncyA9PT0gbnVsbCB8fCAhY29tcGFyZUFyZ3MoZmllbGRBcmdzLCBhcmdzKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbGlua3MgPSBjYWNoZS5yZXNvbHZlKGVudGl0eUtleSwgZmllbGRLZXkpIGFzIHN0cmluZ1tdO1xuICAgICAgY29uc3QgY3VycmVudE9mZnNldCA9IGFyZ3Nbb2Zmc2V0QXJndW1lbnRdO1xuXG4gICAgICBpZiAoXG4gICAgICAgIGxpbmtzID09PSBudWxsIHx8XG4gICAgICAgIGxpbmtzLmxlbmd0aCA9PT0gMCB8fFxuICAgICAgICB0eXBlb2YgY3VycmVudE9mZnNldCAhPT0gJ251bWJlcidcbiAgICAgICkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgdGVtcFJlc3VsdDogTnVsbEFycmF5PHN0cmluZz4gPSBbXTtcblxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBsaW5rcy5sZW5ndGg7IGorKykge1xuICAgICAgICBjb25zdCBsaW5rID0gbGlua3Nbal07XG4gICAgICAgIGlmICh2aXNpdGVkLmhhcyhsaW5rKSkgY29udGludWU7XG4gICAgICAgIHRlbXBSZXN1bHQucHVzaChsaW5rKTtcbiAgICAgICAgdmlzaXRlZC5hZGQobGluayk7XG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgKCFwcmV2T2Zmc2V0IHx8IGN1cnJlbnRPZmZzZXQgPiBwcmV2T2Zmc2V0KSA9PT1cbiAgICAgICAgKG1lcmdlTW9kZSA9PT0gJ2FmdGVyJylcbiAgICAgICkge1xuICAgICAgICByZXN1bHQgPSBbLi4ucmVzdWx0LCAuLi50ZW1wUmVzdWx0XTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IFsuLi50ZW1wUmVzdWx0LCAuLi5yZXN1bHRdO1xuICAgICAgfVxuXG4gICAgICBwcmV2T2Zmc2V0ID0gY3VycmVudE9mZnNldDtcbiAgICB9XG5cbiAgICBjb25zdCBoYXNDdXJyZW50UGFnZSA9IGNhY2hlLnJlc29sdmUoZW50aXR5S2V5LCBmaWVsZE5hbWUsIGZpZWxkQXJncyk7XG4gICAgaWYgKGhhc0N1cnJlbnRQYWdlKSB7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0gZWxzZSBpZiAoIShpbmZvIGFzIGFueSkuc3RvcmUuc2NoZW1hKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICBpbmZvLnBhcnRpYWwgPSB0cnVlO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgKi9cbiAgfTtcbn07Il0sIm5hbWVzIjpbImRlZHVwRXhjaGFuZ2UiLCJmZXRjaEV4Y2hhbmdlIiwic3RyaW5naWZ5VmFyaWFibGVzIiwiY2FjaGVFeGNoYW5nZSIsIk1lRG9jdW1lbnQiLCJiZXR0ZXJVcGRhdGVRdWVyeSIsInBpcGUiLCJ0YXAiLCJncWwiLCJ1c2VSb3V0ZXIiLCJpc1NlcnZlciIsImVycm9yRXhjaGFuZ2UiLCJmb3J3YXJkIiwib3BzJCIsImVycm9yIiwibWVzc2FnZSIsImluY2x1ZGVzIiwicm91dGVyIiwicHVzaCIsImNyZWF0ZVVycWxDbGllbnQiLCJzc3JFeGNoYW5nZSIsImN0eCIsImNvb2tpZSIsInJlcSIsImhlYWRlcnMiLCJ1cmwiLCJmZXRjaE9wdGlvbnMiLCJjcmVkZW50aWFscyIsImV4Y2hhbmdlcyIsImtleXMiLCJQYWdpbmF0ZWRQb3N0cyIsInJlc29sdmVycyIsIlF1ZXJ5IiwicG9zdHMiLCJjdXJzb3JQYWdpbmF0aW9uIiwidXBkYXRlcyIsIk11dGF0aW9uIiwiZGVsZXRlUG9zdCIsIl9yZXN1bHQiLCJhcmdzIiwiY2FjaGUiLCJpbmZvIiwiY29uc29sZSIsImxvZyIsImludmFsaWRhdGUiLCJfX3R5cGVuYW1lIiwiaWQiLCJ2b3RlIiwicG9zdElkIiwidmFsdWUiLCJkYXRhIiwicmVhZEZyYWdtZW50IiwibmV3UG9pbnRzIiwicG9pbnRzIiwibmV3VmFsdWUiLCJ2b3RlU3RhdHVzIiwid3JpdGVGcmFnbWVudCIsImNyZWF0ZVBvc3QiLCJhbGxGaWVsZHMiLCJpbnNwZWN0RmllbGRzIiwiZmllbGRJbmZvcyIsImZpbHRlciIsImZpZWxkTmFtZSIsImZvckVhY2giLCJmaSIsImFyZ3VtZW50cyIsImxvZ291dCIsInF1ZXJ5IiwibWUiLCJsb2dpbiIsInJlc3VsdCIsImVycm9ycyIsInVzZXIiLCJyZWdpc3RlciIsIl9wYXJlbnQiLCJmaWVsZEFyZ3MiLCJlbnRpdHlLZXkiLCJwYXJlbnRLZXkiLCJzaXplIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiZmllbGRLZXkiLCJpc0l0SW5UaGVDYWNoZSIsInJlc29sdmUiLCJwYXJ0aWFsIiwiaGFzTW9yZSIsInJlc3VsdHMiLCJrZXkiLCJfaGFzTW9yZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils/createUrqlClient.ts\n");

/***/ })

});