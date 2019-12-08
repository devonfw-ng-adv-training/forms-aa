import {Injectable} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Hotel} from '../model/hotel';
import {MealType} from '../model/meal-type';
import {RoomType} from '../model/room-type';
import {HotelSeason} from '../model/hotel-season';
import {Rate} from '../model/rate';
import {RateSegment} from '../model/rate-segment';
import {MarketGroup} from '../model/market-group';
import {Market} from '../model/market';

@Injectable({
  providedIn: 'root'
})
export class HotelFormService {

  constructor(private readonly fb: FormBuilder) {
  }

  getHotelForm(hotel: Hotel): FormGroup {
    return this.fb.group({
      id: [hotel.id, Validators.required],
      currencyId: [hotel.currencyId, Validators.required],
      hotelYearId: [hotel.hotelYearId, Validators.required],
      priceTaxTypeId: [hotel.priceTaxTypeId, Validators.required],
      code: [hotel.code, Validators.required],
      name: [hotel.name, Validators.required],
      createBy: [hotel.createBy, Validators.required],
      createDate: [hotel.createDate, Validators.required],
      lastUpdateBy: [hotel.lastUpdateBy, Validators.required],
      lastUpdateDate: [hotel.lastUpdateDate, Validators.required],
      remark: [hotel.remark, Validators.required],
      internalRemark: [hotel.internalRemark, Validators.required],
      roomTypes: this.fb.array(hotel.roomTypes.map(roomType => this.generateRoomTypeForm(roomType)))
    });
  }

  private generateRoomTypeForm(roomType: RoomType) {
    return this.fb.group({
      chk: [roomType.chk, Validators.required],
      roomTypeId: [roomType.roomTypeId, Validators.required],
      mealTypes: this.fb.array(roomType.mealTypes.map(mealType => this.generateMealTypeForm(mealType)))
    });
  }

  private generateMealTypeForm(mealType: MealType) {
    return this.fb.group({
      chk: [mealType.chk, Validators.required],
      mealTypeId: [mealType.mealTypeId, Validators.required],
      marketGroups: this.fb.array(mealType.marketGroups.map(marketGroup => this.generateMarketGroupForm(marketGroup)))
    });
  }

  private generateMarketGroupForm(marketGroup: MarketGroup) {
    return this.fb.group({
      chk: [marketGroup.chk, Validators.required],
      markets: this.fb.array(marketGroup.markets.map(market => this.generateMarketForm(market))),
      rateSegments: this.fb.array(marketGroup.rateSegments.map(rateSegment => this.generateRateSegmentForm(rateSegment))),
    });
  }

  private generateMarketForm(market: Market) {
    return this.fb.group({
      marketId: [market.marketId, Validators.required]
    });
  }

  private generateRateSegmentForm(rateSegment: RateSegment) {
    return this.fb.group({
      chk: [rateSegment.chk, Validators.required],
      rateSegmentId: [rateSegment.rateSegmentId, Validators.required],
      hotelSeasons: this.fb.array(rateSegment.hotelSeasons.map(hotelSeason => this.generateHotelSeasonForm(hotelSeason)))
    });
  }

  private generateHotelSeasonForm(hotelSeason: HotelSeason) {
    return this.fb.group({
      chk: [hotelSeason.chk, Validators.required],
      hotelSeasonId: [hotelSeason.hotelSeasonId, Validators.required],
      rates: this.fb.array(hotelSeason.rates.map(rate => this.generateRateForm(rate)))
    });
  }

  private generateRateForm(rate: Rate) {
    return this.fb.group({
      rateCodeId: [rate.rateCodeId, Validators.required],
      cancellationPolicyId: [rate.cancellationPolicyId, Validators.required],
      dayFlag: [rate.dayFlag, Validators.required],
      singlePrice: [rate.singlePrice, Validators.required],
      doublePrice: [rate.doublePrice, Validators.required],
      xbedPrice: [rate.xbedPrice, Validators.required],
      xbedChildPrice: [rate.xbedChildPrice, Validators.required],
      bfPrice: [rate.bfPrice, Validators.required],
      bfChildPrice: [rate.bfChildPrice, Validators.required],
      unitMonth: [rate.unitMonth, Validators.required],
      unitDay: [rate.unitDay, Validators.required],
      minStay: [rate.minStay, Validators.required]
    });
  }
}
