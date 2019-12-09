import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';
import {DeliveryInfo} from './delivery-info';

@Component({
  selector: 'app-delivery-info',
  templateUrl: './delivery-info.component.html',
  styleUrls: ['./delivery-info.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DeliveryInfoComponent),
      multi: true,
    }
  ]
})
export class DeliveryInfoComponent implements OnInit, ControlValueAccessor {
  form: FormGroup;
  @Input() isParentSubmitted: boolean;

  constructor() {
  }

  ngOnInit() {
    this.form = new FormGroup({
      courier: new FormControl(''),
      isExpress: new FormControl(''),
    });
  }

  registerOnChange(fn: any): void {
    this.form.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(val: DeliveryInfo): void {
    val && this.form.setValue(val, {emitEvent: false});
  }
}
