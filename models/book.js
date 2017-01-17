"use strict";

exports.default = function (schema, relation) {
	return {
		model: {
			title: { type: schema.String },
			author: { type: schema.String },
			page_count: { type: schema.Number }
		},
		extra: {},
		relations: {
			"pages": relation.hasMany("page.bookId"),
			"distributor": relation.belongsTo("distributor.distributor_book")
		}
	};
};

;