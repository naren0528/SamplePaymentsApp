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
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
        this.amountSent = 0;
        this.amountRecieved = 0;
        this.Transactions = [];
        this.totalTransactions = 0;
        this.recentTransaction = [];
        this.counts();
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.counts = function () {
        this.Transactions = JSON.parse(localStorage.getItem('transactions'));
        //alert(JSON.stringify(this.Transactions))
        this.totalTransactions = this.Transactions.length;
        this.Transactions.sort(function (a, b) { return new Date(b.date).getTime() - new Date(a.date).getTime(); });
        for (var i = 0; i < 5; i++) {
            this.recentTransaction.push(this.Transactions[i]);
        }
        for (var i = 0; i < this.Transactions.length; i++) {
            if (this.Transactions[i].sent == 1) {
                this.amountSent += this.Transactions[i].amount;
            }
            else {
                this.amountRecieved += this.Transactions[i].amount;
            }
        }
        //alert(this.amountSent +" "+this.amountRecieved)
    };
    DashboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'dashboard.component.html',
            styleUrls: ['dashboard.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map