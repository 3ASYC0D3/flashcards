require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');
const cons = require('consolidate');
const ejs = require('ejs');
const mongoose = require('mongoose');
const Card = require('./models/cards');
const dbUrl = process.env.DB_URL;
// 'mongodb://localhost:27017/flashcards' - local db link

const viewPath = path.join(__dirname, 'views');
const port = 3000;

app.use(express.static('static'));
app.use(express.static(path.join(__dirname, 'static')))

app.engine('html', cons.swig);
app.set('views', viewPath);
app.set('view engine', 'ejs');

mongoose.connect(dbUrl)
  .then(() => {
      console.log('DB connected')
  })
  .catch(err => {
        console.log(err)
  });


app.get('/', (req, res) => {
    res.render('home')
}); 

app.get('/flashcards', async (req, res) => {
    const cards = await Card.find();
    res.render('flashcards', { cards })
});





app.listen(port);
console.log('Server started');