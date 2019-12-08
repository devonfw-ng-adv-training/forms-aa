import {Injectable} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class MyService {

  constructor(public fb: FormBuilder, private http: HttpClient) {

  }

  editFirstLayer(element) {
    return this.fb.group({
      chk: [true],
      roomTypeId: [element.roomTypeId],
      mealTypes: this.fb.array([])
    });
  }

  editsecondLayer(element) {
    return this.fb.group({
      chk: [true],
      mealTypeId: [element.mealTypeId],
      marketGroups: this.fb.array([]),

    });
  }

  editmarketGroups() {
    return this.fb.group({
      chk: [true],
      markets: this.fb.array([]),
      rateSegments: this.fb.array([])
    });
  }

  editMarkets(element) {
    return this.fb.group({
      marketId: [element.marketId]
    });
  }

  editRateSegment(element) {
    return this.fb.group({
      chk: [true],
      rateSegmentId: [element.rateSegmentId],
      hotelSeasons: this.fb.array([])
    });
  }

  editHotelSeason(element) {
    return this.fb.group({
      chk: [true],
      hotelSeasonId: [element.hotelSeasonId],
      rates: this.fb.array([])
    });
  }

  editRate(element) {
    return this.fb.group({
      rateCodeId: [element.rateCodeId],
      cancellationPolicyId: [element.cancellationPolicyId],
      dayFlag: [element.dayFlag],
      singlePrice: [element.singlePrice === undefined ? '' : parseFloat(element.singlePrice).toFixed(2)],
      doublePrice: [element.doublePrice === undefined ? '' : parseFloat(element.doublePrice).toFixed(2)],
      xbedPrice: [element.xbedPrice === undefined ? '' : parseFloat(element.xbedPrice).toFixed(2)],
      xbedChildPrice: [element.xbedChildPrice === undefined ? '' : parseFloat(element.xbedChildPrice).toFixed(2)],
      bfPrice: [element.bfPrice === undefined ? '' : parseFloat(element.bfPrice).toFixed(2)],
      bfChildPrice: [element.bfChildPrice === undefined ? '' : parseFloat(element.bfChildPrice).toFixed(2)],
      unitMonth: [element.unitMonth === undefined ? '' : parseFloat(element.unitMonth).toFixed(2)],
      unitDay: [element.unitDay === undefined ? '' : parseFloat(element.unitDay).toFixed(2)],
      minStay: [element.minStay],
    });
  }

  fetchApi() {
    return this.http.get('api/data');
  }
}
