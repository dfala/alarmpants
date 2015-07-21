// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');


// App definition
var app = express();


// Serving app
app.use(express.static(__dirname + '/'));


// Middleware
app.use(cors());

// Expanding server capacity
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));


// Controllers
var AlarmController = require('./controllers/alarmController.js');

////////////////////////////////////
//////////// REST API //////////////
////////////////////////////////////

// Metrics
// app.jsonp('/api/alarm', AlarmController.get);
app.get('/api/alarm', AlarmController.get);
app.post('/api/alarm', AlarmController.post);



////////////////////////////////////
////////////////////////////////////
////////////////////////////////////


// Connections
var portNum = 3000;

var mongooseUri = 'mongodb://localhost/alarmpants';
mongoose.connect(mongooseUri);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function (callback) {
  console.log('Mongoose listening to your soul on:', mongooseUri);
});


app.listen(portNum, function () {
    console.log('Making some pancakes on port:', portNum);
});