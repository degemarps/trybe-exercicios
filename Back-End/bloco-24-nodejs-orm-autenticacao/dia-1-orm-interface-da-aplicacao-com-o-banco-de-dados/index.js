const express = require('express');
const bookController = require('./controllers/booksController');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/books/:id', bookController.getById);

app.get('/books', bookController.getAll);

app.post('/books', bookController.addBook);

app.put('/books/:id', bookController.editBook);

app.delete('/books/:id', bookController.removeBook);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));
