import {RateSegment} from './rate-segment';
import {Market} from './market';

export interface MarketGroup {
  chk: boolean;
  markets: Market[];
  rateSegments: RateSegment[];
}
