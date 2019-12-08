import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {HotelRestService} from './service/hotel-rest.service';
import {Hotel} from './model/hotel';
import {HotelFormService} from './service/hotel-form.service';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  name = 'Angular';
  form$: Observable<FormGroup>;
  data: Hotel;

  constructor(private hotelRestService: HotelRestService,
              private hotelFormService: HotelFormService) {
    this.form$ = this.hotelRestService.getHotels().pipe(map(hotel => this.hotelFormService.getHotelForm(hotel)));
  }

  ngOnInit() {
  }
}
