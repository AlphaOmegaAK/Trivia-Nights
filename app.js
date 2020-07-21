const express = require('express');
const mongoose = require('mongoose')
const session = require('express-session');
const methodOverride = require('method-override')
require('dotenv').config;
require('./models/db')
const MongoStore = require('connect-mongo')(session)

const app = express();

//?   Controllers
const userCtrl = require('./controllers/user');

//?   Views
app.set('view engine', 'ejs');

//?   Middleware
app.use(express.static(`${__dirname}/public`));

app.use(methodOverride('_method'));

app.use(express.urlencoded({
  extended: false
}));


app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,

}))


// ?  Home Route
app.get('/', (req, res) => {
  res.render('index');
});

//?   User Route
app.use('user', userCtrl);


//Desc :  404  Route : req.url




const PORT = process.env.PORT || 4000;
app.listen(PORT, console.log(`Server Running on port: ${PORT}`))