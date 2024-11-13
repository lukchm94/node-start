import express, { Express } from 'express';
import healthRouter from '../routers/healthCheck';
import mathRouter from '../routers/math';

const app: Express = express();
const PORT: number = parseInt(process.env.PORT || '3000');

const version: string = '/v1';

app.use(express.json());
app.use(version + '/health', healthRouter);
app.use(version + '/math', mathRouter);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
