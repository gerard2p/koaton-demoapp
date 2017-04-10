"use strict";

exports.default = function (schema, relation) {
	return {
		model: {
			name: { type: schema.String }
		},
		extra: {},
		relations: {
			"books": relation.manyToMany({targetModel: "book"})
		}
	};
};
