const express = require('express');
const bodyParser = require('body-parser');
const validateProductName = require('./utils/validateProductName');

const app = express();
app.use(bodyParser.json());

const PORT = 4000;

app.get('/', (req, res) => {
  res.status(200).json({ message: "Hello World" });
});

app.post('/sales', validateProductName, (req, res) => {});

app.listen(PORT, () => {
  console.log('Online');
});
