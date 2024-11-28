import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';
// import configModel from '../models/configs';
import { Config } from '../models/configs';

// Load the environment variables from .env file
dotenv.config();

// Retrieve environment variables from process.env
const DB_HOST = process.env.DB_HOST || 'localhost';
const DB_PORT = Number(process.env.DB_PORT) || 3306;
const DB_USER = process.env.DB_USER || 'root';
const DB_PASSWORD = process.env.DB_PASSWORD || '';
const DB_NAME = process.env.DB_NAME || 'app_dev';

// Initialize Sequelize instance with the environment variables
const sequelize = new Sequelize({
  dialect: 'mysql',
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

Config.initialize(sequelize);

// Authenticate the connection to the database
sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

// Sync the model to create the table in the database (if it doesn't already exist)
sequelize
  .sync({ force: true }) // Set force: true if you want to drop and recreate the tables
  .then(() => {
    console.log('Database tables synchronized successfully.');
  })
  .catch((err) => {
    console.error('Unable to synchronize the database:', err);
  });

export { Config, sequelize };
