const express = require('express');

const app = express();

const PORT = 3000;

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => res.render('home'));
app.get('/bai1', (req, res) => res.render('bai1'));
app.get('/bai2', (req, res) => res.render('bai2'));
app.get('/bai3', (req, res) => res.render('bai3'));
app.listen(PORT, () => console.log(`Server listen at port ${PORT}`));