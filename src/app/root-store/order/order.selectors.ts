import {createFeatureSelector, createSelector} from '@ngrx/store';
import {orderFeatureKey, OrderState} from './order.reducer';

export const selectOrderState = createFeatureSelector<OrderState>(orderFeatureKey);

export const selectOrder = createSelector(
  selectOrderState,
  (state) => state.order,
);
