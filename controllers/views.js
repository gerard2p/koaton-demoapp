'use strict';
exports.default = {
	fake: async function (ctx, next) {
		await ctx.render('fake.ejs', { body: 'compiled ejs' });
	},
	noengine: async function (ctx, next) {
		await ctx.render('fake.noengine', { body: 'compiled noengine' });
	},
	nunjucks: async function (ctx, next) {
		await ctx.render('test.njk');
	}
};
