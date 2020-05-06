var express = require('express');
app = express();

var quotes = [
  'The supernatural is the natural not yet understood.',
  'Even death is not to be feared by one who has lived wisely.',
  'Each time you love, love as deeply as if it were forever.'
]

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});

app.get('/quotes', function(req, res) {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  res.send(quotes[randomNumber]);
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

