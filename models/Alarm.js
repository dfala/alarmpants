var mongoose = require('mongoose');

// TODO: make ownerId required

var AlarmSchema = mongoose.Schema({
	  ownerId: { type: String}
	, audio: { type: String, required: true }
})


// create the model for users and expose it to our app
module.exports = mongoose.model('Alarm', AlarmSchema);