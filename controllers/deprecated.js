module.exports = {
	nunjucks: async function (ctx, next) {
		await ctx.render('test.njk');
	},
	async helpers (ctx, next) {
		await ctx.render(`helpers.${ctx.params.engine}`);
	}
}
