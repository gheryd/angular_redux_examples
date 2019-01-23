import { ZipcodeValidators } from './../../validators/zipcode.validators';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormControlDirective } from '@angular/forms';

@Component({
  selector: 'app-ex-reactive-form',
  templateUrl: './ex-reactive-form.component.html',
  styleUrls: ['./ex-reactive-form.component.css']
})
export class ExReactiveFormComponent implements OnInit {

  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    lastname: new FormControl(),
    address: new FormControl(),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    city: new FormControl(),
    zipcode: new FormControl('', [
      ZipcodeValidators.wrongFormat
    ])
  });

  constructor() { }

  ngOnInit() {
  }

  showError(fieldName: string): boolean {
    const formControl = this.contactForm.get(fieldName);
    return formControl.touched && formControl.invalid;
  }

}
