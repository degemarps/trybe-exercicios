const express = require('express');
const bodyParser = require('body-parser');
const pingController = require('./controllers/ping.controller');
const app = express();
app.use(bodyParser.json());
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/ping', pingController.getPingController);

app.listen(port, () => console.log(`Listening on port ${port}!`));
