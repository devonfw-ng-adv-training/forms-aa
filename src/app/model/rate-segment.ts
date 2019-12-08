import {HotelSeason} from './hotel-season';

export interface RateSegment {
  chk: boolean;
  rateSegmentId: string;
  hotelSeasons: HotelSeason[];
}
