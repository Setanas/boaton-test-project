const express = require('express');
const port = 3002;
const db = require('./db');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})


app.use(require('./Routes'));

app.use(function(req, res, next) {
  res.status(404).send('Sorry cant find that!');
});

/**
 ** Connection to the data base mysql
 ** (see db.js to change connection parameters)
 **
 **/
db.connect(function(err) {
  if (err) {
    console.log('Unable to connect to MySQL.');
    process.exit(1);
  }
  console.log('You are now connected...');
});

const server = app.listen(port, (error) => {
  if (error) {
    return console.log(`Error ${error}`);
  }

  console.log("server is running on port 3002 !");
})
