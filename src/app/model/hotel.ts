import {RoomType} from './room-type';

export interface Hotel {
  id: string;
  currencyId: string;
  hotelYearId: string;
  priceTaxTypeId: string;
  code: string;
  name: string;
  createBy: string;
  createDate: string;
  lastUpdateBy: string;
  lastUpdateDate: string;
  remark: string;
  internalRemark: string;
  roomTypes: RoomType[];
}
