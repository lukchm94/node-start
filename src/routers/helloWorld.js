const express = require('express');
const router = express.Router();
const resp = 'Hello world';

router.get('/', (req, res) => {
  res.send('Hello from ' + resp);
});

module.exports = router;
