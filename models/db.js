const mongoose = require('mongoose');
require('dotenv').config;
const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/TriviaNights';

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error(err))


module.exports = {
  User: require('./User')
}