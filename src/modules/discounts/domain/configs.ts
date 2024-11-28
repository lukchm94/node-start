import { Config, ConfigType } from './validations/config';
import { Frequency, FrequencyType } from './validations/frequency';
import { Group, GroupType } from './validations/group';
import { Period, PeriodType } from './validations/period';
import { Pricing, PricingType } from './validations/pricing';

export class BaseConfig {
  constructor(
    public readonly clientId: number,
    public readonly validFrom: Date,
    public readonly validTo: Date,
    public readonly pricing: Pricing,
    public readonly config: Config,
    public readonly group: Group,
    public readonly frequency: Frequency,
    public readonly period: Period
  ) {}

  public static PRICING_TYPE: Pricing[] = [
    PricingType.AREA_DENSITY,
    PricingType.POOLING,
    PricingType.STACKING,
    PricingType.VOLUME,
  ];

  public static CONFIG_TYPE: Config[] = [ConfigType.DISCOUNT, ConfigType.FEE];
  public static GROUP_TYPE: Group[] = [GroupType.GROUP, GroupType.IND];
  public static FREQ_TYPE: Frequency[] = [
    FrequencyType.MONTH,
    FrequencyType.WEEK,
  ];

  public static PERIOD_TYPE: Period[] = [
    PeriodType.CURRENT,
    PeriodType.PREVIOUS,
  ];

  private static validateDates(validFrom: Date, validTo: Date) {
    if (validFrom <= validTo) {
      throw new Error('ValidFrom must be smaller than ValidTo');
    }
    return { validFrom, validTo };
  }
  private static validatePricingType(pricing: string) {
    if (!BaseConfig.PRICING_TYPE.includes(pricing as Pricing)) {
      throw new Error('Invalid pricing type');
    }
    return pricing as Pricing;
  }

  private static validateConfigType(config: string) {
    if (!BaseConfig.CONFIG_TYPE.includes(config as Config)) {
      throw new Error('Invalid config type');
    }
    return config as Config;
  }

  private static validateGroupType(group: string) {
    if (!BaseConfig.GROUP_TYPE.includes(group as Group)) {
      throw new Error('Invalid group type');
    }
    return group as Group;
  }

  private static validateFreqType(frequency: string) {
    if (!BaseConfig.FREQ_TYPE.includes(frequency as Frequency)) {
      throw new Error('Invalid frequency type');
    }
    return frequency as Frequency;
  }

  private static validatePeriodType(period: string) {
    if (!BaseConfig.PERIOD_TYPE.includes(period as Period)) {
      throw new Error('Invalid period type');
    }
    return period as Period;
  }

  public static create(params: {
    clientId: number;
    validFrom: Date;
    validTo: Date;
    pricing: string;
    config: string;
    frequency: string;
    group: string;
    period: string;
  }): BaseConfig {
    const pricing = this.validatePricingType(params.pricing);
    const config = this.validateConfigType(params.config);
    const frequency = this.validateFreqType(params.frequency);
    const group = this.validateGroupType(params.group);
    const period = this.validatePeriodType(params.period);
    const dates = this.validateDates(params.validFrom, params.validTo);

    return new BaseConfig(
      params.clientId,
      dates.validFrom,
      dates.validTo,
      pricing,
      config,
      group,
      frequency,
      period
    );
  }
}
