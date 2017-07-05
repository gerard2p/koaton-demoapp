'use strict';

exports.default = {
	name: 'koaton',
	database: {
		relationsMode: 'ids',
		connection: 'mongo'
	},
	pagination: {
		limit: 50,
		serchTerm: 'search'
	},
	subdomains: ['www', 'origin'],
	host: {
		dev: 'koaton.test',
		prod: '127.0.0.1'
	},
	env: process.env.NODE_ENV || 'development',
	port: process.env.port || 62626,
	bodyParser: {},
	error: {
		layout: 'error',
		data:{
			support_email:'gerard2perez@outlook.com',
			description: 'Oops! - looks like something went completely wrong.'
		}
	},
	localization: {
		queryKey: 'locale',
		directory: './locales',
		locales: ['en', 'es'],
		modes: ['query', //  optional detect querystring - `/?locale=en-US`
		'subdomain', //  optional detect subdomain   - `zh-CN.koajs.com`
		'cookie', //  optional detect cookie      - `Cookie: locale=zh-TW`
		'header', //  optional detect header      - `Accept-Language: zh-CN,zh;q=0.5`
		'url', //  optional detect url         - `/en`
		'tld' //  optional detect tld(the last domain) - `koajs.cn`
		]
	}
};
