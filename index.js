const express = require('express');
const port = process.env.PORT || 8000;
const bodyParser = require('body-parser');
const app = express();
//connecting to database
const db = require('./config/mongoose');

const cors = require('cors');

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(cors());

//using router
app.use('/', require('./routes/index.js'));

app.listen(port, function (err) {
  if (err) {
    console.log('Error in running server');
    return;
  }
  console.log('Server is running and up at port ', port);
  return;
});
