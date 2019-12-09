import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';
import {BillingInfo} from './billing-info';

@Component({
  selector: 'app-billing-info',
  templateUrl: './billing-info.component.html',
  styleUrls: ['./billing-info.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BillingInfoComponent),
      multi: true,
    }
  ]
})
export class BillingInfoComponent implements OnInit, ControlValueAccessor {
  form: FormGroup;
  @Input() isParentSubmitted: boolean;

  constructor() {
  }

  ngOnInit() {
    this.form = new FormGroup({
      bank: new FormControl(''),
      validUntil: new FormControl(''),
      iban: new FormControl(''),
    });
  }

  registerOnChange(fn: any): void {
    this.form.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(val: BillingInfo): void {
    val && this.form.setValue(val, {emitEvent: false});
  }
}
