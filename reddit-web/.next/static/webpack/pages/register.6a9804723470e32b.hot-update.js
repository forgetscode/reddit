"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/register",{

/***/ "./src/pages/register.tsx":
/*!********************************!*\
  !*** ./src/pages/register.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Register\": function() { return /* binding */ Register; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var _components_Wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Wrapper */ \"./src/components/Wrapper.tsx\");\n/* harmony import */ var _components_InputField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/InputField */ \"./src/components/InputField.tsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction _throw(e) {\n    throw e;\n}\nvar _this = undefined;\nvar Register = function(param) {\n    var param = param !== null ? param : _throw(new TypeError(\"Cannot destructure undefined\"));\n    var _this1 = _this;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_Wrapper__WEBPACK_IMPORTED_MODULE_3__.Wrapper, {\n        variant: \"small\",\n        __source: {\n            fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/register.tsx\",\n            lineNumber: 12,\n            columnNumber: 9\n        },\n        __self: _this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(formik__WEBPACK_IMPORTED_MODULE_2__.Formik, {\n            initialValues: {\n                username: \"\",\n                password: \"\"\n            },\n            onSubmit: function(values) {\n                console.log(values);\n            },\n            __source: {\n                fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/register.tsx\",\n                lineNumber: 13,\n                columnNumber: 13\n            },\n            __self: _this,\n            children: function(values, handleChange) {\n                /*#__PURE__*/ return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(formik__WEBPACK_IMPORTED_MODULE_2__.Form, {\n                    __source: {\n                        fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/register.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 17\n                    },\n                    __self: _this1,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_InputField__WEBPACK_IMPORTED_MODULE_4__.InputField, {\n                            name: \"username\",\n                            placeholder: \"username\",\n                            label: \"Username\",\n                            __source: {\n                                fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/register.tsx\",\n                                lineNumber: 20,\n                                columnNumber: 21\n                            },\n                            __self: _this1\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_components_InputField__WEBPACK_IMPORTED_MODULE_4__.InputField, {\n                            name: \"password\",\n                            placeholder: \"password\",\n                            label: \"Password\",\n                            __source: {\n                                fileName: \"/home/forgets_code/react/reddit/reddit-web/src/pages/register.tsx\",\n                                lineNumber: 25,\n                                columnNumber: 21\n                            },\n                            __self: _this1\n                        })\n                    ]\n                });\n            }\n        })\n    }));\n};\n_c = Register;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Register);\nvar _c;\n$RefreshReg$(_c, \"Register\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcmVnaXN0ZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBeUI7QUFDVTtBQUVZO0FBQ007Ozs7O0FBSzlDLEdBQUssQ0FBQ0ssUUFBUSxHQUE0QixRQUFRLFNBQUM7OztJQUN0RCxNQUFNLHNFQUNERix3REFBTztRQUFDRyxPQUFPLEVBQUMsQ0FBTzs7Ozs7Ozt1RkFDbkJMLDBDQUFNO1lBQUNNLGFBQWEsRUFBRSxDQUFDQztnQkFBQUEsUUFBUSxFQUFDLENBQUU7Z0JBQUVDLFFBQVEsRUFBQyxDQUFFO1lBQUEsQ0FBQztZQUNqREMsUUFBUSxFQUFJLFFBQVEsQ0FBUEMsTUFBTSxFQUFLLENBQUM7Z0JBQ3JCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsTUFBTTtZQUN0QixDQUFDOzs7Ozs7O3NCQUVBLFFBQVEsQ0FBUEEsTUFBTSxFQUFFRyxZQUFZOzhCQUNsQixNQUFNLHlEQUFMWix3Q0FBSTs7Ozs7Ozs7NkZBQ0FFLDhEQUFVOzRCQUNQVyxJQUFJLEVBQUMsQ0FBVTs0QkFDZkMsV0FBVyxFQUFDLENBQVU7NEJBQ3RCQyxLQUFLLEVBQUMsQ0FBVTs7Ozs7Ozs7NkZBRW5CYiw4REFBVTs0QkFDUFcsSUFBSSxFQUFDLENBQVU7NEJBQ2ZDLFdBQVcsRUFBQyxDQUFVOzRCQUN0QkMsS0FBSyxFQUFDLENBQVU7Ozs7Ozs7Ozs7Ozs7QUFPeEMsQ0FBQztLQXpCWVosUUFBUTtBQTRCckIsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvcmVnaXN0ZXIudHN4PzcwNTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7Rm9ybWlrLCBGb3JtfSBmcm9tICdmb3JtaWsnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1FcnJvck1lc3NhZ2UsIEZvcm1MYWJlbCwgSW5wdXQgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcbmltcG9ydCB7IFdyYXBwZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL1dyYXBwZXInO1xuaW1wb3J0IHsgSW5wdXRGaWVsZCB9IGZyb20gJy4uL2NvbXBvbmVudHMvSW5wdXRGaWVsZCc7XG5cbmludGVyZmFjZSByZWdpc3RlclByb3BzIHtcbn1cblxuZXhwb3J0IGNvbnN0IFJlZ2lzdGVyOiBSZWFjdC5GQzxyZWdpc3RlclByb3BzPiA9ICh7fSkgPT4ge1xuICAgIHJldHVybihcbiAgICAgICAgPFdyYXBwZXIgdmFyaWFudD1cInNtYWxsXCI+XG4gICAgICAgICAgICA8Rm9ybWlrIGluaXRpYWxWYWx1ZXM9e3t1c2VybmFtZTpcIlwiLCBwYXNzd29yZDpcIlwifX1cbiAgICAgICAgICAgIG9uU3VibWl0ID0geyh2YWx1ZXMpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YWx1ZXMpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIHsodmFsdWVzLCBoYW5kbGVDaGFuZ2UpID0+IChcbiAgICAgICAgICAgICAgICA8Rm9ybT5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J3VzZXJuYW1lJ1xuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J3VzZXJuYW1lJ1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J1VzZXJuYW1lJ1xuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0RmllbGRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9J3Bhc3N3b3JkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J3Bhc3N3b3JkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J1Bhc3N3b3JkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L0Zvcm1paz5cbiAgICAgIDwvV3JhcHBlcj5cbiAgICApO1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlcjsiXSwibmFtZXMiOlsiUmVhY3QiLCJGb3JtaWsiLCJGb3JtIiwiV3JhcHBlciIsIklucHV0RmllbGQiLCJSZWdpc3RlciIsInZhcmlhbnQiLCJpbml0aWFsVmFsdWVzIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsIm9uU3VibWl0IiwidmFsdWVzIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNoYW5nZSIsIm5hbWUiLCJwbGFjZWhvbGRlciIsImxhYmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/register.tsx\n");

/***/ })

});