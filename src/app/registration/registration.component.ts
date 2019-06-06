import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { UserService } from '../services/userService';


@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

    registrationForm: FormGroup;
    submitted = false;
    degrees = ['BE', 'Btech', 'Bcom', 'BA', 'MBBS'];
    users:any = []
    model: any = {};
    constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService)
    {  }

    ngOnInit() {
        this.registrationForm = this.formBuilder.group({
            firstName: ['', [Validators.required]],
            lastName: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            mobile: ['', [  Validators.required, Validators.minLength(8), Validators.maxLength(12), Validators.pattern('^[0-9]*$')]],
            url: ['', [Validators.pattern('https?://.+')]],
            qualification: ['BE'],
            dateOfBirth:[''],
            username: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }
    get fb() {
        return this.registrationForm.controls;
    }
    onSubmit() {
        this.submitted = true;
        if (this.registrationForm.valid) {
            //alert(JSON.stringify(this.registrationForm.value));
            this.userService.create(this.registrationForm.value).subscribe((data: any) => {
                
                        this.router.navigate(['/login']);
                    },
                (error: any) => {
                   
                    });            
            
        }
    }
}
