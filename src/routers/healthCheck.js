// src/routers/healthCheck.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Service is up and running');
});

module.exports = router;
