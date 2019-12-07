import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrderOverviewComponent} from './order-overview/order-overview.component';
import {GeneralInfoComponent} from './general-info/general-info.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import { AddressComponent } from './address/address.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  declarations: [OrderOverviewComponent, GeneralInfoComponent, AddressComponent],
})
export class OrderModule {
}
