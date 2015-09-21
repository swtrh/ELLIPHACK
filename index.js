var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.send('Hello World')
})

app.get('/help/', function(req, res) {
	res.send('Help! I need somebody')
})

console.log('Starting on port 3000')
app.listen(3000)