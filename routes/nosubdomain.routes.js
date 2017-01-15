"use strict";
module.exports=(router)=>{
	router.public.get('/',function *(){
		this.layout="";
		yield this.render('index.handlebars');
	});
};
