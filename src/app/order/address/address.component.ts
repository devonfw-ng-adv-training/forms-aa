import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';
import {Address} from './address';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AddressComponent),
      multi: true,
    }
  ]
})
export class AddressComponent implements OnInit, ControlValueAccessor {
  form: FormGroup;
  @Input() isParentSubmitted: boolean;

  constructor() {
  }

  registerOnChange(fn: any): void {
    this.form.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(val: Address): void {
    val && this.form.setValue(val, {emitEvent: false});
  }

  registerOnValidatorChange(fn: () => void): void {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      street: new FormControl('', {validators: Validators.required}),
      zipCode: new FormControl('', {validators: Validators.required}),
      city: new FormControl('', {validators: Validators.required}),
    });
  }
}
