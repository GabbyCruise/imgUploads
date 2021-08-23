const mongoose = require('mongoose');
const localUrl = process.env.localUrl;


mongoose.connect(localUrl, { useCreateIndex: true, useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false }, (err, connected) => {
	try {
		if (err) {
			console.log('A connection error occured & refused to pen, Try again later', err);
		}
		if (connected) {
			console.log('Connection to images established');
		} else {
			console.log('Unable to connect to your DB');
		}
	} catch (err) {
		console.log(err);
		process.exist(1)
		// return err;
	};
});
