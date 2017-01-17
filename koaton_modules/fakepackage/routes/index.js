"use strict";
exports.default=(router)=>{
	router.public.get('/login',function *(){
		this.layout=null;
		yield this.render('login.html');
	});
};
