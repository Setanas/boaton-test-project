const express = require('express');
const port = 3002;

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


const server = app.listen(port, (error) => {
  if (error) {
    return console.log(`Error ${error}`);
  }

  console.log("server is running on port 3002 !");
})
