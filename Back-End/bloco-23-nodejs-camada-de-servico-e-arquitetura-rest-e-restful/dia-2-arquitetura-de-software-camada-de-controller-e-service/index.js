const express = require('express');
const bodyParser = require('body-parser');
const pingController = require('./controllers/ping.controller');
const cepController = require('./controllers/cep.controller');
const app = express();
app.use(bodyParser.json());
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/ping', pingController.getPingController);

app.get('/cep/:cep', cepController.getCepController);

app.listen(port, () => console.log(`Listening on port ${port}!`));
