import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/userService';
@Component({
    moduleId: module.id,
    templateUrl: 'send-money.component.html',
    styleUrls:['send-money.component.css']
})
export class SendMoneyComponent implements OnInit {

    users: any = [];
    amount: any = "";
    user: any;
    transactionData: any = [];
    currentUser:any 
    currentUsername: any
    sent: any = 1;

    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.currentUsername = this.currentUser.username;        
        /*alert(JSON.stringify(this.transactionData))*/
        //alert(JSON.stringify(JSON.parse(localStorage.getItem('transactions'))))
}
    ngOnInit() {
        this.loadAllUsers();  
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => {
            this.users = users;
            //alert(JSON.stringify(this.users))
        });
    }
    
    sendMoney() {
        this.userService.createTransaction(this.amount, this.user, this.currentUsername, this.sent).subscribe(data => {
            
            this.transactionData = JSON.parse(localStorage.getItem('transactions'));    
            alert(JSON.stringify(this.transactionData));
        },
            (error: any) => {

            });
        
    }
}