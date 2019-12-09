import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import * as fromOrder from './order.reducer';
import {reducer as orderReducer} from './order.reducer';
import {EffectsModule} from '@ngrx/effects';
import {OrderEffects} from './order.effects';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromOrder.orderFeatureKey, orderReducer),
    EffectsModule.forFeature([OrderEffects])
  ],
  providers: [OrderEffects]
})
export class OrderStoreModule {
}
