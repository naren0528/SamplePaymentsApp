import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/userService';

@Component({
    moduleId: module.id,
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    amountSent: number = 0;
    amountRecieved: number = 0;
    Transactions: any = [];
    totalTransactions: number = 0;
    recentTransaction: any = [];
    constructor() {
        this.counts();
    }

    ngOnInit() {
        
    }

    counts() {
        this.Transactions = JSON.parse(localStorage.getItem('transactions'));
        //alert(JSON.stringify(this.Transactions))
        this.totalTransactions = this.Transactions.length;
        this.Transactions.sort((a: { date: string | number | Date; }, b: { date: string | number | Date; }) => { return new Date(b.date).getTime() - new Date(a.date).getTime() });
        for (var i = 0; i < 5; i++) {
           this.recentTransaction.push(this.Transactions[i])
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
    }
}