import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

    //let users: any[] = JSON.parse(localStorage.getItem('users')) || [];
    constructor(private http: HttpClient) { }

    getById(id: number) {
        return this.http.get('/api/users/' + id);
    }
    create(user: any): any {
        return this.http.post('/api/users', user);
    }

    getAll() {
        return this.http.get('/api/users');
    }

    update(user: any) {
        return this.http.put('/api/users/' + user.id, user);
    }

    delete(id: number) {
        return this.http.delete('/api/users/' + id);
    }
    createTransaction(amount: any, username: any, senderName:any, sent:any) {
        return this.http.post('/api/transactions', {amount:amount,username:username,senderName:senderName,sent:sent});
    }
}