import {Rate} from './rate';

export interface HotelSeason {
  chk: boolean;
  hotelSeasonId: string;
  rates: Rate[];
}
