"use strict";

exports.default = function (schema, relation) {
	return {
		model: {
			name: { type: schema.String }
		},
		extra: {},
		relations: {
			"books": relation.hasMany("book.distributor_book")
		}
	};
};

;