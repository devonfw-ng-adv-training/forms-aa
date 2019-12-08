import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MyService} from './service.service';
import {HotelRestService} from './service/hotel-rest.service';
import {Hotel} from './model/hotel';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  name = 'Angular';
  form: FormGroup;
  data: Hotel;

  constructor(public fb: FormBuilder,
              public service: MyService,
              private hotelRestService: HotelRestService) {
    this.form = this.createForm();
  }

  ngOnInit() {
    this.hotelRestService.getHotels().subscribe((data: Hotel) => {
      this.data = data;
      this.mapData();
    });
  }

  getMainFormArray(nameForm: String) {
    return (<FormArray>this.form.get(`${nameForm}`)).controls;
  }

  getNestedFormArray(form: FormGroup, nameFormControl: String) {
    return (<FormArray>form.get(`${nameFormControl}`)).controls;
  }

  createForm() {
    return this.fb.group({
      id: [''],
      currencyId: [null, Validators.required],
      hotelYearId: [null, Validators.required],
      priceTaxTypeId: [null, Validators.required],
      code: ['', [Validators.required]],
      name: ['', [Validators.required]],
      createBy: [''],
      createDate: [''],
      lastUpdateBy: [''],
      lastUpdateDate: [''],
      remark: [''],
      internalRemark: [''],
      roomTypes: this.fb.array([]),
    });
  }

  private mapData() {
    this.data.roomTypes.forEach((roomtype, roomtypeIndex) => {
      let roomtypeFormArray = this.form.get('roomTypes') as FormArray;
      roomtypeFormArray.push(this.service.editFirstLayer(roomtype));
      roomtype.mealTypes.forEach((mealtype, mealtypeIndex) => {
        (<FormArray>roomtypeFormArray.controls[roomtypeIndex].get('mealTypes')).push(this.service.editsecondLayer(mealtype));
        mealtype.marketGroups.forEach((marketGroup, marketgroupIndex) => {
          (<FormArray>(<FormArray>roomtypeFormArray.controls[roomtypeIndex].get('mealTypes')).controls[mealtypeIndex].get('marketGroups')).push(this.service.editmarketGroups());
          marketGroup.markets.forEach((market, marketIndex) => {
            (<FormArray>(<FormArray>(<FormArray>roomtypeFormArray.controls[roomtypeIndex].get('mealTypes')).controls[mealtypeIndex].get('marketGroups')).controls[marketgroupIndex].get('markets')).push(this.service.editMarkets(market));
          });
          marketGroup.rateSegments.forEach((ragesegment, ragesegmentIndex) => {
            (<FormArray>(<FormArray>(<FormArray>roomtypeFormArray.controls[roomtypeIndex].get('mealTypes')).controls[mealtypeIndex].get('marketGroups')).controls[marketgroupIndex].get('rateSegments')).push(this.service.editRateSegment(ragesegment));
            ragesegment.hotelSeasons.forEach((hotelseason, hotelseasonIndex) => {
              (<FormArray>(<FormArray>(<FormArray>(<FormArray>(<FormArray>(<FormArray>roomtypeFormArray.controls[roomtypeIndex].get('mealTypes')).controls[mealtypeIndex].get('marketGroups')).controls[marketgroupIndex].get('rateSegments'))).controls[ragesegmentIndex]).get('hotelSeasons')).push(this.service.editHotelSeason(hotelseason));
              hotelseason.rates.forEach((rate, rateIndex) => {
                (<FormArray>(<FormArray>(<FormArray>(<FormArray>(<FormArray>(<FormArray>(<FormArray>(<FormArray>roomtypeFormArray.controls[roomtypeIndex].get('mealTypes')).controls[mealtypeIndex].get('marketGroups')).controls[marketgroupIndex].get('rateSegments'))).controls[ragesegmentIndex]).get('hotelSeasons')).controls[hotelseasonIndex]).get('rates')).push(this.service.editRate(rate));
              });
            });
          });
        });
      });
    });
  }
}
