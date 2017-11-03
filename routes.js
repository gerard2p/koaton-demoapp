'use strict';

const fs = require('fs');

exports.default = function ( subdomains ) {
	let {www , origin} = subdomains;
	www.get('/')
		.get('/login')
		.get('/ejs', 'views.fake')
		.get('/noengine', 'views.noengine')
		.get('/nunjucks', 'deprecated.nunjucks')
		.get('/handlebars', 'views.handlebars')
		.get('/helpers', 'test.njk')
		.get('/helpers/:engine', 'deprecated.helpers')
		.post('/download', 'views.send');

	www.rest('book')
		.rest('page')
		.rest('post')
		.rest('sucursal')
		.rest('/users', 'user');

	origin.get('/', async function (ctx, next) {
		await next();
		ctx.body = fs.createReadStream('public/SampleVideo.mp4');
	}).post('/', async function (ctx, next) {
    ctx.statusCode = 100;
  }, true)
		.delete('/', true)
		.put('/', true);

};
