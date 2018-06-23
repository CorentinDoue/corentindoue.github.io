(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["hobbies-hobbies-module"],{

/***/ "./src/app/hobbies/hobbies-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/hobbies/hobbies-routing.module.ts ***!
  \***************************************************/
/*! exports provided: HobbiesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HobbiesRoutingModule", function() { return HobbiesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _hobbies_hobbies_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hobbies/hobbies.component */ "./src/app/hobbies/hobbies/hobbies.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _hobbies_hobbies_component__WEBPACK_IMPORTED_MODULE_2__["HobbiesComponent"]
    }
];
var HobbiesRoutingModule = /** @class */ (function () {
    function HobbiesRoutingModule() {
    }
    HobbiesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], HobbiesRoutingModule);
    return HobbiesRoutingModule;
}());



/***/ }),

/***/ "./src/app/hobbies/hobbies.module.ts":
/*!*******************************************!*\
  !*** ./src/app/hobbies/hobbies.module.ts ***!
  \*******************************************/
/*! exports provided: HobbiesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HobbiesModule", function() { return HobbiesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _hobbies_hobbies_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hobbies/hobbies.component */ "./src/app/hobbies/hobbies/hobbies.component.ts");
/* harmony import */ var _hobbies_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hobbies-routing.module */ "./src/app/hobbies/hobbies-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HobbiesModule = /** @class */ (function () {
    function HobbiesModule() {
    }
    HobbiesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _hobbies_routing_module__WEBPACK_IMPORTED_MODULE_2__["HobbiesRoutingModule"]
            ],
            declarations: [_hobbies_hobbies_component__WEBPACK_IMPORTED_MODULE_1__["HobbiesComponent"]]
        }),
        __metadata("design:paramtypes", [])
    ], HobbiesModule);
    return HobbiesModule;
}());



/***/ }),

/***/ "./src/app/hobbies/hobbies/hobbies.component.html":
/*!********************************************************!*\
  !*** ./src/app/hobbies/hobbies/hobbies.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  hobbies works!\n</p>\n"

/***/ }),

/***/ "./src/app/hobbies/hobbies/hobbies.component.scss":
/*!********************************************************!*\
  !*** ./src/app/hobbies/hobbies/hobbies.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/hobbies/hobbies/hobbies.component.ts":
/*!******************************************************!*\
  !*** ./src/app/hobbies/hobbies/hobbies.component.ts ***!
  \******************************************************/
/*! exports provided: HobbiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HobbiesComponent", function() { return HobbiesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HobbiesComponent = /** @class */ (function () {
    function HobbiesComponent() {
    }
    HobbiesComponent.prototype.ngOnInit = function () {
    };
    HobbiesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'spc-hobbies',
            template: __webpack_require__(/*! ./hobbies.component.html */ "./src/app/hobbies/hobbies/hobbies.component.html"),
            styles: [__webpack_require__(/*! ./hobbies.component.scss */ "./src/app/hobbies/hobbies/hobbies.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HobbiesComponent);
    return HobbiesComponent;
}());



/***/ })

}]);
//# sourceMappingURL=hobbies-hobbies-module.js.map