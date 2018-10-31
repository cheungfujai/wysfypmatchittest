(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _selection_selection_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../selection/selection.component */ "./src/selection/selection.component.ts");
/* harmony import */ var _canteen_canteen_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../canteen/canteen.component */ "./src/canteen/canteen.component.ts");
/* harmony import */ var _dash_board_dash_board_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dash-board/dash-board.component */ "./src/dash-board/dash-board.component.ts");
/* harmony import */ var _hocanteen_hocanteen_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hocanteen/hocanteen.component */ "./src/hocanteen/hocanteen.component.ts");
/* harmony import */ var _cyber_dash_board_cyber_dash_board_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../cyber-dash-board/cyber-dash-board.component */ "./src/cyber-dash-board/cyber-dash-board.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', redirectTo: '/selection', pathMatch: 'full' },
    { path: 'selection', component: _selection_selection_component__WEBPACK_IMPORTED_MODULE_2__["SelectionComponent"] },
    { path: 'canteen', component: _canteen_canteen_component__WEBPACK_IMPORTED_MODULE_3__["CanteenComponent"] },
    { path: 'dash-board', component: _dash_board_dash_board_component__WEBPACK_IMPORTED_MODULE_4__["DashBoardComponent"] },
    { path: 'cyber-dash-board', component: _cyber_dash_board_cyber_dash_board_component__WEBPACK_IMPORTED_MODULE_6__["CyberDashBoardComponent"] },
    { path: 'hocanteen', component: _hocanteen_hocanteen_component__WEBPACK_IMPORTED_MODULE_5__["HOcanteenComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _selection_selection_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../selection/selection.component */ "./src/selection/selection.component.ts");
/* harmony import */ var _dash_board_dash_board_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../dash-board/dash-board.component */ "./src/dash-board/dash-board.component.ts");
/* harmony import */ var _canteen_canteen_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../canteen/canteen.component */ "./src/canteen/canteen.component.ts");
/* harmony import */ var _hocanteen_hocanteen_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../hocanteen/hocanteen.component */ "./src/hocanteen/hocanteen.component.ts");
/* harmony import */ var _cyber_dash_board_cyber_dash_board_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../cyber-dash-board/cyber-dash-board.component */ "./src/cyber-dash-board/cyber-dash-board.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












xaa.pageInit();
xaa.submitWait.setDefault({ fadeIn: 12000 });
xaa.submitWait.setBlockMessage({});
xaa.submitWait.setBlockMessage("<h3><i class='fa fa-spinner fa-pulse fa-2x fa-fw' style='vertical-align:middle;'></i></h3>");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _selection_selection_component__WEBPACK_IMPORTED_MODULE_7__["SelectionComponent"],
                _dash_board_dash_board_component__WEBPACK_IMPORTED_MODULE_8__["DashBoardComponent"],
                _canteen_canteen_component__WEBPACK_IMPORTED_MODULE_9__["CanteenComponent"],
                _hocanteen_hocanteen_component__WEBPACK_IMPORTED_MODULE_10__["HOcanteenComponent"],
                _cyber_dash_board_cyber_dash_board_component__WEBPACK_IMPORTED_MODULE_11__["CyberDashBoardComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/canteen/canteen.component.css":
/*!*******************************************!*\
  !*** ./src/canteen/canteen.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidebarleft {\r\n  width: 100px;\r\n  background-color: #f8f8f8;\r\n  position: absolute;\r\n  height: calc(100% - 50px);\r\n  height: -webkit-calc(100%-50px);\r\n  overflow-y: scroll;\r\n    \r\n}\r\n.sidebarleft::-webkit-scrollbar{width: 0;}\r\n.sidebarright::-webkit-scrollbar{width: 0;}\r\n.sidebarright {\r\n    width: calc(100% - 100px);\r\n    width: -webkit-calc(100% - 100px);\r\n    max-width: 668px;\r\n    min-width: 220px;\r\n    left: 100px;\r\n    position: absolute;\r\n    height: calc(100% - 50px);\r\n    overflow-y: scroll;\r\n    max-height: calc(100%-50px);\r\n\r\n \r\n}\r\n.right td{\r\ncolor: #666;\r\nheight: 88px;\r\nvertical-align: middle;\r\nborder-bottom: 1px solid #ddd;\r\nborder-top: 0px;\r\n\r\n\r\n}\r\n.left td{\r\n    text-align: center;\r\n    height: 74px;\r\n    vertical-align: middle;\r\n    border-top: 0px;\r\n    border-bottom: 1px solid #ddd;\r\n}\r\ntr{\r\n    display:table;\r\n    width:100%;\r\n    table-layout: fixed;\r\n    word-wrap: break-word;\r\n}\r\n.datetime{\r\n    text-align: center;\r\n    border-bottom: 1px solid #ddd;\r\n}\r\n.active td{\r\n    background-color: #fff;\r\n}\r\n.table .active{\r\n    background-color: #fff;\r\n}\r\n.forsoup{\r\n    \r\n    background-color: #ffb836;\r\n    \r\n}\r\n.popup-menu {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: rgba(172, 172, 172,.6);\r\n    overflow-y: scroll;\r\n    z-index: 1030;\r\n}\r\na{\r\n    color: black;\r\n    text-decoration: none;\r\n}\r\nli{list-style:none;\r\n    padding: 15px;\r\n    border-bottom: 1px solid #dcdcdc;\r\n}\r\n.ul-list-menu{\r\n    position: absolute;\r\n    height: 100%;\r\n    width: 251px;\r\n    padding: 0 0;\r\n    margin: 0;\r\n    background: #fff;\r\n    transform: translateX(-100%);\r\n    -webkit-transform: translateX(-100%);\r\n    transition: -webkit-transform .6s;\r\n    transition: transform .6s;\r\n    transition: transform .6s, -webkit-transform .6s;\r\n    -webkit-transition: transform .6s;\r\n    \r\n}\r\n.ul-transition{\r\n    transform: translateX(0);\r\n    -webkit-transform: translateX(0);\r\n}\r\nimg {\r\n   \r\n    margin: auto;\r\n    padding: 40px;\r\n    \r\n}\r\n.nav-style {\r\n    text-align: center;\r\n    height: 50px;\r\n    line-height: 50px;\r\n    padding: 0 50px;\r\n    font-size: 16px;\r\n    color: #fff;\r\n}\r\n.nav-left-a,\r\n.nav-right-a {\r\n    position: absolute;\r\n    display: inline-block;\r\n    top: 0;\r\n    width: 50px;\r\n    height: 50px;\r\n}\r\n.nav-left-a{\r\n    left: 0;\r\n    padding: 10px 0;\r\n    background: url('menu-btn.png');\r\n    background-size:30px auto;\r\n    background-repeat: no-repeat;\r\n    background-position: center; \r\n}\r\n.nav-right-a {\r\n    right: 0;\r\n    background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAg6klEQVR42u3da5T1Y93A8T9uZ8Yph0gU5c6hSNGJMqXIoVSixyhUCFGZiJzPh5HIISlFU45F6HYs5ZiklPN59cILa1nLC2t5O8/v/+y75x67udkze1/X/A+fz1q/Ny3de+ba177+35nZh6IAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFioRWLWj9khZsOYxSwJADTXujFXTUwh/vebYjaxRADQHHNijpvoQfx3P4hZxpIBQL0tFzNvYhriv78vZhVLBwD1tEbMgxMzEP+/x2PeagkBoF7mxjw/0YfR0dGX49/YyFICQD1sNTFA8e992JICQLXtOpFA/Ls7W1oAqKbvTCQU//5XLTEAVMeiMT+cyCBu50jLDQCzb6mYayYyits7d350AACzoHyt/j0TsyBu94qYJdwFAJDX22KenJhFcfu3xyzvrgCAPN43URHxtTwYs5q7BADS2mGiYuJreibm7e4aAEhj34kKi69vM3cRAAzWSRM1EF/nsLsKAPq3eMxlEzUSX++u7jYAmLmhmNsnaii+7gPdfQAwfWvF/HOixuLrP9HdCAC923hkZOSlxBfneTFrF4nfSCj+/YtjFnOXAsDrG87wk3l5UZ4z//aWjrkh8e1dV3TeshgAmMIeGS7+R09xu+VP6Jckvt07Y1Z0FwPAax2R4eL/lTf4Gk5JfPsPx6zprgaAzk/fF2a4+G/b49dzcMqvY2ho6N9xGxu42wFos2Virk95wR0bG3slbuM90/y6ds8QJFu6+wFoo/IDdO5PfJF9pOg8038mPpEhArazDQBok3fEPJv44npH0f+T7jbPEAF72g4AtMEHM1xUfx2zxIC+3vUzxMqobQFAk+2S4eJ/eswiA/6614j5R+KveyzB1w0As+6bGS7+ByT8+svPJfhj4q//sqLz4UcAUHvlT7VnZrj4fybD97JkzNWJv4+bYpa1bQCos/KCeUXDXlK3aMz5ib+f+2NWsX0AqKOVYv6c+EL5dNF5kt5sODrx9/ZEzDq2EQB1Ul64Hkt8gfxLzKqz/H1+PcObGG1sOwFQB5uNj4+/muHT9ZauyPf72Qx/4tjKtgKgyj6V4WJ4ftH5O3yVbNWQJzkCwLTtneEieFiFv/9Nyl/ZJ/7+v26bAVAlx2a4+H+pButQPvfhicTrcJTtBsBsmxPzswwX/4/VaE3eVKT/kKPziur9GaQKyrd//kLMqTG3xDxXfvxyHaboPKm1vF+/UnTeeRKgspaLuTnlhW54ePjFuI2Narg25Rv53JQ4Aq4qBvd5B03w3piHJxoivpe93KVAFb055u+JD8CHYtas+W9HLku8Rn8oOm9R3HbfnmigovNqF28NDVTGu8pfWSY++G6NWb4Ba5X8bZDLEItZvcX7ccuJBovv7wRHDlAFW2c48H7RwJ96Dk28Zs/GrNfC/Vi+1fRjEw0X3+MWjh5gNu3mp52+jGRYv/e2bE/uM9EC8X3+zvEDzJbRDIfc11qwjttlWMePt2hfXtCGAJj/ltAAWZUvNTs3w0Vr+xat6RYZ1nO3lqzlvRMtUbT7eR5AZuV77f82w8G2eQvXdoMMT6T8ZtMXcaJFCp8HAWSySuqfruLffzxm3RavcfkSx38lXuOTBUBjAuBjjiUgtbfHPJX4MLsrZmVLXawYc2fitf5pzGICQAAAvJ73ZzjIynewW8pS/79yLa7N8CzypZu2cAIAYDB2ynCI/aDovDkOr1X+hP6TxGt/d8xKAkAAAEy2f4YD7BDL/IZOSHwfPBKzlgAQAADlT+OnZDi8Pm+pe3ZAyvti7ty5L8RtzBUAAgBor/KT5MYzHFwfttTT9oUM98sHBIAAANpnhZg/JD6wnovZwFLP2DYZLiqfbnMAxD/xp5jTMsyFAgCogrcU6V9//kDhncsGYdMMEfDlFgfA9zJ9qesKAGC2vXt0dPTlxBeUG2OWtdQDU74vw9OJ77PvtjQAjhAAQBt8PMNPkxcVDX3TmVm2WszfEt93ZxU1e4mmAAB4Y3tmuPh/3zIntVzMbYnvw/GYxVsUAEcKAKDJjvR35MYoX7lxeeL78uaiJn/CEQAAUyt/FX9Rhov/Jyx1VuWv6c9JfJ/+NeZNLQiAXL+1EgBANuVPcDemvEiUTyaM23i3pZ41RySOgCeLin9aowAAeK3yCWMPJL44PByztqWedXunvJ/HxsZeqXLkDWAfHyUAgKZ4Z8xziS/+fyw6byRENeyY4c88WwsAAQBU14cyXAjKZ4kvYalbed/v0sAAOFoAAHX3uQwXgFMLH+VbZRuOjIy8lHgP7NuwADhGAAB1dkiGi/83LHMtlM/LeDTxXjimKt/s+Pj4qwIAaKPyp/GzMlz8d7LUtbJyzL2J98QFMYs2IACOFQBA3SwZc1WGi/8WlrqWlo65IfHeuHr+Ppw15asUBADQJivF3Jn4cH8qZj1LXWtzYn6eeJ/cETNU4wA4TgAAdbFuzOOJD/X7ihq8Cxw9OzXxfvlHzBqz8Y31+8mWAgCoi/dm+JX/tUXn18c0yyGJ981zMevXMACOFwBA1W2X4eL/o6ICT+wimS9l2EOb5/yG+n3ZowAAqu6rGQ7uUcvcCts26cOhBhAAJwgAoKqOz3Bg72aZW2XzDHtq9xzfyPDw8IsCAGiaxYvEz+Cef6h81FK30juK9J8ZcXANAuBEAQBUyfIxt6Q8nOfOnftC3MaGlrrVymfuP5Q4Ak5J+Q2U+7jPr+8kAQBUxZox/8jwsq03W2qKzmv470i83y6JWUwACABg4Tbs90Dr4RC5Zf5vGOA/ynfzuzrxvruhSPDy0gEEwMkCAJhtH83w9/7yJ7E5lpoplC//vCDx/run6LyL5eB+fTE09G8BANTZ7hku/sdZZnpwTOJ9+GjMWyoUAKdkWlcBAPyX72a4+O9jmZmGfVPux/KZ+3Eb7xrQ1/q8AADqpvyV63kZLv7bWWpmYJcMe/ODFQiAUwUAkFP5ZKjrMhywm1lq+rB1hj26Q59f43MCAKiL8lP27kt8qD4Ws46lZgA26fcjd3vYr3vNYgCcJgCAHNaLeTrxYXpnMeBnWtN6ZUw+mXjfHj7Dr+3ZPm/3dAEApLZlhl+nXll0XtMNKX5zdX/i/Xt2zCICQABAk+yc4eI/NoPDE6Zj2ZibE+/jXxWdz8Ho1TN93t4ZAgBI5YAMF/+DLTOZlBfnX2Z4t8rlBIAAgLoqfxo/LcPF/3OWmlnY22OJ9/UDMav28LU83eftnCkAgEFaIuZXGS7+H7LUzKLRxPv7qZi3CQABAHWxQpH+09WejXmnpaYC9ky518fHx1+N23jP69z+UwN47owAAPq2dswjiS/+f41ZzVJTIdtn+G3XRwWAAICqek+GN0wpP1J1GUtNBeV4mevnEgTAWQIA6Me2GQ6/H8csZqmpsLnhhcSPg/27bvNJAQDMli9nuPgfaZmpibViHk78eDhugAHwAwEAzMRRGS7+I5aZmlkx5q7Ej4sLi84naj4xgHcfFABAz+bE/CTDxX/YUlNTSxWJP/Ey/v3fFP1/GJAAAHpWvh3q71MebCMjIy/FbWxiqam58jkrF09UWHx9PxQAQC9Wj/lb4gPpXzFvsdQ0yIkCQABAnW0Q83ziw+gPMUOWmgY6sKIBcI4AAF7PRzIcRL8spvcpaFA3uwoAAQB18oUMh9DJlpmWGK5YAJwrAICpfCvDAbSfZaZlNhMAAgCqqnx98dkZDp8dLTUt9faiz0/yG9Bj8EcCAPiP8vXLV2c4eN5vqWm58kOtHpzlADhPAACllWPuTnzgPDn/px+gKJaPuV0ACACYTW8r+nxb0R4ewPfErGKp4TWWiLlilgLgfAEA7bZ5hoOmfNvSpSw1TGmRmHMFgACAnD6d6bXGi1pqeENHZg6ACwQAtNPXMxwwh1pmmJZ9BIAAgJROzHC4fNEyw4zslCkALhQA0B7l2+1emuFg2cpSQ18+nOFxeokAgHYoP2jntpQHytDQ0L/jNt5lqWEgNio/HjtxBOwrAKDZ1op5KPFB8veYNSw1DNTaMY8lfuweIwCgmTYeHh5+MfEBclPMcpYakijfpOveDE8ITPVqHQEAs2CbDH9H/FnMHEsNSS0Tc2Pix/I1MUsKAKi//8lw8T/WMkM2ZWj/PPFj+o6YFQQA1NfhGS7+e1tmmBWnJX5sPxTzZgEA9bJYzAUZLv6ftNQwq76V+DH+fMw7BADUQ/k3wt+lPBTGx8dfjdvY1FJDJXyvJh/dLQAgoVVj7k98EDwa81ZLDZXy8Rr8xk8AQCLrxzyT+AD4U8yKlhoq6b0ZImAPAQDV8oEMD/wrijQvDQIGZ72YZxOfBd8WAFANn81w8T+z6HxWOVB9q8f8PfGZcMYMzgQBAAN0YIaL/0GWGWqn/MyPPyQ+Gy4tpvfmXwIABqAs7zMyXPw/a6mhtpaIuSrxGTGv6LzySABABuXf4S/PcPH/gKWG2ivf1/+8xGfFX2JWEQCQVvkM/D8lfjA/UwzujT+Aajgq8bnxRMw6AgDSKF97/2jiB/H9Ree9BIDm+VrK82NsbOyVuI2NBQAM1qblu+8lvvhfX/T+tzygnj6T4c+HWwkAGIxPZnjAlp8Bvpilhlb4yCw9gVgAwDTsleGB+j3LDK2z8ejo6MuJz5avCwCYmWMq/raeQL2Vzyt6PPEZc7QAgN6Vb6zx0wwX/20sNbRe+fK9vyQ+a84vOi9HFADwOpaLuSnlg3F4ePjF4vWfqQu0y7Ix8xJHwNUxGwgAmNoaMQ8mfhD+M2YtSw10KX/zeFni8+dhAQD/be7Q0NC/Ez/4bis67w8OMJXyLcbPnKgwAUDTbJXhQVN+aMfilhrowaECANL7YoYHzEmWGZimEQEA6Xwnw4NlX8sMzNB2AgAGq3w5zDkZHig7WGqgT1sIABiMpWJ+k+FB8j5LDQzIBqmfpCwAaLryDTfuyfCRnG+z1MCArRnzLwEA0/f2mCcTPzDujlnZUgOJrBhzpwCA3r0/w4PimqLz5wWAlMpz5loBAG9shwwPiB8WnScWAuRQfnT4RQIAFm6/DA+Gb1tmYJacIADgv52c4YGwq2UGZtkBAgA6yrfbvSzDg+AjlhqoiC8IANqu/KCd2xNv/udj5lpqoGK2EQC0VfkRu/9KvPH/VnQ+MhigijbNEAAHWWaqZJORkZGXEm/6eTHLWWqg4sr3PHk68Xl4sGWmCoYzFO/FMXMsNVATq8X8LfG5eIplZjaNZLj4H22ZgRoqf2N5W+Lz8RI/HDEbjshw8f+KZQZqbImYyxOfkzfELG2pyaF8B6wLM1z8t7XUQAMsUiT++PP49+8pfA4KiS1T1mbKjTw2NvZK3MZ7LDXQMEckjoBHY9a2zKRQPqnlr4k38CM2MNBge6c8Q8tXY8VtbGiZGaR3xjyb+OJ/R9H5qE2AJtsxw59QP2SZGYQPZtisvy46T5YBaIMPZThXd7LM9GOXDJv09KLzJBmANtkwwxuo7WOZmYlvZrj4H2CZgRYrn/P0WOJz9kjLTK/Kn8bHMlz8P2OpAf7v5Xv3Jj5vz41Z1FLzepaMuTLDxX9LSw3w/8qXWN+Y+Ny9ovBcKxZipZg/J96AT8esb6kB/kv5lr4/T3wG3x6zvKVmsnWK9H+H+kvMqpYa4HWdlvgsfjBmdctMabPx8fFXE2+46wrvVQ3Qq0MSn8nPxKxnmdvtUxn+3n9+4cknANP1pQzn83stczvtk2FzHWaZAWZs2wzn9Mctc7scl2FTfckyA/TtfRnO690sc/OVzzK9JMNm+pilBhiYd8Q8l/jc/qZlbq7ypR83p9xAw8PDL8ZtbGSpAQZujZiHEkfAyZa5ed4c8/fEG+ehmDUtNUAyQzF3JD7LfxazmKVuhg3nzp37QuINc2vhzSUAcijfsfWaxGf69YWXbtfe1hn+3v+LmMUtNUA25UurL0h8tt9TdN4hlhraLcPF/wTLDDBrjkl8xj8a8xbLXC+jGS7+X7PMALNuvwxP7t7QMldf+WuhH2W4+G9vqQEWeg7vFLP/pCnfF2XdhLe5S4Zz/0Pu2uoqn7BxbYZNsLmlBvgv5UftfjXmyYWdn6Ojoy8XnY/lPTDmPcVg3yY9x3O+dnQ3V8+bYu5NfMc/nrhgAeqqfLLcEzM8W2+K+X55AY9Zqs+v490ZPtxtb3d3dZSf6PRU4jv8rpiVB/C1lh8HvHPMaTF/Lh8wk6b8uOA9Cq8/Beql/Cl+3gDP23tjzph/Vq4yg69n3df7LcSAvsYj3O2zb4sMv/K5eoZVWj4oNonZr+i8VPCpHm/v6Zgvu2uBmjgpwzPxL4rZM+ZtPX5N5W+F/5r46zonZhF3/+zYKcPF/wfTuIPLd6jaNubYmFsGcNv7uIuBihuayGzS8wgOitm0WPjzCJYtEr/9e/z7lxed5z6Q0f4ZLv6HvMHXsP78n9QvjPlnoq9hC3c1UGHbTlRAeaEvOs8j+Gjx2nfwK9+kbTzxbd9WeCfYLMqfxk/NsJk+33W75Z8APhJzWMx1mUt3WXc7UFHHTVRQfF33xZxZdJ5HUD736qzEt/dgzGq2QzpLpC65+Xfkh2PWitk15uyYv8zyRv6Eux6oqN9P1EB8nY9luI1nYt5uSwzeCjF/zHAH/j31BwfN4Gs61t0PVNSfJug+szezLQanfB/mh1u8mW6xBQABUKtze9jW6N+7y7+Dt3wjPW8bAAKgdmf3F22PmfuELTQxMTQ09G9bARAAtYyAg2yR6dvT1hEAgABoQAScZJv07vu2jAAABECDIuCnhbd5f13l4lxkqwgAQAA0MAJ+V7z2TYqYr3yzmxttEQEACIAGR8DdReeTE5lv9ZgHbA0BAAiAFkTAIzEr2jqdt0581pYQAIAAaFEE3Fi0/JMEyw9puNNWEABAOwOg6HxUevnBanvFXBzzeIsi4PA2b5xTXN4FAND6AOj2ppjPFJ0P87m3qWf7+Pj4q0VLXxkwpwV193TMpTG3CQBAAPQcAN3KT2PdOubImHkNu058so2bZscGXvDvjDl9frmuOul7PU4AAAJgxgHQbdGYTWK+EfOrqn2A2zS//+PauGlq/WY/IyMjL8X3cFXMt2K2KDrPZ1gYAQAIgMEFwFTWjtk95ryYh2oUAK18l8Dja1ZpD8ScE7Pb/I02HQIAEABpA6DbUMx2MSfG3FHha8vJAqB6d8r1Md8rOn936vedmwQAIADyBkC38re0W8YcGvPbCl1rdmzjptmmQnfAwzEXxXwl5p0JvlcBAAiA2Q2AqZTn/T4xl8Q8OUvXnyXbuGnmzOIF/9ai88SLT8WskOF7FQCAAKheAHQr35hul5izYu7PcC06u80b59iML8XbP+bdRefZo7kJAEAAVD8Aui0T87GYo2JuTvC8siXbvHHKN0D484AX9a5iwUvxVqvI9ykAAAFQvwDoVv4AuWnMgTGXl68Gm+H3/GTMurZOUaxZzPCDgEZHR18uen8pngAAEACDtk7MHjEXxPyrh++3fHfDpWybBeYUPfw5oOjvpXgCAEAApFZ+yt+nY46P+fH8H1LHi86TzFe3XRZu2aLzkoiz59fUGTHfLTovxVumxt+XAAAEQDsCAAQAIAAEAAJAAAACQAAgAAQAIAAEAAJAAAACAASAAAAEAAgAAQAIABAAAAIABACAAAABACAAQAAACAAQAAACAAQAgAAAAQAgAEAAAAgAEAAAAgAEAIAAAAEACAABAAIAEAACAAQAIAAEAAJAAAACQAAgAAQAIABAAAgAQACAABAAgAAAAQAgAEAAAAgAEAAAAgAEAIAAAAEAIABAAAAIABAAAAIABACAAAABACAAQAAACAAQAIAAEAAgAAABIABAAAACQAAgAAQAb2jxmKVqNku62wSAAAABwBsrL5g7xxwf89OYm2Menqi5+B6ei7k75qqYc2IOj/l8zPLucgEgABAAAqDNP9lvH3PpRAvF9319zF4xK9sKAkAAIAAEQFvsNjY29soE/zn0b4jZ0LYQAAIAASAAmmq9mJtd8hd6+J8ds4JtIgBAAAiAJtnZJb7ni8CutosAAAEgAJpgxGV92heCw20bAQACQADU2W4u5zO+GJwXs6gtJABAAAiAulnNZXwgzwtAAIAAEAC1cpVL+EAiYA9bSQCAABAAdbGLS/dAI2BjW0oAgACg6lZyyR54ANxuWwkAEABU3Zku2UkiYAdbSwCAAKCqFhkeHn7R5TpJADxoewkAEABU1ZYu1UkjYANbTACAAKCKznCZThoAx9hiAgAEAFX0nMt00gB4xBYTACAAqJp3DPBCd3HMYTH7FJ2Pza3bHBJzesx4zD8GHAEb2WoCAAQAVbL9AC5uj8Ws0sC1WT/m9wMKgO/bagIABABVcuAALm4HNXyNrhzAGl1mqwkAEABUyVkDuLit0PA1Wm0Aa3S3rSYAQABQJVf1efg92pJ1uq6fdRofH3/VVhMAIACokt/4ybYnRw/gtwBzbDcBAAKApvwG4OaWrNM3BIAAEAAIAAHQJFf0efjd1JJ12msAAYAAAAGAABAACAAQANQ3AOa1ZJ32FgACQAAgAARAk1wpAHqyjwAQAAIAASAABIAAEAACQAAgAARArfX7KoDft2SdvioABIAAQAAIAAHQvgD4mgAQAAIAASAABIAAEAACQAAgAARArV3d5+F3Y0vW6esCQAAIAASAABAAAkAACAABgAAQALV2jQDoyb4CQAAIAASAABAACw6/G1qyTvsJAAEgABAAAkAACAABIAAEAAJAANRavx8HfH1L1ml/ASAABAACQAAIgPYFwDcEgAAQAAgAASAABIAAEAACAAEgAGrtt30efr9ryTodIAAEgABAAAgAASAABIAAEAAIAAFQa9cKgJ4cKAAEgABAAAgAAbDg8LuuJet0kAAQAAIAASAABIAAEAACQAAgAARArV0nAHryTQEgAAQAAkAACIAFh9+1LVmngwWAABAACAAB0CS/EwACQAAIABAAAkAATO0QASAABAACQAAIgAWH328FgAAQACAABED9XC8AevItASAABAACQAAIgPYFwLcFgAAQAAgAAdAkN/R5+P1GAAgAAQACQAAIgKb6jgAQAAIAASAABMCCw++alqzToQJAAAgABIAAaJIbBYAAEAACAASAABAAUxsVAAJAACAABECT/L7Pw+9qASAABAAIAAEgAJrquwJAAAgABIAAEADtC4DDBIAAEAAIAAHQJPP6PPyuEgACQACAABAAAqCpDhcAAkAAIAAEQJPcJAB68j0BIAAEAAJAAAiABYfflQJAAAgAEAACQAA01RECQAAIAASAAGiSmwWAABAAAgAEgACY7uF3RUvW6UgBIAAEAAJAADTJLQKgJ98XAAJAACAABIAAEAACQAAIAASAAGh1AFzeknU6SgAIAAGAABAATXKrAOjJ0QJAAAgABIAAEAALDr9fCwABIABAAAgAAdBUxwgAASAAEAACoEluEwACQAAIABAAAmC6h9+vWrJOxwoAASAAEAACoEluFwDpHwPj4+Ov2moCAAQAAkAAIABAAFDrABhvyTod3886jY2NvWKrCQAQAFTJHwRAT04QAAJAACAABIAAEADTMjo6+rKtJgBAAFAlf+zz8PtlS9bpRAEgAAQAAkAACAABMC0jIyMv2WoCAAQAAqB+ThIAAkAAIAAEQJPc0efhd1lL1unkftZpeHj4RVtNAIAAQAAIAAQACABqffi1JQBO6Wed5s6d+4KtJgBAANCkw+/SlqzTqQLAY0AAIAAEgMNPAHgMeAwIAASAw6/W/uzw68lpHgMCQAAgABx+AkAATHednrfVBAAIAKrkTodfT04XAAJAACAABIAAWHD4/bwl63RGn+v0nK0mAEAAIAAEAAIABACz6i4B0JMz+1ynZ201AQACgCYFwCUtWacxASAABAACQAA0yd0CIEsAPGOrCQAQAAiA+jlLAAgAAYAAEAACYMHh9zMB0NM6PW2rCQAQAFTJPQKgJz8QAAJAACAABIAAaF8AnN3nOj1lqwkAEAA0KQB+KgAEgAAAASAA6udeAdCTH/a5Tk/aapXlzbBAAAiAGRx+F7dknc4RAM00d+7cF/q8b39iFWmyYwVAY90nALIEwBO2WiW9daJP8W+cbhlpsoMH8CBBANTZuQKgcebE/GwAZ9vXLCVN9rkBPEh2j9mua7bvmk93zQ5TzI5ds1PX7Nw1n5liPts1u3TN57rm81PMF7pm1675Ytfs1jW7TzFf6pr/6Zo9umZkitmza77cNV/pmmf8+jN9AMxfq+tMZea28fHxVycGIP6trV0iaLItJ6DdAfAj9zYLeQys7hJBk63lYU7LA+A89zZT7P8HXB5ousU81FnIAXiRAKDF+/8Qlwfa4D4Pd1ocAOe7t/Hrf9rqIA93WhwAF7i36dr7N7ss0BaresgzxSH4YwFAS/f+ji4LtMk8D3taGgAXureZtO8vdTmgbT7ooU/XQXhhS/b+ue5tSsPDwy/GfljB5YA2Ot4RwKQAOLQl+35f9zbz9/ywywBtVb59plcE8J/D8KMt2febu7eJffBDlwDabj1HAfMPxOVasueXcG+3fq9fGbOk4x+K4pOOhNYfiBe1bM/v515v7V4/M2YRxz4ssOno6OjLjodWHojPxyzfwj1/q3u/Vfv82aLzIWPAFMpnw57tqGjdwbhVS/f7mjH32AGt2ONH+ZU/9GajmEsdG40/FG+NWbvle33RmMPshkbu76uLzsd7L+1Ih+kri/mzMb+Iuav8VbFjpfaH4r0x58R83vZ+jbXmXyxOiZkX8ydTi7kj5tqY82KOiNkzZpuYZW1pGLzyyTOrxawzad7aNWtPmrd0zVqTZs1J8+auWWPSrN41q02aVSfNm7pmlUmzctesNGlW7JoVJs3QpFm+a5abNMt2zTKTZumuWWrSLDlpluiaxSfNnK5ZbNIs2jWLTBoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACABP4XrAfLDgdwwwAAAAAASUVORK5CYII=');\r\n    background-size:28px auto;\r\n    background-repeat: no-repeat;\r\n    background-position: center; \r\n    \r\n}\r\n.div-wrapper {\r\n    margin-top: 50px;\r\n}\r\n.ul-list-wrapper li{\r\n    float: left;\r\n    width: 50%;\r\n    height: 146px;\r\n    text-align: center;\r\n    padding: 50px 6%;\r\n    list-style: none;\r\n    \r\n}\r\n.border-bottom{\r\n    border-bottom: 1px solid rgb(207,207,207);\r\n}\r\n.ing {\r\n    height: 136px;\r\n    width: 187px;\r\n    padding: 1px;\r\n}\r\ntr {\r\n    padding: 15px;\r\n}\r\ntd {\r\n    padding: 1px;\r\n    border: borderless;\r\n}\r\n"

/***/ }),

/***/ "./src/canteen/canteen.component.html":
/*!********************************************!*\
  !*** ./src/canteen/canteen.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar-fixed-top nav-style\" style=\"background-color:#5fb06b;\">\n  <a class=\"nav-left-a\" (click)=\"popup()\">&nbsp;</a>\n  <span>Swap</span>\n  <a class=\"nav-right-a\" routerLink=\"/selection\"></a>\n</nav>\n\n\n<div class=\"div-wrapper\">\n  <table class=\"table-borderless\">\n    <tr>\n    <td><img class=\"ing\" src=\"assets/img/Swap/1.png\"></td>\n    <td><img class=\"ing\" src=\"assets/img/Swap/2.png\"></td>\n    </tr>\n    <tr>\n    <td>&nbsp;&nbsp;iPhone 6s</td>\n    <td>&nbsp;&nbsp;Digital watch ZZWI5</td>\n    </tr>\n    <tr>\n        <td>&nbsp;&nbsp;<i class=\"fa fa-user-circle\" style=\"color: #5fb063\"></i>&nbsp;David_ck&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class=\"fa fa-comments-o\" style=\"color: #5fb063\"></i></td>\n        <td >&nbsp;&nbsp;<i class=\"fa fa-user-circle\" style=\"color: #5fb063\"></i>&nbsp;rach665&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class=\"fa fa-comments-o\" style=\"color: #5fb063\"></i></td>\n        </tr>\n    <tr>\n    <td><img class=\"ing\" src=\"assets/img/Swap/3.png\"></td>\n    <td><img class=\"ing\" src=\"assets/img/Swap/4.png\"></td>\n    </tr>\n    <tr>\n        <td>&nbsp;&nbsp;PANDORA Reflexions™</td>\n        <td>&nbsp;&nbsp;Old gameboy</td>\n        </tr>\n    <tr>\n        <td>&nbsp;&nbsp;<i class=\"fa fa-user-circle\" style=\"color: #5fb063\"></i>&nbsp;6653rrrk&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class=\"fa fa-comments-o\" style=\"color: #5fb063\"></i></td>\n        <td >&nbsp;&nbsp;<i class=\"fa fa-user-circle\" style=\"color: #5fb063\"></i>&nbsp;cuBen&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class=\"fa fa-comments-o\" style=\"color: #5fb063\"></i></td>\n    </tr>\n    <tr>\n    <td><img class=\"ing\" src=\"assets/img/Swap/5.png\"></td>\n    </tr>\n    <tr>\n        <td>&nbsp;&nbsp;GUCCI top handle bag</td>\n        </tr>\n        <tr>\n            <td>&nbsp;&nbsp;<i class=\"fa fa-user-circle\" style=\"color: #5fb063\"></i>&nbsp;6653rrrk&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class=\"fa fa-comments-o\" style=\"color: #5fb063\"></i></td>\n        </tr>\n  </table>\n</div>\n\n  \n<div class=\"popup-menu\" *ngIf=\"ispopup==true\" (click)=\"popup()\">\n\n    <ul class=\"ul-list-menu\" [class.ul-transition]=\"ispopup==true\" (click)=\"stop($event)\">\n      <div style=\"height: 131px; background-color: #5fb06b; padding:20px 0 0 0\">\n  \n        <img src=\"assets/img/matchitsmall.png\" alt=\"Angular Logo\">\n  \n      </div>\n      <li a routerLink=\"/canteen\">\n        <a>\n          <i class=\"fa fa-refresh\">&nbsp;&nbsp;&nbsp;</i>\n          Swap\n        </a>\n      </li>\n      <li a routerLink=\"/hocanteen\">\n        <a>\n          <i class=\"fa fa-handshake-o\">&nbsp;</i>\n          Sponsorship\n        </a>\n      </li>\n      <li a routerLink=\"/dash-board\">\n        <a>\n          <i class=\"fa fa-users\">&nbsp;&nbsp;</i>\n          New User Registration\n        </a>\n      </li>\n      <li a routerLink=\"/cyber-dash-board\">\n        <a>\n          <i class=\"fa fa-info\">&nbsp;&nbsp;</i>\n          About us\n        </a>\n      </li>\n    </ul>\n  </div>"

/***/ }),

/***/ "./src/canteen/canteen.component.ts":
/*!******************************************!*\
  !*** ./src/canteen/canteen.component.ts ***!
  \******************************************/
/*! exports provided: CanteenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanteenComponent", function() { return CanteenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _node_modules_angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/@angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CanteenComponent = /** @class */ (function () {
    function CanteenComponent(router, http) {
        var _this = this;
        this.router = router;
        this.http = http;
        this.systemData = "";
        this.getremarks = "";
        this.getreminder = "";
        this.switch = false;
        this.dateTime = new Date();
        this.ispopup = false;
        this.htmlmeal = [];
        this.htmlsoup = [];
        this.http.get("assets/MC5LunchMenu.json")
            .toPromise()
            .then(function (response) {
            console.log(response.json());
            _this.menu = response.json().data.lunch_menu;
            _this.remarks = response.json().data.remarks.replace(/\n/gi, "<br/>");
            _this.reminder = response.json().data.reminder.replace(/\n/gi, "<br/>");
            _this.servicetime = response.json().data.service_hour;
            _this.switch = false;
            _this.Day = _this.dateTime.getDate() > 10 ? _this.dateTime.getDate() + "" : "0" + _this.dateTime.getDate();
            _this.Month = _this.dateTime.getMonth() > 9 ? (_this.dateTime.getMonth() + 1) + "" : "0" + (_this.dateTime.getMonth() + 1);
            _this.today = _this.Day + "/" + _this.Month + "/" + _this.dateTime.getFullYear();
            _this.version = _this.switch ? 'meal_e' : 'meal_c';
            _this.versionS = _this.switch ? 'soup_e' : 'soup_c';
            // console.log(list)
            for (var i = _this.menu.length; i > 0; i--) {
                var _target = _this.menu[i - 1];
                if (_target.date == _this.today) {
                    break;
                }
            }
            _this.selectedEL = _target;
            _this.systemData = _target;
            for (var i = 0, data_template = _target[_this.version], data_template_len = data_template.length; i < data_template_len; i++) {
                var _gg = data_template[i].replace(/(\(素\))/gi, "<i class='fa fa-leaf'></i>").replace(/(\(VEG\))/gi, "<i class='fa fa-leaf'></i>").replace(/(\(辣\))/gi, "<i class='fa fa-fire'></i>").replace(/(\(HOT\))/gi, "<i class='fa fa-fire'></i>").replace(/\n/gi, "<br/>");
                _this.htmlmeal.push(_gg);
            }
            _this.htmlsoup = _target[_this.versionS].replace(/(\(素\))/gi, "<i class='fa fa-leaf'></i>").replace(/(\(VEG\))/gi, "<i class='fa fa-leaf'></i>").replace(/(\(辣\))/gi, "<i class='fa fa-fire'></i>").replace(/(\(HOT\))/gi, "<i class='fa fa-fire'></i>").replace(/\n/gi, "<br/>");
        });
    }
    CanteenComponent.prototype.ngOnInit = function () {
        // setTimeout(xaa.submitWait.unblockUI,200);
        xaa.submitWait.unblockUI();
    };
    CanteenComponent.prototype.popup = function () {
        this.ispopup = !this.ispopup;
    };
    CanteenComponent.prototype.copyText = function (getinfo) {
        this.systemData = getinfo;
        this.getremarks = "";
        this.getreminder = "";
        this.selectedEL = getinfo;
        this.htmlmeal = [];
        for (var i = 0, data_template = getinfo[this.version], data_template_len = data_template.length; i < data_template_len; i++) {
            var _gg = data_template[i].replace(/(\(素\))/gi, "<i class='fa fa-leaf'></i>").replace(/(\(VEG\))/gi, "<i class='fa fa-leaf'></i>").replace(/(\(辣\))/gi, "<i class='fa fa-fire'></i>").replace(/(\(HOT\))/gi, "<i class='fa fa-fire'></i>").replace(/\n/gi, "<br/>");
            this.htmlmeal.push(_gg);
        }
        this.htmlsoup = getinfo[this.versionS].replace(/(\(素\))/gi, "<i class='fa fa-leaf'></i>").replace(/(\(VEG\))/gi, "<i class='fa fa-leaf'></i>").replace(/(\(辣\))/gi, "<i class='fa fa-fire'></i>").replace(/(\(HOT\))/gi, "<i class='fa fa-fire'></i>").replace(/\n/gi, "<br/>");
    };
    CanteenComponent.prototype.copyRemarks = function () {
        this.systemData = "";
        this.getreminder = "";
        this.getremarks = this.remarks;
        this.selectedEL = this.remarks;
    };
    CanteenComponent.prototype.copyReminder = function () {
        this.systemData = "";
        this.getremarks = "";
        this.getreminder = this.reminder;
        this.selectedEL = this.reminder;
    };
    CanteenComponent.prototype.stop = function (e) {
        e.stopPropagation();
    };
    CanteenComponent.prototype.open_win = function () {
        window.open("http://rbk.intranet.hkbea.com/mobile/login.html");
    };
    CanteenComponent.prototype.changerVer = function () {
        this.switch = !this.switch;
        this.version = this.switch ? 'meal_e' : 'meal_c';
        this.versionS = this.switch ? 'soup_e' : 'soup_c';
        this.htmlmeal = [];
        for (var i = 0, data_template = this.systemData[this.version], data_template_len = data_template.length; i < data_template_len; i++) {
            var _gg = data_template[i].replace(/(\(素\))/gi, "<i class='fa fa-leaf'></i>").replace(/(\(VEG\))/gi, "<i class='fa fa-leaf'></i>").replace(/(\(辣\))/gi, "<i class='fa fa-fire'></i>").replace(/(\(HOT\))/gi, "<i class='fa fa-fire'></i>").replace(/\n/gi, "<br/>");
            this.htmlmeal.push(_gg);
        }
        this.htmlsoup = this.systemData[this.versionS].replace(/(\(素\))/gi, "<i class='fa fa-leaf'></i>").replace(/(\(VEG\))/gi, "<i class='fa fa-leaf'></i>").replace(/(\(辣\))/gi, "<i class='fa fa-fire'></i>").replace(/(\(HOT\))/gi, "<i class='fa fa-fire'></i>").replace(/\n/gi, "<br/>");
    };
    CanteenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-canteen',
            template: __webpack_require__(/*! ./canteen.component.html */ "./src/canteen/canteen.component.html"),
            styles: [__webpack_require__(/*! ./canteen.component.css */ "./src/canteen/canteen.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _node_modules_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], CanteenComponent);
    return CanteenComponent;
}());



/***/ }),

/***/ "./src/cyber-dash-board/cyber-dash-board.component.css":
/*!*************************************************************!*\
  !*** ./src/cyber-dash-board/cyber-dash-board.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidebarleft {\r\n    width: 100px;\r\n    background-color: #f8f8f8;\r\n    position: absolute;\r\n    height: calc(100% - 50px);\r\n    height: -webkit-calc(100%-50px);\r\n    overflow-y: scroll;\r\n      \r\n  }\r\n  .sidebarleft::-webkit-scrollbar{width: 0;}\r\n  .sidebarright::-webkit-scrollbar{width: 0;}\r\n  .sidebarright {\r\n      width: calc(100% - 100px);\r\n      width: -webkit-calc(100% - 100px);\r\n      max-width: 668px;\r\n      min-width: 220px;\r\n      left: 100px;\r\n      position: absolute;\r\n      height: calc(100% - 50px);\r\n      overflow-y: scroll;\r\n      max-height: calc(100%-50px);\r\n  \r\n   \r\n  }\r\n  .right td{\r\n  color: #666;\r\n  height: 88px;\r\n  vertical-align: middle;\r\n  border-bottom: 1px solid #ddd;\r\n  border-top: 0px;\r\n  \r\n  \r\n  }\r\n  .left td{\r\n      text-align: center;\r\n      height: 74px;\r\n      vertical-align: middle;\r\n      border-top: 0px;\r\n      border-bottom: 1px solid #ddd;\r\n  }\r\n  tr{\r\n      display:table;\r\n      width:100%;\r\n      table-layout: fixed;\r\n      word-wrap: break-word;\r\n  }\r\n  .datetime{\r\n      text-align: center;\r\n      border-bottom: 1px solid #ddd;\r\n  }\r\n  .active td{\r\n      background-color: #fff;\r\n  }\r\n  .table .active{\r\n      background-color: #fff;\r\n  }\r\n  .forsoup{\r\n      \r\n      background-color: #ffb836;\r\n      \r\n  }\r\n  .popup-menu {\r\n      position: absolute;\r\n      top: 0;\r\n      left: 0;\r\n      width: 100%;\r\n      height: 100%;\r\n      background: rgba(172, 172, 172,.6);\r\n      overflow-y: scroll;\r\n      z-index: 1030;\r\n  }\r\n  a{\r\n      color: black;\r\n      text-decoration: none;\r\n  }\r\n  li{list-style:none;\r\n      padding: 15px;\r\n      border-bottom: 1px solid #dcdcdc;\r\n  }\r\n  .ul-list-menu{\r\n      position: absolute;\r\n      height: 100%;\r\n      width: 251px;\r\n      padding: 0 0;\r\n      margin: 0;\r\n      background: #fff;\r\n      transform: translateX(-100%);\r\n      -webkit-transform: translateX(-100%);\r\n      transition: -webkit-transform .6s;\r\n      transition: transform .6s;\r\n      transition: transform .6s, -webkit-transform .6s;\r\n      -webkit-transition: transform .6s;\r\n      \r\n  }\r\n  .ul-transition{\r\n      transform: translateX(0);\r\n      -webkit-transform: translateX(0);\r\n  }\r\n  img {\r\n     \r\n      margin: auto;\r\n      padding: 0px;\r\n      \r\n  }\r\n  .nav-style {\r\n      text-align: center;\r\n      height: 50px;\r\n      line-height: 50px;\r\n      padding: 0 50px;\r\n      font-size: 16px;\r\n      color: #fff;\r\n  }\r\n  .nav-left-a,\r\n  .nav-right-a {\r\n      position: absolute;\r\n      display: inline-block;\r\n      top: 0;\r\n      width: 50px;\r\n      height: 50px;\r\n  }\r\n  .nav-left-a{\r\n      left: 0;\r\n      padding: 10px 0;\r\n      background: url('menu-btn.png');\r\n      background-size:30px auto;\r\n      background-repeat: no-repeat;\r\n      background-position: center; \r\n  }\r\n  .nav-right-a {\r\n      right: 0;\r\n      background: url('data:image/png;base64,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ThoAx9hiAgAEAFX0nMt00gB4xBYTACAAqJp3DPBCd3HMYTH7FJ2Pza3bHBJzesx4zD8GHAEb2WoCAAQAVbL9AC5uj8Ws0sC1WT/m9wMKgO/bagIABABVcuAALm4HNXyNrhzAGl1mqwkAEABUyVkDuLit0PA1Wm0Aa3S3rSYAQABQJVf1efg92pJ1uq6fdRofH3/VVhMAIACokt/4ybYnRw/gtwBzbDcBAAKApvwG4OaWrNM3BIAAEAAIAAHQJFf0efjd1JJ12msAAYAAAAGAABAACAAQANQ3AOa1ZJ32FgACQAAgAARAk1wpAHqyjwAQAAIAASAABIAAEAACQAAgAARArfX7KoDft2SdvioABIAAQAAIAAHQvgD4mgAQAAIAASAABIAAEAACQAAgAARArV3d5+F3Y0vW6esCQAAIAASAABAAAkAACAABgAAQALV2jQDoyb4CQAAIAASAABAACw6/G1qyTvsJAAEgABAAAkAACAABIAAEAAJAANRavx8HfH1L1ml/ASAABAACQAAIgPYFwDcEgAAQAAgAASAABIAAEAACAAEgAGrtt30efr9ryTodIAAEgABAAAgAASAABIAAEAAIAAFQa9cKgJ4cKAAEgABAAAgAAbDg8LuuJet0kAAQAAIAASAABIAAEAACQAAgAARArV0nAHryTQEgAAQAAkAACIAFh9+1LVmngwWAABAACAAB0CS/EwACQAAIABAAAkAATO0QASAABAACQAAIgAWH328FgAAQACAABED9XC8AevItASAABAACQAAIgPYFwLcFgAAQAAgAAdAkN/R5+P1GAAgAAQACQAAIgKb6jgAQAAIAASAABMCCw++alqzToQJAAAgABIAAaJIbBYAAEAACAASAABAAUxsVAAJAACAABECT/L7Pw+9qASAABAAIAAEgAJrquwJAAAgABIAAEADtC4DDBIAAEAAIAAHQJPP6PPyuEgACQACAABAAAqCpDhcAAkAAIAAEQJPcJAB68j0BIAAEAAJAAAiABYfflQJAAAgAEAACQAA01RECQAAIAASAAGiSmwWAABAAAgAEgACY7uF3RUvW6UgBIAAEAAJAADTJLQKgJ98XAAJAACAABIAAEAACQAAIAASAAGh1AFzeknU6SgAIAAGAABAATXKrAOjJ0QJAAAgABIAAEAALDr9fCwABIABAAAgAAdBUxwgAASAAEAACoEluEwACQAAIABAAAmC6h9+vWrJOxwoAASAAEAACoEluFwDpHwPj4+Ov2moCAAQAAkAAIABAAFDrABhvyTod3886jY2NvWKrCQAQAFTJHwRAT04QAAJAACAABIAAEADTMjo6+rKtJgBAAFAlf+zz8PtlS9bpRAEgAAQAAkAACAABMC0jIyMv2WoCAAQAAqB+ThIAAkAAIAAEQJPc0efhd1lL1unkftZpeHj4RVtNAIAAQAAIAAQACABqffi1JQBO6Wed5s6d+4KtJgBAANCkw+/SlqzTqQLAY0AAIAAEgMNPAHgMeAwIAASAw6/W/uzw68lpHgMCQAAgABx+AkAATHednrfVBAAIAKrkTodfT04XAAJAACAABIAAWHD4/bwl63RGn+v0nK0mAEAAIAAEAAIABACz6i4B0JMz+1ynZ201AQACgCYFwCUtWacxASAABAACQAA0yd0CIEsAPGOrCQAQAAiA+jlLAAgAAYAAEAACYMHh9zMB0NM6PW2rCQAQAFTJPQKgJz8QAAJAACAABIAAaF8AnN3nOj1lqwkAEAA0KQB+KgAEgAAAASAA6udeAdCTH/a5Tk/aapXlzbBAAAiAGRx+F7dknc4RAM00d+7cF/q8b39iFWmyYwVAY90nALIEwBO2WiW9daJP8W+cbhlpsoMH8CBBANTZuQKgcebE/GwAZ9vXLCVN9rkBPEh2j9mua7bvmk93zQ5TzI5ds1PX7Nw1n5liPts1u3TN57rm81PMF7pm1675Ytfs1jW7TzFf6pr/6Zo9umZkitmza77cNV/pmmf8+jN9AMxfq+tMZea28fHxVycGIP6trV0iaLItJ6DdAfAj9zYLeQys7hJBk63lYU7LA+A89zZT7P8HXB5ousU81FnIAXiRAKDF+/8Qlwfa4D4Pd1ocAOe7t/Hrf9rqIA93WhwAF7i36dr7N7ss0BaresgzxSH4YwFAS/f+ji4LtMk8D3taGgAXureZtO8vdTmgbT7ooU/XQXhhS/b+ue5tSsPDwy/GfljB5YA2Ot4RwKQAOLQl+35f9zbz9/ywywBtVb59plcE8J/D8KMt2febu7eJffBDlwDabj1HAfMPxOVasueXcG+3fq9fGbOk4x+K4pOOhNYfiBe1bM/v515v7V4/M2YRxz4ssOno6OjLjodWHojPxyzfwj1/q3u/Vfv82aLzIWPAFMpnw57tqGjdwbhVS/f7mjH32AGt2ONH+ZU/9GajmEsdG40/FG+NWbvle33RmMPshkbu76uLzsd7L+1Ih+kri/mzMb+Iuav8VbFjpfaH4r0x58R83vZ+jbXmXyxOiZkX8ydTi7kj5tqY82KOiNkzZpuYZW1pGLzyyTOrxawzad7aNWtPmrd0zVqTZs1J8+auWWPSrN41q02aVSfNm7pmlUmzctesNGlW7JoVJs3QpFm+a5abNMt2zTKTZumuWWrSLDlpluiaxSfNnK5ZbNIs2jWLTBoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACABP4XrAfLDgdwwwAAAAAASUVORK5CYII=');\r\n      background-size:28px auto;\r\n      background-repeat: no-repeat;\r\n      background-position: center; \r\n      \r\n  }\r\n  .div-wrapper {\r\n      margin-top: 54px;\r\n      margin-left: 7px;\r\n      margin-right: 7px;\r\n  }\r\n  .ul-list-wrapper li{\r\n      float: left;\r\n      width: 50%;\r\n      height: 146px;\r\n      text-align: center;\r\n      padding: 50px 6%;\r\n      list-style: none;\r\n      \r\n  }\r\n  .border-bottom{\r\n      border-bottom: 1px solid rgb(207,207,207);\r\n  }\r\n  .ing {\r\n      height: 136px;\r\n      width: 187px;\r\n      padding: 1px;\r\n  }\r\n  tr {\r\n      padding: 15px;\r\n  }\r\n  td {\r\n      padding: 1px;\r\n      border: borderless;\r\n  }\r\n  .aboutus{\r\n    padding: 1px;\r\n  }\r\n  .aboutuslogo{\r\n    padding: 1px;\r\n  }\r\n  .footer {\r\n    position: fixed;\r\n    bottom: 18px;\r\n    width: 100%;\r\n    text-align: center;\r\n    padding: 0px;\r\n}"

/***/ }),

/***/ "./src/cyber-dash-board/cyber-dash-board.component.html":
/*!**************************************************************!*\
  !*** ./src/cyber-dash-board/cyber-dash-board.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar-fixed-top nav-style\" style=\"background-color:#5fb06b;\">\n  <a class=\"nav-left-a\" (click)=\"popup()\">&nbsp;</a>\n  <span>About us</span>\n  <a class=\"nav-right-a\" routerLink=\"/selection\"></a>\n</nav>\n\n\n<div class=\"div-wrapper\">\n  <div class=\"aboutuslogo\">\n  <img src=\"assets/img/new.png\">\n  </div>\n   <p>MatchIt is a platform that provides two main services, one is to provide centralized sponsorships for event organizers, the other is to enhance goods exchange amongst event organizers. In particular, it will function as a middleman between sponsors and event organizers. Our role is to contact and gather sponsorships, and distribute the sponsored products to different event organizers after analysing the preferences of both parties. In addition, MatchIt also provides a platform for swapping of goods among event organisers.\n    </p>\n    <div class=\"footer\">\n\n                <a style=\"color:black\">\n                    <i class=\"fa fa-facebook-square\">&nbsp;&nbsp;</i>\n                    <i class=\"fa fa-google-plus-circle\">&nbsp;&nbsp;</i>\n                    <i class=\"fa fa-instagram\">&nbsp;&nbsp;</i>\n                    <i class=\"fa fa-twitter\">&nbsp;&nbsp;</i>\n                </a>\n<p></p>\n        <p>Copyright © 2018 MatchIt, Limited. </p>\n        <p>All rights reserved.</p>\n    </div>\n</div>\n\n\n  \n<div class=\"popup-menu\" *ngIf=\"ispopup==true\" (click)=\"popup()\">\n\n    <ul class=\"ul-list-menu\" [class.ul-transition]=\"ispopup==true\" (click)=\"stop($event)\">\n      <div style=\"height: 131px; background-color: #5fb06b; padding:20px 0 0 0\">\n  \n        <img src=\"assets/img/matchitsmall.png\" alt=\"Angular Logo\">\n  \n      </div>\n      <li a routerLink=\"/canteen\">\n        <a>\n          <i class=\"fa fa-refresh\">&nbsp;&nbsp;&nbsp;</i>\n          Swap\n        </a>\n      </li>\n      <li a routerLink=\"/hocanteen\">\n        <a>\n          <i class=\"fa fa-handshake-o\">&nbsp;</i>\n          Sponsorship\n        </a>\n      </li>\n      <li a routerLink=\"/dash-board\">\n        <a>\n          <i class=\"fa fa-users\">&nbsp;&nbsp;</i>\n          New User Registration\n        </a>\n      </li>\n      <li a routerLink=\"/cyber-dash-board\">\n        <a>\n          <i class=\"fa fa-info\">&nbsp;&nbsp;</i>\n          About us\n        </a>\n      </li>\n    </ul>\n  </div>"

/***/ }),

/***/ "./src/cyber-dash-board/cyber-dash-board.component.ts":
/*!************************************************************!*\
  !*** ./src/cyber-dash-board/cyber-dash-board.component.ts ***!
  \************************************************************/
/*! exports provided: CyberDashBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CyberDashBoardComponent", function() { return CyberDashBoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _node_modules_angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/@angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CyberDashBoardComponent = /** @class */ (function () {
    function CyberDashBoardComponent(router, http) {
        var _this = this;
        this.router = router;
        this.http = http;
        this.ispopup = false;
        this.http.get("assets/getCyberDashboard.json")
            .toPromise()
            .then(function (response) {
            console.log(response.json());
            _this.info = response.json().data.cyber_info;
            _this.time = response.json().data.date;
            _this.systemcheck = response.json().result.status;
            _this.clickswitch = true;
        });
    }
    CyberDashBoardComponent.prototype.ngOnInit = function () {
        // setTimeout(xaa.submitWait.unblockUI,200);
        xaa.submitWait.unblockUI();
    };
    CyberDashBoardComponent.prototype.copyText = function (getinfo) {
        this.title = getinfo.system_name;
        this.systemData = getinfo.system_data;
        this.selectEL = getinfo;
        this.clickswitch = true;
    };
    CyberDashBoardComponent.prototype.RecopyText = function (getinfo) {
        this.title = getinfo.system_name;
        this.systemData = getinfo.system_data;
        this.selectEL = getinfo;
        this.clickswitch = !this.clickswitch;
    };
    CyberDashBoardComponent.prototype.popup = function () {
        this.ispopup = !this.ispopup;
    };
    CyberDashBoardComponent.prototype.stop = function (e) {
        e.stopPropagation();
    };
    CyberDashBoardComponent.prototype.open_win = function () {
        window.open("http://rbk.intranet.hkbea.com/mobile/login.html");
    };
    CyberDashBoardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cyber-dash-board',
            template: __webpack_require__(/*! ./cyber-dash-board.component.html */ "./src/cyber-dash-board/cyber-dash-board.component.html"),
            styles: [__webpack_require__(/*! ./cyber-dash-board.component.css */ "./src/cyber-dash-board/cyber-dash-board.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _node_modules_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], CyberDashBoardComponent);
    return CyberDashBoardComponent;
}());



/***/ }),

/***/ "./src/dash-board/dash-board.component.css":
/*!*************************************************!*\
  !*** ./src/dash-board/dash-board.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidebarleft {\n    width: 100px;\n    background-color: #f8f8f8;\n    position: absolute;\n    height: calc(100% - 50px);\n    height: -webkit-calc(100%-50px);\n    overflow-y: scroll;\n      \n  }\n  .sidebarleft::-webkit-scrollbar{width: 0;}\n  .sidebarright::-webkit-scrollbar{width: 0;}\n  .sidebarright {\n      width: calc(100% - 100px);\n      width: -webkit-calc(100% - 100px);\n      max-width: 668px;\n      min-width: 220px;\n      left: 100px;\n      position: absolute;\n      height: calc(100% - 50px);\n      overflow-y: scroll;\n      max-height: calc(100%-50px);\n  \n   \n  }\n  .right td{\n  color: #666;\n  height: 88px;\n  vertical-align: middle;\n  border-bottom: 1px solid #ddd;\n  border-top: 0px;\n  \n  \n  }\n  .left td{\n      text-align: center;\n      height: 74px;\n      vertical-align: middle;\n      border-top: 0px;\n      border-bottom: 1px solid #ddd;\n  }\n  tr{\n      display:table;\n      width:100%;\n      table-layout: fixed;\n      word-wrap: break-word;\n  }\n  .datetime{\n      text-align: center;\n      border-bottom: 1px solid #ddd;\n  }\n  .active td{\n      background-color: #fff;\n  }\n  .table .active{\n      background-color: #fff;\n  }\n  .forsoup{\n      \n      background-color: #ffb836;\n      \n  }\n  .popup-menu {\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      background: rgba(172, 172, 172,.6);\n      overflow-y: scroll;\n      z-index: 1030;\n  }\n  a{\n      color: black;\n      text-decoration: none;\n  }\n  li{list-style:none;\n      padding: 15px;\n      border-bottom: 1px solid #dcdcdc;\n  }\n  .ul-list-menu{\n      position: absolute;\n      height: 100%;\n      width: 251px;\n      padding: 0 0;\n      margin: 0;\n      background: #fff;\n      transform: translateX(-100%);\n      -webkit-transform: translateX(-100%);\n      transition: -webkit-transform .6s;\n      transition: transform .6s;\n      transition: transform .6s, -webkit-transform .6s;\n      -webkit-transition: transform .6s;\n      \n  }\n  .ul-transition{\n      transform: translateX(0);\n      -webkit-transform: translateX(0);\n  }\n  img {\n     \n      margin: auto;\n      padding: 40px;\n      \n  }\n  .nav-style {\n      text-align: center;\n      height: 50px;\n      line-height: 50px;\n      padding: 0 50px;\n      font-size: 16px;\n      color: #fff;\n  }\n  .nav-left-a,\n  .nav-right-a {\n      position: absolute;\n      display: inline-block;\n      top: 0;\n      width: 50px;\n      height: 50px;\n  }\n  .nav-left-a{\n      left: 0;\n      padding: 10px 0;\n      background: url('menu-btn.png');\n      background-size:30px auto;\n      background-repeat: no-repeat;\n      background-position: center; \n  }\n  .nav-right-a {\n      right: 0;\n      background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAg6klEQVR42u3da5T1Y93A8T9uZ8Yph0gU5c6hSNGJMqXIoVSixyhUCFGZiJzPh5HIISlFU45F6HYs5ZiklPN59cILa1nLC2t5O8/v/+y75x67udkze1/X/A+fz1q/Ny3de+ba177+35nZh6IAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFioRWLWj9khZsOYxSwJADTXujFXTUwh/vebYjaxRADQHHNijpvoQfx3P4hZxpIBQL0tFzNvYhriv78vZhVLBwD1tEbMgxMzEP+/x2PeagkBoF7mxjw/0YfR0dGX49/YyFICQD1sNTFA8e992JICQLXtOpFA/Ls7W1oAqKbvTCQU//5XLTEAVMeiMT+cyCBu50jLDQCzb6mYayYyits7d350AACzoHyt/j0TsyBu94qYJdwFAJDX22KenJhFcfu3xyzvrgCAPN43URHxtTwYs5q7BADS2mGiYuJreibm7e4aAEhj34kKi69vM3cRAAzWSRM1EF/nsLsKAPq3eMxlEzUSX++u7jYAmLmhmNsnaii+7gPdfQAwfWvF/HOixuLrP9HdCAC923hkZOSlxBfneTFrF4nfSCj+/YtjFnOXAsDrG87wk3l5UZ4z//aWjrkh8e1dV3TeshgAmMIeGS7+R09xu+VP6Jckvt07Y1Z0FwPAax2R4eL/lTf4Gk5JfPsPx6zprgaAzk/fF2a4+G/b49dzcMqvY2ho6N9xGxu42wFos2Virk95wR0bG3slbuM90/y6ds8QJFu6+wFoo/IDdO5PfJF9pOg8038mPpEhArazDQBok3fEPJv44npH0f+T7jbPEAF72g4AtMEHM1xUfx2zxIC+3vUzxMqobQFAk+2S4eJ/eswiA/6614j5R+KveyzB1w0As+6bGS7+ByT8+svPJfhj4q//sqLz4UcAUHvlT7VnZrj4fybD97JkzNWJv4+bYpa1bQCos/KCeUXDXlK3aMz5ib+f+2NWsX0AqKOVYv6c+EL5dNF5kt5sODrx9/ZEzDq2EQB1Ul64Hkt8gfxLzKqz/H1+PcObGG1sOwFQB5uNj4+/muHT9ZauyPf72Qx/4tjKtgKgyj6V4WJ4ftH5O3yVbNWQJzkCwLTtneEieFiFv/9Nyl/ZJ/7+v26bAVAlx2a4+H+pButQPvfhicTrcJTtBsBsmxPzswwX/4/VaE3eVKT/kKPziur9GaQKyrd//kLMqTG3xDxXfvxyHaboPKm1vF+/UnTeeRKgspaLuTnlhW54ePjFuI2Narg25Rv53JQ4Aq4qBvd5B03w3piHJxoivpe93KVAFb055u+JD8CHYtas+W9HLku8Rn8oOm9R3HbfnmigovNqF28NDVTGu8pfWSY++G6NWb4Ba5X8bZDLEItZvcX7ccuJBovv7wRHDlAFW2c48H7RwJ96Dk28Zs/GrNfC/Vi+1fRjEw0X3+MWjh5gNu3mp52+jGRYv/e2bE/uM9EC8X3+zvEDzJbRDIfc11qwjttlWMePt2hfXtCGAJj/ltAAWZUvNTs3w0Vr+xat6RYZ1nO3lqzlvRMtUbT7eR5AZuV77f82w8G2eQvXdoMMT6T8ZtMXcaJFCp8HAWSySuqfruLffzxm3RavcfkSx38lXuOTBUBjAuBjjiUgtbfHPJX4MLsrZmVLXawYc2fitf5pzGICQAAAvJ73ZzjIynewW8pS/79yLa7N8CzypZu2cAIAYDB2ynCI/aDovDkOr1X+hP6TxGt/d8xKAkAAAEy2f4YD7BDL/IZOSHwfPBKzlgAQAADlT+OnZDi8Pm+pe3ZAyvti7ty5L8RtzBUAAgBor/KT5MYzHFwfttTT9oUM98sHBIAAANpnhZg/JD6wnovZwFLP2DYZLiqfbnMAxD/xp5jTMsyFAgCogrcU6V9//kDhncsGYdMMEfDlFgfA9zJ9qesKAGC2vXt0dPTlxBeUG2OWtdQDU74vw9OJ77PvtjQAjhAAQBt8PMNPkxcVDX3TmVm2WszfEt93ZxU1e4mmAAB4Y3tmuPh/3zIntVzMbYnvw/GYxVsUAEcKAKDJjvR35MYoX7lxeeL78uaiJn/CEQAAUyt/FX9Rhov/Jyx1VuWv6c9JfJ/+NeZNLQiAXL+1EgBANuVPcDemvEiUTyaM23i3pZ41RySOgCeLin9aowAAeK3yCWMPJL44PByztqWedXunvJ/HxsZeqXLkDWAfHyUAgKZ4Z8xziS/+fyw6byRENeyY4c88WwsAAQBU14cyXAjKZ4kvYalbed/v0sAAOFoAAHX3uQwXgFMLH+VbZRuOjIy8lHgP7NuwADhGAAB1dkiGi/83LHMtlM/LeDTxXjimKt/s+Pj4qwIAaKPyp/GzMlz8d7LUtbJyzL2J98QFMYs2IACOFQBA3SwZc1WGi/8WlrqWlo65IfHeuHr+Ppw15asUBADQJivF3Jn4cH8qZj1LXWtzYn6eeJ/cETNU4wA4TgAAdbFuzOOJD/X7ihq8Cxw9OzXxfvlHzBqz8Y31+8mWAgCoi/dm+JX/tUXn18c0yyGJ981zMevXMACOFwBA1W2X4eL/o6ICT+wimS9l2EOb5/yG+n3ZowAAqu6rGQ7uUcvcCts26cOhBhAAJwgAoKqOz3Bg72aZW2XzDHtq9xzfyPDw8IsCAGiaxYvEz+Cef6h81FK30juK9J8ZcXANAuBEAQBUyfIxt6Q8nOfOnftC3MaGlrrVymfuP5Q4Ak5J+Q2U+7jPr+8kAQBUxZox/8jwsq03W2qKzmv470i83y6JWUwACABg4Tbs90Dr4RC5Zf5vGOA/ynfzuzrxvruhSPDy0gEEwMkCAJhtH83w9/7yJ7E5lpoplC//vCDx/run6LyL5eB+fTE09G8BANTZ7hku/sdZZnpwTOJ9+GjMWyoUAKdkWlcBAPyX72a4+O9jmZmGfVPux/KZ+3Eb7xrQ1/q8AADqpvyV63kZLv7bWWpmYJcMe/ODFQiAUwUAkFP5ZKjrMhywm1lq+rB1hj26Q59f43MCAKiL8lP27kt8qD4Ws46lZgA26fcjd3vYr3vNYgCcJgCAHNaLeTrxYXpnMeBnWtN6ZUw+mXjfHj7Dr+3ZPm/3dAEApLZlhl+nXll0XtMNKX5zdX/i/Xt2zCICQABAk+yc4eI/NoPDE6Zj2ZibE+/jXxWdz8Ho1TN93t4ZAgBI5YAMF/+DLTOZlBfnX2Z4t8rlBIAAgLoqfxo/LcPF/3OWmlnY22OJ9/UDMav28LU83eftnCkAgEFaIuZXGS7+H7LUzKLRxPv7qZi3CQABAHWxQpH+09WejXmnpaYC9ky518fHx1+N23jP69z+UwN47owAAPq2dswjiS/+f41ZzVJTIdtn+G3XRwWAAICqek+GN0wpP1J1GUtNBeV4mevnEgTAWQIA6Me2GQ6/H8csZqmpsLnhhcSPg/27bvNJAQDMli9nuPgfaZmpibViHk78eDhugAHwAwEAzMRRGS7+I5aZmlkx5q7Ej4sLi84naj4xgHcfFABAz+bE/CTDxX/YUlNTSxWJP/Ey/v3fFP1/GJAAAHpWvh3q71MebCMjIy/FbWxiqam58jkrF09UWHx9PxQAQC9Wj/lb4gPpXzFvsdQ0yIkCQABAnW0Q83ziw+gPMUOWmgY6sKIBcI4AAF7PRzIcRL8spvcpaFA3uwoAAQB18oUMh9DJlpmWGK5YAJwrAICpfCvDAbSfZaZlNhMAAgCqqnx98dkZDp8dLTUt9faiz0/yG9Bj8EcCAPiP8vXLV2c4eN5vqWm58kOtHpzlADhPAACllWPuTnzgPDn/px+gKJaPuV0ACACYTW8r+nxb0R4ewPfErGKp4TWWiLlilgLgfAEA7bZ5hoOmfNvSpSw1TGmRmHMFgACAnD6d6bXGi1pqeENHZg6ACwQAtNPXMxwwh1pmmJZ9BIAAgJROzHC4fNEyw4zslCkALhQA0B7l2+1emuFg2cpSQ18+nOFxeokAgHYoP2jntpQHytDQ0L/jNt5lqWEgNio/HjtxBOwrAKDZ1op5KPFB8veYNSw1DNTaMY8lfuweIwCgmTYeHh5+MfEBclPMcpYakijfpOveDE8ITPVqHQEAs2CbDH9H/FnMHEsNSS0Tc2Pix/I1MUsKAKi//8lw8T/WMkM2ZWj/PPFj+o6YFQQA1NfhGS7+e1tmmBWnJX5sPxTzZgEA9bJYzAUZLv6ftNQwq76V+DH+fMw7BADUQ/k3wt+lPBTGx8dfjdvY1FJDJXyvJh/dLQAgoVVj7k98EDwa81ZLDZXy8Rr8xk8AQCLrxzyT+AD4U8yKlhoq6b0ZImAPAQDV8oEMD/wrijQvDQIGZ72YZxOfBd8WAFANn81w8T+z6HxWOVB9q8f8PfGZcMYMzgQBAAN0YIaL/0GWGWqn/MyPPyQ+Gy4tpvfmXwIABqAs7zMyXPw/a6mhtpaIuSrxGTGv6LzySABABuXf4S/PcPH/gKWG2ivf1/+8xGfFX2JWEQCQVvkM/D8lfjA/UwzujT+Aajgq8bnxRMw6AgDSKF97/2jiB/H9Ree9BIDm+VrK82NsbOyVuI2NBQAM1qblu+8lvvhfX/T+tzygnj6T4c+HWwkAGIxPZnjAlp8Bvpilhlb4yCw9gVgAwDTsleGB+j3LDK2z8ejo6MuJz5avCwCYmWMq/raeQL2Vzyt6PPEZc7QAgN6Vb6zx0wwX/20sNbRe+fK9vyQ+a84vOi9HFADwOpaLuSnlg3F4ePjF4vWfqQu0y7Ix8xJHwNUxGwgAmNoaMQ8mfhD+M2YtSw10KX/zeFni8+dhAQD/be7Q0NC/Ez/4bis67w8OMJXyLcbPnKgwAUDTbJXhQVN+aMfilhrowaECANL7YoYHzEmWGZimEQEA6Xwnw4NlX8sMzNB2AgAGq3w5zDkZHig7WGqgT1sIABiMpWJ+k+FB8j5LDQzIBqmfpCwAaLryDTfuyfCRnG+z1MCArRnzLwEA0/f2mCcTPzDujlnZUgOJrBhzpwCA3r0/w4PimqLz5wWAlMpz5loBAG9shwwPiB8WnScWAuRQfnT4RQIAFm6/DA+Gb1tmYJacIADgv52c4YGwq2UGZtkBAgA6yrfbvSzDg+AjlhqoiC8IANqu/KCd2xNv/udj5lpqoGK2EQC0VfkRu/9KvPH/VnQ+MhigijbNEAAHWWaqZJORkZGXEm/6eTHLWWqg4sr3PHk68Xl4sGWmCoYzFO/FMXMsNVATq8X8LfG5eIplZjaNZLj4H22ZgRoqf2N5W+Lz8RI/HDEbjshw8f+KZQZqbImYyxOfkzfELG2pyaF8B6wLM1z8t7XUQAMsUiT++PP49+8pfA4KiS1T1mbKjTw2NvZK3MZ7LDXQMEckjoBHY9a2zKRQPqnlr4k38CM2MNBge6c8Q8tXY8VtbGiZGaR3xjyb+OJ/R9H5qE2AJtsxw59QP2SZGYQPZtisvy46T5YBaIMPZThXd7LM9GOXDJv09KLzJBmANtkwwxuo7WOZmYlvZrj4H2CZgRYrn/P0WOJz9kjLTK/Kn8bHMlz8P2OpAf7v5Xv3Jj5vz41Z1FLzepaMuTLDxX9LSw3w/8qXWN+Y+Ny9ovBcKxZipZg/J96AT8esb6kB/kv5lr4/T3wG3x6zvKVmsnWK9H+H+kvMqpYa4HWdlvgsfjBmdctMabPx8fFXE2+46wrvVQ3Qq0MSn8nPxKxnmdvtUxn+3n9+4cknANP1pQzn83stczvtk2FzHWaZAWZs2wzn9Mctc7scl2FTfckyA/TtfRnO690sc/OVzzK9JMNm+pilBhiYd8Q8l/jc/qZlbq7ypR83p9xAw8PDL8ZtbGSpAQZujZiHEkfAyZa5ed4c8/fEG+ehmDUtNUAyQzF3JD7LfxazmKVuhg3nzp37QuINc2vhzSUAcijfsfWaxGf69YWXbtfe1hn+3v+LmMUtNUA25UurL0h8tt9TdN4hlhraLcPF/wTLDDBrjkl8xj8a8xbLXC+jGS7+X7PMALNuvwxP7t7QMldf+WuhH2W4+G9vqQEWeg7vFLP/pCnfF2XdhLe5S4Zz/0Pu2uoqn7BxbYZNsLmlBvgv5UftfjXmyYWdn6Ojoy8XnY/lPTDmPcVg3yY9x3O+dnQ3V8+bYu5NfMc/nrhgAeqqfLLcEzM8W2+K+X55AY9Zqs+v490ZPtxtb3d3dZSf6PRU4jv8rpiVB/C1lh8HvHPMaTF/Lh8wk6b8uOA9Cq8/Beql/Cl+3gDP23tjzph/Vq4yg69n3df7LcSAvsYj3O2zb4sMv/K5eoZVWj4oNonZr+i8VPCpHm/v6Zgvu2uBmjgpwzPxL4rZM+ZtPX5N5W+F/5r46zonZhF3/+zYKcPF/wfTuIPLd6jaNubYmFsGcNv7uIuBihuayGzS8wgOitm0WPjzCJYtEr/9e/z7lxed5z6Q0f4ZLv6HvMHXsP78n9QvjPlnoq9hC3c1UGHbTlRAeaEvOs8j+Gjx2nfwK9+kbTzxbd9WeCfYLMqfxk/NsJk+33W75Z8APhJzWMx1mUt3WXc7UFHHTVRQfF33xZxZdJ5HUD736qzEt/dgzGq2QzpLpC65+Xfkh2PWitk15uyYv8zyRv6Eux6oqN9P1EB8nY9luI1nYt5uSwzeCjF/zHAH/j31BwfN4Gs61t0PVNSfJug+szezLQanfB/mh1u8mW6xBQABUKtze9jW6N+7y7+Dt3wjPW8bAAKgdmf3F22PmfuELTQxMTQ09G9bARAAtYyAg2yR6dvT1hEAgABoQAScZJv07vu2jAAABECDIuCnhbd5f13l4lxkqwgAQAA0MAJ+V7z2TYqYr3yzmxttEQEACIAGR8DdReeTE5lv9ZgHbA0BAAiAFkTAIzEr2jqdt0581pYQAIAAaFEE3Fi0/JMEyw9puNNWEABAOwOg6HxUevnBanvFXBzzeIsi4PA2b5xTXN4FAND6AOj2ppjPFJ0P87m3qWf7+Pj4q0VLXxkwpwV193TMpTG3CQBAAPQcAN3KT2PdOubImHkNu058so2bZscGXvDvjDl9frmuOul7PU4AAAJgxgHQbdGYTWK+EfOrqn2A2zS//+PauGlq/WY/IyMjL8X3cFXMt2K2KDrPZ1gYAQAIgMEFwFTWjtk95ryYh2oUAK18l8Dja1ZpD8ScE7Pb/I02HQIAEABpA6DbUMx2MSfG3FHha8vJAqB6d8r1Md8rOn936vedmwQAIADyBkC38re0W8YcGvPbCl1rdmzjptmmQnfAwzEXxXwl5p0JvlcBAAiA2Q2AqZTn/T4xl8Q8OUvXnyXbuGnmzOIF/9ai88SLT8WskOF7FQCAAKheAHQr35hul5izYu7PcC06u80b59iML8XbP+bdRefZo7kJAEAAVD8Aui0T87GYo2JuTvC8siXbvHHKN0D484AX9a5iwUvxVqvI9ykAAAFQvwDoVv4AuWnMgTGXl68Gm+H3/GTMurZOUaxZzPCDgEZHR18uen8pngAAEACDtk7MHjEXxPyrh++3fHfDpWybBeYUPfw5oOjvpXgCAEAApFZ+yt+nY46P+fH8H1LHi86TzFe3XRZu2aLzkoiz59fUGTHfLTovxVumxt+XAAAEQDsCAAQAIAAEAAJAAAACQAAgAAQAIAAEAAJAAAACAASAAAAEAAgAAQAIABAAAAIABACAAAABACAAQAAACAAQAAACAAQAgAAAAQAgAEAAAAgAEAAAAgAEAIAAAAEACAABAAIAEAACAAQAIAAEAAJAAAACQAAgAAQAIABAAAgAQACAABAAgAAAAQAgAEAAAAgAEAAAAgAEAIAAAAEAIABAAAAIABAAAAIABACAAAABACAAQAAACAAQAIAAEAAgAAABIABAAAACQAAgAAQAb2jxmKVqNku62wSAAAABwBsrL5g7xxwf89OYm2Menqi5+B6ei7k75qqYc2IOj/l8zPLucgEgABAAAqDNP9lvH3PpRAvF9319zF4xK9sKAkAAIAAEQFvsNjY29soE/zn0b4jZ0LYQAAIAASAAmmq9mJtd8hd6+J8ds4JtIgBAAAiAJtnZJb7ni8CutosAAAEgAJpgxGV92heCw20bAQACQADU2W4u5zO+GJwXs6gtJABAAAiAulnNZXwgzwtAAIAAEAC1cpVL+EAiYA9bSQCAABAAdbGLS/dAI2BjW0oAgACg6lZyyR54ANxuWwkAEABU3Zku2UkiYAdbSwCAAKCqFhkeHn7R5TpJADxoewkAEABU1ZYu1UkjYANbTACAAKCKznCZThoAx9hiAgAEAFX0nMt00gB4xBYTACAAqJp3DPBCd3HMYTH7FJ2Pza3bHBJzesx4zD8GHAEb2WoCAAQAVbL9AC5uj8Ws0sC1WT/m9wMKgO/bagIABABVcuAALm4HNXyNrhzAGl1mqwkAEABUyVkDuLit0PA1Wm0Aa3S3rSYAQABQJVf1efg92pJ1uq6fdRofH3/VVhMAIACokt/4ybYnRw/gtwBzbDcBAAKApvwG4OaWrNM3BIAAEAAIAAHQJFf0efjd1JJ12msAAYAAAAGAABAACAAQANQ3AOa1ZJ32FgACQAAgAARAk1wpAHqyjwAQAAIAASAABIAAEAACQAAgAARArfX7KoDft2SdvioABIAAQAAIAAHQvgD4mgAQAAIAASAABIAAEAACQAAgAARArV3d5+F3Y0vW6esCQAAIAASAABAAAkAACAABgAAQALV2jQDoyb4CQAAIAASAABAACw6/G1qyTvsJAAEgABAAAkAACAABIAAEAAJAANRavx8HfH1L1ml/ASAABAACQAAIgPYFwDcEgAAQAAgAASAABIAAEAACAAEgAGrtt30efr9ryTodIAAEgABAAAgAASAABIAAEAAIAAFQa9cKgJ4cKAAEgABAAAgAAbDg8LuuJet0kAAQAAIAASAABIAAEAACQAAgAARArV0nAHryTQEgAAQAAkAACIAFh9+1LVmngwWAABAACAAB0CS/EwACQAAIABAAAkAATO0QASAABAACQAAIgAWH328FgAAQACAABED9XC8AevItASAABAACQAAIgPYFwLcFgAAQAAgAAdAkN/R5+P1GAAgAAQACQAAIgKb6jgAQAAIAASAABMCCw++alqzToQJAAAgABIAAaJIbBYAAEAACAASAABAAUxsVAAJAACAABECT/L7Pw+9qASAABAAIAAEgAJrquwJAAAgABIAAEADtC4DDBIAAEAAIAAHQJPP6PPyuEgACQACAABAAAqCpDhcAAkAAIAAEQJPcJAB68j0BIAAEAAJAAAiABYfflQJAAAgAEAACQAA01RECQAAIAASAAGiSmwWAABAAAgAEgACY7uF3RUvW6UgBIAAEAAJAADTJLQKgJ98XAAJAACAABIAAEAACQAAIAASAAGh1AFzeknU6SgAIAAGAABAATXKrAOjJ0QJAAAgABIAAEAALDr9fCwABIABAAAgAAdBUxwgAASAAEAACoEluEwACQAAIABAAAmC6h9+vWrJOxwoAASAAEAACoEluFwDpHwPj4+Ov2moCAAQAAkAAIABAAFDrABhvyTod3886jY2NvWKrCQAQAFTJHwRAT04QAAJAACAABIAAEADTMjo6+rKtJgBAAFAlf+zz8PtlS9bpRAEgAAQAAkAACAABMC0jIyMv2WoCAAQAAqB+ThIAAkAAIAAEQJPc0efhd1lL1unkftZpeHj4RVtNAIAAQAAIAAQACABqffi1JQBO6Wed5s6d+4KtJgBAANCkw+/SlqzTqQLAY0AAIAAEgMNPAHgMeAwIAASAw6/W/uzw68lpHgMCQAAgABx+AkAATHednrfVBAAIAKrkTodfT04XAAJAACAABIAAWHD4/bwl63RGn+v0nK0mAEAAIAAEAAIABACz6i4B0JMz+1ynZ201AQACgCYFwCUtWacxASAABAACQAA0yd0CIEsAPGOrCQAQAAiA+jlLAAgAAYAAEAACYMHh9zMB0NM6PW2rCQAQAFTJPQKgJz8QAAJAACAABIAAaF8AnN3nOj1lqwkAEAA0KQB+KgAEgAAAASAA6udeAdCTH/a5Tk/aapXlzbBAAAiAGRx+F7dknc4RAM00d+7cF/q8b39iFWmyYwVAY90nALIEwBO2WiW9daJP8W+cbhlpsoMH8CBBANTZuQKgcebE/GwAZ9vXLCVN9rkBPEh2j9mua7bvmk93zQ5TzI5ds1PX7Nw1n5liPts1u3TN57rm81PMF7pm1675Ytfs1jW7TzFf6pr/6Zo9umZkitmza77cNV/pmmf8+jN9AMxfq+tMZea28fHxVycGIP6trV0iaLItJ6DdAfAj9zYLeQys7hJBk63lYU7LA+A89zZT7P8HXB5ousU81FnIAXiRAKDF+/8Qlwfa4D4Pd1ocAOe7t/Hrf9rqIA93WhwAF7i36dr7N7ss0BaresgzxSH4YwFAS/f+ji4LtMk8D3taGgAXureZtO8vdTmgbT7ooU/XQXhhS/b+ue5tSsPDwy/GfljB5YA2Ot4RwKQAOLQl+35f9zbz9/ywywBtVb59plcE8J/D8KMt2febu7eJffBDlwDabj1HAfMPxOVasueXcG+3fq9fGbOk4x+K4pOOhNYfiBe1bM/v515v7V4/M2YRxz4ssOno6OjLjodWHojPxyzfwj1/q3u/Vfv82aLzIWPAFMpnw57tqGjdwbhVS/f7mjH32AGt2ONH+ZU/9GajmEsdG40/FG+NWbvle33RmMPshkbu76uLzsd7L+1Ih+kri/mzMb+Iuav8VbFjpfaH4r0x58R83vZ+jbXmXyxOiZkX8ydTi7kj5tqY82KOiNkzZpuYZW1pGLzyyTOrxawzad7aNWtPmrd0zVqTZs1J8+auWWPSrN41q02aVSfNm7pmlUmzctesNGlW7JoVJs3QpFm+a5abNMt2zTKTZumuWWrSLDlpluiaxSfNnK5ZbNIs2jWLTBoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACABP4XrAfLDgdwwwAAAAAASUVORK5CYII=');\n      background-size:28px auto;\n      background-repeat: no-repeat;\n      background-position: center; \n      \n  }\n  .div-wrapper {\n      margin-top: 48px;\n      padding: 5px;\n  }\n  .ul-list-wrapper li{\n      float: left;\n      width: 50%;\n      height: 146px;\n      text-align: center;\n      padding: 50px 6%;\n      list-style: none;\n      \n  }\n  .border-bottom{\n      border-bottom: 1px solid rgb(207,207,207);\n  }\n  .ing {\n      height: 136px;\n      width: 187px;\n      padding: 1px;\n  }\n  tr {\n      padding: 15px;\n  }\n  td {\n      padding: 1px;\n      border: borderless;\n  }\n  "

/***/ }),

/***/ "./src/dash-board/dash-board.component.html":
/*!**************************************************!*\
  !*** ./src/dash-board/dash-board.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar-fixed-top nav-style\" style=\"background-color:#5fb06b;\">\n    <a class=\"nav-left-a\" (click)=\"popup()\">&nbsp;</a>\n    <span>New User Registration</span>\n    <a class=\"nav-right-a\" routerLink=\"/selection\"></a>\n  </nav>\n  \n  <div class=\"div-wrapper\">\n  <form>\n      <div class=\"form-group\">\n        <label for=\"formGroupExampleInput\">What kind of society are you a part of?\n          </label>\n        <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput\" placeholder=\"E.g. HKUST Rotaract\">\n      </div>\n      <div class=\"form-group\">\n          <label for=\"formGroupExampleInput\">How many events are you required to organize per year?\n            </label>\n          <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput2\"  placeholder=\"E.g. 12\">\n      </div>\n      <div class=\"form-group\">\n          <label for=\"formGroupExampleInput\">What kind of events do you have to organize?\n            </label>\n          <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput3\"  placeholder=\"\">\n      </div>\n      <div class=\"form-group\">\n          <label for=\"formGroupExampleInput\">What kind of products do you usually need for an event?\n            </label>\n          <input type=\"text\" class=\"form-control\" id=\"formGroupExampleInput3\"  placeholder=\"\">\n      </div>\n        \n        <p></p>\n        <div align =\"center\">\n      <button type=\"submit\" align =\"center\" class=\"btn btn-primary\">Submit</button>\n      </div>\n    </form>\n    </div>\n  \n   \n  <div class=\"popup-menu\" *ngIf=\"ispopup==true\" (click)=\"popup()\">\n\n      <ul class=\"ul-list-menu\" [class.ul-transition]=\"ispopup==true\" (click)=\"stop($event)\">\n        <div style=\"height: 131px; background-color: #5fb06b; padding:20px 0 0 0\">\n    \n          <img src=\"assets/img/matchitsmall.png\" alt=\"Angular Logo\">\n    \n        </div>\n        <li a routerLink=\"/canteen\">\n          <a>\n            <i class=\"fa fa-refresh\">&nbsp;&nbsp;&nbsp;</i>\n            Swap\n          </a>\n        </li>\n        <li a routerLink=\"/hocanteen\">\n          <a>\n            <i class=\"fa fa-handshake-o\">&nbsp;</i>\n            Sponsorship\n          </a>\n        </li>\n        <li a routerLink=\"/dash-board\">\n          <a>\n            <i class=\"fa fa-users\">&nbsp;&nbsp;</i>\n            New User Registration\n          </a>\n        </li>\n        <li a routerLink=\"/cyber-dash-board\">\n          <a>\n            <i class=\"fa fa-info\">&nbsp;&nbsp;</i>\n            About us\n          </a>\n        </li>\n      </ul>\n    </div>\n"

/***/ }),

/***/ "./src/dash-board/dash-board.component.ts":
/*!************************************************!*\
  !*** ./src/dash-board/dash-board.component.ts ***!
  \************************************************/
/*! exports provided: DashBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashBoardComponent", function() { return DashBoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _node_modules_angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/@angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashBoardComponent = /** @class */ (function () {
    function DashBoardComponent(router, http) {
        var _this = this;
        this.router = router;
        this.http = http;
        this.title = "System Monitoring Dashboard";
        this.systemData = "";
        this.ispopup = false;
        this.http.get("assets/getDashboard.json")
            .toPromise()
            .then(function (response) {
            console.log(response.json());
            _this.info = response.json().data.system_info;
            _this.time = response.json().data.system_time;
            _this.systemcheck = response.json().result.status;
        });
    }
    DashBoardComponent.prototype.ngOnInit = function () {
        // setTimeout(xaa.submitWait.unblockUI,200);
        xaa.submitWait.unblockUI();
    };
    DashBoardComponent.prototype.copyText = function (getinfo) {
        this.title = getinfo.system_name;
        this.systemData = getinfo.system_data;
    };
    DashBoardComponent.prototype.popup = function () {
        this.ispopup = !this.ispopup;
    };
    DashBoardComponent.prototype.stop = function (e) {
        e.stopPropagation();
    };
    DashBoardComponent.prototype.open_win = function () {
        window.open("http://rbk.intranet.hkbea.com/mobile/login.html");
    };
    DashBoardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dash-board',
            template: __webpack_require__(/*! ./dash-board.component.html */ "./src/dash-board/dash-board.component.html"),
            styles: [__webpack_require__(/*! ./dash-board.component.css */ "./src/dash-board/dash-board.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _node_modules_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], DashBoardComponent);
    return DashBoardComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/hocanteen/hocanteen.component.css":
/*!***********************************************!*\
  !*** ./src/hocanteen/hocanteen.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidebarleft {\r\n    width: 100px;\r\n    background-color: #f8f8f8;\r\n    position: absolute;\r\n    height: calc(100% - 50px);\r\n    height: -webkit-calc(100%-50px);\r\n    overflow-y: scroll;\r\n      \r\n  }\r\n  .sidebarleft::-webkit-scrollbar{width: 0;}\r\n  .sidebarright::-webkit-scrollbar{width: 0;}\r\n  .sidebarright {\r\n      width: calc(100% - 100px);\r\n      width: -webkit-calc(100% - 100px);\r\n      max-width: 668px;\r\n      min-width: 220px;\r\n      left: 100px;\r\n      position: absolute;\r\n      height: calc(100% - 50px);\r\n      overflow-y: scroll;\r\n      max-height: calc(100%-50px);\r\n  \r\n   \r\n  }\r\n  .right td{\r\n  color: #666;\r\n  height: 88px;\r\n  vertical-align: middle;\r\n  border-bottom: 1px solid #ddd;\r\n  border-top: 0px;\r\n  \r\n  \r\n  }\r\n  .left td{\r\n      text-align: center;\r\n      height: 74px;\r\n      vertical-align: middle;\r\n      border-top: 0px;\r\n      border-bottom: 1px solid #ddd;\r\n  }\r\n  tr{\r\n      display:table;\r\n      width:100%;\r\n      table-layout: fixed;\r\n      word-wrap: break-word;\r\n  }\r\n  .datetime{\r\n      text-align: center;\r\n      border-bottom: 1px solid #ddd;\r\n  }\r\n  .active td{\r\n      background-color: #fff;\r\n  }\r\n  .table .active{\r\n      background-color: #fff;\r\n  }\r\n  .forsoup{\r\n      \r\n      background-color: #ffb836;\r\n      \r\n  }\r\n  .popup-menu {\r\n      position: absolute;\r\n      top: 0;\r\n      left: 0;\r\n      width: 100%;\r\n      height: 100%;\r\n      background: rgba(172, 172, 172,.6);\r\n      overflow-y: scroll;\r\n      z-index: 1030;\r\n  }\r\n  a{\r\n      color: black;\r\n      text-decoration: none;\r\n  }\r\n  li{list-style:none;\r\n      padding: 15px;\r\n      border-bottom: 1px solid #dcdcdc;\r\n  }\r\n  .ul-list-menu{\r\n      position: absolute;\r\n      height: 100%;\r\n      width: 251px;\r\n      padding: 0 0;\r\n      margin: 0;\r\n      background: #fff;\r\n      transform: translateX(-100%);\r\n      -webkit-transform: translateX(-100%);\r\n      transition: -webkit-transform .6s;\r\n      transition: transform .6s;\r\n      transition: transform .6s, -webkit-transform .6s;\r\n      -webkit-transition: transform .6s;\r\n      \r\n  }\r\n  .ul-transition{\r\n      transform: translateX(0);\r\n      -webkit-transform: translateX(0);\r\n  }\r\n  img {\r\n     \r\n      margin: auto;\r\n      padding: 40px;\r\n      \r\n  }\r\n  .nav-style {\r\n      text-align: center;\r\n      height: 50px;\r\n      line-height: 50px;\r\n      padding: 0 50px;\r\n      font-size: 16px;\r\n      color: #fff;\r\n  }\r\n  .nav-left-a,\r\n  .nav-right-a {\r\n      position: absolute;\r\n      display: inline-block;\r\n      top: 0;\r\n      width: 50px;\r\n      height: 50px;\r\n  }\r\n  .nav-left-a{\r\n      left: 0;\r\n      padding: 10px 0;\r\n      background: url('menu-btn.png');\r\n      background-size:30px auto;\r\n      background-repeat: no-repeat;\r\n      background-position: center; \r\n  }\r\n  .nav-right-a {\r\n      right: 0;\r\n      background: url('data:image/png;base64,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ThoAx9hiAgAEAFX0nMt00gB4xBYTACAAqJp3DPBCd3HMYTH7FJ2Pza3bHBJzesx4zD8GHAEb2WoCAAQAVbL9AC5uj8Ws0sC1WT/m9wMKgO/bagIABABVcuAALm4HNXyNrhzAGl1mqwkAEABUyVkDuLit0PA1Wm0Aa3S3rSYAQABQJVf1efg92pJ1uq6fdRofH3/VVhMAIACokt/4ybYnRw/gtwBzbDcBAAKApvwG4OaWrNM3BIAAEAAIAAHQJFf0efjd1JJ12msAAYAAAAGAABAACAAQANQ3AOa1ZJ32FgACQAAgAARAk1wpAHqyjwAQAAIAASAABIAAEAACQAAgAARArfX7KoDft2SdvioABIAAQAAIAAHQvgD4mgAQAAIAASAABIAAEAACQAAgAARArV3d5+F3Y0vW6esCQAAIAASAABAAAkAACAABgAAQALV2jQDoyb4CQAAIAASAABAACw6/G1qyTvsJAAEgABAAAkAACAABIAAEAAJAANRavx8HfH1L1ml/ASAABAACQAAIgPYFwDcEgAAQAAgAASAABIAAEAACAAEgAGrtt30efr9ryTodIAAEgABAAAgAASAABIAAEAAIAAFQa9cKgJ4cKAAEgABAAAgAAbDg8LuuJet0kAAQAAIAASAABIAAEAACQAAgAARArV0nAHryTQEgAAQAAkAACIAFh9+1LVmngwWAABAACAAB0CS/EwACQAAIABAAAkAATO0QASAABAACQAAIgAWH328FgAAQACAABED9XC8AevItASAABAACQAAIgPYFwLcFgAAQAAgAAdAkN/R5+P1GAAgAAQACQAAIgKb6jgAQAAIAASAABMCCw++alqzToQJAAAgABIAAaJIbBYAAEAACAASAABAAUxsVAAJAACAABECT/L7Pw+9qASAABAAIAAEgAJrquwJAAAgABIAAEADtC4DDBIAAEAAIAAHQJPP6PPyuEgACQACAABAAAqCpDhcAAkAAIAAEQJPcJAB68j0BIAAEAAJAAAiABYfflQJAAAgAEAACQAA01RECQAAIAASAAGiSmwWAABAAAgAEgACY7uF3RUvW6UgBIAAEAAJAADTJLQKgJ98XAAJAACAABIAAEAACQAAIAASAAGh1AFzeknU6SgAIAAGAABAATXKrAOjJ0QJAAAgABIAAEAALDr9fCwABIABAAAgAAdBUxwgAASAAEAACoEluEwACQAAIABAAAmC6h9+vWrJOxwoAASAAEAACoEluFwDpHwPj4+Ov2moCAAQAAkAAIABAAFDrABhvyTod3886jY2NvWKrCQAQAFTJHwRAT04QAAJAACAABIAAEADTMjo6+rKtJgBAAFAlf+zz8PtlS9bpRAEgAAQAAkAACAABMC0jIyMv2WoCAAQAAqB+ThIAAkAAIAAEQJPc0efhd1lL1unkftZpeHj4RVtNAIAAQAAIAAQACABqffi1JQBO6Wed5s6d+4KtJgBAANCkw+/SlqzTqQLAY0AAIAAEgMNPAHgMeAwIAASAw6/W/uzw68lpHgMCQAAgABx+AkAATHednrfVBAAIAKrkTodfT04XAAJAACAABIAAWHD4/bwl63RGn+v0nK0mAEAAIAAEAAIABACz6i4B0JMz+1ynZ201AQACgCYFwCUtWacxASAABAACQAA0yd0CIEsAPGOrCQAQAAiA+jlLAAgAAYAAEAACYMHh9zMB0NM6PW2rCQAQAFTJPQKgJz8QAAJAACAABIAAaF8AnN3nOj1lqwkAEAA0KQB+KgAEgAAAASAA6udeAdCTH/a5Tk/aapXlzbBAAAiAGRx+F7dknc4RAM00d+7cF/q8b39iFWmyYwVAY90nALIEwBO2WiW9daJP8W+cbhlpsoMH8CBBANTZuQKgcebE/GwAZ9vXLCVN9rkBPEh2j9mua7bvmk93zQ5TzI5ds1PX7Nw1n5liPts1u3TN57rm81PMF7pm1675Ytfs1jW7TzFf6pr/6Zo9umZkitmza77cNV/pmmf8+jN9AMxfq+tMZea28fHxVycGIP6trV0iaLItJ6DdAfAj9zYLeQys7hJBk63lYU7LA+A89zZT7P8HXB5ousU81FnIAXiRAKDF+/8Qlwfa4D4Pd1ocAOe7t/Hrf9rqIA93WhwAF7i36dr7N7ss0BaresgzxSH4YwFAS/f+ji4LtMk8D3taGgAXureZtO8vdTmgbT7ooU/XQXhhS/b+ue5tSsPDwy/GfljB5YA2Ot4RwKQAOLQl+35f9zbz9/ywywBtVb59plcE8J/D8KMt2febu7eJffBDlwDabj1HAfMPxOVasueXcG+3fq9fGbOk4x+K4pOOhNYfiBe1bM/v515v7V4/M2YRxz4ssOno6OjLjodWHojPxyzfwj1/q3u/Vfv82aLzIWPAFMpnw57tqGjdwbhVS/f7mjH32AGt2ONH+ZU/9GajmEsdG40/FG+NWbvle33RmMPshkbu76uLzsd7L+1Ih+kri/mzMb+Iuav8VbFjpfaH4r0x58R83vZ+jbXmXyxOiZkX8ydTi7kj5tqY82KOiNkzZpuYZW1pGLzyyTOrxawzad7aNWtPmrd0zVqTZs1J8+auWWPSrN41q02aVSfNm7pmlUmzctesNGlW7JoVJs3QpFm+a5abNMt2zTKTZumuWWrSLDlpluiaxSfNnK5ZbNIs2jWLTBoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACABP4XrAfLDgdwwwAAAAAASUVORK5CYII=');\r\n      background-size:28px auto;\r\n      background-repeat: no-repeat;\r\n      background-position: center; \r\n      \r\n  }\r\n  .div-wrapper {\r\n      margin-top: 50px;\r\n  }\r\n  .ul-list-wrapper li{\r\n      float: left;\r\n      width: 50%;\r\n      height: 146px;\r\n      text-align: center;\r\n      padding: 50px 6%;\r\n      list-style: none;\r\n      \r\n  }\r\n  .border-bottom{\r\n      border-bottom: 1px solid rgb(207,207,207);\r\n  }\r\n  .ing {\r\n      height: 136px;\r\n      width: 187px;\r\n      padding: 1px;\r\n  }\r\n  tr {\r\n      padding: 15px;\r\n  }\r\n  td {\r\n      padding: 1px;\r\n      border: borderless;\r\n  }\r\n  "

/***/ }),

/***/ "./src/hocanteen/hocanteen.component.html":
/*!************************************************!*\
  !*** ./src/hocanteen/hocanteen.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar-fixed-top nav-style\" style=\"background-color:#5fb06b;\">\n    <a class=\"nav-left-a\" (click)=\"popup()\">&nbsp;</a>\n    <span>Sponsorship</span>\n    <a class=\"nav-right-a\" routerLink=\"/selection\"></a>\n  </nav>\n  \n  \n  <div class=\"div-wrapper\">\n    <table class=\"table-borderless\">\n      <tr>\n      <td><img class=\"ing\" src=\"assets/img/spon/spon1.png\"></td>\n      <td><img class=\"ing\" src=\"assets/img/spon/spon2.png\"></td>\n      </tr>\n      <tr>\n      <td>&nbsp;&nbsp;Water 770ml x 24</td>\n      <td>&nbsp;&nbsp;Meta Tea 500ml x 24</td>\n      </tr>\n      <tr>\n          <td>&nbsp;&nbsp;<i class=\"fa fa-map-marker\" style=\"color: #5fb063\"></i>&nbsp;Bonaqua HK&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class=\"fa fa-envelope-o\" style=\"color: #5fb063\"></i></td>\n          <td >&nbsp;&nbsp;<i class=\"fa fa-map-marker\" style=\"color: #5fb063\"></i>&nbsp;TAO TI&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class=\"fa fa-envelope-o\" style=\"color: #5fb063\"></i></td>\n          </tr>\n      <tr>\n      <td><img class=\"ing\" src=\"assets/img/spon/spon3.png\"></td>\n      </tr>\n      <tr>\n          <td>&nbsp;&nbsp;Sparkling water 410ml x 24</td>\n          </tr>\n      <tr>\n          <td>&nbsp;&nbsp;<i class=\"fa fa-map-marker\" style=\"color: #5fb063\"></i>&nbsp;SCHWEPPES&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class=\"fa fa-envelope-o\" style=\"color: #5fb063\"></i></td>\n      </tr>\n      \n    </table>\n  </div>\n  \n  \n  <div class=\"popup-menu\" *ngIf=\"ispopup==true\" (click)=\"popup()\">\n\n      <ul class=\"ul-list-menu\" [class.ul-transition]=\"ispopup==true\" (click)=\"stop($event)\">\n        <div style=\"height: 131px; background-color: #5fb06b; padding:20px 0 0 0\">\n    \n          <img src=\"assets/img/matchitsmall.png\" alt=\"Angular Logo\">\n    \n        </div>\n        <li a routerLink=\"/canteen\">\n          <a>\n            <i class=\"fa fa-refresh\">&nbsp;&nbsp;&nbsp;</i>\n            Swap\n          </a>\n        </li>\n        <li a routerLink=\"/hocanteen\">\n          <a>\n            <i class=\"fa fa-handshake-o\">&nbsp;</i>\n            Sponsorship\n          </a>\n        </li>\n        <li a routerLink=\"/dash-board\">\n          <a>\n            <i class=\"fa fa-users\">&nbsp;&nbsp;</i>\n            New User Registration\n          </a>\n        </li>\n        <li a routerLink=\"/cyber-dash-board\">\n          <a>\n            <i class=\"fa fa-info\">&nbsp;&nbsp;</i>\n            About us\n          </a>\n        </li>\n      </ul>\n    </div>"

/***/ }),

/***/ "./src/hocanteen/hocanteen.component.ts":
/*!**********************************************!*\
  !*** ./src/hocanteen/hocanteen.component.ts ***!
  \**********************************************/
/*! exports provided: HOcanteenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOcanteenComponent", function() { return HOcanteenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _node_modules_angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/@angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HOcanteenComponent = /** @class */ (function () {
    function HOcanteenComponent(router, http) {
        var _this = this;
        this.router = router;
        this.http = http;
        this.systemData = "";
        this.getremarks = "";
        this.selectedEL = "";
        this.dateTime = new Date();
        this.ispopup = false;
        this.htmlmeal = [];
        this.htmlsoup = [];
        this.http.get("assets/HOLunchMenu.json")
            .toPromise()
            .then(function (response) {
            console.log(response.json());
            _this.menu = response.json().data.lunch_menu;
            _this.remarks = response.json().data.remarks;
            _this.Day = _this.dateTime.getDate() > 10 ? _this.dateTime.getDate() + "" : "0" + _this.dateTime.getDate();
            _this.Month = _this.dateTime.getMonth() > 9 ? (_this.dateTime.getMonth() + 1) + "" : "0" + (_this.dateTime.getMonth() + 1);
            _this.today = _this.Day + "/" + _this.Month + "/" + _this.dateTime.getFullYear();
            for (var i = _this.menu.length; i > 0; i--) {
                var _target = _this.menu[i - 1];
                if (_target.date == _this.today) {
                    break;
                }
            }
            _this.selectedEL = _target;
            _this.systemData = _target;
            _this.htmlmeal = _target.meal_c[0].replace(/\n/gi, "<br/>");
            _this.htmlsoup = _target.soup_c.replace(/\n/gi, "<br/>");
        });
    }
    HOcanteenComponent.prototype.ngOnInit = function () {
        //  setTimeout(xaa.submitWait.unblockUI,200);
        xaa.submitWait.unblockUI();
    };
    HOcanteenComponent.prototype.popup = function () {
        this.ispopup = !this.ispopup;
    };
    HOcanteenComponent.prototype.copyText = function (getinfo) {
        this.systemData = getinfo;
        this.getremarks = "";
        this.selectedEL = getinfo;
        this.htmlmeal = getinfo.meal_c[0].replace(/\n/gi, "<br/>");
        this.htmlsoup = getinfo.soup_c.replace(/\n/gi, "<br/>");
    };
    HOcanteenComponent.prototype.copyRemarks = function () {
        this.systemData = "";
        this.getremarks = this.remarks;
        this.selectedEL = this.remarks;
    };
    HOcanteenComponent.prototype.stop = function (e) {
        e.stopPropagation();
    };
    HOcanteenComponent.prototype.open_win = function () {
        window.open("http://rbk.intranet.hkbea.com/mobile/login.html");
    };
    HOcanteenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hocanteen',
            template: __webpack_require__(/*! ./hocanteen.component.html */ "./src/hocanteen/hocanteen.component.html"),
            styles: [__webpack_require__(/*! ./hocanteen.component.css */ "./src/hocanteen/hocanteen.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _node_modules_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], HOcanteenComponent);
    return HOcanteenComponent;
}());



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ "./src/selection/selection.component.css":
/*!***********************************************!*\
  !*** ./src/selection/selection.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n    display:  block;\n    margin: auto;\n    padding: 70px;\n    \n}\n\n*{padding:0;margin: 0;}\n\n.ul-list-wrapper li{\n    float: left;\n    width: 50%;\n    height: 146px;\n    text-align: center;\n    padding: 50px 6%;\n    list-style: none;\n    \n}\n\n.ul-list-wrapper p{\ncolor: #666;\npadding-top: 6px;\n\n}\n\na{\n    text-decoration: none;\n}\n\ni{\n    font-size: 25px;\n}\n\n.border-bottom{\n    border-bottom: 1px solid rgb(207,207,207);\n}\n\n.border-right{\n    border-right: 1px solid rgb(207,207,207);\n}\n\n.ul-list-wrapper li:first-child{\n    border-right: 1px solid rgb(207,207,207);\n}\n\n.ul-list-wrapper li:active,\n.ul-list-wrapper li:hover{\n    opacity: .6;\n}\n\n.ul-list-wrapper li a{\n    display: inline-block;\n    /* color: #f04239; */\n}"

/***/ }),

/***/ "./src/selection/selection.component.html":
/*!************************************************!*\
  !*** ./src/selection/selection.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"height: 185px; background-color:#5fb06b\">\n    <img src=\"/assets/img/matchitsmall.png\" alt=\"Match Logo\">\n</div>\n\n\n<ul class=\"ul-list-wrapper border-bottom clearfix\">\n    <li>\n        <a style=\"color:#5fb06b\" (click)=\"goto('/canteen')\">\n            <i class=\"fa fa-refresh\"></i>\n            <p>Swap</p>\n        </a>\n    </li>\n    <li>\n        <a style=\"color:#5fb063\" (click)=\"goto('/hocanteen')\">\n            <i class=\"fa fa-handshake-o\"></i>\n            <p>Sponsorship</p>\n        </a>\n    </li>\n</ul>\n\n<ul class=\"ul-list-wrapper border-bottom clearfix\">\n    <li>\n        <a style=\"color: #5fb063\" (click)=\"goto('/dash-board')\">\n            <i class=\"fa fa-users\"></i>\n            <p>New User Registration</p>\n        </a>\n    </li>\n    <li>\n        <a style=\"color: #5fb063\"(click)=\"goto('/cyber-dash-board')\">\n            <i class=\"fa fa-bell\"></i>\n            <p>About us</p>\n        </a>\n    </li>\n</ul>\n\n"

/***/ }),

/***/ "./src/selection/selection.component.ts":
/*!**********************************************!*\
  !*** ./src/selection/selection.component.ts ***!
  \**********************************************/
/*! exports provided: SelectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectionComponent", function() { return SelectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _node_modules_angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/@angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SelectionComponent = /** @class */ (function () {
    function SelectionComponent(router, http) {
        //   this.http.get("assets/SystemMenu.json")
        //   .toPromise()
        //   .then(response => {
        //     console.log(response.json());
        this.router = router;
        this.http = http;
        this.test = "fa fa-cutlery";
        // })
    }
    SelectionComponent.prototype.goto = function (parm) {
        this.router.navigateByUrl(parm);
        xaa.submitWait.blockUI();
    };
    SelectionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-selection',
            template: __webpack_require__(/*! ./selection.component.html */ "./src/selection/selection.component.html"),
            styles: [__webpack_require__(/*! ./selection.component.css */ "./src/selection/selection.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _node_modules_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], SelectionComponent);
    return SelectionComponent;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/tszyin/my-appNew/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map