export enum FrequencyType {
  WEEK = 'weekly',
  MONTH = 'monthly',
}

export type Frequency = FrequencyType.MONTH | FrequencyType.WEEK;
