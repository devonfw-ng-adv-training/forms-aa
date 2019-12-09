import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Order} from '../order';

@Injectable({
  providedIn: 'root'
})
export class OrderRestService {
  private static ORDER_URI = '/api/order';


  constructor(private http: HttpClient) {
  }

  getOrder(): Observable<Order> {
    return this.http.get<Order>(OrderRestService.ORDER_URI);
  }
}
