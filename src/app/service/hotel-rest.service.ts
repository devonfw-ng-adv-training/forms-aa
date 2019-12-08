import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HotelRestService {

  constructor(private http: HttpClient) {
  }

  getHotels() {
    return this.http.get('api/data');
  }
}
