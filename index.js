const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors({optionsSuccessStatus: 200}));
app.use(express.static(__dirname + '/public'));

// Routes
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

app.get()

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});