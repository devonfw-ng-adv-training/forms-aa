import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Hotel} from '../model/hotel';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelRestService {

  constructor(private http: HttpClient) {
  }

  getHotels(): Observable<Hotel> {
    return this.http.get<Hotel>('api/data');
  }
}
