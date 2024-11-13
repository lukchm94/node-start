import express, { Express } from 'express';
import { Version } from '../routers/routes';
import v1Router from '../routers/v1/impl';
import v2Router from '../routers/v2/impl';

const app: Express = express();

const PORT: number = parseInt(process.env.PORT || '3000');

app.use(express.json());
app.use(Version.v1, v1Router);
app.use(Version.v2, v2Router);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
