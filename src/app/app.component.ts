import {Component, OnInit} from '@angular/core';
import {FormArray, FormGroup} from '@angular/forms';
import {HotelRestService} from './service/hotel-rest.service';
import {Hotel} from './model/hotel';
import {HotelFormService} from './service/hotel-form.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  name = 'Angular';
  form: FormGroup;
  data: Hotel;

  constructor(private hotelRestService: HotelRestService,
              private hotelFormService: HotelFormService) {
  }

  ngOnInit() {
    this.hotelRestService.getHotels().subscribe((hotel: Hotel) => {
      this.form = this.hotelFormService.getHotelForm(hotel);
    });
  }

  getMainFormArray(nameForm: String) {
    return (<FormArray>this.form.get(`${nameForm}`)).controls;
  }

  getNestedFormArray(form: FormGroup, nameFormControl: String) {
    return (<FormArray>form.get(`${nameFormControl}`)).controls;
  }
}
