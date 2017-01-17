'use strict';

exports.default = function* (findcre) {
	yield findcre({
		ClientId: 123456,
		UserId: 123456,
		ClientType: 'web',
		AuthorizationGrantType: 2,
		ClientSecret: 789101112,
		Name: 'TestAPI',
		Skip: false
	});
};