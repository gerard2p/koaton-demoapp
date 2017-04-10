'use strict';

const fs = require('fs');

exports.default = function ( subdomains ) {
	let {www , origin} = subdomains;

	www.get('/')
		.get('/login')
		.get('/ejs', 'views.fake')
		.get('/noengine', 'views.noengine')
		.get('/nunjucks', 'views.nunjucks');

	www.rest('book')
		.rest('page')
		.rest('post')
		.rest('sucursal')
		.rest('/users', 'user');

	origin.get('/', function* (next) {
		console.log('here');
		yield next;
		this.body = fs.createReadStream('public/SampleVideo.mp4');
	}).post('/',function * (next) {
    this.statusCode = 100;
  }, true)
		.delete('/', true)
		.put('/', true);

};
