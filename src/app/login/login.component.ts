import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'
import { UserService } from '../services/userService';
import { AuthenticationService } from '../services/authentication.service';
//import { first } from 'rxjs/operators';
@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    submitted = false;
    returnUrl: string;
    model: any = {}

    constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService, private route: ActivatedRoute, private authenticationService: AuthenticationService)
    { 
        //let value = JSON.parse(localStorage.getItem('users'));
        //console.log(JSON.stringify(value['username']) + JSON.stringify(value['password']));
    }

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
        this.authenticationService.logout();

        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    get fb() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;
        if (this.loginForm.valid) {
            this.authenticationService.login(this.fb.username.value, this.fb.password.value).subscribe((data: any) => {
                        this.router.navigate([this.returnUrl]);
                    },
                (error: any) => {
                    });                                              
        }        
    }
}
