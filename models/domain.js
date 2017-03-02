let mongoose = require('mongoose');

let DomainSchema = new mongoose.Schema({
	name: {type: String, trim: true, required: true},
	filter: {type: [String], default: [''], trim: true},
	rating: {type: Number, enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], default: null, trim: true},
	status: {type: Boolean, default: null, trim: true},
	expirationDate: {type: Date, default: null}
});

module.exports = mongoose.model('Domain', DomainSchema); // Compile schema
