import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';


@Component({
  selector: 'app-user-error',
  templateUrl: './user-error.component.html',
  styleUrls: ['./user-error.component.scss']
})
export class UserErrorComponent implements OnInit {
  @Input() control!: FormControl;
  @Input() label!: string;

  constructor() {}

  ngOnInit(): void {}

  showErrors() {
    const { dirty, touched, errors } = this.control
    return dirty && touched && errors;
  }
}
