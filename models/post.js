"use strict";

exports.default = function (schema, relation) {
	return {
		model: {
			name: { type: schema.String },
			content: { type: schema.String }
		},
		extra: {},
		relations: {}
	};
};

;