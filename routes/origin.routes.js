'use strict';

const fs = require('fs');

const path = require('upath');

exports.default = router => {
	router.public.get('/', function* (next) {
		yield next;
		this.body = fs.createReadStream('public/SampleVideo.mp4');
	});
};