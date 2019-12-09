import {Component, forwardRef, Input, OnInit, ViewChild} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {MatSelect} from '@angular/material';
import {SelectBoxItem} from './select-box-item';

@Component({
  selector: 'app-customized-select-box',
  templateUrl: './customized-select-box.component.html',
  styleUrls: ['./customized-select-box.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomizedSelectBoxComponent),
      multi: true
    }
  ]
})
export class CustomizedSelectBoxComponent implements OnInit, ControlValueAccessor {
  @Input() placeholder: string;
  @Input() selectBoxItems: SelectBoxItem[] = [];

  @ViewChild(MatSelect, {static: true}) matSelect: MatSelect;

  selected: any;

  constructor() {
  }

  onChange = (_: any) => {
  };

  ngOnInit(): void {
  }

  registerOnChange(fn: (_: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState(isDisabled: boolean): void {
  }

  writeValue(obj: any): void {
    this.matSelect.value = obj;
    this.setSelectedIfDefined();
  }

  onSelectionChange() {
    this.setSelectedIfDefined();
    this.onChange(this.matSelect.value);
  }

  private setSelectedIfDefined() {
    const option = this.findById(this.matSelect.value);
    if (option) {
      this.selected = option.name;
    }
  }

  private findById(id: number): SelectBoxItem {
    return this.selectBoxItems.find(option => option.id === id);
  }
}
