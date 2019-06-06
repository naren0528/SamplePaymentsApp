"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var userService_1 = require("../services/userService");
var authentication_service_1 = require("../services/authentication.service");
//import { first } from 'rxjs/operators';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, router, userService, route, authenticationService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.userService = userService;
        this.route = route;
        this.authenticationService = authenticationService;
        this.submitted = false;
        this.model = {};
        //let value = JSON.parse(localStorage.getItem('users'));
        //console.log(JSON.stringify(value['username']) + JSON.stringify(value['password']));
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            username: ['', forms_1.Validators.required],
            password: ['', forms_1.Validators.required]
        });
        this.authenticationService.logout();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    Object.defineProperty(LoginComponent.prototype, "fb", {
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.loginForm.valid) {
            this.authenticationService.login(this.fb.username.value, this.fb.password.value).subscribe(function (data) {
                _this.router.navigate([_this.returnUrl]);
            }, function (error) {
            });
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'login.component.html'
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder, router_1.Router, userService_1.UserService, router_1.ActivatedRoute, authentication_service_1.AuthenticationService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map