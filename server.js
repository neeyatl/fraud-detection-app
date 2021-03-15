const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'static')));

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'mustache')
app.engine('mustache', require('hogan-middleware').__express)

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


app.use('/', require('./routes/index-route'))


// set port, listen for requests
app.listen(3000, () => {
    console.log("Server is running on port 3000.");
  });