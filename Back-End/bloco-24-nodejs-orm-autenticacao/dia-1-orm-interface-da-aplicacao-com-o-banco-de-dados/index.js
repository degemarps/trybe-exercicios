const express = require('express');
const bookController = require('./controllers/booksController');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', bookController.getAll);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));
