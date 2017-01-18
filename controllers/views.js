'use strict';
exports.default = {
	fake: function * () {
		yield this.render('fake.ejs', { body: 'compiled ejs' });
	},
	noengine: function * () {
		yield this.render('fake.noengine', { body: 'compiled noengine' });
	},
	nunjucks: function * () {
		yield this.render('test.njk');
	}
};
