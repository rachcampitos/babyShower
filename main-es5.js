function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! aos */
    "./node_modules/aos/dist/aos.js");
    /* harmony import */


    var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
    /* harmony import */


    var _balloon_balloon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./balloon/balloon.component */
    "./src/app/balloon/balloon.component.ts");
    /* harmony import */


    var _cone_cone_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./cone/cone.component */
    "./src/app/cone/cone.component.ts");
    /* harmony import */


    var _pointer_pointer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pointer/pointer.component */
    "./src/app/pointer/pointer.component.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(overlayContainer) {
        _classCallCheck(this, AppComponent);

        this.overlayContainer = overlayContainer;
        this.title = 'prototype';
        this.theme = localStorage.getItem('theme') || 'light';
        this.body = document.body;
        this.lightActive = true;
        this.darkActive = false;
        this.baseURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseURL;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          aos__WEBPACK_IMPORTED_MODULE_1__["init"]();
          document.body.classList.add(this.theme); // Top top button

          var toTop = document.querySelector('.to-top');
          window.addEventListener('scroll', function () {
            window.pageYOffset > 100 ? toTop.classList.add('enabled') : toTop.classList.remove('enabled');
          });
          this.changeTheme(this.theme);
        }
      }, {
        key: "changeTheme",
        value: function changeTheme(theme) {
          this.theme = theme;
          this.body.classList.add(this.theme);
          this.componentCssClass = theme;

          if (theme === 'light') {
            this.body.classList.replace('dark', 'light');
            localStorage.setItem('theme', 'light');
          } else {
            this.body.classList.replace('light', 'dark');
            localStorage.setItem('theme', 'dark');
          }

          var isLightTheme = theme === 'light';
          this.darkActive = isLightTheme ? true : false;
          this.lightActive = isLightTheme ? false : true;
        }
      }, {
        key: "toggleMenu",
        value: function toggleMenu() {
          var action = document.querySelector('.action');
          action.classList.toggle('active');
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayContainer"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      hostVars: 2,
      hostBindings: function AppComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_click_HostBindingHandler($event) {
            return ctx.ngOnInit($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.componentCssClass);
        }
      },
      decls: 45,
      vars: 3,
      consts: [[1, "container-fluid"], [1, "row"], [1, "col"], ["alt", "", 1, "flags", 3, "src"], [1, "row", "main-message-container"], [1, "col", "text-center"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "title-page"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "fecha"], ["data-aos", "fade-up", "data-aos-duration", "1000", 1, "hora"], [1, "lugar"], ["data-aos", "fade-up", "data-aos-duration", "1000"], ["data-aos", "fade-up", "data-aos-duration", "1000", "alt", "", 1, "meet", 3, "src"], ["href", "https://meet.google.com/tsr-tosk-azw", "target", "_blank", 1, "btn", "videollamada"], ["data-aos", "zoom-in", "data-aos-duration", "1000", 1, "live"], [1, "icon", "ion-ios-videocam"], [1, "enlace"], [1, "row", "gift-container"], ["href", "https://www.noviosfalabella.com.pe/novios-pe/public/inicio.do", "target", "_blank", 1, "btn", "regalo"], ["alt", "", 1, "gift", 3, "src"], [1, "mensaje"], [1, "pie"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-balloon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-cone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Mi Baby Shower ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Leonardo ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "05/12/20");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "7:00 PM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h2", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Lugar: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Google Meet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "app-pointer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h1", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "PRESIONA AQU\xCD ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Escoge un regalo presionando aqu\xED");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Ingresa el c\xF3digo 629667-11 (no olvides poner el gui\xF3n) en la secci\xF3n \"Haz un Regalo\" ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Maria Claudia y Ra\xFAl");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx.baseURL, "assets/flags.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx.baseURL, "assets/meet.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "", ctx.baseURL, "assets/gift.svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        }
      },
      directives: [_balloon_balloon_component__WEBPACK_IMPORTED_MODULE_4__["BalloonComponent"], _cone_cone_component__WEBPACK_IMPORTED_MODULE_5__["ConeComponent"], _pointer_pointer_component__WEBPACK_IMPORTED_MODULE_6__["PointerComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_3__["OverlayContainer"]
        }];
      }, {
        componentCssClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
          args: ['class']
        }],
        ngOnInit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['document:click', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _hero1_hero1_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./hero1/hero1.component */
    "./src/app/hero1/hero1.component.ts");
    /* harmony import */


    var _balloon_balloon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./balloon/balloon.component */
    "./src/app/balloon/balloon.component.ts");
    /* harmony import */


    var _cone_cone_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./cone/cone.component */
    "./src/app/cone/cone.component.ts");
    /* harmony import */


    var _pointer_pointer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./pointer/pointer.component */
    "./src/app/pointer/pointer.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _hero1_hero1_component__WEBPACK_IMPORTED_MODULE_5__["Hero1Component"], _balloon_balloon_component__WEBPACK_IMPORTED_MODULE_6__["BalloonComponent"], _cone_cone_component__WEBPACK_IMPORTED_MODULE_7__["ConeComponent"], _pointer_pointer_component__WEBPACK_IMPORTED_MODULE_8__["PointerComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _hero1_hero1_component__WEBPACK_IMPORTED_MODULE_5__["Hero1Component"], _balloon_balloon_component__WEBPACK_IMPORTED_MODULE_6__["BalloonComponent"], _cone_cone_component__WEBPACK_IMPORTED_MODULE_7__["ConeComponent"], _pointer_pointer_component__WEBPACK_IMPORTED_MODULE_8__["PointerComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_3__["MatSlideToggleModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/balloon/balloon.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/balloon/balloon.component.ts ***!
    \**********************************************/

  /*! exports provided: BalloonComponent */

  /***/
  function srcAppBalloonBalloonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BalloonComponent", function () {
      return BalloonComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BalloonComponent = /*#__PURE__*/function () {
      function BalloonComponent() {
        _classCallCheck(this, BalloonComponent);
      }

      _createClass(BalloonComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BalloonComponent;
    }();

    BalloonComponent.ɵfac = function BalloonComponent_Factory(t) {
      return new (t || BalloonComponent)();
    };

    BalloonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BalloonComponent,
      selectors: [["app-balloon"]],
      decls: 10,
      vars: 0,
      consts: [["width", "118", "height", "167", "viewBox", "0 0 118 167", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["id", "balloons"], ["id", "balloon-2"], ["id", "Vector", "d", "M61.3469 43.196C55.5959 33.64 50.039 28.572 38.903 26.891C31.142 25.72 21.736 28.395 15.318 32.786C3.94795 38.683 1.82296 55.786 4.96596 66.687C8.85396 80.16 21.296 95.285 35.441 98.859C35.4 100.207 35.2699 101.537 35.4209 102.857C34.7399 104.068 34.272 105.435 33.741 106.685C33.318 107.679 33.779 109.048 35.065 108.996C37.046 108.912 38.896 108.264 40.844 107.98C42.052 107.806 42.23 106.168 41.521 105.416C39.606 103.389 39 100.887 38.462 98.228C38.451 98.179 38.423 98.148 38.409 98.103C46.94 90.535 56.3789 85.318 61.9339 74.915C67.7669 63.993 67.7669 53.866 61.3469 43.196Z", "fill", "#FCA7AD"], ["id", "Vector_2", "d", "M67.933 55.315C65.154 36.823 48.868 22.173 29.479 25.219C11.177 28.094 -1.45902 43.733 1.40198 62.518C2.81198 71.788 6.77596 78.612 12.964 85.467C16.673 89.578 22.079 95.508 27.871 97.867C27.909 97.887 27.952 97.896 27.991 97.912C28.792 98.23 31.812 99.476 32.456 99.828C33.214 100.24 33.986 100.584 34.783 100.842C33.673 103.61 31.804 106.102 30.837 108.906C30.413 110.136 31.672 110.945 32.724 110.793C34.256 110.574 35.796 110.432 37.336 110.283C35.717 113.123 33.746 116.312 34.648 119.595C36.247 125.415 40.265 129.837 36.274 135.988C30.336 145.142 39.417 154.758 37.616 164.793C37.268 166.727 40.224 167.553 40.574 165.607C41.233 161.935 41.437 158.576 40.622 154.914C39.274 148.844 35.055 143.641 38.926 137.537C40.426 135.17 42.5 131.953 41.749 128.951C41.267 127.019 40.541 125.433 39.604 123.66C37.11 118.939 38.624 114.59 40.803 110.344C40.871 110.209 40.885 110.08 40.915 109.949C41.778 109.904 42.64 109.939 43.482 110.217C44.694 110.621 46.016 109.057 45.214 107.963C43.264 105.309 41.067 102.858 39.014 100.307C52.6 86.573 71.347 78.04 67.933 55.315ZM40.517 106.907C40.019 106.94 39.522 106.989 39.029 107.05C37.605 107.222 36.178 107.359 34.755 107.507C35.528 105.96 36.441 104.464 37.194 102.905C38.291 104.247 39.415 105.565 40.517 106.907ZM36.987 98.001C36.755 97.968 36.528 97.985 36.307 98.052C34.294 97.484 29.486 95.206 28.716 95.019C23.243 93.685 18.524 86.882 15.132 83.298C9.66496 77.517 6.23598 71.411 4.64798 63.599C0.734978 44.361 15.124 28.463 34.107 28.016C53.126 27.566 65.356 44.277 65.182 61.996C65.012 79.438 47.8 87.224 36.987 98.001Z", "fill", "#303E5C"], ["id", "Vector_3", "d", "M49.0029 41.728C47.6309 40.296 45.463 42.47 46.833 43.898C53.595 50.949 51.943 60.81 49.125 69.261C48.497 71.144 51.461 71.945 52.083 70.077C55.278 60.501 56.5419 49.587 49.0029 41.728Z", "fill", "#303E5C"], ["id", "balloon-1"], ["id", "Vector_4", "d", "M110.848 18.567C105.097 9.011 99.54 3.943 88.404 2.261C80.644 1.091 71.237 3.766 64.819 8.155C53.449 14.052 51.324 31.155 54.468 42.057C58.355 55.528 70.797 70.655 84.942 74.229C84.901 75.577 84.771 76.905 84.922 78.225C84.241 79.436 83.773 80.805 83.242 82.055C82.819 83.049 83.281 84.418 84.566 84.364C86.547 84.28 88.397 83.634 90.345 83.35C91.553 83.176 91.731 81.536 91.023 80.786C89.107 78.759 88.501 76.257 87.963 73.598C87.953 73.549 87.924 73.518 87.911 73.471C96.441 65.905 105.88 60.686 111.435 50.285C117.268 39.364 117.268 29.238 110.848 18.567Z", "fill", "#FDB151"], ["id", "Vector_5", "d", "M117.434 30.687C114.655 12.195 98.369 -2.45597 78.98 0.591025C60.678 3.46603 48.042 19.104 50.903 37.89C52.313 47.16 56.277 53.982 62.465 60.839C66.175 64.95 71.58 70.88 77.372 73.239C77.41 73.259 77.453 73.266 77.492 73.284C78.293 73.602 81.314 74.848 81.957 75.198C82.716 75.61 83.487 75.956 84.284 76.214C83.174 78.982 81.305 81.472 80.339 84.278C79.914 85.508 81.173 86.315 82.226 86.165C83.757 85.946 85.298 85.804 86.837 85.655C85.218 88.495 83.247 91.684 84.149 94.967C85.749 100.787 89.766 105.207 85.775 111.358C79.837 120.514 88.918 130.129 87.117 140.165C86.769 142.097 89.725 142.925 90.075 140.979C90.734 137.307 90.938 133.948 90.123 130.284C88.776 124.216 84.556 119.011 88.427 112.909C89.927 110.542 92.001 107.325 91.25 104.323C90.768 102.391 90.042 100.805 89.105 99.032C86.612 94.311 88.126 89.962 90.304 85.716C90.373 85.581 90.386 85.452 90.416 85.321C91.279 85.276 92.141 85.311 92.983 85.589C94.195 85.993 95.517 84.429 94.715 83.335C92.765 80.681 90.568 78.23 88.515 75.679C102.102 61.942 120.848 53.411 117.434 30.687ZM90.018 82.276C89.52 82.311 89.023 82.36 88.53 82.419C87.106 82.593 85.679 82.728 84.256 82.876C85.029 81.331 85.943 79.835 86.696 78.276C87.792 79.618 88.916 80.937 90.018 82.276ZM86.488 73.372C86.256 73.339 86.029 73.356 85.808 73.423C83.796 72.855 78.987 70.577 78.218 70.39C72.744 69.054 68.025 62.253 64.634 58.669C59.166 52.888 55.738 46.782 54.149 38.97C50.236 19.732 64.625 3.83402 83.609 3.38602C102.627 2.93602 114.857 19.648 114.683 37.366C114.513 54.81 97.301 62.595 86.488 73.372Z", "fill", "#303E5C"], ["id", "Vector_6", "d", "M98.504 17.099C97.132 15.668 94.965 17.841 96.334 19.269C103.097 26.319 101.444 36.181 98.626 44.632C97.998 46.515 100.962 47.316 101.584 45.448C104.779 35.87 106.043 24.958 98.504 17.099Z", "fill", "#303E5C"]],
      template: function BalloonComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "g", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "g", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["#balloon-1[_ngcontent-%COMP%] {\n  -webkit-animation: balloon-1 15s linear infinite;\n          animation: balloon-1 15s linear infinite;\n  transform-origin: center;\n  transform-box: fill-box;\n}\n#balloon-2[_ngcontent-%COMP%] {\n  -webkit-animation: balloon-2 15s linear infinite;\n          animation: balloon-2 15s linear infinite;\n  transform-origin: center;\n  transform-box: fill-box;\n}\n@-webkit-keyframes balloon-1 {\n  0% {\n    transform: translateY(40%);\n    opacity: 1;\n  }\n  50% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n  100% {\n    transform: translateY(40%);\n    opacity: 1;\n  }\n}\n@keyframes balloon-1 {\n  0% {\n    transform: translateY(40%);\n    opacity: 1;\n  }\n  50% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n  100% {\n    transform: translateY(40%);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes balloon-2 {\n  0% {\n    transform: translateY(0%);\n    opacity: 1;\n  }\n  50% {\n    transform: translateY(40%);\n    opacity: 1;\n  }\n  100% {\n    transform: translateY(0%);\n    opacity: 1;\n  }\n}\n@keyframes balloon-2 {\n  0% {\n    transform: translateY(0%);\n    opacity: 1;\n  }\n  50% {\n    transform: translateY(40%);\n    opacity: 1;\n  }\n  100% {\n    transform: translateY(0%);\n    opacity: 1;\n  }\n}\n@media only screen and (max-width: 1920px) {\n  svg[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 590px;\n    height: 800px;\n    top: 6%;\n    left: 45%;\n    opacity: 0.3;\n  }\n}\n@media only screen and (max-width: 1080px) {\n  svg[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 590px;\n    height: 800px;\n    top: 6%;\n    left: 45%;\n    opacity: 0.3;\n  }\n}\n@media only screen and (max-width: 750px) {\n  svg[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 505px;\n    height: 698px;\n    top: 6%;\n    left: 39%;\n    opacity: 0.3;\n  }\n}\n@media only screen and (max-width: 720px) {\n  svg[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 505px;\n    height: 698px;\n    top: 6%;\n    left: 39%;\n    opacity: 0.3;\n  }\n}\n@media only screen and (max-width: 411px) {\n  svg[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 350px;\n    height: 350px;\n    top: 10%;\n    left: 30%;\n    opacity: 0.3;\n  }\n}\n@media only screen and (max-width: 375px) {\n  svg[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 350px;\n    height: 350px;\n    top: 10%;\n    left: 30%;\n    opacity: 0.3;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFsbG9vbi9iYWxsb29uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnREFBd0M7VUFBeEMsd0NBQXdDO0VBQ3hDLHdCQUF3QjtFQUN4Qix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGdEQUF3QztVQUF4Qyx3Q0FBd0M7RUFDeEMsd0JBQXdCO0VBQ3hCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0U7SUFDRSwwQkFBMEI7SUFDMUIsVUFBVTtFQUNaO0VBQ0E7SUFDRSx3QkFBd0I7SUFDeEIsVUFBVTtFQUNaO0VBQ0E7SUFDRSwwQkFBMEI7SUFDMUIsVUFBVTtFQUNaO0FBQ0Y7QUFiQTtFQUNFO0lBQ0UsMEJBQTBCO0lBQzFCLFVBQVU7RUFDWjtFQUNBO0lBQ0Usd0JBQXdCO0lBQ3hCLFVBQVU7RUFDWjtFQUNBO0lBQ0UsMEJBQTBCO0lBQzFCLFVBQVU7RUFDWjtBQUNGO0FBQ0E7RUFDRTtJQUNFLHlCQUF5QjtJQUN6QixVQUFVO0VBQ1o7RUFDQTtJQUNFLDBCQUEwQjtJQUMxQixVQUFVO0VBQ1o7RUFDQTtJQUNFLHlCQUF5QjtJQUN6QixVQUFVO0VBQ1o7QUFDRjtBQWJBO0VBQ0U7SUFDRSx5QkFBeUI7SUFDekIsVUFBVTtFQUNaO0VBQ0E7SUFDRSwwQkFBMEI7SUFDMUIsVUFBVTtFQUNaO0VBQ0E7SUFDRSx5QkFBeUI7SUFDekIsVUFBVTtFQUNaO0FBQ0Y7QUFDQTtFQUNFO0lBQ0Usa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2IsT0FBTztJQUNQLFNBQVM7SUFDVCxZQUFZO0VBQ2Q7QUFDRjtBQUNBO0VBQ0U7SUFDRSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixPQUFPO0lBQ1AsU0FBUztJQUNULFlBQVk7RUFDZDtBQUNGO0FBQ0E7RUFDRTtJQUNFLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLE9BQU87SUFDUCxTQUFTO0lBQ1QsWUFBWTtFQUNkO0FBQ0Y7QUFDQTtFQUNFO0lBQ0Usa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2IsT0FBTztJQUNQLFNBQVM7SUFDVCxZQUFZO0VBQ2Q7QUFDRjtBQUNBO0VBQ0U7SUFDRSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixRQUFRO0lBQ1IsU0FBUztJQUNULFlBQVk7RUFDZDtBQUNGO0FBQ0E7RUFDRTtJQUNFLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLFFBQVE7SUFDUixTQUFTO0lBQ1QsWUFBWTtFQUNkO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9iYWxsb29uL2JhbGxvb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNiYWxsb29uLTEge1xuICBhbmltYXRpb246IGJhbGxvb24tMSAxNXMgbGluZWFyIGluZmluaXRlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4gIHRyYW5zZm9ybS1ib3g6IGZpbGwtYm94O1xufVxuI2JhbGxvb24tMiB7XG4gIGFuaW1hdGlvbjogYmFsbG9vbi0yIDE1cyBsaW5lYXIgaW5maW5pdGU7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgdHJhbnNmb3JtLWJveDogZmlsbC1ib3g7XG59XG5Aa2V5ZnJhbWVzIGJhbGxvb24tMSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNDAlKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDQwJSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQGtleWZyYW1lcyBiYWxsb29uLTIge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDQwJSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTkyMHB4KSB7XG4gIHN2ZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA1OTBweDtcbiAgICBoZWlnaHQ6IDgwMHB4O1xuICAgIHRvcDogNiU7XG4gICAgbGVmdDogNDUlO1xuICAgIG9wYWNpdHk6IDAuMztcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDgwcHgpIHtcbiAgc3ZnIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDU5MHB4O1xuICAgIGhlaWdodDogODAwcHg7XG4gICAgdG9wOiA2JTtcbiAgICBsZWZ0OiA0NSU7XG4gICAgb3BhY2l0eTogMC4zO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gIHN2ZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA1MDVweDtcbiAgICBoZWlnaHQ6IDY5OHB4O1xuICAgIHRvcDogNiU7XG4gICAgbGVmdDogMzklO1xuICAgIG9wYWNpdHk6IDAuMztcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MjBweCkge1xuICBzdmcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogNTA1cHg7XG4gICAgaGVpZ2h0OiA2OThweDtcbiAgICB0b3A6IDYlO1xuICAgIGxlZnQ6IDM5JTtcbiAgICBvcGFjaXR5OiAwLjM7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDExcHgpIHtcbiAgc3ZnIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDM1MHB4O1xuICAgIGhlaWdodDogMzUwcHg7XG4gICAgdG9wOiAxMCU7XG4gICAgbGVmdDogMzAlO1xuICAgIG9wYWNpdHk6IDAuMztcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzVweCkge1xuICBzdmcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMzUwcHg7XG4gICAgaGVpZ2h0OiAzNTBweDtcbiAgICB0b3A6IDEwJTtcbiAgICBsZWZ0OiAzMCU7XG4gICAgb3BhY2l0eTogMC4zO1xuICB9XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BalloonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-balloon',
          templateUrl: './balloon.component.html',
          styleUrls: ['./balloon.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/cone/cone.component.ts":
  /*!****************************************!*\
    !*** ./src/app/cone/cone.component.ts ***!
    \****************************************/

  /*! exports provided: ConeComponent */

  /***/
  function srcAppConeConeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConeComponent", function () {
      return ConeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ConeComponent = /*#__PURE__*/function () {
      function ConeComponent() {
        _classCallCheck(this, ConeComponent);
      }

      _createClass(ConeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ConeComponent;
    }();

    ConeComponent.ɵfac = function ConeComponent_Factory(t) {
      return new (t || ConeComponent)();
    };

    ConeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ConeComponent,
      selectors: [["app-cone"]],
      decls: 28,
      vars: 0,
      consts: [["width", "166", "height", "171", "viewBox", "0 0 166 171", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["id", "cone"], ["id", "ribbon-3"], ["id", "Vector", "d", "M93.2948 28.5062C92.3693 27.8179 90.4721 28.2424 90.7317 29.7172C91.896 36.3477 92.5961 41.2111 87.9511 46.9129C87.7748 47.1296 87.5828 47.3308 87.3982 47.5373C87.2115 47.7163 87.0241 47.8947 86.8388 48.0722C86.4474 47.9143 85.9953 47.9066 85.5292 48.1899C85.1373 48.4284 84.7677 48.6751 84.4105 48.9276C80.6515 51.1384 78.0508 54.6591 78.0582 59.0509C77.729 62.7376 79.96 66.7512 80.5494 70.5624C80.2702 72.6623 79.7558 74.7581 78.8591 76.8691C78.427 77.0388 78.1871 77.3599 78.1069 77.7326C77.4744 78.1904 76.7196 78.5953 75.8089 78.937C73.9582 79.6319 74.8769 82.5619 76.7304 81.8655C78.5296 81.1902 79.8876 80.3806 80.9243 79.4713C86.4165 77.6836 85.9742 70.4281 84.2902 65.859C84.1898 65.5843 84.0301 65.3882 83.8503 65.2292C83.5937 62.8403 83.3864 60.2586 83.5999 57.8872C84.0309 56.1558 84.8341 54.4933 86.2489 52.9617C92.6134 46.0668 104.591 36.9053 93.2948 28.5062Z", "fill", "#EC2A5E"], ["id", "Vector_2", "d", "M88.5172 27.6128C87.1746 28.0988 87.2931 29.7439 88.1557 30.3765C88.0926 30.6069 88.0759 30.8604 88.1347 31.1365C88.9284 34.8846 89.082 37.7443 88.3977 41.5383C87.434 46.8786 82.6152 47.9702 79.0687 50.4885C77.3943 51.6781 75.936 54.1626 75.9008 56.2421C75.8131 61.4279 82.4596 76.5611 73.5415 76.4593C72.7446 76.4493 72.3093 76.9442 72.1844 77.5343C71.9545 77.9575 71.8803 78.4695 72.1484 79.0029C72.94 80.6011 73.5744 82.2579 74.0523 83.9726C74.2857 84.7081 75.2077 85.3081 75.9773 84.9761C80.7913 82.8986 88.6748 79.744 88.0569 73.1109C87.7485 69.8071 86.8056 66.9484 85.6711 63.8335C82.6534 55.549 89.1395 52.1057 94.8171 47.8927C103.086 41.758 101.397 22.9601 88.5172 27.6128ZM96.8845 39.1118C96.3379 44.1783 91.3706 46.6109 87.722 49.1108C85.3708 50.7207 82.5785 53.2575 81.9493 56.1808C81.2895 59.2437 81.7749 61.809 82.7442 64.7578C83.2812 66.391 83.9133 67.9864 84.4343 69.6268C86.7211 76.8029 81.3604 79.3552 76.4498 81.4544C76.206 80.7512 75.9425 80.0653 75.6594 79.3847C83.0433 78.1949 81.3738 69.4362 80.0333 63.2737C79.1154 59.0538 77.5463 55.3315 82.2095 52.021C84.7659 50.2058 87.1461 49.4094 89.2377 46.9768C93.0203 42.5773 92.1539 35.3638 91.0639 30.2156C91.0594 30.1953 91.0508 30.178 91.0456 30.1585C96.1026 29.5083 97.2474 35.7526 96.8845 39.1118Z", "fill", "#303E5C"], ["id", "ribbon-2"], ["id", "Vector_3", "d", "M142.677 56.5988C142.634 56.734 142.503 56.8579 142.372 57.003C142.364 57.0119 142.363 57.0233 142.354 57.0336C141.46 56.8677 140.441 57.3747 140.549 58.5404C141.383 67.5367 127.201 71.8897 120.417 73.6675C113.797 75.4019 108.179 76.6974 104.316 82.3214C103.12 82.248 102.14 83.842 103.177 84.9878L105.261 86.8777C105.964 87.5159 106.796 87.3147 107.319 86.7965C107.854 86.6663 108.3 86.2658 108.498 85.6615C109.168 83.6267 111.158 81.9538 112.974 80.9577C113.725 80.5452 113.82 79.8375 113.572 79.2323C124.148 74.4746 141.18 73.1224 143.426 62.2719C144.008 62.2817 144.62 62.0027 144.83 61.4452C145.41 59.9147 145.944 58.5046 145.713 56.8387C145.467 55.0716 143.214 54.9217 142.677 56.5988Z", "fill", "#FDB151"], ["id", "Vector_4", "d", "M139.555 54.3865C137.821 54.1093 137.122 56.4612 138.382 57.1948C141.901 64.9232 125.223 69.2825 120.56 70.7034C112.633 73.1175 104.629 75.1184 101.22 83.4189C101.15 83.588 101.138 83.7472 101.125 83.9071C100.498 84.7221 100.64 86.1318 101.948 86.354C103.439 86.6077 104.57 87.1521 105.271 88.5423C105.466 88.9286 105.747 89.1265 106.05 89.2201C106.72 89.9336 107.998 90.0759 108.507 88.9283C115.769 72.537 143.373 79.1647 147.117 60.3079C147.958 59.8485 148.421 58.6528 147.483 57.8398C145.201 55.8577 142.513 54.8575 139.555 54.3865ZM106.867 85.5209C106.185 84.7995 105.36 84.2436 104.43 83.8726C109.218 74.438 124.032 73.4821 133.009 69.2894C137.929 66.9908 142.557 63.253 141.762 58.0884C142.616 58.3766 143.432 58.7488 144.206 59.2321C141.345 75.3465 115.308 72.1489 106.867 85.5209Z", "fill", "#303E5C"], ["id", "ribbon-1"], ["id", "Vector_5", "d", "M121.53 31.7304C121.035 31.8112 120.544 31.9187 120.058 32.0521C118.961 32.3527 118.606 33.9211 119.488 34.6526C124.589 38.8837 119.474 46.8618 114.537 48.7995C113.619 49.16 113.389 50.0732 113.619 50.806C113.313 51.4856 113.393 52.39 114.187 52.9063C117.911 55.3307 122.53 49.7952 124.494 47.2577C128.215 42.4513 127.1 38.442 125.173 33.6122C125.225 33.0759 125.045 32.5077 124.575 32.1356C124.536 32.0391 124.497 31.9454 124.457 31.8489C123.877 30.4231 121.983 30.6804 121.53 31.7304Z", "fill", "#80CDD7"], ["id", "Vector_6", "d", "M122.28 29.204C120.418 29.4945 118.568 29.6944 116.909 30.7253C115.702 31.4737 116.216 32.9955 117.215 33.4275C119.085 36.8697 120.413 40.2718 117.762 43.79C116.062 46.0448 113.287 47.2272 111.671 49.5396C110.847 50.0045 110.514 51.3177 111.371 52.0837C111.389 52.1013 111.409 52.1158 111.428 52.1333C111.497 52.1901 111.541 52.2581 111.624 52.3064C113.205 53.2254 114.454 54.271 115.796 55.4742C116.463 56.0732 117.345 55.936 117.964 55.3692C122.293 51.4096 127.902 48.6922 129.22 42.517C130.252 37.6816 126.92 33.001 124.891 28.9224C124.255 27.6408 122.748 28.1617 122.28 29.204ZM126.215 41.884C125.832 46.4994 120.445 49.4905 116.855 52.3288C116.144 51.7271 115.415 51.163 114.656 50.6329C115.777 49.2757 117.411 48.231 118.705 47.1308C120.391 45.6936 121.442 44.0013 122.152 41.9264C123.217 38.8204 121.764 35.4365 120.263 32.6148C121.184 32.3682 122.158 32.2556 123.11 32.1284C124.752 35.1987 126.517 38.2637 126.215 41.884Z", "fill", "#303E5C"], ["id", "cone-1"], ["id", "Vector_7", "d", "M101.803 107.151C101.794 107.158 101.786 107.164 101.777 107.17C98.8574 100.829 89.875 97.0847 84.1144 94.6004C74.8999 90.625 64.0687 88.2534 54.3327 91.5705C52.9845 92.0299 53.0956 93.6563 53.9542 94.3054C53.7192 96.3833 54.0505 98.3862 54.4777 100.556C55.7253 106.905 55.8989 112.759 55.6447 119.219C55.148 131.798 55.5941 144.387 54.7442 156.955C54.6587 158.221 55.8864 158.6 56.8147 158.198C57.4996 158.552 58.368 158.446 58.7306 157.519C60.3187 153.458 63.8984 150.633 67.0368 147.76C71.4725 143.702 75.015 138.635 78.8679 134.036C82.4773 129.731 86.4376 125.914 90.5608 122.112C94.3467 118.623 97.4857 114.412 101.497 111.183C101.785 111.066 102.047 110.876 102.24 110.624C102.636 110.326 103.029 110.02 103.446 109.743C105.096 108.647 103.45 106.056 101.803 107.151Z", "fill", "#80CDD7"], ["id", "Vector_8", "d", "M55.6442 132.741C54.6176 132.898 54.1767 133.83 54.2751 134.63C53.6552 135.578 54.5553 137.313 56.0612 137.01C61.0601 136.009 65.4226 139.932 68.994 142.861C69.4829 143.261 70.3 143.453 70.8474 143.02C71.8971 142.19 72.2183 141.836 72.9421 140.711C73.3296 140.106 73.0302 139.351 72.6031 138.882C68.3057 134.175 61.978 131.777 55.6442 132.741Z", "fill", "#EC2A5E"], ["id", "Vector_9", "d", "M55.1175 115.071C53.3033 115.832 54.2144 118.764 56.0383 117.999C65.1286 114.187 79.1964 120.084 82.4313 129.558C83.0707 131.433 85.9976 130.51 85.3591 128.637C81.6127 117.663 65.8014 110.592 55.1175 115.071Z", "fill", "#EC2A5E"], ["id", "Vector_10", "d", "M90.3547 107.78C86.3097 103.415 81.1467 100.279 74.9837 98.5166C69.1381 96.8435 59.5476 95.9172 54.3596 99.6872C52.7638 100.847 54.4032 103.442 56.0038 102.279C60.3899 99.0923 68.0316 100.387 72.9619 101.218C77.5438 101.99 81.7194 104.083 85.2236 107.012C84.9967 107.659 85.1382 108.411 85.9472 108.786C86.8923 109.222 87.7584 109.72 88.5509 110.278C90.5359 112.542 92.1977 115.089 93.4468 117.794C94.2748 119.588 96.7705 118.836 96.3746 116.874C95.575 112.904 93.4403 109.936 90.3547 107.78Z", "fill", "#EC2A5E"], ["id", "Vector_11", "d", "M81.7412 91.6514C77.0595 89.908 72.2908 88.6744 67.3387 88.0061C61.8998 87.2717 58.8727 89.1311 54.1151 90.1135C53.0289 89.8196 51.594 90.4892 51.6222 91.9823C52.046 114.874 52.4699 137.766 52.8944 160.658C52.92 162.083 54.2465 162.544 55.2991 162.179C55.5954 162.1 55.8918 161.964 56.1679 161.687C72.5402 145.317 88.9118 128.946 105.285 112.574C105.893 112.402 106.448 111.839 106.545 111.141C107.047 110.153 106.497 109.088 105.619 108.71C100.547 99.4379 91.4824 95.2768 81.7412 91.6514ZM67.9572 144.843C64.1372 148.663 60.3165 152.483 56.4965 156.303C56.3921 150.693 56.2893 145.085 56.185 139.475C60.2947 137.909 65.6328 141.296 67.9572 144.843ZM71.8879 140.913C71.3189 141.482 70.7498 142.05 70.1807 142.619C67.206 138.351 61.2193 135.18 56.1267 136.335L56.0532 132.36C58.3852 132.694 60.7133 133.079 63.001 133.637C65.3302 134.205 70.7206 138.141 71.8879 140.913ZM81.4417 131.361C78.9893 133.813 76.5363 136.266 74.0839 138.718C72.333 135.943 68.9413 133.622 66.6573 131.977C63.7878 129.911 59.486 129.672 55.9952 129.239C55.9432 126.373 55.8898 123.507 55.8357 120.64C63.809 118.921 79.3884 122.324 81.4417 131.361ZM84.3268 128.476C84.1682 128.634 84.0089 128.794 83.8503 128.952C79.9707 119.573 65.1871 115.822 55.7778 117.521C55.7678 117.01 55.7584 116.499 55.7491 115.989C66.5906 114.101 78.9576 118.598 84.3268 128.476ZM92.3097 119.664C92.2161 119.921 92.2156 120.203 92.3057 120.498C90.4008 122.403 88.4945 124.308 86.5896 126.213C80.5685 115.745 67.3486 111.206 55.6934 112.93C55.6396 110.026 55.5858 107.122 55.5326 104.217C68.8395 99.2566 87.1943 106.019 92.3097 119.664ZM55.4714 100.972C55.4637 100.597 55.4574 100.22 55.4504 99.845C70.6344 94.4718 89.8346 101.833 96.408 116.396C95.9104 116.893 95.4144 117.39 94.9175 117.886C89.0589 103.55 69.9166 96.1132 55.4714 100.972ZM102.819 109.984C101.447 111.357 100.073 112.73 98.701 114.102C91.0745 99.0934 71.6878 91.3352 55.3908 96.6182C55.3672 95.3642 55.3428 94.1095 55.3206 92.8554C57.6528 92.1343 59.8079 91.077 62.3907 90.8625C67.0338 90.4783 71.8159 91.77 76.2474 93.0123C86.5214 95.8925 97.3457 100.521 102.819 109.984Z", "fill", "#303E5C"], ["id", "line-11", "d", "M61.3724 71.9831C60.4656 72.0273 59.9694 72.7559 59.9146 73.5904C59.7977 75.3462 59.56 77.0922 59.629 78.8559C59.7051 80.8366 62.7709 80.685 62.6942 78.7065C62.6266 76.9427 62.8636 75.1974 62.9798 73.441C63.036 72.605 62.1366 71.9458 61.3724 71.9831Z", "fill", "#303E5C"], ["id", "line-10", "d", "M92.0335 84.3376C91.3007 85.1769 90.7222 86.1346 89.9893 86.9725C88.687 88.4604 90.9582 90.5244 92.2625 89.0343C92.9955 88.1965 93.5731 87.2381 94.3068 86.3995C95.609 84.9116 93.3385 82.8468 92.0335 84.3376Z", "fill", "#303E5C"], ["id", "line-9", "d", "M129.533 92.1061C128.415 93.2898 127.028 94.0923 125.653 94.943C123.966 95.9852 125.617 98.5744 127.298 97.5346C128.909 96.5393 130.497 95.555 131.807 94.1686C133.166 92.7283 130.89 90.668 129.533 92.1061Z", "fill", "#303E5C"], ["id", "line-8", "d", "M99.3755 53.7135C99.2275 54.743 99.1328 55.7791 98.9842 56.8107C98.7032 58.7578 101.705 59.4093 101.988 57.4437C102.136 56.4135 102.231 55.3774 102.38 54.3458C102.659 52.3987 99.6576 51.7472 99.3755 53.7135Z", "fill", "#303E5C"], ["id", "line-7", "d", "M73.7787 33.5844C72.9029 33.8593 72.6276 34.6883 72.7752 35.5094C72.8763 36.0723 73.1969 36.5048 73.6043 36.8906C75.0434 38.2512 77.103 35.9759 75.6662 34.6173C75.6646 34.6726 75.6769 34.6635 75.703 34.5886C75.555 33.7605 74.4996 33.3567 73.7787 33.5844Z", "fill", "#303E5C"], ["id", "line-6", "d", "M108.413 27.3783C108.075 28.5869 107.787 29.7896 107.818 31.0553C107.865 33.0388 110.93 32.883 110.883 30.9058C110.86 29.9152 111.153 28.9565 111.417 28.0105C111.949 26.105 108.943 25.4792 108.413 27.3783Z", "fill", "#303E5C"], ["id", "line-5", "d", "M151.321 44.4693C150.336 44.2342 149.347 44.385 148.377 44.6135C147.561 44.8048 147.137 45.7855 147.373 46.5385C147.639 47.3815 148.486 47.7324 149.298 47.542C149.768 47.432 150.221 47.3625 150.69 47.4741C152.614 47.9311 153.247 44.9283 151.321 44.4693Z", "fill", "#303E5C"], ["id", "line-4", "d", "M49.3153 81.4926C48.5832 81.7222 47.9744 82.6524 48.3119 83.4175C48.4727 83.7835 48.8197 84.2345 48.8644 84.6302C49.0825 86.5898 52.1489 86.4523 51.9296 84.4808C51.8438 83.709 51.5421 83.1829 51.2396 82.4953C50.9028 81.7309 50.1772 81.2226 49.3153 81.4926Z", "fill", "#303E5C"], ["id", "line-3", "d", "M63.7389 51.3486C65.2942 54.1484 66.6399 57.035 67.8138 60.0155C68.5362 61.8507 71.4664 60.9361 70.7409 59.094C69.4715 55.8703 68.0138 52.7337 66.3306 49.7044C65.3681 47.9687 62.7829 49.6282 63.7389 51.3486Z", "fill", "#303E5C"], ["id", "line-2", "d", "M122.869 59.3869C120.45 59.3009 117.939 59.5232 115.842 60.836C114.161 61.8886 115.811 64.4771 117.487 63.4283C119.122 62.4056 121.148 62.3868 123.018 62.4535C124.997 62.5234 124.832 59.4575 122.869 59.3869Z", "fill", "#303E5C"], ["id", "line-1", "d", "M118.062 105.122C115.856 104.802 113.653 104.777 111.504 105.442C109.607 106.026 110.537 108.952 112.425 108.369C114.064 107.862 115.746 107.882 117.429 108.125C119.377 108.407 120.028 105.406 118.062 105.122Z", "fill", "#303E5C"]],
      template: function ConeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "g", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "g", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "g", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "g", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "path", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "path", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "path", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "path", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "path", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "path", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "path", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "path", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "path", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "path", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "path", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "path", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["#line-1[_ngcontent-%COMP%], #line-2[_ngcontent-%COMP%], #line-3[_ngcontent-%COMP%], #line-4[_ngcontent-%COMP%], #line-5[_ngcontent-%COMP%], #line-6[_ngcontent-%COMP%], #line-7[_ngcontent-%COMP%], #line-8[_ngcontent-%COMP%], #line-9[_ngcontent-%COMP%], #line-10[_ngcontent-%COMP%], #line-11[_ngcontent-%COMP%] {\n  -webkit-animation: line-1 1s linear infinite;\n          animation: line-1 1s linear infinite;\n  transform-origin: center;\n  transform-box: fill-box;\n}\n\n#cone-1[_ngcontent-%COMP%] {\n  -webkit-animation: cone-1 2s linear infinite;\n          animation: cone-1 2s linear infinite;\n  transform-origin: center;\n  transform-box: fill-box;\n}\n\n#ribbon-1[_ngcontent-%COMP%], #ribbon-2[_ngcontent-%COMP%], #ribbon-3[_ngcontent-%COMP%] {\n  -webkit-animation: cone-1 3s linear infinite;\n          animation: cone-1 3s linear infinite;\n  transform-origin: center;\n  transform-box: fill-box;\n}\n\n@-webkit-keyframes line-1 {\n  0% {\n    transform: rotate(20deg);\n  }\n  50% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(20deg);\n  }\n}\n\n@keyframes line-1 {\n  0% {\n    transform: rotate(20deg);\n  }\n  50% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(20deg);\n  }\n}\n\n@-webkit-keyframes cone-1 {\n  0% {\n    transform: rotate(10deg);\n  }\n  50% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(10deg);\n  }\n}\n\n@keyframes cone-1 {\n  0% {\n    transform: rotate(10deg);\n  }\n  50% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(10deg);\n  }\n}\n\n@media only screen and (max-width: 1920px) {\n  svg[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 701px;\n    top: 58%;\n    height: 733px;\n    right: 50%;\n    opacity: 0.3;\n  }\n}\n\n@media only screen and (max-width: 1080px) {\n  svg[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 701px;\n    top: 58%;\n    height: 733px;\n    right: 50%;\n    opacity: 0.3;\n  }\n}\n\n@media only screen and (max-width: 750px) {\n  svg[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 586px;\n    top: 50%;\n    height: 620px;\n    right: 39%;\n    opacity: 0.3;\n  }\n}\n\n@media only screen and (max-width: 720px) {\n  svg[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 586px;\n    top: 50%;\n    height: 620px;\n    right: 39%;\n    opacity: 0.3;\n  }\n}\n\n@media only screen and (max-width: 411px) {\n  svg[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 345px;\n    top: 50%;\n    height: 430px;\n    right: 34%;\n    opacity: 0.3;\n  }\n}\n\n@media only screen and (max-width: 375px) {\n  svg[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 345px;\n    top: 50%;\n    height: 430px;\n    right: 34%;\n    opacity: 0.3;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uZS9jb25lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0VBV0UsNENBQW9DO1VBQXBDLG9DQUFvQztFQUNwQyx3QkFBd0I7RUFDeEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsNENBQW9DO1VBQXBDLG9DQUFvQztFQUNwQyx3QkFBd0I7RUFDeEIsdUJBQXVCO0FBQ3pCOztBQUNBOzs7RUFHRSw0Q0FBb0M7VUFBcEMsb0NBQW9DO0VBQ3BDLHdCQUF3QjtFQUN4Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRTtJQUNFLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSx3QkFBd0I7RUFDMUI7QUFDRjs7QUFWQTtFQUNFO0lBQ0Usd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLHdCQUF3QjtFQUMxQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSx3QkFBd0I7RUFDMUI7RUFDQTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0Usd0JBQXdCO0VBQzFCO0FBQ0Y7O0FBVkE7RUFDRTtJQUNFLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSx3QkFBd0I7RUFDMUI7QUFDRjs7QUFDQTtFQUNFO0lBQ0Usa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixRQUFRO0lBQ1IsYUFBYTtJQUNiLFVBQVU7SUFDVixZQUFZO0VBQ2Q7QUFDRjs7QUFDQTtFQUNFO0lBQ0Usa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixRQUFRO0lBQ1IsYUFBYTtJQUNiLFVBQVU7SUFDVixZQUFZO0VBQ2Q7QUFDRjs7QUFDQTtFQUNFO0lBQ0Usa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixRQUFRO0lBQ1IsYUFBYTtJQUNiLFVBQVU7SUFDVixZQUFZO0VBQ2Q7QUFDRjs7QUFDQTtFQUNFO0lBQ0Usa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixRQUFRO0lBQ1IsYUFBYTtJQUNiLFVBQVU7SUFDVixZQUFZO0VBQ2Q7QUFDRjs7QUFDQTtFQUNFO0lBQ0Usa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixRQUFRO0lBQ1IsYUFBYTtJQUNiLFVBQVU7SUFDVixZQUFZO0VBQ2Q7QUFDRjs7QUFDQTtFQUNFO0lBQ0Usa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixRQUFRO0lBQ1IsYUFBYTtJQUNiLFVBQVU7SUFDVixZQUFZO0VBQ2Q7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbmUvY29uZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2xpbmUtMSxcbiNsaW5lLTIsXG4jbGluZS0zLFxuI2xpbmUtNCxcbiNsaW5lLTUsXG4jbGluZS02LFxuI2xpbmUtNyxcbiNsaW5lLTgsXG4jbGluZS05LFxuI2xpbmUtMTAsXG4jbGluZS0xMSB7XG4gIGFuaW1hdGlvbjogbGluZS0xIDFzIGxpbmVhciBpbmZpbml0ZTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICB0cmFuc2Zvcm0tYm94OiBmaWxsLWJveDtcbn1cblxuI2NvbmUtMSB7XG4gIGFuaW1hdGlvbjogY29uZS0xIDJzIGxpbmVhciBpbmZpbml0ZTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICB0cmFuc2Zvcm0tYm94OiBmaWxsLWJveDtcbn1cbiNyaWJib24tMSxcbiNyaWJib24tMixcbiNyaWJib24tMyB7XG4gIGFuaW1hdGlvbjogY29uZS0xIDNzIGxpbmVhciBpbmZpbml0ZTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICB0cmFuc2Zvcm0tYm94OiBmaWxsLWJveDtcbn1cblxuQGtleWZyYW1lcyBsaW5lLTEge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjBkZWcpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjBkZWcpO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgY29uZS0xIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDEwZGVnKTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDEwZGVnKTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxOTIwcHgpIHtcbiAgc3ZnIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDcwMXB4O1xuICAgIHRvcDogNTglO1xuICAgIGhlaWdodDogNzMzcHg7XG4gICAgcmlnaHQ6IDUwJTtcbiAgICBvcGFjaXR5OiAwLjM7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTA4MHB4KSB7XG4gIHN2ZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA3MDFweDtcbiAgICB0b3A6IDU4JTtcbiAgICBoZWlnaHQ6IDczM3B4O1xuICAgIHJpZ2h0OiA1MCU7XG4gICAgb3BhY2l0eTogMC4zO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gIHN2ZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA1ODZweDtcbiAgICB0b3A6IDUwJTtcbiAgICBoZWlnaHQ6IDYyMHB4O1xuICAgIHJpZ2h0OiAzOSU7XG4gICAgb3BhY2l0eTogMC4zO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gIHN2ZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA1ODZweDtcbiAgICB0b3A6IDUwJTtcbiAgICBoZWlnaHQ6IDYyMHB4O1xuICAgIHJpZ2h0OiAzOSU7XG4gICAgb3BhY2l0eTogMC4zO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQxMXB4KSB7XG4gIHN2ZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAzNDVweDtcbiAgICB0b3A6IDUwJTtcbiAgICBoZWlnaHQ6IDQzMHB4O1xuICAgIHJpZ2h0OiAzNCU7XG4gICAgb3BhY2l0eTogMC4zO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NXB4KSB7XG4gIHN2ZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAzNDVweDtcbiAgICB0b3A6IDUwJTtcbiAgICBoZWlnaHQ6IDQzMHB4O1xuICAgIHJpZ2h0OiAzNCU7XG4gICAgb3BhY2l0eTogMC4zO1xuICB9XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-cone',
          templateUrl: './cone.component.html',
          styleUrls: ['./cone.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/hero1/hero1.component.ts":
  /*!******************************************!*\
    !*** ./src/app/hero1/hero1.component.ts ***!
    \******************************************/

  /*! exports provided: Hero1Component */

  /***/
  function srcAppHero1Hero1ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Hero1Component", function () {
      return Hero1Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var Hero1Component = /*#__PURE__*/function () {
      function Hero1Component() {
        _classCallCheck(this, Hero1Component);
      }

      _createClass(Hero1Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Hero1Component;
    }();

    Hero1Component.ɵfac = function Hero1Component_Factory(t) {
      return new (t || Hero1Component)();
    };

    Hero1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Hero1Component,
      selectors: [["app-hero1"]],
      decls: 94,
      vars: 0,
      consts: [["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 500 500"], ["id", "freepik--Floor--inject-35"], ["id", "freepik--floor--inject-35", "cx", "250", "cy", "334.28", "rx", "227.08", "ry", "131.1", 2, "fill", "#f5f5f5"], ["id", "freepik--Shadows--inject-35"], ["id", "freepik--Shadow--inject-35", "cx", "208.49", "cy", "382.71", "rx", "73.47", "ry", "42.42", 2, "fill", "#e0e0e0"], ["id", "freepik--shadow--inject-35", "cx", "316.6", "cy", "382.71", "rx", "55.93", "ry", "32.29", 2, "fill", "#e0e0e0"], ["id", "freepik--Plant--inject-35"], ["id", "freepik--Plants--inject-35"], ["d", "M424.65,311.13l-8.83-5.1s-5.25-21.82-3.16-41.45c2.94-27.61,21.12-38,28-35.62s8.91,10.42-2.53,26.86C431.42,265.52,423.13,285.73,424.65,311.13Z", 2, "fill", "#cba6e1"], [2, "opacity", "0.15"], ["d", "M424.65,311.13l-8.83-5.1s-5.25-21.82-3.16-41.45c2.94-27.61,21.12-38,28-35.62s8.91,10.42-2.53,26.86C431.42,265.52,423.13,285.73,424.65,311.13Z"], ["d", "M421,300.41h.08a.6.6,0,0,0,.49-.71c-4.84-25.47,4.06-54.08,15.07-66a.6.6,0,0,0,0-.86.63.63,0,0,0-.87,0c-11.21,12.13-20.28,41.21-15.37,67.05A.61.61,0,0,0,421,300.41Z", 2, "fill", "#fff"], ["d", "M447.76,324.48c1.39.71,5.1-2.46,6.14-3.23A13.09,13.09,0,0,0,458,316.1a12.22,12.22,0,0,0,.71-7.34,30.32,30.32,0,0,0-1.12-3.82l-1.27-3.7a9.48,9.48,0,0,1-.74-3.76c.2-2.59,2.39-4.5,4.38-6.16,2.21-1.83,4.48-4.22,4.31-7.31a10.88,10.88,0,0,0-3.05-6.33c-1.57-1.8-3.41-3.37-4.85-5.28a7.62,7.62,0,0,1-1.8-4.72,8.07,8.07,0,0,1,.9-3.06c1-2.07,2.34-4,3-6.19s.4-4.88-1.36-6.34c-1.45-1.21-3.52-1.28-5.39-1.06a12.16,12.16,0,0,0-4.86,2c-4.77,3-7.28,8.93-12.39,11.3-2,.91-4.16,1.2-6.22,1.86s-4.15,1.83-5,3.82c-1.71,3.92,2.07,8.45.93,12.57-1,3.65-4.42,5.19-6.22,8.53a7.71,7.71,0,0,0-.68,4.74,22.8,22.8,0,0,0,2.38,7.84,71.9,71.9,0,0,0,4.72,7.24S447.55,324.37,447.76,324.48Z", 2, "fill", "#cba6e1"], ["d", "M434.25,317.44h0a.61.61,0,0,0,.56-.66c-2.23-24.22,7.85-51.59,15.78-59.8a.61.61,0,0,0,0-.86.6.6,0,0,0-.86,0c-8.09,8.37-18.38,36.2-16.12,60.76A.61.61,0,0,0,434.25,317.44Z", 2, "fill", "#fff"], ["d", "M436.66,287.58a.39.39,0,0,0,.18,0,82.19,82.19,0,0,1,17.47-3.72.61.61,0,0,0,.55-.67.58.58,0,0,0-.66-.55,84.06,84.06,0,0,0-17.78,3.79.61.61,0,0,0,.24,1.19Z", 2, "fill", "#fff"], ["id", "freepik--Clouds--inject-35"], ["id", "freepik--clouds--inject-35"], ["d", "M97.29,73.66l-8.07,4.65a9.77,9.77,0,0,0,.07-1.07V74.91c0-4.16-2.92-5.85-6.53-3.77a12.62,12.62,0,0,0-3.88,3.74c-.59-5.23-4.7-7.18-9.68-4.3-5.39,3.11-9.76,10.68-9.76,16.9V91a9.21,9.21,0,0,0,.83,4l-6.7,3.86A8,8,0,0,0,50,105.16c0,2.31,1.62,3.24,3.62,2.09L97.29,82a8,8,0,0,0,3.61-6.27C100.9,73.44,99.28,72.5,97.29,73.66Z", 2, "fill", "#ebebeb"], ["d", "M151.77,84.13l-4.45,1.71V76c0-7.77-6.2-9.63-12.93-5.74h0c-6.73,3.88-12.18,13.33-12.18,21.1v1.43c-1.53-.61-3.5-.38-5.66.87h0c-4.84,2.79-8.77,9.59-8.77,15.19v.64l-6.2,3.59a12.77,12.77,0,0,0-5.78,10c0,3.68,2.59,5.17,5.78,3.33l50.19-29a12.77,12.77,0,0,0,5.78-10C157.55,83.78,155,82.29,151.77,84.13Z", 2, "fill", "#ebebeb"], ["id", "freepik--Characters--inject-35"], ["id", "freepik--stork-and-baby--inject-35"], ["d", "M345.57,250.72c7.44-13.39-17.15-138-17.15-138L322,110.53S292.21,228.75,295.1,239.67,325.05,262.42,345.57,250.72Z", 2, "fill", "#cba6e1"], ["d", "M345.57,250.72c7.44-13.39-17.15-138-17.15-138L322,110.53S292.21,228.75,295.1,239.67,325.05,262.42,345.57,250.72Z", 2, "opacity", "0.1"], ["d", "M312.75,222.11l32.44-6.69c-1.07-9.52-2.54-20.11-4.17-30.77-3.62-.57-10.59-6-12.45-8.92-6.54-10.25-6.36-31-5.73-40.31.92-13.35,2.13-20.14,2.13-20.14l4.13,1c-.43-2.23-.68-3.47-.68-3.47L322,110.53s-13.6,53.92-21.54,92.3Z", 2, "opacity", "0.1"], ["d", "M329.47,141.27s-1.36-19.77-2.76-29.11l-3-1s-4.65,17.71-4.91,22.08l6.12-20S328.73,135.88,329.47,141.27Z", 2, "opacity", "0.1"], ["d", "M326.77,97.54c2,1.49,4,2.51,6.4,2s7.06-6.58,8.46-7.3-.26-2.26-2.42-3.13-10.75-1.7-13.17,5.83A2.86,2.86,0,0,0,326.77,97.54Z", 2, "fill", "#cba6e1"], ["d", "M333.13,96c.15-.09.33-.23.28-.41s-.26-.2-.44-.21l-3.48-.17,4.23-3.45c.18-.15.37-.33.35-.56a.47.47,0,0,0-.41-.37,1.1,1.1,0,0,0-.59.09,19.87,19.87,0,0,0-5.21,3c-.52.37-1.36,1-1.1,1.76s1.23.83,1.78.95A6.48,6.48,0,0,0,333.13,96Z", 2, "opacity", "0.15"], ["d", "M319.52,94.11c-2.4-.66-4.46-1.67-5.51-3.84s.88-9.61.58-11.16,2-1.18,4,0,7.93,7.45,3.47,14A2.89,2.89,0,0,1,319.52,94.11Z", 2, "fill", "#cba6e1"], ["d", "M316.82,88.15c0-.18,0-.41.15-.47s.32.07.44.21l2.27,2.64.13-5.45c0-.23,0-.49.23-.61a.46.46,0,0,1,.55.09,1.4,1.4,0,0,1,.29.52,20.4,20.4,0,0,1,.83,5.94c0,.64,0,1.69-.72,2s-1.4-.47-1.84-.82A6.47,6.47,0,0,1,316.82,88.15Z", 2, "opacity", "0.15"], ["d", "M328.24,97.18a5.4,5.4,0,1,1-5.4-5.4A5.39,5.39,0,0,1,328.24,97.18Z", 2, "fill", "#cba6e1"], ["d", "M319.55,97.18c-1-2.56,1.14-4.71,3.55-5.39h-.26a5.4,5.4,0,1,0,5.32,6.27C326.39,100.75,320.53,99.7,319.55,97.18Z", 2, "opacity", "0.1"], ["id", "freepik--Stork--inject-35"], ["d", "M238.71,212.8c-1.3,2.56-2.67,5.1-4.12,7.58-5.89,10.05-13.48,18.09-21.79,26.13-8,7.71-16.89,15-27.64,18.36-2.79.88-6.18,1.35-8.34-.61s-2-5.43-1.66-8.37a35.72,35.72,0,0,1-9.35,12.46,11.31,11.31,0,0,1-3.88,2.38,4.9,4.9,0,0,1-4.38-.56c-1.91-1.46-2-4.26-1.71-6.64-1.74,2.32-2.79,5.07-4.06,7.68s-2.86,5.19-5.29,6.77-5.9,1.87-8.12,0c-3.56-3-1.4-7.68-.79-11.43a104.55,104.55,0,0,1,3.26-13.84,119.26,119.26,0,0,1,11.47-25.63,146.78,146.78,0,0,1,18.39-24.42c3.4-3.68,6.94-7.29,10.68-10.62a108.43,108.43,0,0,1,12.83-9.56c29.29-16.45,41.5-15.07,48.17-11.16C246.54,173.77,249.52,191.55,238.71,212.8Z", 2, "fill", "#cba6e1"], ["d", "M238.71,212.8c-1.3,2.56-2.67,5.1-4.12,7.58-5.89,10.05-13.48,18.09-21.79,26.13-8,7.71-16.89,15-27.64,18.36-2.79.88-6.18,1.35-8.34-.61s-2-5.43-1.66-8.37a35.72,35.72,0,0,1-9.35,12.46,11.31,11.31,0,0,1-3.88,2.38,4.9,4.9,0,0,1-4.38-.56c-1.91-1.46-2-4.26-1.71-6.64-1.74,2.32-2.79,5.07-4.06,7.68s-2.86,5.19-5.29,6.77-5.9,1.87-8.12,0c-3.56-3-1.4-7.68-.79-11.43a104.55,104.55,0,0,1,3.26-13.84,119.26,119.26,0,0,1,11.47-25.63,146.78,146.78,0,0,1,18.39-24.42c3.4-3.68,6.94-7.29,10.68-10.62a108.43,108.43,0,0,1,12.83-9.56c29.29-16.45,41.5-15.07,48.17-11.16C246.54,173.77,249.52,191.55,238.71,212.8Z", 2, "fill", "#fafafa", "opacity", "0.7000000000000001"], ["d", "M223.85,361.77c-5.24-.83-5.95-.85-8-.5s-2.52,1.41-1.05,1.94,6,1,7.69,2.88,6.45,8.14,7.88,9.58,4.3,7.91,5.1,9.59,2.94.8,2.63-1.87c-.46-4-3.42-9.81-3.42-9.81a46.75,46.75,0,0,1,8.05,5.05c1.69,1.44,3.09,2.95,4.63,2.75s1-2.11-1-4.35a75,75,0,0,0-6.89-6.09,43.26,43.26,0,0,1,11.17,3.95c2.69,1.4,4.17.63,3.62-.73s-2.58-3.38-8.19-5.6C240.82,366.5,232.8,363.2,223.85,361.77Z", 2, "fill", "#f0997a"], ["d", "M247.86,381.16c-1,.1-1.67-.17-3.52-2.29A22,22,0,0,0,237,373c-3.35-1.66-3.54-1-2.36.61a46.75,46.75,0,0,1,8,5.05c1.69,1.44,3.09,2.95,4.63,2.75A1.07,1.07,0,0,0,247.86,381.16Z", 2, "opacity", "0.15"], ["d", "M254.26,374.88c-.2.42-.76.68-1.54.2s-2.06-1.14-4.5-2.35a37.1,37.1,0,0,0-7.31-2.82c-2-.46-2.53.43-1.51,1a43.85,43.85,0,0,1,11.17,3.95C252.73,376,254.09,375.73,254.26,374.88Z", 2, "opacity", "0.15"], ["d", "M235.41,385.27a1.21,1.21,0,0,0,2.2.23c-.83.62-1.18,0-1.54-1a42.65,42.65,0,0,0-2-5.22,29.18,29.18,0,0,0-3.81-6.28c-1.33-1.48-4.66-5.75-6.43-7.64s-3.94-2.19-6.6-2.41-3.21-.89-3-1.15c-.62.46-.49,1,.48,1.39,1.47.53,6,1,7.69,2.87s6.45,8.15,7.88,9.59S234.61,383.59,235.41,385.27Z", 2, "opacity", "0.15"], ["points", "230.89 365.51 225.76 365.86 220.51 281.55 225.64 281.19 230.89 365.51", 2, "fill", "#f0997a"], ["d", "M225.64,281.19l-5.13.36.37,5.94a4.61,4.61,0,0,0,5.13-.39Z", 2, "opacity", "0.15"], ["points", "225.63 281.41 220.51 280.96 226.82 214.12 231.94 214.57 225.63 281.41", 2, "fill", "#f0997a"], ["d", "M227.26,264.19l4.68-49.62-4-.35-1.14-.1-5,53.59A51.92,51.92,0,0,0,227.26,264.19Z", 2, "opacity", "0.15"], ["cx", "222.92", "cy", "281.38", "r", "4.75", 2, "fill", "#f0997a"], ["d", "M287.21,75a21.41,21.41,0,0,0-42.56-3.31c-2.67,7.62-4.51,18.71-2.59,34.11,3.31,26.48,17.72,51.58,2.31,66.41-3.38,3.26-10.4.56-14.32.29-6.24-.43-12.52-.91-18.8-.38a89.68,89.68,0,0,0-37.77,12.27c-16.77,9.88-30.39,24.55-40.73,41-6.31,10.05-12,22-23.62,26.52-1.16.45-2.6,1.23-2.37,2.45a2.32,2.32,0,0,0,1.18,1.4,9.78,9.78,0,0,0,6.2,1.43,3.18,3.18,0,0,1-1.81,2.43,18.56,18.56,0,0,0-2.75,1.56,2.4,2.4,0,0,0-.81,2.81,3.06,3.06,0,0,0,1.7,1.18c7.1,2.71,15.44,2.23,22.66.33,8.67-2.27,16.89-6.14,25.68-7.9,10.24-2.06,20.81-1.18,31.26-1.37a97.71,97.71,0,0,0,48.17-14.57,73.53,73.53,0,0,0,31.82-42.79c8.4-30.74-1.39-47-10.28-77.12-3.68-12.48-5.45-21.62-5.95-29A21.42,21.42,0,0,0,287.21,75Z", 2, "fill", "#cba6e1"], ["d", "M287.21,75a21.41,21.41,0,0,0-42.56-3.31c-2.67,7.62-4.51,18.71-2.59,34.11,3.31,26.48,17.72,51.58,2.31,66.41-3.38,3.26-10.4.56-14.32.29-6.24-.43-12.52-.91-18.8-.38a89.68,89.68,0,0,0-37.77,12.27c-16.77,9.88-30.39,24.55-40.73,41-6.31,10.05-12,22-23.62,26.52-1.16.45-2.6,1.23-2.37,2.45a2.32,2.32,0,0,0,1.18,1.4,9.78,9.78,0,0,0,6.2,1.43,3.18,3.18,0,0,1-1.81,2.43,18.56,18.56,0,0,0-2.75,1.56,2.4,2.4,0,0,0-.81,2.81,3.06,3.06,0,0,0,1.7,1.18c7.1,2.71,15.44,2.23,22.66.33,8.67-2.27,16.89-6.14,25.68-7.9,10.24-2.06,20.81-1.18,31.26-1.37a97.71,97.71,0,0,0,48.17-14.57,73.53,73.53,0,0,0,31.82-42.79c8.4-30.74-1.39-47-10.28-77.12-3.68-12.48-5.45-21.62-5.95-29A21.42,21.42,0,0,0,287.21,75Z", 2, "fill", "#fafafa", "opacity", "0.9"], ["d", "M273.07,181.71c-1.4,14.84-10.45,33.52-21.94,42-12.76,9.37-31.34,12.37-29.7,4.86a72.56,72.56,0,0,0,.34-31.44s-7.34,24.31-32.66,42.58-72.19,27.09-72.19,27.09h0a43,43,0,0,0,16.16-1.27c8.67-2.27,16.89-6.14,25.68-7.9,10.24-2.06,20.81-1.18,31.26-1.37a97.71,97.71,0,0,0,48.17-14.57,73.53,73.53,0,0,0,31.82-42.79A87.54,87.54,0,0,0,273.07,181.71Z", 2, "fill", "#cba6e1", "opacity", "0.03"], ["d", "M273.07,181.71c-1.4,14.84-10.45,33.52-21.94,42-12.76,9.37-31.34,12.37-29.7,4.86a72.56,72.56,0,0,0,.34-31.44s-7.34,24.31-32.66,42.58-72.19,27.09-72.19,27.09h0a43,43,0,0,0,16.16-1.27c8.67-2.27,16.89-6.14,25.68-7.9,10.24-2.06,20.81-1.18,31.26-1.37a97.71,97.71,0,0,0,48.17-14.57,73.53,73.53,0,0,0,31.82-42.79A87.54,87.54,0,0,0,273.07,181.71Z", 2, "opacity", "0.03"], ["d", "M121.08,260.44c-1.79-3,9.38-13.38,9.38-13.38s-10.72,5.79-12.35,4.6.89-4.91,3.45-9.2h0a30.86,30.86,0,0,1-12.43,9.45c-1.16.45-2.6,1.23-2.37,2.45a2.32,2.32,0,0,0,1.18,1.4,9.78,9.78,0,0,0,6.2,1.43,3.18,3.18,0,0,1-1.81,2.43,18.56,18.56,0,0,0-2.75,1.56,2.4,2.4,0,0,0-.81,2.81,3.06,3.06,0,0,0,1.7,1.18c7.1,2.71,15.44,2.23,22.66.33,3.29-.86,6.51-1.95,9.73-3.07C134.65,262.56,122.27,262.42,121.08,260.44Z", 2, "fill", "#37474f"], ["d", "M185,385.26c-5.25-.84-6-.86-8-.51s-2.53,1.41-1.06,1.94,6,1,7.69,2.88,6.45,8.15,7.88,9.58,4.3,7.91,5.1,9.59,3,.8,2.64-1.87c-.47-4-3.43-9.81-3.43-9.81a46.75,46.75,0,0,1,8.05,5.05c1.69,1.45,3.1,3,4.63,2.76s1-2.12-1-4.36a75,75,0,0,0-6.89-6.09,43.72,43.72,0,0,1,11.17,3.95c2.69,1.4,4.17.63,3.62-.73s-2.58-3.38-8.19-5.6C202,390,194,386.68,185,385.26Z", 2, "fill", "#f0997a"], ["d", "M209,404.63c-1,.1-1.68-.17-3.53-2.29a22,22,0,0,0-7.36-5.89c-3.34-1.65-3.53-1-2.36.61a46.75,46.75,0,0,1,8.05,5.05c1.69,1.45,3.1,3,4.63,2.76A1.25,1.25,0,0,0,209,404.63Z", 2, "opacity", "0.15"], ["d", "M215.42,398.35c-.19.42-.76.68-1.54.21s-2.06-1.14-4.49-2.36a36.7,36.7,0,0,0-7.32-2.81c-2-.46-2.53.42-1.51,1a43.72,43.72,0,0,1,11.17,3.95C213.89,399.5,215.25,399.21,215.42,398.35Z", 2, "opacity", "0.15"], ["d", "M196.57,408.74a1.21,1.21,0,0,0,2.2.24c-.83.61-1.18,0-1.54-1a42,42,0,0,0-2-5.23,29.34,29.34,0,0,0-3.81-6.27c-1.32-1.49-4.66-5.75-6.43-7.64s-3.94-2.19-6.6-2.42-3.21-.89-3-1.14c-.61.45-.49,1,.48,1.38,1.47.54,6,1,7.69,2.88s6.45,8.15,7.88,9.58S195.77,407.06,196.57,408.74Z", 2, "opacity", "0.15"], ["points", "192.04 388.99 186.92 389.35 181.67 305.03 186.79 304.67 192.04 388.99", 2, "fill", "#f0997a"], ["d", "M186.79,304.67l-5.12.36L182,311a4.62,4.62,0,0,0,5.12-.38Z", 2, "opacity", "0.15"], ["points", "186.45 306.24 181.43 305.13 196.31 239.67 201.33 240.78 186.45 306.24", 2, "fill", "#f0997a"], ["d", "M201.33,240.78l-5-1.11-8.38,36.89c1.74,0,3.53-.13,5.33-.3Z", 2, "opacity", "0.15"], ["cx", "184.07", "cy", "304.86", "r", "4.75", 2, "fill", "#f0997a"], ["d", "M214.39,226c-7.67,15.65-17.49,29.66-33.09,37.8a9.21,9.21,0,0,1-7.55.38c-2.38-1-1.82-6.44-.54-8.67-3.55,6-9.85,13.54-17.06,17.22-1.81.93-5.48,1.2-6.71-.6s-.69-6.07-.09-8c-1.42,4.68-6.2,13.31-9.87,16.55-1.35,1.18-3,2.29-4.76,2.21-4-.17-3.62-6.06-3-7.74-3,4.92-7.3,12.78-11.31,16.9-1.4,1.43-3.37,2.92-5.21,2.12s-2.09-3.36-2-5.41c1.16-16.61,6.68-32.77,15-47.2a146.85,146.85,0,0,1,18-24.68c3.34-3.73,6.83-7.4,10.53-10.78,2.74-2.5,12.44-10,15.68-11.88,25.69-14.61,38.28-13.54,45-9.73C221.65,186.89,224.89,204.62,214.39,226Z", 2, "fill", "#cba6e1"], ["d", "M214.39,226c-7.67,15.65-17.49,29.66-33.09,37.8a9.21,9.21,0,0,1-7.55.38c-2.38-1-1.82-6.44-.54-8.67-3.55,6-9.85,13.54-17.06,17.22-1.81.93-5.48,1.2-6.71-.6s-.69-6.07-.09-8c-1.42,4.68-6.2,13.31-9.87,16.55-1.35,1.18-3,2.29-4.76,2.21-4-.17-3.62-6.06-3-7.74-3,4.92-7.3,12.78-11.31,16.9-1.4,1.43-3.37,2.92-5.21,2.12s-2.09-3.36-2-5.41c1.16-16.61,6.68-32.77,15-47.2a146.85,146.85,0,0,1,18-24.68c3.34-3.73,6.83-7.4,10.53-10.78,2.74-2.5,12.44-10,15.68-11.88,25.69-14.61,38.28-13.54,45-9.73C221.65,186.89,224.89,204.62,214.39,226Z", 2, "fill", "#fafafa", "opacity", "0.85"], ["d", "M214.39,226c.65-1.32,1.25-2.63,1.79-3.92a76.53,76.53,0,0,1-23,21.11c-2.72,1.6-6.22,3-8.88,1.33a6.19,6.19,0,0,1-2.51-5.09,14.27,14.27,0,0,1,1.83-6.74c-4,5-8.77,12.22-13.46,17.3-1.89,2-4.73,3.81-7.47,3.38s-3.25-2.72-3.21-5.52a22.39,22.39,0,0,1,2.73-9c-4.16,4.43-8.24,10.9-12.66,15.35-1.53,1.54-3.39,3.13-5.55,3-2.73-.21-3-2.86-2.82-5.59s2.11-6.25,3.26-8.79a74.1,74.1,0,0,0-6.32,7.81,48.38,48.38,0,0,1-5.91,6.4c-2.07,1.93-4.44,3.33-7.18,2.62a5.62,5.62,0,0,1-3.85-3.76,105.77,105.77,0,0,0-7.92,32.86c-.14,2.05.07,4.6,2,5.41s3.81-.69,5.21-2.12c4-4.12,8.35-12,11.31-16.9-.6,1.68-1,7.57,3,7.74,1.79.08,3.41-1,4.76-2.21,3.67-3.24,8.45-11.87,9.87-16.55-.6,1.94-1.06,6.33.09,8s4.9,1.53,6.71.6c7.21-3.68,13.51-11.21,17.06-17.22-1.28,2.23-1.84,7.71.54,8.67a9.21,9.21,0,0,0,7.55-.38C196.9,255.69,206.72,241.68,214.39,226Z", 2, "fill", "#cba6e1", "opacity", "0.2"], ["d", "M207.55,238.38c-4.9,5.55-10.22,10.55-17.11,13.43-2.13.9-5.74,2.27-9,1.53a6,6,0,0,1-4.48-6c-3,5.19-8,10.81-12.93,12.53-2.06.72-5.56,1.24-7.57-.43-1.68-1.4-1.72-3.79-1.63-6.55a21,21,0,0,1-9.38,9.73c-5.1,2.55-9.21,1-8.17-3.71a24.89,24.89,0,0,1-7,7.41c-2.91,1.88-7.52,2.92-9.84.34-1.57-1.73-1.36-4.48-.71-7.11a104.2,104.2,0,0,0-6.49,29.19c-.14,2.05.07,4.6,2,5.41s3.81-.69,5.21-2.12c4-4.12,8.35-12,11.31-16.9-.6,1.68-1,7.57,3,7.74,1.79.08,3.41-1,4.76-2.21,3.67-3.24,8.45-11.87,9.87-16.55-.6,1.94-1.06,6.33.09,8s4.9,1.53,6.71.6c7.21-3.68,13.51-11.21,17.06-17.22-1.28,2.23-1.84,7.71.54,8.67a9.21,9.21,0,0,0,7.55-.38C192.64,257.91,201.06,248.91,207.55,238.38Z", 2, "fill", "#455a64"], ["d", "M253.83,92.74a21.5,21.5,0,0,1-6.3-6.58,12.36,12.36,0,0,0,2,5.66,15.11,15.11,0,0,0,4.62,4.24C254,95,253.91,93.88,253.83,92.74Z", 2, "fill", "#cba6e1", "opacity", "0.2"], ["d", "M270.94,78.42a3,3,0,1,1-3-3A3,3,0,0,1,270.94,78.42Z", 2, "fill", "#37474f"], ["d", "M337.63,112.86l10,5.28a.4.4,0,0,1-.29.75c-15.11-4.15-70.49-24.68-71.9-25.09a11.45,11.45,0,0,1-5.95-5.3c-.69-1.6,0-1.8.95-1.83a21.55,21.55,0,0,0,10.48-3c2.88-1.66,5.11-3.32,6.1-6l64.39,38a.4.4,0,0,1-.3.74Z", 2, "fill", "#f0997a"], ["d", "M337.63,112.86l3.94,2.38c2.18,1.31-.19.93-2.05.08L277.81,90.89Z", 2, "opacity", "0.30000000000000004"], ["d", "M287.61,86.22c-.11.4-.78.55-1.5.34s-1.2-.69-1.08-1.08.78-.55,1.49-.34S287.72,85.83,287.61,86.22Z", 2, "opacity", "0.30000000000000004"], ["id", "freepik--Baby--inject-35"], ["d", "M368.63,207.83c2.39,3.66,4.52,17.07-8.77,30.66s-30.36,24.84-55.37,26.06-49.86-9.67-47.3-26.51,24.5-20.87,34.37-24.64,24.16-22.57,42.88-21.85S368.63,207.83,368.63,207.83Z", 2, "fill", "#cba6e1"], ["d", "M368.63,207.83c2.39,3.66,4.52,17.07-8.77,30.66s-30.36,24.84-55.37,26.06-49.86-9.67-47.3-26.51,24.5-20.87,34.37-24.64,24.16-22.57,42.88-21.85S368.63,207.83,368.63,207.83Z", 2, "fill", "#fff", "opacity", "0.4"], ["d", "M368.63,207.83s-1.31-1.31-3.62-3.2l-8.67,5.64s8.49,1.73,5.75,10.25-17.59,16.53-26,10.42c-11.19-8.1-14.69-36.76-14.71-36.86h0c-.11.26-26.29,59.17-37.46,58.15-17.94-1.64-25.12-16.66-20.18-26.06h0A19.85,19.85,0,0,0,257.19,238c-2.56,16.84,22.29,27.73,47.3,26.51s42.08-12.46,55.37-26.06S371,211.49,368.63,207.83Z", 2, "opacity", "0.1"], ["d", "M379,188.59c0,7.06-1.64,11.88-7,15.64-4,2.81-9.36,7-17.24,7.7-10.71,1-20.21-2.71-24.7-11.37a13.14,13.14,0,0,1-1-9.49c.78-2.78,2.65-5.06,4.11-7.5s2.09-5.26,3.42-7.8a22.33,22.33,0,0,1,4.85-6.05,18.71,18.71,0,0,1,6.35-4.09,22.81,22.81,0,0,1,7.38-1.14C368.78,164.49,379,175,379,188.59Z", 2, "fill", "#ffa8a7"], ["d", "M342.66,188.75c-1.28-.45-3.17.67-2,1.54s4.34,2.57,4.44,1.77A4.52,4.52,0,0,0,342.66,188.75Z", 2, "fill", "#f28f8f"], ["d", "M343.09,197.66l5.15,1.11a2.64,2.64,0,0,1-5.15-1.11Z", 2, "fill", "#b16668"], ["d", "M382.65,191a25.1,25.1,0,0,1-1.56,5,19.62,19.62,0,0,1-7.38,8.62,36.7,36.7,0,0,1-10.6,5.05,16.18,16.18,0,0,0,3-6.59c1,1.69,4.36.79,5.6-.57,1.53-1.66,2.37-3.68,1.66-5.59a3.59,3.59,0,0,0-3.15-2.11,3,3,0,0,0-1.93.47c-.66.47-1.41,1.18-2.32.75a1.64,1.64,0,0,1-.82-1.36,6.07,6.07,0,0,1,.18-1.64,11.08,11.08,0,0,0-.23-4.62,16.81,16.81,0,0,1-.88-4.12,25.64,25.64,0,0,0,0-3.82,4.3,4.3,0,0,0-1.83-3.2,7.45,7.45,0,0,0-3.74-.55,16,16,0,0,1-5.54-1.07,17.79,17.79,0,0,1-6.72-4.24,3.54,3.54,0,0,0-3.31-1.18A6.79,6.79,0,0,0,340,171.8a16.86,16.86,0,0,0-3.28,3.67c.78-4,3.65-7.61,6.88-10,3.62-2.68,9.45-3.7,11.44-3.82a29.45,29.45,0,0,1,15.75,3.49A23.83,23.83,0,0,1,382.65,191Z", 2, "fill", "#37474f"], ["d", "M360.51,198c0,2-2,3.61-4.44,3.61s-4.44-1.62-4.44-3.61,2-3.6,4.44-3.6S360.51,196,360.51,198Z", 2, "fill", "#f28f8f", "opacity", "0.7000000000000001"], ["d", "M335.29,189.93c-1.13,1.64-3.68,1.84-5.7.45s-2.74-3.85-1.61-5.49,3.69-1.84,5.7-.44S336.42,188.3,335.29,189.93Z", 2, "fill", "#f28f8f", "opacity", "0.7000000000000001"], ["d", "M341.19,183.52a2.57,2.57,0,1,1-2.57-2.56A2.56,2.56,0,0,1,341.19,183.52Z", 2, "fill", "#263238"], ["d", "M340.27,183.13a.83.83,0,1,1-.82-.82A.83.83,0,0,1,340.27,183.13Z", 2, "fill", "#fafafa"], ["d", "M357,189.55a2.57,2.57,0,1,1-2.57-2.56A2.57,2.57,0,0,1,357,189.55Z", 2, "fill", "#263238"], ["d", "M356.51,189.16a.83.83,0,1,1-.83-.82A.83.83,0,0,1,356.51,189.16Z", 2, "fill", "#fafafa"], ["d", "M355.53,164.63a4.55,4.55,0,0,1-.49-.58,4.68,4.68,0,0,1-.55-2.69,11.23,11.23,0,0,1,1.9-6c2.13-3.3,6.08-4.95,9.15-3.3a4.31,4.31,0,0,1,2.27,4.36,3.75,3.75,0,0,1-4.94,2.88,1.69,1.69,0,0,1-1.16-1.06c-.14-.53.33-1.19.86-1.06a3.92,3.92,0,0,1,.64.34,1,1,0,0,0,1.35-.73,1.35,1.35,0,0,0-.71-1.45,1.91,1.91,0,0,0-1.68,0,3.32,3.32,0,0,0-1.28,1.16,5.58,5.58,0,0,0-.95,3.55c.07.81.24,1.62.38,2.42a9.54,9.54,0,0,0,.64,1.7,1.25,1.25,0,0,1-.4.68A3.66,3.66,0,0,1,355.53,164.63Z", 2, "fill", "#37474f"], ["d", "M355.23,164.26c-.51-3.5-5.52-9.78-7.86-8.65s-.9,3.47-1.81,4.74c-.77,1.09-3.51,2.35-2.57,4.21s9.28,2.47,11.28,1.7Z", 2, "fill", "#cba6e1"], ["d", "M355.15,164.64c-.77-1.39-3-4.19-3.5-3.85s1.84,3.26,1.84,3.26-3.38-.51-3.36.28,4.64.89,4.64.89Z", 2, "opacity", "0.15"], ["d", "M358.14,165.23c2.65-2.35,10.52-3.93,11.59-1.57s-1.55,3.24-1.67,4.8c-.11,1.33,1.22,4.16-.74,4.87s-8.28-3.62-9.73-6Z", 2, "fill", "#cba6e1"], ["d", "M358.33,165.57c1.26-.49,4.76-1.28,4.78-.75s-4.14,1.29-4.14,1.29,3.26,1.85,2.85,2.45-3.26-1.29-3.91-2.47Z", 2, "opacity", "0.15"], ["d", "M357.11,163.77c-1.51-.36-2.12-.26-2.76,1s-.74,2.22.88,2.82,2.37.61,2.64.22a6.09,6.09,0,0,1,.9-3A2.91,2.91,0,0,0,357.11,163.77Z", 2, "fill", "#cba6e1"], ["d", "M358,166.66c-.14.57-.35.74-.69.79a4.77,4.77,0,0,1-2.16-.6c-.95-.46-1.11-1-1.12-1.37-.28.88-.07,1.6,1.2,2.07,1.62.59,2.37.61,2.64.22a6.18,6.18,0,0,1,.13-1.11Z", 2, "opacity", "0.15"], ["d", "M345.65,250.59l-.08.13a76.51,76.51,0,0,1-41.08,13.83,75.27,75.27,0,0,1-24.85-2.86c-5.75-11.16-6.91-31.8-2.8-59.67,6.15-41.72,31.53-99.9,31.53-99.9l7.55,2.77s2.1,41.62,3.73,70.32c.33,5.79.88,12.24,1.69,18.87C324.56,220.31,331.84,249.28,345.65,250.59Z", 2, "fill", "#cba6e1"], ["d", "M301.13,228.22l-3-1.28c-7.16-3-8.94-6.91-9.37-8.44a5.73,5.73,0,0,1,4-7.06c2.71-.76,5.62,1.35,6.8,3.8.53-2.67,2.82-5.44,5.64-5.37a5.71,5.71,0,0,1,5.6,5.84c0,1.6-.78,5.81-7,10.51Z", 2, "fill", "#fafafa"], ["d", "M304.49,264.55a76.51,76.51,0,0,0,41.08-13.83s-25.11,10-45.2-.13-24.32-42.83-22.57-54.43q-.54,3-1,5.86c-4.11,27.87-2.95,48.51,2.8,59.67A75.27,75.27,0,0,0,304.49,264.55Z", 2, "opacity", "0.1"], ["d", "M310.42,102.87c-3.77,9.84-14.6,43.65-15.52,50.58,0,0,14-43.35,16.48-48.36l1.8,59.4V103.88Z", 2, "opacity", "0.1"], ["id", "freepik--Hearts--inject-35"], ["id", "freepik--Heart--inject-35", "d", "M374.61,130.49l-2.39-1c-5.63-2.36-7-5.43-7.37-6.63A4.5,4.5,0,0,1,368,117.3c2.14-.6,4.42,1,5.35,3,.42-2.1,2.22-4.27,4.43-4.22a4.5,4.5,0,0,1,4.41,4.59c0,1.26-.61,4.57-5.48,8.27Z", 2, "fill", "#cba6e1"], ["id", "freepik--heart--inject-35", "d", "M392.44,116.78l-2.22-2.49c-5.21-5.83-5.14-10.14-4.87-11.72A5.77,5.77,0,0,1,392,97.86c2.8.48,4.53,3.66,4.55,6.4,1.64-2.2,4.92-3.73,7.45-2.45a5.76,5.76,0,0,1,2.57,7.74c-.72,1.43-3.22,5-10.88,6.54Z", 2, "fill", "#cba6e1"]],
      template: function Hero1Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ellipse", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "g", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ellipse", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "ellipse", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "g", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "g", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "path", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "g", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "g", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "g", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "path", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "g", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "g", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "path", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "path", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "path", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "path", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "path", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "path", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "path", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "path", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "path", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "path", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "g", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "path", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "path", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "path", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "path", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "path", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "path", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "polygon", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "path", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "polygon", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "path", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "circle", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "path", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "path", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "path", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "path", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "path", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "path", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "path", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "path", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "path", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "polygon", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "path", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "polygon", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "path", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "circle", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "path", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "path", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "path", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "path", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "path", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "path", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "path", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "path", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "path", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "g", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "path", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "path", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "path", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "path", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "path", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "path", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "path", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "path", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "path", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "path", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "path", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "path", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "path", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "path", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "path", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "path", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "path", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "path", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "path", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "path", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "path", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "path", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "path", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "path", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "g", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "path", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "path", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["svg[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15%;\n  right: 10%;\n  width: 750px;\n  height: 700px;\n}\n#heart-1[_ngcontent-%COMP%] {\n  -webkit-animation: heart-1 2s linear infinite;\n          animation: heart-1 2s linear infinite;\n  transform-origin: center;\n  transform-box: fill-box;\n}\n#heart-2[_ngcontent-%COMP%] {\n  -webkit-animation: heart-2 2s linear infinite;\n          animation: heart-2 2s linear infinite;\n  transform-origin: center;\n  transform-box: fill-box;\n}\n#hand-1[_ngcontent-%COMP%] {\n  -webkit-animation: hand-1 2s linear infinite;\n          animation: hand-1 2s linear infinite;\n  transform-origin: center;\n  transform-box: fill-box;\n}\n#hand-2[_ngcontent-%COMP%] {\n  -webkit-animation: hand-2 1s linear infinite;\n          animation: hand-2 1s linear infinite;\n  transform-origin: center;\n  transform-box: fill-box;\n}\n#line-1[_ngcontent-%COMP%] {\n  -webkit-animation: line-1 2.3s linear infinite;\n          animation: line-1 2.3s linear infinite;\n  transform-origin: center;\n  transform-box: fill-box;\n}\n#line-2[_ngcontent-%COMP%] {\n  -webkit-animation: line-2 2.2s linear infinite;\n          animation: line-2 2.2s linear infinite;\n  transform-origin: center;\n  transform-box: fill-box;\n}\n#line-3[_ngcontent-%COMP%] {\n  -webkit-animation: line-3 2.4s linear infinite;\n          animation: line-3 2.4s linear infinite;\n  transform-origin: center;\n  transform-box: fill-box;\n}\n@-webkit-keyframes line-1 {\n  0% {\n    transform: translateY(-40%);\n    opacity: 1;\n  }\n  50% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n  100% {\n    transform: translateY(-40%);\n    opacity: 1;\n  }\n}\n@keyframes line-1 {\n  0% {\n    transform: translateY(-40%);\n    opacity: 1;\n  }\n  50% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n  100% {\n    transform: translateY(-40%);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes line-2 {\n  0% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n  50% {\n    transform: translateY(-80%);\n    opacity: 1;\n  }\n  100% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n@keyframes line-2 {\n  0% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n  50% {\n    transform: translateY(-80%);\n    opacity: 1;\n  }\n  100% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes line-3 {\n  0% {\n    transform: translateY(-20%);\n    opacity: 1;\n  }\n  50% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n  100% {\n    transform: translateY(-20%);\n    opacity: 1;\n  }\n}\n@keyframes line-3 {\n  0% {\n    transform: translateY(-20%);\n    opacity: 1;\n  }\n  50% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n  100% {\n    transform: translateY(-20%);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes hand-1 {\n  0% {\n    transform: rotate(10deg) translateX(-5%) translateY(5%);\n  }\n  50% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(10deg) translateX(-5%) translateY(5%);\n  }\n}\n@keyframes hand-1 {\n  0% {\n    transform: rotate(10deg) translateX(-5%) translateY(5%);\n  }\n  50% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(10deg) translateX(-5%) translateY(5%);\n  }\n}\n@-webkit-keyframes hand-2 {\n  0% {\n    transform: rotate(0deg);\n  }\n  50% {\n    transform: rotate(15deg) translateX(15%);\n  }\n  100% {\n    transform: rotate(0deg);\n  }\n}\n@keyframes hand-2 {\n  0% {\n    transform: rotate(0deg);\n  }\n  50% {\n    transform: rotate(15deg) translateX(15%);\n  }\n  100% {\n    transform: rotate(0deg);\n  }\n}\n@-webkit-keyframes heart-1 {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.2);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes heart-1 {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.2);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@-webkit-keyframes heart-2 {\n  0% {\n    transform: scale(1.2);\n  }\n  50% {\n    transform: scale(1);\n  }\n  100% {\n    transform: scale(1.2);\n  }\n}\n@keyframes heart-2 {\n  0% {\n    transform: scale(1.2);\n  }\n  50% {\n    transform: scale(1);\n  }\n  100% {\n    transform: scale(1.2);\n  }\n}\n@media only screen and (max-width: 1000px) {\n  svg[_ngcontent-%COMP%] {\n    right: 15%;\n    top: 10%;\n    width: 500px;\n    height: 450px;\n  }\n}\n@media only screen and (max-width: 767px) {\n  svg[_ngcontent-%COMP%] {\n    left: 15%;\n    top: 10%;\n    width: 300px;\n    height: 250px;\n  }\n}\n@media only screen and (max-width: 375px) {\n  svg[_ngcontent-%COMP%] {\n    left: 23%;\n    top: 69%;\n    width: 200px;\n    height: 250px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVybzEvaGVybzEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsVUFBVTtFQUNWLFlBQVk7RUFDWixhQUFhO0FBQ2Y7QUFDQTtFQUNFLDZDQUFxQztVQUFyQyxxQ0FBcUM7RUFDckMsd0JBQXdCO0VBQ3hCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsNkNBQXFDO1VBQXJDLHFDQUFxQztFQUNyQyx3QkFBd0I7RUFDeEIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSw0Q0FBb0M7VUFBcEMsb0NBQW9DO0VBQ3BDLHdCQUF3QjtFQUN4Qix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLDRDQUFvQztVQUFwQyxvQ0FBb0M7RUFDcEMsd0JBQXdCO0VBQ3hCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsOENBQXNDO1VBQXRDLHNDQUFzQztFQUN0Qyx3QkFBd0I7RUFDeEIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSw4Q0FBc0M7VUFBdEMsc0NBQXNDO0VBQ3RDLHdCQUF3QjtFQUN4Qix1QkFBdUI7QUFDekI7QUFDQTtFQUNFLDhDQUFzQztVQUF0QyxzQ0FBc0M7RUFDdEMsd0JBQXdCO0VBQ3hCLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0U7SUFDRSwyQkFBMkI7SUFDM0IsVUFBVTtFQUNaO0VBQ0E7SUFDRSx3QkFBd0I7SUFDeEIsVUFBVTtFQUNaO0VBQ0E7SUFDRSwyQkFBMkI7SUFDM0IsVUFBVTtFQUNaO0FBQ0Y7QUFiQTtFQUNFO0lBQ0UsMkJBQTJCO0lBQzNCLFVBQVU7RUFDWjtFQUNBO0lBQ0Usd0JBQXdCO0lBQ3hCLFVBQVU7RUFDWjtFQUNBO0lBQ0UsMkJBQTJCO0lBQzNCLFVBQVU7RUFDWjtBQUNGO0FBQ0E7RUFDRTtJQUNFLHdCQUF3QjtJQUN4QixVQUFVO0VBQ1o7RUFDQTtJQUNFLDJCQUEyQjtJQUMzQixVQUFVO0VBQ1o7RUFDQTtJQUNFLHdCQUF3QjtJQUN4QixVQUFVO0VBQ1o7QUFDRjtBQWJBO0VBQ0U7SUFDRSx3QkFBd0I7SUFDeEIsVUFBVTtFQUNaO0VBQ0E7SUFDRSwyQkFBMkI7SUFDM0IsVUFBVTtFQUNaO0VBQ0E7SUFDRSx3QkFBd0I7SUFDeEIsVUFBVTtFQUNaO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsMkJBQTJCO0lBQzNCLFVBQVU7RUFDWjtFQUNBO0lBQ0Usd0JBQXdCO0lBQ3hCLFVBQVU7RUFDWjtFQUNBO0lBQ0UsMkJBQTJCO0lBQzNCLFVBQVU7RUFDWjtBQUNGO0FBYkE7RUFDRTtJQUNFLDJCQUEyQjtJQUMzQixVQUFVO0VBQ1o7RUFDQTtJQUNFLHdCQUF3QjtJQUN4QixVQUFVO0VBQ1o7RUFDQTtJQUNFLDJCQUEyQjtJQUMzQixVQUFVO0VBQ1o7QUFDRjtBQUNBO0VBQ0U7SUFDRSx1REFBdUQ7RUFDekQ7RUFDQTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsdURBQXVEO0VBQ3pEO0FBQ0Y7QUFWQTtFQUNFO0lBQ0UsdURBQXVEO0VBQ3pEO0VBQ0E7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLHVEQUF1RDtFQUN6RDtBQUNGO0FBQ0E7RUFDRTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0Usd0NBQXdDO0VBQzFDO0VBQ0E7SUFDRSx1QkFBdUI7RUFDekI7QUFDRjtBQVZBO0VBQ0U7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLHdDQUF3QztFQUMxQztFQUNBO0lBQ0UsdUJBQXVCO0VBQ3pCO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxxQkFBcUI7RUFDdkI7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtBQUNGO0FBVkE7RUFDRTtJQUNFLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UscUJBQXFCO0VBQ3ZCO0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7QUFDRjtBQUNBO0VBQ0U7SUFDRSxxQkFBcUI7RUFDdkI7RUFDQTtJQUNFLG1CQUFtQjtFQUNyQjtFQUNBO0lBQ0UscUJBQXFCO0VBQ3ZCO0FBQ0Y7QUFWQTtFQUNFO0lBQ0UscUJBQXFCO0VBQ3ZCO0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7RUFDQTtJQUNFLHFCQUFxQjtFQUN2QjtBQUNGO0FBQ0E7RUFDRTtJQUNFLFVBQVU7SUFDVixRQUFRO0lBQ1IsWUFBWTtJQUNaLGFBQWE7RUFDZjtBQUNGO0FBRUE7RUFDRTtJQUNFLFNBQVM7SUFDVCxRQUFRO0lBQ1IsWUFBWTtJQUNaLGFBQWE7RUFDZjtBQUNGO0FBQ0E7RUFDRTtJQUNFLFNBQVM7SUFDVCxRQUFRO0lBQ1IsWUFBWTtJQUNaLGFBQWE7RUFDZjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvaGVybzEvaGVybzEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInN2ZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNSU7XG4gIHJpZ2h0OiAxMCU7XG4gIHdpZHRoOiA3NTBweDtcbiAgaGVpZ2h0OiA3MDBweDtcbn1cbiNoZWFydC0xIHtcbiAgYW5pbWF0aW9uOiBoZWFydC0xIDJzIGxpbmVhciBpbmZpbml0ZTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICB0cmFuc2Zvcm0tYm94OiBmaWxsLWJveDtcbn1cbiNoZWFydC0yIHtcbiAgYW5pbWF0aW9uOiBoZWFydC0yIDJzIGxpbmVhciBpbmZpbml0ZTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICB0cmFuc2Zvcm0tYm94OiBmaWxsLWJveDtcbn1cbiNoYW5kLTEge1xuICBhbmltYXRpb246IGhhbmQtMSAycyBsaW5lYXIgaW5maW5pdGU7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgdHJhbnNmb3JtLWJveDogZmlsbC1ib3g7XG59XG4jaGFuZC0yIHtcbiAgYW5pbWF0aW9uOiBoYW5kLTIgMXMgbGluZWFyIGluZmluaXRlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4gIHRyYW5zZm9ybS1ib3g6IGZpbGwtYm94O1xufVxuI2xpbmUtMSB7XG4gIGFuaW1hdGlvbjogbGluZS0xIDIuM3MgbGluZWFyIGluZmluaXRlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4gIHRyYW5zZm9ybS1ib3g6IGZpbGwtYm94O1xufVxuI2xpbmUtMiB7XG4gIGFuaW1hdGlvbjogbGluZS0yIDIuMnMgbGluZWFyIGluZmluaXRlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4gIHRyYW5zZm9ybS1ib3g6IGZpbGwtYm94O1xufVxuI2xpbmUtMyB7XG4gIGFuaW1hdGlvbjogbGluZS0zIDIuNHMgbGluZWFyIGluZmluaXRlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4gIHRyYW5zZm9ybS1ib3g6IGZpbGwtYm94O1xufVxuQGtleWZyYW1lcyBsaW5lLTEge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00MCUpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTQwJSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQGtleWZyYW1lcyBsaW5lLTIge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTgwJSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQGtleWZyYW1lcyBsaW5lLTMge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMCUpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwJSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQGtleWZyYW1lcyBoYW5kLTEge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTBkZWcpIHRyYW5zbGF0ZVgoLTUlKSB0cmFuc2xhdGVZKDUlKTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDEwZGVnKSB0cmFuc2xhdGVYKC01JSkgdHJhbnNsYXRlWSg1JSk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgaGFuZC0yIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTVkZWcpIHRyYW5zbGF0ZVgoMTUlKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyBoZWFydC0xIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufVxuQGtleWZyYW1lcyBoZWFydC0yIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICBzdmcge1xuICAgIHJpZ2h0OiAxNSU7XG4gICAgdG9wOiAxMCU7XG4gICAgd2lkdGg6IDUwMHB4O1xuICAgIGhlaWdodDogNDUwcHg7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICBzdmcge1xuICAgIGxlZnQ6IDE1JTtcbiAgICB0b3A6IDEwJTtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzVweCkge1xuICBzdmcge1xuICAgIGxlZnQ6IDIzJTtcbiAgICB0b3A6IDY5JTtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgfVxufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Hero1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-hero1',
          templateUrl: './hero1.component.html',
          styleUrls: ['./hero1.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pointer/pointer.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/pointer/pointer.component.ts ***!
    \**********************************************/

  /*! exports provided: PointerComponent */

  /***/
  function srcAppPointerPointerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PointerComponent", function () {
      return PointerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PointerComponent = /*#__PURE__*/function () {
      function PointerComponent() {
        _classCallCheck(this, PointerComponent);
      }

      _createClass(PointerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PointerComponent;
    }();

    PointerComponent.ɵfac = function PointerComponent_Factory(t) {
      return new (t || PointerComponent)();
    };

    PointerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PointerComponent,
      selectors: [["app-pointer"]],
      decls: 11,
      vars: 0,
      consts: [[1, "row"], [1, "col"], ["width", "512", "height", "512", "viewBox", "0 0 512 512", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["id", "pointer-1", "clip-path", "url(#clip0)"], ["id", "hand"], ["id", "Vector", "d", "M103.613 2.30655e-05L352.397 1.31606e-06C360.71 5.89317e-07 367.451 6.74099 367.451 15.054L367.451 86.883C367.451 95.196 360.71 101.937 352.397 101.937L220.354 101.937C212.041 101.937 205.3 95.196 205.3 86.883C205.3 78.57 212.041 71.829 220.354 71.829L337.343 71.829L337.343 30.107L118.667 30.107L118.667 71.829L147.272 71.829C155.585 71.829 162.326 78.57 162.326 86.883C162.326 95.196 155.585 101.937 147.272 101.937L103.613 101.937C95.3 101.937 88.559 95.196 88.559 86.883L88.559 15.054C88.559 6.74001 95.3 2.37922e-05 103.613 2.30655e-05Z", "fill", "#B3404A"], ["id", "Vector_2", "d", "M209.519 313.987L209.519 329.938C209.519 345.886 222.528 359.468 239.247 360.034C256.8 360.629 271.226 347.241 271.226 330.643L271.226 313.43L271.559 467.536C271.559 483.779 285.372 496.947 302.413 496.947L303.6 496.947C320.639 496.947 334.454 483.779 334.454 467.536L334.454 356.865L334.454 331.418L334.454 254.51L364.474 327.607C369.755 343.376 387.458 352.072 404.001 347.038C420.544 341.995 429.666 325.129 424.385 309.354L358.467 173.609C350.326 156.844 332.711 146.109 313.33 146.1L135.907 146.023C108.416 146.011 86.124 167.249 86.121 193.455L86.103 310.011C86.103 326.254 99.916 339.422 116.957 339.422C133.996 339.422 147.811 326.254 147.811 310.011L147.811 317C147.811 333.243 161.624 346.411 178.665 346.411C195.704 346.411 209.519 333.243 209.519 317", "fill", "#F4B2B0"], ["id", "Vector_3", "d", "M135.885 130.968C135.896 130.968 135.905 130.968 135.915 130.968L313.336 131.045C338.369 131.057 361.398 145.184 372.008 167.033L437.927 302.777C438.21 303.36 438.455 303.959 438.66 304.573C442.448 315.881 441.514 327.964 436.035 338.595C430.351 349.625 420.533 357.737 408.392 361.438C384.318 368.763 358.425 355.981 350.381 332.909L349.509 330.788L349.509 467.537C349.508 492.054 328.913 512 303.6 512L302.414 512C277.101 512 256.507 492.054 256.507 467.536L256.301 372.33C250.737 374.323 244.776 375.288 238.741 375.08C223.403 374.559 210.116 366.794 202.204 355.164C195.318 359.162 187.265 361.464 178.667 361.464C164.781 361.464 152.317 355.464 143.891 345.999C136.322 351.328 127.011 354.474 116.958 354.474C91.645 354.474 71.05 334.528 71.05 310.01L71.07 193.453C71.071 176.621 77.91 160.837 90.325 149.011C102.535 137.375 118.715 130.968 135.885 130.968ZM410.342 314.894L344.927 180.183C339.315 168.628 326.911 161.156 313.325 161.15L135.905 161.073C135.899 161.073 135.893 161.073 135.887 161.073C126.484 161.073 117.679 164.528 111.093 170.804C104.7 176.895 101.179 184.938 101.177 193.452L101.157 310.008C101.157 317.922 108.246 324.362 116.958 324.362C125.67 324.362 132.757 317.922 132.757 310.005C132.757 301.692 139.498 294.951 147.811 294.951C156.124 294.951 162.865 301.692 162.865 310.005L162.865 316.996C162.865 324.913 169.954 331.353 178.665 331.353C187.377 331.353 194.466 324.913 194.466 316.996L194.466 313.985C194.466 305.672 201.207 298.931 209.52 298.931C217.833 298.931 224.574 305.672 224.574 313.985L224.574 329.938C224.572 337.953 231.384 344.706 239.759 344.989C244.381 345.167 248.702 343.539 251.882 340.467C254.65 337.792 256.175 334.302 256.175 330.643L256.175 313.43C256.175 305.122 262.906 298.385 271.212 298.376C271.217 298.376 271.224 298.376 271.229 298.376C279.531 298.376 286.265 305.095 286.283 313.398L286.616 467.502C286.616 475.45 293.703 481.892 302.415 481.892L303.6 481.892C312.312 481.892 319.4 475.452 319.4 467.535L319.4 254.507C319.4 247.317 324.485 241.13 331.538 239.738C338.595 238.344 345.648 242.136 348.379 248.788L378.399 321.886C378.527 322.195 378.643 322.508 378.748 322.825C381.456 330.912 390.821 335.312 399.617 332.634C403.912 331.326 407.343 328.542 409.271 324.8C410.873 321.696 411.244 318.208 410.342 314.894Z", "fill", "#B3404A"], ["id", "clip0"], ["width", "512", "height", "512", "fill", "white", "transform", "translate(512 512) rotate(180)"]],
      template: function PointerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "g", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "g", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "defs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "clipPath", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "rect", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["#pointer-1[_ngcontent-%COMP%] {\n  -webkit-animation: hand 1s linear infinite;\n          animation: hand 1s linear infinite;\n  transform-origin: center;\n  transform-box: fill-box;\n}\n\nsvg[_ngcontent-%COMP%] {\n  z-index: 2;\n}\n\n@-webkit-keyframes hand {\n  0% {\n    transform: translateY(-5%);\n    opacity: 1;\n  }\n  50% {\n    transform: translateY(5%);\n    opacity: 1;\n  }\n  100% {\n    transform: translateY(-5%);\n    opacity: 1;\n  }\n}\n\n@keyframes hand {\n  0% {\n    transform: translateY(-5%);\n    opacity: 1;\n  }\n  50% {\n    transform: translateY(5%);\n    opacity: 1;\n  }\n  100% {\n    transform: translateY(-5%);\n    opacity: 1;\n  }\n}\n\n@media only screen and (max-width: 1920px) {\n  svg[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 120px;\n    top: 55%;\n    right: 44%;\n  }\n}\n\n@media only screen and (max-width: 1440px) {\n  svg[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 120px;\n    top: 55%;\n    right: 44%;\n  }\n}\n\n@media only screen and (max-width: 1080px) {\n  svg[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 90px;\n    right: 44%;\n    margin-top: -95px;\n  }\n}\n\n@media only screen and (max-width: 750px) {\n  svg[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 95px;\n    right: 42%;\n  }\n}\n\n@media only screen and (max-width: 720px) {\n  svg[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 60px;\n    right: 42%;\n  }\n}\n\n@media only screen and (max-width: 411px) {\n  svg[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 51px;\n    right: 42%;\n    margin-top: -115px;\n  }\n}\n\n@media only screen and (max-width: 375px) {\n  svg[_ngcontent-%COMP%] {\n    position: absolute;\n    width: 45px;\n    right: 41%;\n    margin-top: -157px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9pbnRlci9wb2ludGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQ0FBa0M7VUFBbEMsa0NBQWtDO0VBQ2xDLHdCQUF3QjtFQUN4Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRTtJQUNFLDBCQUEwQjtJQUMxQixVQUFVO0VBQ1o7RUFDQTtJQUNFLHlCQUF5QjtJQUN6QixVQUFVO0VBQ1o7RUFDQTtJQUNFLDBCQUEwQjtJQUMxQixVQUFVO0VBQ1o7QUFDRjs7QUFiQTtFQUNFO0lBQ0UsMEJBQTBCO0lBQzFCLFVBQVU7RUFDWjtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLFVBQVU7RUFDWjtFQUNBO0lBQ0UsMEJBQTBCO0lBQzFCLFVBQVU7RUFDWjtBQUNGOztBQUNBO0VBQ0U7SUFDRSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFFBQVE7SUFDUixVQUFVO0VBQ1o7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixRQUFRO0lBQ1IsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsVUFBVTtJQUNWLGlCQUFpQjtFQUNuQjtBQUNGOztBQUNBO0VBQ0U7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFVBQVU7RUFDWjtBQUNGOztBQUNBO0VBQ0U7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFVBQVU7RUFDWjtBQUNGOztBQUNBO0VBQ0U7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFVBQVU7SUFDVixrQkFBa0I7RUFDcEI7QUFDRjs7QUFDQTtFQUNFO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysa0JBQWtCO0VBQ3BCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wb2ludGVyL3BvaW50ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwb2ludGVyLTEge1xuICBhbmltYXRpb246IGhhbmQgMXMgbGluZWFyIGluZmluaXRlO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4gIHRyYW5zZm9ybS1ib3g6IGZpbGwtYm94O1xufVxuXG5zdmcge1xuICB6LWluZGV4OiAyO1xufVxuXG5Aa2V5ZnJhbWVzIGhhbmQge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01JSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1JSk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUlKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE5MjBweCkge1xuICBzdmcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgdG9wOiA1NSU7XG4gICAgcmlnaHQ6IDQ0JTtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0NDBweCkge1xuICBzdmcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgdG9wOiA1NSU7XG4gICAgcmlnaHQ6IDQ0JTtcbiAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwODBweCkge1xuICBzdmcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogOTBweDtcbiAgICByaWdodDogNDQlO1xuICAgIG1hcmdpbi10b3A6IC05NXB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gIHN2ZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA5NXB4O1xuICAgIHJpZ2h0OiA0MiU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzIwcHgpIHtcbiAgc3ZnIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgcmlnaHQ6IDQyJTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MTFweCkge1xuICBzdmcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogNTFweDtcbiAgICByaWdodDogNDIlO1xuICAgIG1hcmdpbi10b3A6IC0xMTVweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzVweCkge1xuICBzdmcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogNDVweDtcbiAgICByaWdodDogNDElO1xuICAgIG1hcmdpbi10b3A6IC0xNTdweDtcbiAgfVxufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PointerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-pointer',
          templateUrl: './pointer.component.html',
          styleUrls: ['./pointer.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      baseURL: 'https://rachcampitos.github.io/babyShower/'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/runner/work/babyShower/babyShower/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map