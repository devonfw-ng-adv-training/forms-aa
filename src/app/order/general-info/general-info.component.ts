import {Component, forwardRef, Input, OnChanges, OnInit, SimpleChange, SimpleChanges} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validators
} from '@angular/forms';
import {GeneralInfo} from './general-info';

@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => GeneralInfoComponent),
    multi: true,
  }]
})
export class GeneralInfoComponent implements OnInit, OnChanges, ControlValueAccessor {
  form: FormGroup;
  @Input() isParentSubmitted: boolean;


  constructor() {
  }

  ngOnInit() {
    this.form = new FormGroup({
      firstName: new FormControl('', {validators: Validators.required}),
      lastName: new FormControl('', {validators: Validators.required}),
    });
  }

  registerOnChange(fn: any): void {
    this.form.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(val: GeneralInfo): void {
    val && this.form.setValue(val, {emitEvent: false});
  }


  validate(control: AbstractControl): ValidationErrors | null {
    return this.form.valid ? null : {invalidForm: {valid: false, message: 'address form is invalid'}};
  }

  ngOnChanges(changes: SimpleChanges): void {
    const submitted: SimpleChange = changes.isParentSubmitted;
    this.isParentSubmitted = submitted.currentValue;
    if (this.isParentSubmitted) {
      this.form.markAllAsTouched();
    } else if (this.form) {
      // reset form if submitted gets changed back to false
      this.form.reset();
    }
  }
}
