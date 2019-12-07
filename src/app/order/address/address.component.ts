import {Component, OnInit} from '@angular/core';
import {ControlValueAccessor, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
})
export class AddressComponent implements OnInit, ControlValueAccessor {
  form: FormGroup;

  constructor() {
  }

  registerOnChange(fn: any): void {
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(obj: any): void {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      street: new FormControl('', {validators: Validators.required}),
      zipCode: new FormControl('', {validators: Validators.required}),
      city: new FormControl('', {validators: Validators.required}),
    });
  }
}
