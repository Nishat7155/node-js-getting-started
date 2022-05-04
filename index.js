const express = require('express');

const path = require('path')
const app = express();

const PORT = process.env.PORT || 5000

app.get('/calc', function (req, res) {
  
 

  let num1 = Number(req.query.num1);
  let num2 = Number(req.query.num2);
  
  

  let operation = req.query.operation;

  try {
    num1 = parseInt(req.query.num1);
    num2 = parseInt(req.query.num2);

    if ((typeof (operation) === 'string') && typeof (num1) === 'number' && typeof (num2) === 'number') {
      if ((operation === 'add') || (operation === 'sub') || (operation === 'mult') || (operation === 'div')) {
        let result = calc(operation, num1, num2);
        res.json(result);
      }
    }
  } catch {
    res.json(null);
  }
});

app.listen(serverPort, () => {
  console.log("Server listening on port: " + serverPort);
});

function calc(operator, x, y) {
  let result = 0;

  if (operator == 'add') {
    result = x + y;
  } else if (operator == 'sub') {
    result = x - y;
  } else if (operator == 'mult') {
    result = x * y;
  } else if (operator == 'div') {
    result = x / y;
  }
  return result;
}