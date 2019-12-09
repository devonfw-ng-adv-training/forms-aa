import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import * as fromOrder from './order.reducer';
import {reducer as orderReducer} from './order.reducer';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromOrder.orderFeatureKey, orderReducer)
  ]
})
export class OrderStoreModule {
}
