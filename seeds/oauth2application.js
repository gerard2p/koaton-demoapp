'use strict';

exports.default = async function (findcre) {
	await findcre({
		ClientId: 123456,
		UserId: 123456,
		ClientType: 'web',
		AuthorizationGrantType: 2,
		ClientSecret: 789101112,
		Name: 'TestAPI',
		Skip: false
	});
};
