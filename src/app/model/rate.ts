export interface Rate {
  rateCodeId: string;
  cancellationPolicyId: string;
  dayFlag: string;
  singlePrice: string;
  doublePrice: string;
  xbedPrice: string;
  xbedChildPrice: string;
  bfPrice: string;
  bfChildPrice: string;
  unitMonth: string;
  unitDay: string;
  minStay: number;
}
