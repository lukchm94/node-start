import express, { Express } from 'express';
import swaggerUi from 'swagger-ui-express';
import { sequelize } from '../shared/db/connect'; // Import the sequelize instance
import { errorHandler } from '../shared/middleware/errorHandler';
import { Routes, Version } from '../shared/routers/routes';
import swaggerSpec from '../shared/routers/swagger/options';
import v1Router from '../shared/routers/v1/impl';
import v2Router from '../shared/routers/v2/impl';

const app: Express = express();

const PORT: number = parseInt(process.env.PORT || '3000');

// Middleware setup
app.use(express.json());
app.use(Routes.apiDocs, swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(Version.v1, v1Router);
app.use(Version.v2, v2Router);
app.use(errorHandler);

// Function to initialize the server
const startServer = async () => {
  try {
    // Attempt to connect to the database
    await sequelize.authenticate();

    // Start the Express server after successful DB connection
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}/`);
    });
  } catch (error) {
    process.exit(1); // Exit with a non-zero code
  }
};

// Call the startServer function
startServer();
