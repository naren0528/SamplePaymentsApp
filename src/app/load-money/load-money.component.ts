import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/userService';
@Component({
    moduleId: module.id,
    templateUrl: 'load-money.component.html',
    styleUrls:['load-money.component.css']
})
export class LoadMoneyComponent implements OnInit {

    amount: any = "";
    currentUser: any
    currentUsername: any
    transactionData: any = [];
    sent: any = 0;

    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.currentUsername = this.currentUser.username;
    }

    ngOnInit()  {
        
    }
    addMoney() {
        this.userService.createTransaction(this.amount, this.currentUsername, this.currentUsername,this.sent).subscribe(data => {

            this.transactionData = JSON.parse(localStorage.getItem('transactions'));
            //alert(JSON.stringify(this.transactionData));
        },
            (error: any) => {

            });
    }

}