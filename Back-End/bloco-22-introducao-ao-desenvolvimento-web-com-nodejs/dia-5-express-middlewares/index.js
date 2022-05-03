const express = require('express');
const bodyParser = require('body-parser');
const validateProductName = require('./utils/validateProductName');
const validateInfos = require('./utils/validateInfos');
const validateSalesDate = require('./utils/validateSaleDate');
const validatePeriod = require('./utils/validateWarrantyPeriod');

const app = express();
app.use(bodyParser.json());

const PORT = 4000;

app.get('/', (req, res) => {
  res.status(200).json({ message: "Hello World" });
});

app.post('/sales',
  validateProductName,
  validateInfos,
  validateSalesDate,
  validatePeriod,
  (req, res) => {
    res.status(201).json({ message: "Venda cadastrada com sucesso" });
  });

app.listen(PORT, () => {
  console.log('Online');
});
