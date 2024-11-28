import { Sequelize } from 'sequelize';
import { Config as ConfigModel } from '../../../../shared/db/connect';
import { ConfigRepository } from '../../domain/config.repository';
import { BaseConfig } from '../../domain/configs';
import { Config, ConfigType } from '../../domain/validations/config';
import { Frequency, FrequencyType } from '../../domain/validations/frequency';
import { Group, GroupType } from '../../domain/validations/group';
import { Period, PeriodType } from '../../domain/validations/period';
import { Pricing, PricingType } from '../../domain/validations/pricing';
import { ConfigDao } from './config.dao';

export class ConfigRepositoryImpl implements ConfigRepository {
  private sequelize: Sequelize;
  private configModel: typeof ConfigModel;

  constructor(sequelize: Sequelize) {
    this.sequelize = sequelize;
    this.configModel = ConfigModel;
  }

  public create = async (baseConfig: BaseConfig): Promise<BaseConfig> => {
    const newConfig = await this.configModel.create(baseConfig);
    if (!newConfig) {
      throw new Error('Error saving the config');
    }
    return this.mapDaoToDomain(newConfig.toJSON());
  };

  public expireConfig = async (id: number): Promise<BaseConfig> => {
    return new BaseConfig(
      id,
      new Date(2024, 11, 11),
      new Date(2024, 11, 19),
      PricingType.VOLUME as Pricing,
      ConfigType.DISCOUNT as Config,
      GroupType.IND as Group,
      FrequencyType.WEEK as Frequency,
      PeriodType.PREVIOUS as Period
    );
  };

  public findById = async (id: number): Promise<BaseConfig> => {
    return new BaseConfig(
      id,
      new Date(2024, 11, 11),
      new Date(2024, 11, 19),
      PricingType.VOLUME as Pricing,
      ConfigType.DISCOUNT as Config,
      GroupType.IND as Group,
      FrequencyType.WEEK as Frequency,
      PeriodType.PREVIOUS as Period
    );
  };

  private mapDaoToDomain(config: ConfigDao): BaseConfig {
    return new BaseConfig(
      config.clientId,
      config.validFrom,
      config.validTo,
      config.pricing as Pricing,
      config.config as Config,
      config.group as Group,
      config.frequency as Frequency,
      config.period as Period
    );
  }
}
