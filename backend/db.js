require('dotenv').config();

const mongoose = require('mongoose');

mongoose
	//.connect(process.env.DB, { useNewUrlParser: true })
	.connect('mongodb://localhost/starposx', {
		useCreateIndex: true,
		useNewUrlParser: true,
		useFindAndModify: false
	})
	.then((x) => {
		console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
	})
	.catch((err) => {
		console.error('Error connecting to mongo', err);
	});
