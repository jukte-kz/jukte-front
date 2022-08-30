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

/***/ "./pages/home.js":
/*!***********************!*\
  !*** ./pages/home.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_atoms_Header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/atoms/Header/component */ \"./components/atoms/Header/component.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* harmony import */ var flowbite_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flowbite-react */ \"./node_modules/flowbite-react/lib/esm/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _components_atoms_LinkBlock_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/atoms/LinkBlock/component */ \"./components/atoms/LinkBlock/component.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true), userSuccess = ref[0], setUserSuccess = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), cancel = ref1[0], setCancel = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), loading = ref2[0], setLoading = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), userInfo = ref3[0], setUserInfo = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), userSuccessMessage = ref4[0], setUserSuccessMessage = ref4[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (!userSuccess) {\n            setUserSuccessMessage(\"верифицирован\");\n        } else {\n            setUserSuccessMessage(\"не верифицирован\");\n        }\n    });\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    var goToSuccess = function() {\n        router.push(\"/settings\");\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (!cancel) {\n            axios__WEBPACK_IMPORTED_MODULE_3___default()({\n                method: \"get\",\n                url: \"https://api.jukte.kz/user/info\",\n                headers: {\n                    \"content-type\": \"application/x-www-form-urlencoded;charset=utf-8\",\n                    token: js_cookie__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"accessToken\")\n                }\n            }).then(function(res) {\n                setUserInfo(res.data);\n                setUserSuccess(false);\n                setCancel(true);\n                setLoading(true);\n            }).catch(function(err) {\n                if (err) {\n                    setCancel(true);\n                }\n                if (err.response.data.message === \"User has not access\") {\n                    setUserSuccess(true);\n                    js_cookie__WEBPACK_IMPORTED_MODULE_4__[\"default\"].set(\"userSuccess\", userSuccess);\n                }\n            });\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_atoms_Header_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                removeUrl: \"/login\"\n            }, void 0, false, {\n                fileName: \"/Users/batyrbek/Desktop/jukte-front/pages/home.js\",\n                lineNumber: 59,\n                columnNumber: 13\n            }, this),\n            loading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full info-title-container\",\n                        children: [\n                            userInfo && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: userInfo.surname + \" \" + userInfo.name\n                            }, void 0, false, {\n                                fileName: \"/Users/batyrbek/Desktop/jukte-front/pages/home.js\",\n                                lineNumber: 64,\n                                columnNumber: 29\n                            }, this),\n                            userSuccessMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Статус: \",\n                                    userSuccessMessage\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/batyrbek/Desktop/jukte-front/pages/home.js\",\n                                lineNumber: 67,\n                                columnNumber: 29\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"elip1\"\n                            }, void 0, false, {\n                                fileName: \"/Users/batyrbek/Desktop/jukte-front/pages/home.js\",\n                                lineNumber: 69,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"elip2\"\n                            }, void 0, false, {\n                                fileName: \"/Users/batyrbek/Desktop/jukte-front/pages/home.js\",\n                                lineNumber: 70,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/batyrbek/Desktop/jukte-front/pages/home.js\",\n                        lineNumber: 62,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_atoms_LinkBlock_component__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                        removeUrl: \"/myOrders\",\n                        title: \"Мои заявки\",\n                        image: \"/assets/icon/myOrders.svg\"\n                    }, void 0, false, {\n                        fileName: \"/Users/batyrbek/Desktop/jukte-front/pages/home.js\",\n                        lineNumber: 72,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_atoms_LinkBlock_component__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                        removeUrl: \"/createOrders\",\n                        title: \"Создать заявку\",\n                        image: \"/assets/icon/createOrders.svg\"\n                    }, void 0, false, {\n                        fileName: \"/Users/batyrbek/Desktop/jukte-front/pages/home.js\",\n                        lineNumber: 73,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_atoms_LinkBlock_component__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                        removeUrl: \"/settings\",\n                        title: \"Настройки\",\n                        image: \"/assets/icon/settings.svg\"\n                    }, void 0, false, {\n                        fileName: \"/Users/batyrbek/Desktop/jukte-front/pages/home.js\",\n                        lineNumber: 74,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_atoms_LinkBlock_component__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                        removeUrl: \"/faq\",\n                        title: \"Вопросы и ответы\",\n                        image: \"/assets/icon/faq.svg\"\n                    }, void 0, false, {\n                        fileName: \"/Users/batyrbek/Desktop/jukte-front/pages/home.js\",\n                        lineNumber: 75,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/batyrbek/Desktop/jukte-front/pages/home.js\",\n                lineNumber: 61,\n                columnNumber: 17\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full h-[calc(100vh-5rem)] flex items-center justify-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"text-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(flowbite_react__WEBPACK_IMPORTED_MODULE_5__.Spinner, {\n                        \"aria-label\": \"Center-aligned spinner example\"\n                    }, void 0, false, {\n                        fileName: \"/Users/batyrbek/Desktop/jukte-front/pages/home.js\",\n                        lineNumber: 80,\n                        columnNumber: 25\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/batyrbek/Desktop/jukte-front/pages/home.js\",\n                    lineNumber: 79,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/batyrbek/Desktop/jukte-front/pages/home.js\",\n                lineNumber: 78,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"p-4\",\n                children: \"asd\"\n            }, void 0, false, {\n                fileName: \"/Users/batyrbek/Desktop/jukte-front/pages/home.js\",\n                lineNumber: 84,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(flowbite_react__WEBPACK_IMPORTED_MODULE_5__.Modal, {\n                show: userSuccess,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(flowbite_react__WEBPACK_IMPORTED_MODULE_5__.Modal.Body, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"space-y-6\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_atoms_Header_component__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                    removeUrl: \"/login\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/batyrbek/Desktop/jukte-front/pages/home.js\",\n                                    lineNumber: 92,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-base leading-relaxed\",\n                                    children: \"Данный текст оповещает вас о том что, после регистраций вы не прошли верифкацию. Для того что бы пользоваться нашим сервисом просим вас пройти верификацию.\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/batyrbek/Desktop/jukte-front/pages/home.js\",\n                                    lineNumber: 93,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/batyrbek/Desktop/jukte-front/pages/home.js\",\n                            lineNumber: 91,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/batyrbek/Desktop/jukte-front/pages/home.js\",\n                        lineNumber: 90,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(flowbite_react__WEBPACK_IMPORTED_MODULE_5__.Modal.Footer, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"w-full redirect-button\",\n                            onClick: goToSuccess,\n                            children: \"Пройти верификацию\"\n                        }, void 0, false, {\n                            fileName: \"/Users/batyrbek/Desktop/jukte-front/pages/home.js\",\n                            lineNumber: 100,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/batyrbek/Desktop/jukte-front/pages/home.js\",\n                        lineNumber: 99,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/batyrbek/Desktop/jukte-front/pages/home.js\",\n                lineNumber: 87,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/batyrbek/Desktop/jukte-front/pages/home.js\",\n        lineNumber: 58,\n        columnNumber: 9\n    }, this);\n};\n_s(Home, \"RqKmkkTzwG1YC2VWUbT0qkH1MUo=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LHNEQUFVO2tDQUNQLDRFQUFDaUMsS0FBRzs0QkFBQ0UsU0FBUyxFQUFDLFdBQVc7OzhDQUN0Qiw4REFBQ3hDLDBFQUFNO29DQUFDdUMsU0FBUyxFQUFDLFFBQVE7Ozs7O3dDQUFHOzhDQUM3Qiw4REFBQ0ssR0FBQztvQ0FBQ0osU0FBUyxFQUFDLDJCQUEyQjs4Q0FBQyw2SkFHekM7Ozs7O3dDQUFJOzs7Ozs7Z0NBQ0Y7Ozs7OzRCQUNHO2tDQUNiLDhEQUFDbkMsd0RBQVk7a0NBQ1QsNEVBQUM4QyxRQUFNOzRCQUFDWCxTQUFTLEVBQUMsd0JBQXdCOzRCQUFDWSxPQUFPLEVBQUU3QixXQUFXO3NDQUFFLG9CQUVqRTs7Ozs7Z0NBQVM7Ozs7OzRCQUNFOzs7Ozs7b0JBQ1g7Ozs7OztZQUNOLENBQ1Q7Q0FDSjtHQWhHdUJaLElBQUk7O1FBZVRKLGtEQUFTOzs7QUFmSkksS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9ob21lLmpzPzE2NzkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9hdG9tcy9IZWFkZXIvY29tcG9uZW50XCI7XG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IENvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiO1xuaW1wb3J0IHtNb2RhbCwgU3Bpbm5lcn0gZnJvbSBcImZsb3diaXRlLXJlYWN0XCI7XG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBMaW5rQmxvY2sgZnJvbSBcIi4uL2NvbXBvbmVudHMvYXRvbXMvTGlua0Jsb2NrL2NvbXBvbmVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lICgpIHtcbiAgICBjb25zdCBbdXNlclN1Y2Nlc3MsIHNldFVzZXJTdWNjZXNzXSA9IHVzZVN0YXRlKHRydWUpO1xuICAgIGNvbnN0IFtjYW5jZWwsIHNldENhbmNlbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoKTtcbiAgICBjb25zdCBbdXNlckluZm8sIHNldFVzZXJJbmZvXSA9IHVzZVN0YXRlKCk7XG4gICAgY29uc3QgW3VzZXJTdWNjZXNzTWVzc2FnZSwgc2V0VXNlclN1Y2Nlc3NNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICghdXNlclN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIHNldFVzZXJTdWNjZXNzTWVzc2FnZSgn0LLQtdGA0LjRhNC40YbQuNGA0L7QstCw0L0nKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0VXNlclN1Y2Nlc3NNZXNzYWdlKCfQvdC1INCy0LXRgNC40YTQuNGG0LjRgNC+0LLQsNC9JylcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAgIGNvbnN0IGdvVG9TdWNjZXNzID0gKCkgPT4ge1xuICAgICAgICByb3V0ZXIucHVzaCgnL3NldHRpbmdzJyk7XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKCFjYW5jZWwpIHtcbiAgICAgICAgICAgIGF4aW9zKHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdnZXQnLFxuICAgICAgICAgICAgICAgIHVybDogJ2h0dHBzOi8vYXBpLmp1a3RlLmt6L3VzZXIvaW5mbycsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PXV0Zi04JyxcbiAgICAgICAgICAgICAgICAgICAgdG9rZW46IENvb2tpZXMuZ2V0KCdhY2Nlc3NUb2tlbicpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgc2V0VXNlckluZm8ocmVzLmRhdGEpXG4gICAgICAgICAgICAgICAgc2V0VXNlclN1Y2Nlc3MoZmFsc2UpXG4gICAgICAgICAgICAgICAgc2V0Q2FuY2VsKHRydWUpXG4gICAgICAgICAgICAgICAgc2V0TG9hZGluZyh0cnVlKVxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0Q2FuY2VsKHRydWUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlcnIucmVzcG9uc2UuZGF0YS5tZXNzYWdlID09PSAnVXNlciBoYXMgbm90IGFjY2VzcycpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VXNlclN1Y2Nlc3ModHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgQ29va2llcy5zZXQoJ3VzZXJTdWNjZXNzJywgdXNlclN1Y2Nlc3MpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxIZWFkZXIgcmVtb3ZlVXJsPScvbG9naW4nPjwvSGVhZGVyPlxuICAgICAgICAgICAge2xvYWRpbmcgPyAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3AtNCc+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LWZ1bGwgaW5mby10aXRsZS1jb250YWluZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAge3VzZXJJbmZvICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+e3VzZXJJbmZvLnN1cm5hbWUgKyAnICcgKyB1c2VySW5mby5uYW1lfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAge3VzZXJTdWNjZXNzTWVzc2FnZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+0KHRgtCw0YLRg9GBOiB7dXNlclN1Y2Nlc3NNZXNzYWdlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZWxpcDEnLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdlbGlwMicvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPExpbmtCbG9jayByZW1vdmVVcmw9Jy9teU9yZGVycycgdGl0bGU9J9Cc0L7QuCDQt9Cw0Y/QstC60LgnIGltYWdlPScvYXNzZXRzL2ljb24vbXlPcmRlcnMuc3ZnJyAvPlxuICAgICAgICAgICAgICAgICAgICA8TGlua0Jsb2NrIHJlbW92ZVVybD0nL2NyZWF0ZU9yZGVycycgdGl0bGU9J9Ch0L7Qt9C00LDRgtGMINC30LDRj9Cy0LrRgycgaW1hZ2U9Jy9hc3NldHMvaWNvbi9jcmVhdGVPcmRlcnMuc3ZnJyAvPlxuICAgICAgICAgICAgICAgICAgICA8TGlua0Jsb2NrIHJlbW92ZVVybD0nL3NldHRpbmdzJyB0aXRsZT0n0J3QsNGB0YLRgNC+0LnQutC4JyBpbWFnZT0nL2Fzc2V0cy9pY29uL3NldHRpbmdzLnN2ZycgLz5cbiAgICAgICAgICAgICAgICAgICAgPExpbmtCbG9jayByZW1vdmVVcmw9Jy9mYXEnIHRpdGxlPSfQktC+0L/RgNC+0YHRiyDQuCDQvtGC0LLQtdGC0YsnIGltYWdlPScvYXNzZXRzL2ljb24vZmFxLnN2ZycgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctZnVsbCBoLVtjYWxjKDEwMHZoLTVyZW0pXSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTcGlubmVyIGFyaWEtbGFiZWw9XCJDZW50ZXItYWxpZ25lZCBzcGlubmVyIGV4YW1wbGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncC00Jz5cbiAgICAgICAgICAgICAgICBhc2RcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPE1vZGFsXG4gICAgICAgICAgICAgICAgc2hvdz17dXNlclN1Y2Nlc3N9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPE1vZGFsLkJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SGVhZGVyIHJlbW92ZVVybD0nL2xvZ2luJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1iYXNlIGxlYWRpbmctcmVsYXhlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgINCU0LDQvdC90YvQuSDRgtC10LrRgdGCINC+0L/QvtCy0LXRidCw0LXRgiDQstCw0YEg0L4g0YLQvtC8INGH0YLQviwg0L/QvtGB0LvQtSDRgNC10LPQuNGB0YLRgNCw0YbQuNC5INCy0Ysg0L3QtSDQv9GA0L7RiNC70Lgg0LLQtdGA0LjRhNC60LDRhtC40Y4uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg0JTQu9GPINGC0L7Qs9C+INGH0YLQviDQsdGLINC/0L7Qu9GM0LfQvtCy0LDRgtGM0YHRjyDQvdCw0YjQuNC8INGB0LXRgNCy0LjRgdC+0Lwg0L/RgNC+0YHQuNC8INCy0LDRgSDQv9GA0L7QudGC0Lgg0LLQtdGA0LjRhNC40LrQsNGG0LjRji5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9Nb2RhbC5Cb2R5PlxuICAgICAgICAgICAgICAgIDxNb2RhbC5Gb290ZXI+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSd3LWZ1bGwgcmVkaXJlY3QtYnV0dG9uJyBvbkNsaWNrPXtnb1RvU3VjY2Vzc30+XG4gICAgICAgICAgICAgICAgICAgICAgICDQn9GA0L7QudGC0Lgg0LLQtdGA0LjRhNC40LrQsNGG0LjRjlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L01vZGFsLkZvb3Rlcj5cbiAgICAgICAgICAgIDwvTW9kYWw+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiJdLCJuYW1lcyI6WyJIZWFkZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiQ29va2llcyIsIk1vZGFsIiwiU3Bpbm5lciIsInVzZVJvdXRlciIsIkxpbmsiLCJJbWFnZSIsIkxpbmtCbG9jayIsIkhvbWUiLCJ1c2VyU3VjY2VzcyIsInNldFVzZXJTdWNjZXNzIiwiY2FuY2VsIiwic2V0Q2FuY2VsIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ1c2VySW5mbyIsInNldFVzZXJJbmZvIiwidXNlclN1Y2Nlc3NNZXNzYWdlIiwic2V0VXNlclN1Y2Nlc3NNZXNzYWdlIiwicm91dGVyIiwiZ29Ub1N1Y2Nlc3MiLCJwdXNoIiwibWV0aG9kIiwidXJsIiwiaGVhZGVycyIsInRva2VuIiwiZ2V0IiwidGhlbiIsInJlcyIsImRhdGEiLCJjYXRjaCIsImVyciIsInJlc3BvbnNlIiwibWVzc2FnZSIsInNldCIsImRpdiIsInJlbW92ZVVybCIsImNsYXNzTmFtZSIsImgyIiwic3VybmFtZSIsIm5hbWUiLCJwIiwidGl0bGUiLCJpbWFnZSIsImFyaWEtbGFiZWwiLCJzaG93IiwiQm9keSIsIkZvb3RlciIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/home.js\n"));

/***/ })

});