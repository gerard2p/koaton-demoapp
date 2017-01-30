'use strict';
exports.default = function(schema,relation) {
	return {
		model: {
			name:{type:schema.String},
			username:{type:schema.String},
			password:{type:schema.String},
			lastname:{type:schema.String},
			age:{type:schema.Number},
			email:{type:schema.Email}
		},
		extra: {},
		relations: {
			
		}
	};
};