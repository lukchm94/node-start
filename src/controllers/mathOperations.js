const validateNumbers = (num1, num2, res) => {
  if (num1 === undefined || num2 === undefined) {
    return res
      .status(400)
      .json({ error: 'Both num1 and num2 are required in the request body' });
  }

  if (isNaN(num1) || isNaN(num2)) {
    return res
      .status(400)
      .json({ error: 'Both num1 and num2 must be valid numbers' });
  }

  const result = parseInt(num1) + parseInt(num2);
  console.log('Result is: ', result);
  res.json({ result });
};

const getNumbers = (req) => {
  console.log('The method is of the request is: ', req.method);
  if (req.method === 'GET') {
    console.log('Getting numbers from req.query');
    const { num1, num2 } = req.query;
    return {num1, num2};
  } else if (req.method === 'POST') {
    const { num1, num2 } = req.body;
    return {num1, num2};
  } else {
    return null;
  }
  
};

const mathController = async (req, res) => {
  try {
    const { num1, num2 } = getNumbers(req);
    console.log('Got numbers: ', num1, ', ', num2);
    validateNumbers(num1, num2, res);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
};

module.exports = { mathController };
