import {Action, createReducer, on} from '@ngrx/store';
import {Order} from '../../order/order';
import * as OrderAction from './order.actions';

export const orderFeatureKey = 'order';

export interface OrderState {
  order: Order;
}

export const initialState: OrderState = {
  order: null
};

const orderReducer = createReducer(
  initialState,
  on(OrderAction.finishLoadOrder, (state: OrderState, {order}) => ({...state, order: order}))
);

export function reducer(state: OrderState | undefined, action: Action) {
  return orderReducer(state, action);
}
