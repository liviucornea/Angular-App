import { formatCurrency } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DateFormControl } from '../user-error/date-form-control';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']

})
export class UserComponent implements OnInit, OnDestroy {
  public userForm: FormGroup;

  constructor(private fb:FormBuilder) { 
    this.userForm = this.fb.group({
      firstName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
      lastName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
      email: new FormControl('', [Validators.required, Validators.email /* Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$") */]),
      salary: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]\d*$/)]),
      dateOfBirth: new DateFormControl('', [Validators.required, Validators.pattern(/^(0?[1-9]|[12][0-9]|3[01])([ \/\-])(0?[1-9]|1[012])\2([0-9][0-9][0-9][0-9])(([ -])([0-1]?[0-9]|2[0-3]):[0-5]?[0-9]:[0-5]?[0-9])?$/)])
    })
  }
  
  ngOnInit() {
    const USER_INFO = localStorage.getItem('userInfo');
    if (USER_INFO) {
      this.userForm.patchValue(JSON.parse(USER_INFO))
    }
  }

  ngOnDestroy(): void {
    console.log('user component is destroyed')
  }

  onSubmit() {
   /*  const FIRST_NAME = this.userForm.value.firstName;
    const LAST_NAME = this.userForm.value.lastName;
    const EMAIL = this.userForm.value.email;
    const SALARY = this.userForm.value.salary;
    const BIRTH_DATE = this.userForm.value.dateOfBirth;
    console.log(`First: ${FIRST_NAME}, Last: ${LAST_NAME}, Email: ${EMAIL}, Salary: ${SALARY}, Birth: ${BIRTH_DATE}`); */
  }

  resetOnClick() {
    this.userForm.reset();
  }

  saveOnClick() {
    localStorage.setItem('userInfo', JSON.stringify(this.userForm.value));
  }
}



