(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-extensions-extensions-module"],{

/***/ "./src/app/main/extensions/extensions.module.ts":
/*!******************************************************!*\
  !*** ./src/app/main/extensions/extensions.module.ts ***!
  \******************************************************/
/*! exports provided: ExtensionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtensionsModule", function() { return ExtensionsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _yq_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @yq/core */ "./dist/@yq/core/fesm5/yq-core.js");




var routes = [
    {
        path: 'analytics',
        loadChildren: function () { return __webpack_require__.e(/*! import() | yq-extensions */ "yq-extensions").then(__webpack_require__.bind(null, /*! @yq/extensions */ "./dist/@yq/extensions/fesm5/yq-extensions.js")).then(function (m) { return m.AnalyticsDashboardModule; }); }
    },
    {
        path: 'projects',
        loadChildren: function () { return __webpack_require__.e(/*! import() | yq-extensions */ "yq-extensions").then(__webpack_require__.bind(null, /*! @yq/extensions */ "./dist/@yq/extensions/fesm5/yq-extensions.js")).then(function (m) { return m.ProjectDashboardModule; }); }
    },
    {
        path: 'mail',
        loadChildren: function () { return __webpack_require__.e(/*! import() | yq-extensions */ "yq-extensions").then(__webpack_require__.bind(null, /*! @yq/extensions */ "./dist/@yq/extensions/fesm5/yq-extensions.js")).then(function (m) { return m.MailModule; }); }
    },
    {
        path: 'chat',
        loadChildren: function () { return __webpack_require__.e(/*! import() | yq-extensions */ "yq-extensions").then(__webpack_require__.bind(null, /*! @yq/extensions */ "./dist/@yq/extensions/fesm5/yq-extensions.js")).then(function (m) { return m.ChatModule; }); }
    },
    {
        path: 'calendar',
        loadChildren: function () { return __webpack_require__.e(/*! import() | yq-extensions */ "yq-extensions").then(__webpack_require__.bind(null, /*! @yq/extensions */ "./dist/@yq/extensions/fesm5/yq-extensions.js")).then(function (m) { return m.CalendarModule; }); }
    },
    {
        path: 'e-commerce',
        loadChildren: function () { return __webpack_require__.e(/*! import() | yq-extensions */ "yq-extensions").then(__webpack_require__.bind(null, /*! @yq/extensions */ "./dist/@yq/extensions/fesm5/yq-extensions.js")).then(function (m) { return m.EcommerceModule; }); }
    },
    {
        path: 'academy',
        loadChildren: function () { return __webpack_require__.e(/*! import() | yq-extensions */ "yq-extensions").then(__webpack_require__.bind(null, /*! @yq/extensions */ "./dist/@yq/extensions/fesm5/yq-extensions.js")).then(function (m) { return m.AcademyModule; }); }
    },
    {
        path: 'todo',
        loadChildren: function () { return __webpack_require__.e(/*! import() | yq-extensions */ "yq-extensions").then(__webpack_require__.bind(null, /*! @yq/extensions */ "./dist/@yq/extensions/fesm5/yq-extensions.js")).then(function (m) { return m.TodoModule; }); }
    },
    {
        path: 'file-manager',
        loadChildren: function () { return __webpack_require__.e(/*! import() | yq-extensions */ "yq-extensions").then(__webpack_require__.bind(null, /*! @yq/extensions */ "./dist/@yq/extensions/fesm5/yq-extensions.js")).then(function (m) { return m.FileManagerModule; }); }
    },
    {
        path: 'contacts',
        loadChildren: function () { return __webpack_require__.e(/*! import() | yq-extensions */ "yq-extensions").then(__webpack_require__.bind(null, /*! @yq/extensions */ "./dist/@yq/extensions/fesm5/yq-extensions.js")).then(function (m) { return m.ContactsModule; }); }
    },
    {
        path: 'scrumboard',
        loadChildren: function () { return __webpack_require__.e(/*! import() | yq-extensions */ "yq-extensions").then(__webpack_require__.bind(null, /*! @yq/extensions */ "./dist/@yq/extensions/fesm5/yq-extensions.js")).then(function (m) { return m.ScrumboardModule; }); }
    }
];
var ExtensionsModule = /** @class */ (function () {
    function ExtensionsModule() {
    }
    ExtensionsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _yq_core__WEBPACK_IMPORTED_MODULE_3__["YqSharedModule"]
            ]
        })
    ], ExtensionsModule);
    return ExtensionsModule;
}());



/***/ })

}]);
//# sourceMappingURL=main-extensions-extensions-module-es5.js.map