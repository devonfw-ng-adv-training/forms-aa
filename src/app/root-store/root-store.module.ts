import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {OrderStoreModule} from './order/order-store.module';
import {metaReducers, reducers} from './index';
import {OrderEffects} from './order/order.effects';
import {EffectsModule} from '@ngrx/effects';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    OrderStoreModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    EffectsModule.forRoot([OrderEffects]),
  ],
  exports: [OrderStoreModule]
})
export class RootStoreModule {
}
