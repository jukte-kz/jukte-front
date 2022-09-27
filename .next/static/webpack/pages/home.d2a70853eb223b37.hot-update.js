"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/home",{

/***/ "./components/molecules /DriverCard/component.js":
/*!*******************************************************!*\
  !*** ./components/molecules /DriverCard/component.js ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ DriverCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction DriverCard(param) {\n    var shipment = param.shipment, product = param.product, cub = param.cub, price = param.price, logPrice = param.logPrice, weight = param.weight, date = param.date, type = param.type, from = param.from, to = param.to, distance = param.distance, description = param.description, status = param.status, phone = param.phone, role = param.role, id = param.id, onClick = param.onClick;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"rounded shadow-sm bg-white w-full myCard-container p-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"pb-2 mb-4 border-b-2 flex items-start justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"font-bold\",\n                                children: [\n                                    \"Цена: \",\n                                    price,\n                                    \" ₸\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/batyrbek/Desktop/jukte-front/components/molecules /DriverCard/component.js\",\n                                lineNumber: 9,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"font-bold\",\n                                children: [\n                                    \"Услуги логиста: \",\n                                    logPrice,\n                                    \" ₸\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/batyrbek/Desktop/jukte-front/components/molecules /DriverCard/component.js\",\n                                lineNumber: 10,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/batyrbek/Desktop/jukte-front/components/molecules /DriverCard/component.js\",\n                        lineNumber: 8,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: status === \"open\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900\",\n                            children: \"открытая\"\n                        }, void 0, false, {\n                            fileName: \"/Users/batyrbek/Desktop/jukte-front/components/molecules /DriverCard/component.js\",\n                            lineNumber: 14,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/batyrbek/Desktop/jukte-front/components/molecules /DriverCard/component.js\",\n                        lineNumber: 12,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/batyrbek/Desktop/jukte-front/components/molecules /DriverCard/component.js\",\n                lineNumber: 7,\n                columnNumber: 13\n            }, this),\n            role === \"driver\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                href: {\n                    pathname: \"/[slug]\",\n                    as: \"/slug-1\",\n                    query: {\n                        slug: id\n                    }\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-4 w-full flex justify-center link-button rounded\",\n                    children: \"Редактировать\"\n                }, void 0, false, {\n                    fileName: \"/Users/batyrbek/Desktop/jukte-front/components/molecules /DriverCard/component.js\",\n                    lineNumber: 32,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/batyrbek/Desktop/jukte-front/components/molecules /DriverCard/component.js\",\n                lineNumber: 25,\n                columnNumber: 17\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: onClick,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"tel:+\" + phone,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-4 w-full flex justify-center link-button rounded\",\n                        children: \"Позвонить водителю\"\n                    }, void 0, false, {\n                        fileName: \"/Users/batyrbek/Desktop/jukte-front/components/molecules /DriverCard/component.js\",\n                        lineNumber: 39,\n                        columnNumber: 25\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/batyrbek/Desktop/jukte-front/components/molecules /DriverCard/component.js\",\n                    lineNumber: 38,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/batyrbek/Desktop/jukte-front/components/molecules /DriverCard/component.js\",\n                lineNumber: 37,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/batyrbek/Desktop/jukte-front/components/molecules /DriverCard/component.js\",\n        lineNumber: 6,\n        columnNumber: 9\n    }, this);\n};\n_c = DriverCard;\nvar _c;\n$RefreshReg$(_c, \"DriverCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL21vbGVjdWxlcyAvRHJpdmVyQ2FyZC9jb21wb25lbnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQTRCO0FBQ0M7QUFFZCxTQUFTRSxVQUFVLENBQUMsS0FBZ0ksRUFBRTtRQUFqSUMsUUFBUSxHQUFULEtBQWdJLENBQS9IQSxRQUFRLEVBQUVDLE9BQU8sR0FBbEIsS0FBZ0ksQ0FBckhBLE9BQU8sRUFBRUMsR0FBRyxHQUF2QixLQUFnSSxDQUE1R0EsR0FBRyxFQUFFQyxLQUFLLEdBQTlCLEtBQWdJLENBQXZHQSxLQUFLLEVBQUVDLFFBQVEsR0FBeEMsS0FBZ0ksQ0FBaEdBLFFBQVEsRUFBRUMsTUFBTSxHQUFoRCxLQUFnSSxDQUF0RkEsTUFBTSxFQUFFQyxJQUFJLEdBQXRELEtBQWdJLENBQTlFQSxJQUFJLEVBQUVDLElBQUksR0FBNUQsS0FBZ0ksQ0FBeEVBLElBQUksRUFBRUMsSUFBSSxHQUFsRSxLQUFnSSxDQUFsRUEsSUFBSSxFQUFFQyxFQUFFLEdBQXRFLEtBQWdJLENBQTVEQSxFQUFFLEVBQUVDLFFBQVEsR0FBaEYsS0FBZ0ksQ0FBeERBLFFBQVEsRUFBRUMsV0FBVyxHQUE3RixLQUFnSSxDQUE5Q0EsV0FBVyxFQUFFQyxNQUFNLEdBQXJHLEtBQWdJLENBQWpDQSxNQUFNLEVBQUVDLEtBQUssR0FBNUcsS0FBZ0ksQ0FBekJBLEtBQUssRUFBRUMsSUFBSSxHQUFsSCxLQUFnSSxDQUFsQkEsSUFBSSxFQUFFQyxFQUFFLEdBQXRILEtBQWdJLENBQVpBLEVBQUUsRUFBRUMsT0FBTyxHQUEvSCxLQUFnSSxDQUFSQSxPQUFPO0lBQzlKLHFCQUNJLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQyx3REFBd0Q7OzBCQUNuRSw4REFBQ0QsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLHVEQUF1RDs7a0NBQ2xFLDhEQUFDRCxLQUFHOzswQ0FDQSw4REFBQ0UsSUFBRTtnQ0FBQ0QsU0FBUyxFQUFDLFdBQVc7O29DQUFDLFFBQU07b0NBQUNmLEtBQUs7b0NBQUMsSUFBRTs7Ozs7O29DQUFLOzBDQUM5Qyw4REFBQ2dCLElBQUU7Z0NBQUNELFNBQVMsRUFBQyxXQUFXOztvQ0FBQyxrQkFBZ0I7b0NBQUNkLFFBQVE7b0NBQUMsSUFBRTs7Ozs7O29DQUFLOzs7Ozs7NEJBQ3pEO2tDQUNOLDhEQUFDYSxLQUFHO2tDQUNDTCxNQUFNLEtBQUssTUFBTSxrQkFDZCw4REFBQ1EsTUFBSTs0QkFDREYsU0FBUyxFQUFDLG9IQUVtQztzQ0FDaEQsVUFFRDs7Ozs7Z0NBQU87Ozs7OzRCQUVUOzs7Ozs7b0JBQ0o7WUFDTEosSUFBSSxLQUFLLFFBQVEsaUJBQ2QsOERBQUNoQixrREFBSTtnQkFBQ3VCLElBQUksRUFBRTtvQkFDUkMsUUFBUSxFQUFFLFNBQVM7b0JBQ25CQyxFQUFFLEVBQUUsU0FBUztvQkFDYkMsS0FBSyxFQUFFO3dCQUNIQyxJQUFJLEVBQUVWLEVBQUU7cUJBQ1g7aUJBQ0o7MEJBQ0csNEVBQUNFLEtBQUc7b0JBQUNDLFNBQVMsRUFBQyxxREFBcUQ7OEJBQUMsZUFFckU7Ozs7O3dCQUFNOzs7OztvQkFDSCxpQkFFUCw4REFBQ0QsS0FBRztnQkFBQ0QsT0FBTyxFQUFFQSxPQUFPOzBCQUNqQiw0RUFBQ2xCLGtEQUFJO29CQUFDdUIsSUFBSSxFQUFFLE9BQU8sR0FBQ1IsS0FBSzs4QkFDckIsNEVBQUNJLEtBQUc7d0JBQUNDLFNBQVMsRUFBQyxxREFBcUQ7a0NBQUMsb0JBRXJFOzs7Ozs0QkFBTTs7Ozs7d0JBQ0g7Ozs7O29CQUNMOzs7Ozs7WUFFUixDQUNUO0NBQ0o7QUEzQ3VCbkIsS0FBQUEsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL21vbGVjdWxlcyAvRHJpdmVyQ2FyZC9jb21wb25lbnQuanM/ZmNmMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRHJpdmVyQ2FyZCh7c2hpcG1lbnQsIHByb2R1Y3QsIGN1YiwgcHJpY2UsIGxvZ1ByaWNlLCB3ZWlnaHQsIGRhdGUsIHR5cGUsIGZyb20sIHRvLCBkaXN0YW5jZSwgZGVzY3JpcHRpb24sIHN0YXR1cywgcGhvbmUsIHJvbGUsIGlkLCBvbkNsaWNrfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZCBzaGFkb3ctc20gYmctd2hpdGUgdy1mdWxsIG15Q2FyZC1jb250YWluZXIgcC00XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGItMiBtYi00IGJvcmRlci1iLTIgZmxleCBpdGVtcy1zdGFydCBqdXN0aWZ5LWJldHdlZW4nPlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J2ZvbnQtYm9sZCc+0KbQtdC90LA6IHtwcmljZX0g4oK4PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0nZm9udC1ib2xkJz7Qo9GB0LvRg9Cz0Lgg0LvQvtCz0LjRgdGC0LA6IHtsb2dQcmljZX0g4oK4PC9oMT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICB7c3RhdHVzID09PSAnb3BlbicgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmVlbi0xMDAgdGV4dC1ncmVlbi04MDAgdGV4dC14c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNlbWlib2xkIG1yLTIgcHgtMi41IHB5LTAuNSByb3VuZGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhcms6YmctZ3JlZW4tMjAwIGRhcms6dGV4dC1ncmVlbi05MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgINC+0YLQutGA0YvRgtCw0Y9cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge3JvbGUgPT09ICdkcml2ZXInID8gKFxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3tcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6ICcvW3NsdWddJyxcbiAgICAgICAgICAgICAgICAgICAgYXM6ICcvc2x1Zy0xJyxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsdWc6IGlkXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J210LTQgdy1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXIgbGluay1idXR0b24gcm91bmRlZCc+XG4gICAgICAgICAgICAgICAgICAgICAgICDQoNC10LTQsNC60YLQuNGA0L7QstCw0YLRjFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICApOiAoXG4gICAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXtvbkNsaWNrfT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17J3RlbDorJytwaG9uZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXQtNCB3LWZ1bGwgZmxleCBqdXN0aWZ5LWNlbnRlciBsaW5rLWJ1dHRvbiByb3VuZGVkJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDQn9C+0LfQstC+0L3QuNGC0Ywg0LLQvtC00LjRgtC10LvRjlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiJdLCJuYW1lcyI6WyJtb21lbnQiLCJMaW5rIiwiRHJpdmVyQ2FyZCIsInNoaXBtZW50IiwicHJvZHVjdCIsImN1YiIsInByaWNlIiwibG9nUHJpY2UiLCJ3ZWlnaHQiLCJkYXRlIiwidHlwZSIsImZyb20iLCJ0byIsImRpc3RhbmNlIiwiZGVzY3JpcHRpb24iLCJzdGF0dXMiLCJwaG9uZSIsInJvbGUiLCJpZCIsIm9uQ2xpY2siLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInNwYW4iLCJocmVmIiwicGF0aG5hbWUiLCJhcyIsInF1ZXJ5Iiwic2x1ZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/molecules /DriverCard/component.js\n"));

/***/ })

});