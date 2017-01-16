export default (router)=>{
	router.public.get('/',function *(){
		yield this.render('index.html');
	});
	router.public.get('/login',function *(){
		yield this.render('login.html');
	});
	router.public.get('/ejs',function *(){
		yield this.render('fake.ejs', {body: 'compiled ejs'});
	});
	router.public.get('/noengine',function *(){
		yield this.render('fake.noengine', {body: 'compiled noengine'});
	});

	router.public.get('/nunjucks',function *(){
		yield this.render('test.njk');
	});
};
