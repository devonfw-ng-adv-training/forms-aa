import {MarketGroup} from './market-group';

export interface MealType {
  chk: boolean;
  mealTypeId: string;
  marketGroups: MarketGroup[];
}
