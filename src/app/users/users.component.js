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
var UsersComponent = /** @class */ (function () {
    function UsersComponent(userService) {
        this.userService = userService;
        this.users = [];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        //alert(JSON.stringify(this.currentUser.username))
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.loadAllUsers();
    };
    UsersComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this.userService.delete(id).subscribe(function () { _this.loadAllUsers(); });
    };
    UsersComponent.prototype.viewDetails = function (Id) {
        for (var i = 0; i < this.users.length; i++)
            if (this.users[i].id == Id) {
                this.firstName = this.users[i].firstName;
                this.lastName = this.users[i].lastName;
                this.email = this.users[i].email;
                this.mobile = this.users[i].mobile;
                this.url = this.users[i].url;
                this.qualification = this.users[i].qualification;
                this.dateOfBirth = this.users[i].dateOfBirth;
                this.username = this.users[i].username;
            }
    };
    UsersComponent.prototype.loadAllUsers = function () {
        var _this = this;
        this.userService.getAll().subscribe(function (users) {
            _this.users = users;
            //alert(JSON.stringify(this.users))
        });
    };
    UsersComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'users.component.html',
            styleUrls: ['users.component.css']
        }),
        __metadata("design:paramtypes", [userService_1.UserService])
    ], UsersComponent);
    return UsersComponent;
}());
exports.UsersComponent = UsersComponent;
//# sourceMappingURL=users.component.js.map