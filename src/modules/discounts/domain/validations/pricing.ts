export enum PricingType {
  VOLUME = 'volume',
  AREA_DENSITY = 'area_density',
  STACKING = 'stacking',
  POOLING = 'pooling',
}

export type Pricing =
  | PricingType.AREA_DENSITY
  | PricingType.POOLING
  | PricingType.STACKING
  | PricingType.VOLUME;
