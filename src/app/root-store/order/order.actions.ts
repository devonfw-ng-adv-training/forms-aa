import {createAction, props} from '@ngrx/store';
import {Order} from '../../order/order';

export const triggerLoadOrder = createAction('[Order] Trigger load of order');
export const finishLoadOrder = createAction('[Order] Loaded order', props<{ order: Order }>());
