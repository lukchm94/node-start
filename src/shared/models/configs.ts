import { DataTypes, Model, Sequelize } from 'sequelize';

export class Config extends Model {
  public id!: number;
  public clientId!: number;
  public validFrom!: Date;
  public validTo!: Date;
  public pricing!: string;
  public config!: string;
  public group!: string;
  public frequency!: string;
  public period!: string;

  public static initialize(sequelize: Sequelize) {
    Config.init(
      {
        id: {
          type: DataTypes.BIGINT,
          primaryKey: true,
          autoIncrement: true,
        },
        clientId: {
          type: DataTypes.BIGINT,
          allowNull: false,
        },
        validFrom: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        validTo: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        pricing: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        config: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        group: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        frequency: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        period: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: 'Config',
        tableName: 'configs',
        timestamps: true,
      }
    );
  }
}
