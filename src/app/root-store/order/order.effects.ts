import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {map, mergeMap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import * as OrderAction from './order.actions';
import {Action} from '@ngrx/store';
import {OrderRestService} from '../../order/service/order-rest.service';
import {Order} from '../../order/order';


@Injectable()
export class OrderEffects {
  loadOrder$: Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(OrderAction.triggerLoadOrder),
    mergeMap(() => this.orderRestService.getOrder()
      .pipe(map((order: Order) => OrderAction.finishLoadOrder({order}))),
    )),
  );

  constructor(private actions$: Actions,
              private orderRestService: OrderRestService) {
  }
}
