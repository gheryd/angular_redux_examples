import { AppAction } from './../../../services/actions';
import { CityValidators } from './../../validators/city.validators';
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
    city: new FormControl('', Validators.required, CityValidators.asyncCheckCity),
    zipcode: new FormControl('', [
      ZipcodeValidators.wrongFormat
    ])
  });

  constructor(private appAction: AppAction) { }

  ngOnInit() {
  }

  showError(fieldName: string): boolean {
    const formControl = this.contactForm.get(fieldName);
    return formControl.touched && formControl.invalid;
  }

  doSubmit() {
    console.log(this.contactForm.value);
    if (this.contactForm.invalid) {
      this.appAction.log('invalid form data, NOT submited');
      this.contactForm.setErrors({
        noValidData: true
      })
    } else {
      this.appAction.log('form valid, submitted');
    }

  }
}
