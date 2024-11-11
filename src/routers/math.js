const express = require('express');
const router = express.Router();
const { add } = require('../controllers/add');
const resp = 'Result of addition of';

router.get('/add', async (req, res) => {
  await add(req, res);
  console.log('The body of the request is: ', req.body);
});

router.post('/add', async (req, res) => {
  // console.log('Request Headers:', req.headers);
  await add(req, res);
  console.log('The body of the request is: ', req.body);
});

module.exports = router;
