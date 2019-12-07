import {Component, forwardRef, Input, OnChanges, OnInit, SimpleChange, SimpleChanges} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
  Validators
} from '@angular/forms';
import {Address} from './address';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AddressComponent),
      multi: true,
    }, {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => AddressComponent),
      multi: true
    }
  ]
})
export class AddressComponent implements OnInit, ControlValueAccessor, Validator, OnChanges {
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
    debugger;
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

  validate(control: AbstractControl): ValidationErrors | null {
    return this.form.valid ? null : {invalidForm: {valid: false, message: 'address form is invalid'}};
  }

  ngOnChanges(changes: SimpleChanges): void {
    const submitted: SimpleChange = changes.isParentSubmitted;
    this.isParentSubmitted = submitted.currentValue;
    if (this.isParentSubmitted) {
      // workaround for the angular material bug: https://github.com/angular/material2/issues/7920
      Object.keys(this.form.controls).forEach(key => {
        this.form.get(key).markAsTouched();
      });
    } else if (this.form) {
      this.form.reset();
    }
  }
}
