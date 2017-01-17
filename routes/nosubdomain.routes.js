'use strict';

exports.default = router => {
	router.public.get('/', function* () {
		this.layout = "";
		yield this.render('index.handlebars');
	});
};