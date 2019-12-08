import {MealType} from './meal-type';

export interface RoomType {
  chk: boolean;
  roomTypeId: string;
  mealTypes: MealType[];
}
