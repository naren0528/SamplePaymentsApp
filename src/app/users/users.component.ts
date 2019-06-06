import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/userService';
@Component({
    moduleId: module.id,
    templateUrl: 'users.component.html',
    styleUrls:['users.component.css']
})
export class UsersComponent implements OnInit {

    currentUser: any;
    users: any = []; 
    firstName: string;
    lastName: string
    email:string
    mobile: number;
    url: string;
    qualification: string;
    dateOfBirth: Date;
    username:string;



    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        //alert(JSON.stringify(this.currentUser.username))
    }

    ngOnInit() {
        this.loadAllUsers();        
    }

    deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }
    viewDetails(Id:any) {
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
    }
    private loadAllUsers() {
        this.userService.getAll().subscribe(users => {
            this.users = users;
            //alert(JSON.stringify(this.users))
        });
    }
   
}