export default function(schema,relation) {
	return {
		model: {
			number:{type:schema.Number},
			content:{type:schema.String}
		},
		extra: {},
		relations: {
			"book":relation.belongsTo("book.bookId"),
		}
	};
};
