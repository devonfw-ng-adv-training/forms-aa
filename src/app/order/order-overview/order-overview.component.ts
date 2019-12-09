import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {OrderState} from '../../root-store/order/order.reducer';
import {select, Store} from '@ngrx/store';
import {resetOrder, triggerLoadOrder} from '../../root-store/order/order.actions';
import {selectOrder} from '../../root-store/order/order.selectors';
import {Order} from '../order';

@Component({
  selector: 'app-order-overview',
  templateUrl: './order-overview.component.html',
  styleUrls: ['./order-overview.component.scss']
})
export class OrderOverviewComponent implements OnInit {
  form: FormGroup;
  submitted: boolean;

  private emptyOrder: Order = {
    delivery: {
      address: {
        zipCode: null,
        city: null,
        street: null
      }, info: {
        courier: null,
        isExpress: false
      }
    }, billing: {
      address: {
        zipCode: null,
        city: null,
        street: null
      }, info: {
        bank: null,
        iban: null,
        validUntil: null
      }
    }, generalInfo: {
      firstName: null,
      lastName: null
    }
  };

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

    this.store$.pipe(select(selectOrder))
      .subscribe(order => {
        if (order) {
          this.form.patchValue(order, {emitEvent: false});
        } else {
          this.form.setValue(this.emptyOrder);
        }
      });
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
    this.store$.dispatch(resetOrder());
  }
}
