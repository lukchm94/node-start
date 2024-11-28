export enum ConfigType {
  DISCOUNT = 'discount',
  FEE = 'fee',
}

export type Config = ConfigType.DISCOUNT | ConfigType.FEE;
