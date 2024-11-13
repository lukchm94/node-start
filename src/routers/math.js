const express = require('express');
const router = express.Router();
const { mathController } = require('../controllers/mathOperations');
const resp = 'Result of addition of';

router.get('/add', async (req, res) => {
  try {await mathController(req, res);
  console.log('The body of the request is: ', req.body);} catch (err) {console.error('Error in math route: ', err)}
});

router.post('/math', async (req, res) => {
  // console.log('Request Headers:', req.headers);
  await mathController(req, res);
  console.log('The body of the request is: ', req.body);
});

module.exports = router;
