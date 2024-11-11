const express = require('express');

const healthRouter = require('../routers/healthCheck');
const helloWorldRouter = require('../routers/helloWorld');

const app = express();
const PORT = process.env.PORT || 3000;

const version = 'v1';

app.use(version + '/health', healthRouter);
app.use(version + '/hello', helloWorldRouter);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
