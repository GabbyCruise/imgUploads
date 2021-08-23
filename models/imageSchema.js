const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//-------------------PRAYER SCHEMA ---------------------//
const imageSchema = new Schema({
	image_title: String,
	doc_id: String,
	image_link: String,
  image_content: String,
	
	// for images
	filename: {
		type: String,
		unique: true,
	},
	contentType: {
		type: String,
	},
	imageBase64: {
		type: String,
	},

}, {
	timetamp: true
});

const Images = mongoose.model('Images', imageSchema);
module.exports = Images;
