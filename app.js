const path = require('path')
const express = require('express');
const mongoose = require('mongoose')
const session = require('express-session');
const methodOverride = require('method-override')
const dotenv = require('dotenv')
const MongoStore = require('connect-mongo')(session)
const questions = require('./models/questionsArr');
require('./models/db')

//? Config Load
dotenv.config({
  path: './config/config.env'
});


const app = express();

//   Controllers
const userCtrl = require('./controllers/user');
const gameCtrl = require(`./controllers/game`);
app.use(`/game`, gameCtrl)
//   Views
app.set('view engine', 'ejs');

//   Middleware
app.use(express.static(__dirname + '/public'));

app.use(methodOverride('_method'));

app.use(express.urlencoded({
  extended: false
}));


app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({
      mongooseConnection: mongoose.connection
    })

  })
);


// ?  Home Route
app.get('/', (req, res) => {
  res.render('index', {
    questions: questions,
  })
});

app.get('/dash', (req, res) => {
  res.render('dash');

});

app.get('/login', (req, res) => {
  res.render('login');

});

app.get('/signup', (req, res) => {
  res.render('signup');
});

//?   User Route
app.use('user', userCtrl);


//Desc :  404  Route : req.url

app.get(`*`, (req, res) => {
  res.render(`404`);
});


const PORT = process.env.PORT || 4000;
app.listen(PORT, console.log(`Server Running on port: ${PORT}`))
