"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
// used to create fake backend
//import { fakeBackendProvider } from './_helpers/index';
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var app_config_1 = require("./app.config");
var index_1 = require("./_directives/index");
var index_2 = require("./_guards/index");
var index_3 = require("./_helpers/index");
var index_4 = require("./_services/index");
var index_5 = require("./home/index");
var index_6 = require("./login/index");
var index_7 = require("./register/index");
var index_8 = require("./addUser/index");
var index_9 = require("./company/index");
var index_10 = require("./search/index");
var index_11 = require("./individuals/index");
var index_12 = require("./companies/index");
var index_13 = require("./forgottenpassword/index");
var index_14 = require("./individualProfile/index");
var index_15 = require("./companyProfile/index");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpClientModule,
                app_routing_1.routing
            ],
            declarations: [
                app_component_1.AppComponent,
                index_1.AlertComponent,
                index_5.HomeComponent,
                index_6.LoginComponent,
                index_7.RegisterComponent,
                index_8.AddUserComponent,
                index_9.CompanyComponent,
                index_10.SearchComponent,
                index_11.IndividualsComponent,
                index_12.CompaniesComponent,
                index_13.ForgottenPasswordComponent,
                index_14.IndividualProfileComponent,
                index_15.CompanyProfileComponent
            ],
            providers: [
                app_config_1.AppConfig,
                index_2.AuthGuard,
                index_4.AlertService,
                index_4.AuthenticationService,
                index_4.UserService,
                {
                    provide: http_1.HTTP_INTERCEPTORS,
                    useClass: index_3.JwtInterceptor,
                    multi: true
                },
                index_4.PeopleService,
                {
                    provide: http_1.HTTP_INTERCEPTORS,
                    useClass: index_3.JwtInterceptor,
                    multi: true
                },
                index_4.CompanyService,
                {
                    provide: http_1.HTTP_INTERCEPTORS,
                    useClass: index_3.JwtInterceptor,
                    multi: true
                }
                // provider used to create fake backend
                //fakeBackendProvider
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map