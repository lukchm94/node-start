import { BaseConfig } from './configs';

export interface ConfigRepository {
  create: (baseConfig: BaseConfig) => Promise<BaseConfig>;
  findById: (id: number) => Promise<BaseConfig>;
  expireConfig: (id: number) => Promise<BaseConfig>;
}
