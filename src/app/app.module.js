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
var app_component_1 = require("./app.component");
var forms_1 = require("@angular/forms");
var registration_component_1 = require("./registration/registration.component");
var login_component_1 = require("./login/login.component");
var app_routing_1 = require("./app.routing");
var transactions_component_1 = require("./transactions/transactions.component");
var load_money_component_1 = require("./load-money/load-money.component");
var userService_1 = require("./services/userService");
var http_1 = require("@angular/common/http");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var auth_guard_1 = require("./guard/auth.guard");
var authentication_service_1 = require("./services/authentication.service");
var fake_backend_1 = require("./backend/fake-backend");
var jwt_interceptor_1 = require("./backend/jwt.interceptor");
var users_component_1 = require("./users/users.component");
var send_money_component_1 = require("./send-money/send-money.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.ReactiveFormsModule, forms_1.FormsModule, app_routing_1.routing, http_1.HttpClientModule],
            declarations: [app_component_1.AppComponent, registration_component_1.RegistrationComponent, login_component_1.LoginComponent, transactions_component_1.TransactionsComponent, load_money_component_1.LoadMoneyComponent, dashboard_component_1.DashboardComponent, users_component_1.UsersComponent, send_money_component_1.SendMoneyComponent],
            providers: [auth_guard_1.AuthGuard, authentication_service_1.AuthenticationService, userService_1.UserService, {
                    provide: http_1.HTTP_INTERCEPTORS,
                    useClass: jwt_interceptor_1.JwtInterceptor,
                    multi: true
                }, fake_backend_1.fakeBackendProvider],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map