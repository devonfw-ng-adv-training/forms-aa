import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrderOverviewComponent} from './order-overview/order-overview.component';
import {GeneralInfoComponent} from './general-info/general-info.component';
import {ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatGridListModule,
  MatInputModule,
  MatNativeDateModule
} from '@angular/material';
import {AddressComponent} from './address/address.component';
import {BillingInfoComponent} from './billing-info/billing-info.component';
import {DeliveryInfoComponent} from './delivery-info/delivery-info.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  declarations: [OrderOverviewComponent, GeneralInfoComponent, AddressComponent, BillingInfoComponent, DeliveryInfoComponent],
})
export class OrderModule {
}
