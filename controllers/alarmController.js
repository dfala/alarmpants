var exports = module.exports = {};

// Dependencies
var Alarm = require('../models/Alarm.js');


// Heavy lifting
exports.get = function (req, res) {
	Alarm.findOne({}, function (err, alarm) {
		console.log(err, alarm);
		if (err) return res.status(500).send(err);
		return res.json(alarm);
	})
}

exports.post = function (req, res) {
	var newAlarm = new Alarm();
	newAlarm.audio = req.body.audio;

	newAlarm.save(function (err, result) {
		if (err) return res.status(500).send(err);
		return res.json(result);
	})
}

exports.delete = function (req, res) {
	var alarmId = req.params.id;

	Alarm.findByIdAndRemove({}, function (err, result) {
		if (err) return res.status(500).send(err);
		return res.json(result);
	})
}