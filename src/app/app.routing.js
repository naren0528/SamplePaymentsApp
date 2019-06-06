"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
//import { HomeComponent } from './home';
var login_component_1 = require("./login/login.component");
var registration_component_1 = require("./registration/registration.component");
var transactions_component_1 = require("./transactions/transactions.component");
var load_money_component_1 = require("./load-money/load-money.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var auth_guard_1 = require("./guard/auth.guard");
var users_component_1 = require("./users/users.component");
var send_money_component_1 = require("./send-money/send-money.component");
var appRoutes = [
    { path: '', component: dashboard_component_1.DashboardComponent, canActivate: [auth_guard_1.AuthGuard] },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'register', component: registration_component_1.RegistrationComponent },
    { path: 'transactions', component: transactions_component_1.TransactionsComponent },
    { path: 'loadMoney', component: load_money_component_1.LoadMoneyComponent },
    { path: 'users', component: users_component_1.UsersComponent },
    { path: 'sendMoney', component: send_money_component_1.SendMoneyComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map