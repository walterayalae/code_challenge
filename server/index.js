const browserify = require('browserify-middleware');
const express = require('express');
const Path = require('path');

const routes = express.Router();


//Providing a browserified fil at a specific path
routes.get('/app-bundle.js',
	browserify('./client/app.js', {
		transform: [[ require('babelify'), {presets:['es2015', 'react']}]]
	})
);

const assetFolder = Path.resolve(__dirname, '../client/public');
routes.use(express.static(assetFolder));


var app = express();

app.use('/', routes);

var port =process.env.PORT || 8000;
app.listen(port);
console.log('Make some magic on port', port);