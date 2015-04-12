//Initialize Dependencies
var express = require('express'),
	app = express(),
	db = require('mongoose'),
	bodyParser = require('body-parser');

//Database connection
db.connect('mongodb://localhost:27017/clementinejs');

//Initialize Middleware
app.use(bodyParser.json());

//View Engine Configuration
app.set('view engine', 'jade');
app.set('views', './app/views');

//Static directory shortcuts
app.use('/controllers', express.static(__dirname + '/app/controllers'));
app.use('/public', express.static(__dirname + '/public'));

//Routes
require('./app/routes/index.js')(app);

//listen
var port = 3000;
app.listen(3000, function (req, res) {
	console.log('Listening on port ' + port + '...');
});