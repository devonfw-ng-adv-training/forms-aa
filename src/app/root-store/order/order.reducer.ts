import {Action, createReducer} from '@ngrx/store';
import {Order} from '../../order/order';

export const orderFeatureKey = 'order';

export interface OrderState {
  order: Order;
}

export const initialState: OrderState = {
  order: null
};

const orderReducer = createReducer(
  initialState,
);

export function reducer(state: OrderState | undefined, action: Action) {
  return orderReducer(state, action);
}
