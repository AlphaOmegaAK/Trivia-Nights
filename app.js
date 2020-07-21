const express = require('express');
const app = express();

const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('<h1> Trivia Nights</h1>');
});

app.listen(PORT, console.log(`Server Running on port: ${PORT}`))