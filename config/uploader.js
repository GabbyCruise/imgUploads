const multer = require('multer');

var storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'uploads')
	},
	filename: (req, file, cb) => {
		//get the extention of the file
		var ext = file.originalname.substr(file.originalname.lastIndexOf('.'));
		if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|webp)$/)) {
			req.fileValidationError = 'Only Image files are allowed!';
			return cb(new Error('Only files are allowed!'), false);
		}

		cb(null, file.originalname)
		// cb(null, file.originalname + '-' + Date.now() + ext)
	},
});

const upload = multer({ storage: storage });
module.exports = upload;
