import * as fs from 'fs';
import * as path from 'upath';

export default (router)=>{
	router.public.get('/',function * (next){
		yield next;
		this.body = fs.createReadStream('public/SampleVideo.mp4');
	});
};
