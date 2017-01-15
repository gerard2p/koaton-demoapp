"use strict";
const fs = require ('fs');
const path = require ('path');
module.exports=(router)=>{
	router.public.get('/',function * (next){
		yield next;
		this.body = fs.createReadStream('public/SampleVideo.mp4');
	});
};
