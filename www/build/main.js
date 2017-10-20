webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GithubService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GithubService = (function () {
    function GithubService(http) {
        this.http = http;
        this.gitUrl = 'https://api.github.com/';
    }
    GithubService.prototype.getUserDetail = function (username) {
        return this.http
            .get(this.gitUrl + ("users/" + username))
            .toPromise()
            .then(function (res) {
            return res.json();
        })
            .catch(this.handleError);
    };
    GithubService.prototype.getUserRepo = function (username) {
        return this.http
            .get(this.gitUrl + ("users/" + username + "/repos"))
            .toPromise()
            .then(function (res) {
            return res.json();
        })
            .catch(this.handleError);
    };
    GithubService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        var err = error.json();
        return Promise.reject(err.message || err);
    };
    return GithubService;
}());
GithubService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], GithubService);

//# sourceMappingURL=github.service.js.map

/***/ }),

/***/ 110:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 152:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 152;

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeIonicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_details_user_details__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_github_service__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_localstorage_service__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeIonicPage = (function () {
    function HomeIonicPage(gitHubService, store, nav, alertCtrl) {
        this.gitHubService = gitHubService;
        this.store = store;
        this.nav = nav;
        this.alertCtrl = alertCtrl;
        this.username = "cristopheryusuke";
        // this.buscarUsuario()
    }
    HomeIonicPage.prototype.buscarUsuario = function () {
        var _this = this;
        this
            .gitHubService
            .getUserDetail(this.username.trim())
            .then(function (res) {
            var user = res;
            _this.store.set({ key: "user", data: user });
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__user_details_user_details__["a" /* UserDetailsPage */]);
        })
            .catch(function (err) {
            _this.showAlert({
                title: 'Usuario não encontrado',
                subTitle: '',
                handler: function () {
                    console.log('ok');
                }
            });
        });
    };
    HomeIonicPage.prototype.showAlert = function (_a) {
        var title = _a.title, subTitle = _a.subTitle, handler = _a.handler;
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: subTitle,
            buttons: [{
                    text: 'Ok',
                    handler: handler
                }]
        });
        alert.present();
    };
    return HomeIonicPage;
}());
HomeIonicPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home-ionic',template:/*ion-inline-start:"C:\Users\cristopher\Documents\materaChallenge\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <h1>GitHub lite</h1>\n  <ion-list>\n    <ion-item>\n      <ion-label floating>Nome do Usuario</ion-label>\n      <ion-input [(ngModel)]="username" type="text"></ion-input>\n    </ion-item>\n  </ion-list>\n  <button ion-button color="primary" (click)="buscarUsuario()" >Buscar Usuario</button>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\cristopher\Documents\materaChallenge\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__service_github_service__["a" /* GithubService */],
        __WEBPACK_IMPORTED_MODULE_4__service_localstorage_service__["a" /* LocalstorageService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], HomeIonicPage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__repo_details_repo_details__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_github_service__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_localstorage_service__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListPage = (function () {
    function ListPage(navCtrl, navParams, store, gitHubService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.store = store;
        this.gitHubService = gitHubService;
        this.sort = 'desc';
        this.order = {
            desc: {
                func: function (a, b) {
                    return b.stargazers_count - a.stargazers_count;
                },
                icon: "up"
            },
            asc: {
                func: function (a, b) {
                    return a.stargazers_count - b.stargazers_count;
                },
                icon: "down"
            }
        };
        var user = store.get('user');
        this.gitHubService
            .getUserRepo(user.login)
            .then(function (res) {
            _this.repos = res;
            _this.orderRepos();
        });
    }
    ListPage.prototype.orderRepos = function () {
        this.repos = this.repos.sort(this.order[this.sort].func);
    };
    ListPage.prototype.toggleRepos = function () {
        this.sort = (this.sort == 'desc') ? 'asc' : 'desc';
        this.orderRepos();
    };
    ListPage.prototype.openRepoDetails = function (event, repo) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__repo_details_repo_details__["a" /* RepoDetailsPage */], { repo: repo });
    };
    return ListPage;
}());
ListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list',template:/*ion-inline-start:"C:\Users\cristopher\Documents\materaChallenge\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Repositorios</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list padding > \n    <button ion-button (click)="toggleRepos()"> \n        <ion-icon [name]="\'md-arrow-round-\' + order[sort].icon"></ion-icon>\n    </button>\n  </ion-list>\n  <ion-list>\n    <button ion-item *ngFor="let repo of repos " (click)="openRepoDetails($event, repo)">\n      {{repo.name}}\n      <div class="repo-note" item-right>\n        <ion-badge>\n          {{repo.stargazers_count}}\n          <ion-icon name="star"></ion-icon>\n        </ion-badge>\n      </div>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\cristopher\Documents\materaChallenge\src\pages\list\list.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__service_localstorage_service__["a" /* LocalstorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__service_localstorage_service__["a" /* LocalstorageService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__service_github_service__["a" /* GithubService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_github_service__["a" /* GithubService */]) === "function" && _d || Object])
], ListPage);

var _a, _b, _c, _d;
//# sourceMappingURL=list.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RepoDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RepoDetailsPage = (function () {
    function RepoDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.repo = navParams.get('repo');
    }
    return RepoDetailsPage;
}());
RepoDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-repo-details',template:/*ion-inline-start:"C:\Users\cristopher\Documents\materaChallenge\src\pages\repo-details\repo-details.html"*/'<ion-header>\n  <ion-navbar>\n    <button  ion-button  menuToggle *ngIf="repo">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Detalhes Repositorio</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content> \n  <div *ngIf="repo">\n    <h1 text-center>\n      <a ion-button outline  [href]="repo.html_url" target="_blank" >\n        {{repo.name}}\n      </a>\n    </h1>\n    <p text-center>\n      <ion-badge item-end>\n        {{repo.stargazers_count}}\n        <ion-icon name="star"></ion-icon>\n      </ion-badge>\n    </p>\n    <h3 text-center>\n      {{repo.language}}\n    </h3>\n    <ion-card>\n        <ion-card-content>\n          {{repo.description}}  \n        </ion-card-content>\n      </ion-card>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\Users\cristopher\Documents\materaChallenge\src\pages\repo-details\repo-details.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object])
], RepoDetailsPage);

var _a, _b;
//# sourceMappingURL=repo-details.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(218);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_repo_details_repo_details__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_user_details_user_details__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_list_list__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__service_github_service__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__service_localstorage_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomeIonicPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_repo_details_repo_details__["a" /* RepoDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_user_details_user_details__["a" /* UserDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_list_list__["a" /* ListPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                links: []
            }),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomeIonicPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_repo_details_repo_details__["a" /* RepoDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_user_details_user_details__["a" /* UserDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_list_list__["a" /* ListPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_9__service_github_service__["a" /* GithubService */],
            __WEBPACK_IMPORTED_MODULE_10__service_localstorage_service__["a" /* LocalstorageService */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_home_home__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_user_details_user_details__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_repo_details_repo_details__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_localstorage_service__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__service_github_service__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = (function () {
    function MyApp(platform, menu, statusBar, splashScreen, store, GithubService, alertCtrl) {
        var _this = this;
        this.platform = platform;
        this.menu = menu;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.store = store;
        this.GithubService = GithubService;
        this.alertCtrl = alertCtrl;
        // make HomeIonicPage the root (or first) page
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_home_home__["a" /* HomeIonicPage */];
        this.initializeApp();
        this.pages = [
            { title: 'Busca Usuario', component: __WEBPACK_IMPORTED_MODULE_2__pages_home_home__["a" /* HomeIonicPage */], isValid: function () { return true; } },
            { title: 'Detalhes Usuario', component: __WEBPACK_IMPORTED_MODULE_3__pages_user_details_user_details__["a" /* UserDetailsPage */], isValid: function () { return _this.hasUser(); } },
            { title: 'Lista Repositorio', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */], isValid: function () { return _this.hasUser(); } },
            { title: 'Repositorio com mais estrela', component: __WEBPACK_IMPORTED_MODULE_4__pages_repo_details_repo_details__["a" /* RepoDetailsPage */], isValid: function () { return _this.hasUser(); }, paramns: this.getRepoStarts() }
        ];
    }
    MyApp.prototype.hasUser = function () {
        var user = !!this.store.get('user');
        if (!user) {
            this.showAlert({ title: "Usuario não buscado", subTitle: "Favor buscar usuario na pagina principal" });
        }
        return user;
    };
    MyApp.prototype.getRepoStarts = function () {
        var user = this.store.get('user');
        return this.GithubService
            .getUserRepo(user.login)
            .then(function (res) { return res.sort(function (a, b) { return b.stargazers_count - a.stargazers_count; })[0]; });
    };
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.showAlert = function (_a) {
        var title = _a.title, subTitle = _a.subTitle;
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: subTitle,
            buttons: ['Ok']
        });
        alert.present();
    };
    MyApp.prototype.openPage = function (page) {
        var _this = this;
        this.menu.close();
        if (page.isValid()) {
            if (page.paramns) {
                page
                    .paramns
                    .then(function (paramns) {
                    _this.nav.setRoot(page.component, { repo: paramns });
                });
            }
            else {
                this.nav.setRoot(page.component);
            }
        }
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]) === "function" && _a || Object)
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\cristopher\Documents\materaChallenge\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"C:\Users\cristopher\Documents\materaChallenge\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__service_localstorage_service__["a" /* LocalstorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__service_localstorage_service__["a" /* LocalstorageService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__service_github_service__["a" /* GithubService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__service_github_service__["a" /* GithubService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _h || Object])
], MyApp);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalstorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LocalstorageService = (function () {
    function LocalstorageService() {
    }
    LocalstorageService.prototype.get = function (params) {
        return JSON.parse(localStorage.getItem(params));
    };
    LocalstorageService.prototype.set = function (_a) {
        var key = _a.key, data = _a.data;
        localStorage.setItem(key, JSON.stringify(data));
    };
    return LocalstorageService;
}());
LocalstorageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], LocalstorageService);

//# sourceMappingURL=localstorage.service.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_localstorage_service__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserDetailsPage = (function () {
    function UserDetailsPage(navCtrl, navParams, store) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.store = store;
        this.githubUser = {};
        this.githubUser = store.get('user');
    }
    return UserDetailsPage;
}());
UserDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-user-details',template:/*ion-inline-start:"C:\Users\cristopher\Documents\materaChallenge\src\pages\user-details\user-details.html"*/'\n\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Perfil</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card>\n    <ion-item>\n      <ion-avatar item-start>\n        <img [src]="githubUser.avatar_url">\n      </ion-avatar>\n      <h2>{{githubUser.name}}</h2>\n      <p>{{githubUser.bio}}</p>\n    </ion-item>\n    \n    <ion-item *ngIf="githubUser.email">\n        <ion-icon name="mail" item-left large  ></ion-icon>\n        <h2>{{githubUser.email}}</h2>\n      </ion-item>\n    <ion-item>\n      <ion-icon name="people" item-left large  ></ion-icon>\n      <h2>{{githubUser.followers}}</h2>\n      <p>Seguidores</p>\n    </ion-item>\n  \n    <ion-item>\n      <ion-icon name="people" item-left large ></ion-icon>\n      <h2>{{githubUser.following}}</h2>\n      <p>Seguindo</p>\n    </ion-item>\n  </ion-card>\n\n</ion-content>\n<!-- {\n  "login": "CristopherYusuke",\n  "id": 4607332,\n  "avatar_url": "https://avatars0.githubusercontent.com/u/4607332?v=4",\n  "gravatar_id": "",\n  "url": "https://api.github.com/users/CristopherYusuke",\n  "html_url": "https://github.com/CristopherYusuke",\n  "followers_url": "https://api.github.com/users/CristopherYusuke/followers",\n  "following_url": "https://api.github.com/users/CristopherYusuke/following{/other_user}",\n  "gists_url": "https://api.github.com/users/CristopherYusuke/gists{/gist_id}",\n  "starred_url": "https://api.github.com/users/CristopherYusuke/starred{/owner}{/repo}",\n  "subscriptions_url": "https://api.github.com/users/CristopherYusuke/subscriptions",\n  "organizations_url": "https://api.github.com/users/CristopherYusuke/orgs",\n  "repos_url": "https://api.github.com/users/CristopherYusuke/repos",\n  "events_url": "https://api.github.com/users/CristopherYusuke/events{/privacy}",\n  "received_events_url": "https://api.github.com/users/CristopherYusuke/received_events",\n  "type": "User",\n  "site_admin": false,\n  "name": "Cristopher",\n  "company": null,\n  "blog": "",\n  "location": "Brasil ",\n  "email": null,\n  "hireable": null,\n  "bio": "Front-end engineer\r\n",\n  "public_repos": 6,\n  "public_gists": 0,\n  "followers": 3,\n  "following": 3,\n  "created_at": "2013-06-04T04:11:44Z",\n  "updated_at": "2017-09-03T20:17:23Z"\n}\n -->'/*ion-inline-end:"C:\Users\cristopher\Documents\materaChallenge\src\pages\user-details\user-details.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__service_localstorage_service__["a" /* LocalstorageService */]])
], UserDetailsPage);

//# sourceMappingURL=user-details.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map