export type ConfigDao = {
  id: number;
  clientId: number;
  validFrom: Date;
  validTo: Date;
  pricing: string;
  config: string;
  group: string;
  frequency: string;
  period: string;
};
