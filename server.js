const express = require('express');
const config = require('./config/config');
const routes = require('./routes/routes');
var app = express();

//---------------- SETTING THE PORT -------------------//
app.set('port', process.env.PORT || 2022);

//-------------- connecting config file ---------------//
app = config(app);

//--------------- ROUTES ------------------------------//
app.use(routes);


//================= MIDDLEWARE CONFIG ================//
//404
app.use((req, res, next) => {
	res.status(400).send('Page Not Found');
	return next();
});

//500
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.status(500).send('Internal Server Error Occured!');
	return next();
});

//----------------FIRERING UP THE APP ---------------//
app.listen(app.get('port'), function () {
	console.log('Image Uploader app started on : ' + app.get('port'));
});
