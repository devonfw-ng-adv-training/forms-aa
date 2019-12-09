import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective} from '@angular/forms';
import {OrderState} from '../../root-store/order/order.reducer';
import {select, Store} from '@ngrx/store';
import {triggerLoadOrder} from '../../root-store/order/order.actions';
import {selectOrder} from '../../root-store/order/order.selectors';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-order-overview',
  templateUrl: './order-overview.component.html',
  styleUrls: ['./order-overview.component.scss']
})
export class OrderOverviewComponent implements OnInit {
  @ViewChild(FormGroupDirective, {static: false}) formDirective: FormGroupDirective;
  form: FormGroup;
  submitted: boolean;

  constructor(private store$: Store<OrderState>) {
  }

  ngOnInit() {
    this.store$.dispatch(triggerLoadOrder());
    this.form = new FormGroup({
      generalInfo: new FormControl(),
      billing: new FormGroup({
        info: new FormControl(),
        address: new FormControl(),
      }),
      delivery: new FormGroup({
        info: new FormControl(),
        address: new FormControl()
      })
    });

    this.store$.pipe(select(selectOrder), filter(val => !!val))
      .subscribe(order => this.form.patchValue(order, {emitEvent: false}));
  }

  apply(): void {
    this.submitted = true;
    if (this.form.valid) {
      console.log('saved!');
      console.log(this.form.getRawValue());

      setTimeout(() => this.resetForm(), 5000);
    }
  }

  public resetForm(): void {
    this.submitted = false;
    this.formDirective.resetForm();
  }
}
