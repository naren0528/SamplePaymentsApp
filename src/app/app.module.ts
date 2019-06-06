import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { routing } from './app.routing';
import { TransactionsComponent } from './transactions/transactions.component';
import { LoadMoneyComponent } from './load-money/load-money.component';
import { UserService } from './services/userService';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './guard/auth.guard';
import { AuthenticationService } from './services/authentication.service';
import { fakeBackendProvider } from './backend/fake-backend';
import { JwtInterceptor } from './backend/jwt.interceptor';
import { UsersComponent } from './users/users.component';
import { SendMoneyComponent } from './send-money/send-money.component';



@NgModule({
    imports: [BrowserModule, ReactiveFormsModule, FormsModule, routing, HttpClientModule],
    declarations: [AppComponent, RegistrationComponent, LoginComponent, TransactionsComponent, LoadMoneyComponent, DashboardComponent, UsersComponent, SendMoneyComponent],
    providers: [AuthGuard, AuthenticationService, UserService,  {
        provide: HTTP_INTERCEPTORS,
        useClass: JwtInterceptor,
        multi: true
    }, fakeBackendProvider],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
