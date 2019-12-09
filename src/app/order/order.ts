import {GeneralInfo} from './general-info/general-info';
import {BillingInfo} from './billing-info/billing-info';
import {Address} from './address/address';
import {DeliveryInfo} from './delivery-info/delivery-info';

export interface Order {
  generalInfo: GeneralInfo;
  billing: {
    info: BillingInfo;
    address: Address;
  };
  delivery: {
    info: DeliveryInfo;
    address: Address;
  };
}
