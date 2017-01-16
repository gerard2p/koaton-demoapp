export default {
	handlebars (handlebars) {
		handlebars.registerHelper('noop', function () {
			return '<strong>noop</strong>';
		});
	}
}
