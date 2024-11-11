const express = require('express');

const healthRouter = require('../routers/healthCheck');
const helloWorldRouter = require('../routers/helloWorld');
const mathRouter = require('../routers/math');
const app = express();
const PORT = process.env.PORT || 3000;

const version = '/v1';
app.use(express.json());
app.use(version + '/health', healthRouter);
app.use(version + '/hello', helloWorldRouter);
app.use(version + '/math', mathRouter);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
