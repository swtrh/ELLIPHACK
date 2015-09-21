var express = require('express');
var app = express();
var port = (process.env.PORT || '3000');

app.get('/', function(req, res) {
	res.send('Hello World')
})

app.get('/help/', function(req, res) {
	res.send('Help! I need somebody')
})

console.log('Starting on port' + port)
app.listen(port)