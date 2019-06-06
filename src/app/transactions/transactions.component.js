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
var TransactionsComponent = /** @class */ (function () {
    function TransactionsComponent() {
        this.Transactions = [];
        this.getTransactions();
    }
    TransactionsComponent.prototype.ngOnInit = function () {
    };
    TransactionsComponent.prototype.getTransactions = function () {
        this.Transactions = JSON.parse(localStorage.getItem('transactions'));
        this.sortTransactions();
    };
    TransactionsComponent.prototype.sortTransactions = function () {
        this.Transactions.sort(function (a, b) { return new Date(b.date).getTime() - new Date(a.date).getTime(); });
    };
    TransactionsComponent = __decorate([
        core_1.Component({
            templateUrl: './transactions.component.html',
            styleUrls: ['./transactions.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], TransactionsComponent);
    return TransactionsComponent;
}());
exports.TransactionsComponent = TransactionsComponent;
//# sourceMappingURL=transactions.component.js.map