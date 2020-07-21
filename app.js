const express = require('express');
const session = require('express-session');
const methodOverride = require('method-override')
require('dotenv').config;
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


// ?  Home Route
app.get('/', (req, res) => {
  res.render('index');
});

//?   User Route
app.use('user', userCtrl);







const PORT = process.env.PORT || 4000;
app.listen(PORT, console.log(`Server Running on port: ${PORT}`))