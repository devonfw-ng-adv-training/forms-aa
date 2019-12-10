import {Action, createReducer, on} from '@ngrx/store';
import {Order} from '../../order/order';
import * as OrderAction from './order.actions';

export const orderFeatureKey = 'order';


const emptyOrder: Order = {
  delivery: {
    address: {
      zipCode: null,
      city: null,
      street: null
    }, info: {
      courier: null,
      isExpress: false
    }
  }, billing: {
    address: {
      zipCode: null,
      city: null,
      street: null
    }, info: {
      bank: null,
      iban: null,
      validUntil: null
    }
  }, generalInfo: {
    firstName: null,
    lastName: null
  }
};

export interface OrderState {
  order: Order;
}

export const initialState: OrderState = {
  order: emptyOrder
};

const orderReducer = createReducer(
  initialState,
  on(OrderAction.finishLoadOrder, (state: OrderState, {order}) => ({...state, order: order})),
  on(OrderAction.resetOrder, (state: OrderState) => ({...state, order: emptyOrder}))
);

export function reducer(state: OrderState | undefined, action: Action) {
  return orderReducer(state, action);
}
