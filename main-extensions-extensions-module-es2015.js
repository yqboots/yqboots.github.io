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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _yq_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @yq/core */ "./dist/@yq/core/fesm2015/yq-core.js");




const routes = [
    {
        path: 'analytics',
        loadChildren: () => __webpack_require__.e(/*! import() | yq-extensions */ "yq-extensions").then(__webpack_require__.bind(null, /*! @yq/extensions */ "./dist/@yq/extensions/fesm2015/yq-extensions.js")).then(m => m.AnalyticsDashboardModule)
    },
    {
        path: 'projects',
        loadChildren: () => __webpack_require__.e(/*! import() | yq-extensions */ "yq-extensions").then(__webpack_require__.bind(null, /*! @yq/extensions */ "./dist/@yq/extensions/fesm2015/yq-extensions.js")).then(m => m.ProjectDashboardModule)
    },
    {
        path: 'mail',
        loadChildren: () => __webpack_require__.e(/*! import() | yq-extensions */ "yq-extensions").then(__webpack_require__.bind(null, /*! @yq/extensions */ "./dist/@yq/extensions/fesm2015/yq-extensions.js")).then(m => m.MailModule)
    },
    {
        path: 'chat',
        loadChildren: () => __webpack_require__.e(/*! import() | yq-extensions */ "yq-extensions").then(__webpack_require__.bind(null, /*! @yq/extensions */ "./dist/@yq/extensions/fesm2015/yq-extensions.js")).then(m => m.ChatModule)
    },
    {
        path: 'calendar',
        loadChildren: () => __webpack_require__.e(/*! import() | yq-extensions */ "yq-extensions").then(__webpack_require__.bind(null, /*! @yq/extensions */ "./dist/@yq/extensions/fesm2015/yq-extensions.js")).then(m => m.CalendarModule)
    },
    {
        path: 'e-commerce',
        loadChildren: () => __webpack_require__.e(/*! import() | yq-extensions */ "yq-extensions").then(__webpack_require__.bind(null, /*! @yq/extensions */ "./dist/@yq/extensions/fesm2015/yq-extensions.js")).then(m => m.EcommerceModule)
    },
    {
        path: 'academy',
        loadChildren: () => __webpack_require__.e(/*! import() | yq-extensions */ "yq-extensions").then(__webpack_require__.bind(null, /*! @yq/extensions */ "./dist/@yq/extensions/fesm2015/yq-extensions.js")).then(m => m.AcademyModule)
    },
    {
        path: 'todo',
        loadChildren: () => __webpack_require__.e(/*! import() | yq-extensions */ "yq-extensions").then(__webpack_require__.bind(null, /*! @yq/extensions */ "./dist/@yq/extensions/fesm2015/yq-extensions.js")).then(m => m.TodoModule)
    },
    {
        path: 'file-manager',
        loadChildren: () => __webpack_require__.e(/*! import() | yq-extensions */ "yq-extensions").then(__webpack_require__.bind(null, /*! @yq/extensions */ "./dist/@yq/extensions/fesm2015/yq-extensions.js")).then(m => m.FileManagerModule)
    },
    {
        path: 'contacts',
        loadChildren: () => __webpack_require__.e(/*! import() | yq-extensions */ "yq-extensions").then(__webpack_require__.bind(null, /*! @yq/extensions */ "./dist/@yq/extensions/fesm2015/yq-extensions.js")).then(m => m.ContactsModule)
    },
    {
        path: 'scrumboard',
        loadChildren: () => __webpack_require__.e(/*! import() | yq-extensions */ "yq-extensions").then(__webpack_require__.bind(null, /*! @yq/extensions */ "./dist/@yq/extensions/fesm2015/yq-extensions.js")).then(m => m.ScrumboardModule)
    }
];
let ExtensionsModule = class ExtensionsModule {
};
ExtensionsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
            _yq_core__WEBPACK_IMPORTED_MODULE_3__["YqSharedModule"]
        ]
    })
], ExtensionsModule);



/***/ })

}]);
//# sourceMappingURL=main-extensions-extensions-module-es2015.js.map