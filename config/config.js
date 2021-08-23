const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const Handlebars = require('handlebars');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const session = require('cookie-session');
const dotenv = require('dotenv');
dotenv.config();
require('../models/dbConnection');

module.exports = (app) => {
	//----------------- LOGGER -----------------------//
	app.use(morgan('dev'));

	//---------------- bodyparser --------------------//
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));

	//----------RECOGNIZING PUBLIC FILES -------------//
	app.use(express.static('public'));
	app.use(express.static('uploads'));

	//----------- SESSION CONFIGURATION --------------//
	app.use(session({
		secret: 'your-secret-key-goes-here',
		resave: false,
		saveUninitialized: false
	}));

	//-------------- FLASH MESSAGES ----------------//
	app.use(flash());
	app.use(function (req, res, next) {
		//default
		res.locals.processError = req.flash('processError');
		res.locals.success = req.flash('success');
    res.locals.failure = req.flash('failure');
    res.locals.duplicate = req.flash('duplicate');
		res.locals.completeDigits = req.flash('digits');
		next();
	})

	//------------- HANDLEBAR VIEWS ----------------//
	app.engine('handlebars', handlebars.create({
		extname: 'handlebars',
		runtimeOptions: {
			allowProtoPropertiesByDefault: true,
			allowProtoMethodByDefault: true
		},
		defaultLayout: 'root',
		layoutsDir: app.get('views') + '/layouts',
	}).engine);
	app.set('view engine', 'handlebars');


	//-------------- TEXTS REFORMATING -----------//
	Handlebars.registerHelper('substr', function (length, context, options) {
		if (context.length > length) {
			return context.substring(0, length) + "...";
		} else {
			return context;
		}
	});
	return app;
}
