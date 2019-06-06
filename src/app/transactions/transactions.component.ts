import { Component, OnInit } from '@angular/core'


@Component({
    templateUrl: './transactions.component.html',
    styleUrls: ['./transactions.component.css']
})

export class TransactionsComponent implements OnInit {

    Transactions: any = [];


    constructor() {
        this.getTransactions();      
    }
    ngOnInit(): void {
        
    }
    getTransactions() {
        this.Transactions = JSON.parse(localStorage.getItem('transactions'));    
        this.sortTransactions();
    }

    sortTransactions() {
        this.Transactions.sort((a: { date: string | number | Date; }, b: { date: string | number | Date; }) =>{ return new Date(b.date).getTime() - new Date(a.date).getTime() });
    }
}