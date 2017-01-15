module.exports = {
	handlebars (handlebars) {
		handlebars.registerHelper('noop', function () {
			return '<strong>noop</strong>';
		});
	}
}
