"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/distinctUntilChanged");
var personFormComponent = /** @class */ (function () {
    function personFormComponent(fb) {
        this.fb = fb;
        this.changes = [];
        this.message = '';
        this.degrees = ['BE', 'Btech', 'Bcom', 'BA', 'MBBS'];
    }
    personFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        //this.createFormControls();
        //this.createForm();
        this.personForm = this.fb.group({
            firstName: ['Sherlock', [forms_1.Validators.required, forms_1.Validators.pattern('[a-zA-Z0-9]+')]],
            lastName: ['Holme', [forms_1.Validators.required]],
            gender: ['male'],
            qualification: ['BE']
        });
        this.personForm.get('firstName').valueChanges.subscribe(function (change) {
            _this.changes.push(change);
        });
    };
    //createFormControls() {
    //    this.firstName = new FormControl('Sherlock', [Validators.minLength(4), Validators.maxLength(10), Validators.required]);
    //    this.firstName.valueChanges.debounceTime(500).distinctUntilChanged().subscribe(change => {
    //        this.changes.push(change)
    //    })
    //    this.lastName = new FormControl('Holmes', Validators.minLength(4));
    //    this.gender = new FormControl('female');
    //    this.qualification = new FormControl('--Select--');
    //}
    //createForm() {
    //    this.personForm = new FormGroup({
    //        firstName: this.firstName,
    //        lastName: this.lastName,
    //        gender: this.gender,
    //        qualification:this.qualification
    //    });
    //}
    personFormComponent.prototype.onSubmit = function (form) {
        this.message = 'Hello ' + form.firstName + ' ' + form.lastName;
        this.personForm.reset();
        //if (this.personForm.valid)
        //    this.message = "Form is valid";
        //else
        //    this.message = "Form is invalid";
    };
    personFormComponent = __decorate([
        core_1.Component({
            selector: 'person-form',
            templateUrl: './person-form.html',
            moduleId: module.id
        }),
        __metadata("design:paramtypes", [forms_1.FormBuilder])
    ], personFormComponent);
    return personFormComponent;
}());
exports.personFormComponent = personFormComponent;
//# sourceMappingURL=person.form.component.js.map