let config = require('./' + process.env.NODE_ENV + '.js'),
	mongoose = require('mongoose');

module.exports = function () {
	mongoose.Promise = global.Promise; // Removes DeprecationWarning
	let db = mongoose.connect(config.db),
		conn = mongoose.connection;

	conn.once('open', function() {
		console.log('Connected to Mongoose');
	});
	conn.on('error', console.error.bind(console, 'connection error:'));
	conn.on('disconnected', function () {
		console.log('Disconnected from Mongoose');
	});
	process.on('SIGINT', function() {
		conn.close(function () {
			console.log('Mongoose default connection disconnected through app termination');
			process.exit(0);
		});
	});

	// Load models
	require('../models/domain');

	return db;
};