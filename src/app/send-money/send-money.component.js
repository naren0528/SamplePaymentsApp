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
var userService_1 = require("../services/userService");
var SendMoneyComponent = /** @class */ (function () {
    function SendMoneyComponent(userService) {
        this.userService = userService;
        this.users = [];
        this.amount = "";
        this.transactionData = [];
        this.sent = 1;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.currentUsername = this.currentUser.username;
        /*alert(JSON.stringify(this.transactionData))*/
        //alert(JSON.stringify(JSON.parse(localStorage.getItem('transactions'))))
    }
    SendMoneyComponent.prototype.ngOnInit = function () {
        this.loadAllUsers();
    };
    SendMoneyComponent.prototype.loadAllUsers = function () {
        var _this = this;
        this.userService.getAll().subscribe(function (users) {
            _this.users = users;
            //alert(JSON.stringify(this.users))
        });
    };
    SendMoneyComponent.prototype.sendMoney = function () {
        var _this = this;
        this.userService.createTransaction(this.amount, this.user, this.currentUsername, this.sent).subscribe(function (data) {
            _this.transactionData = JSON.parse(localStorage.getItem('transactions'));
            alert(JSON.stringify(_this.transactionData));
        }, function (error) {
        });
    };
    SendMoneyComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'send-money.component.html',
            styleUrls: ['send-money.component.css']
        }),
        __metadata("design:paramtypes", [userService_1.UserService])
    ], SendMoneyComponent);
    return SendMoneyComponent;
}());
exports.SendMoneyComponent = SendMoneyComponent;
//# sourceMappingURL=send-money.component.js.map