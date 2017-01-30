'use strict';

exports.default = {
	directory: ProyPath('public'),
	configuration: {},
	copy: [
		{
			src: ['./assets/flatadmin/js/**/*.*'],
			dest: './js',
			flatten: true
		},
		{
			src: ['./assets/flatadmin/css/**/*.*'],
			dest: './css',
			flatten: true
		},
		{
			dest: './fonts',
			src: ['./assets/flatadmin/fonts/*.*'],
			flatten: true
		},
		{
			dest: './img',
			src: [
				'./assets/flatadmin/img/app-header-bg.jpg',
				'./assets/flatadmin/img/contact-us-bg.jpg',
				'./assets/flatadmin/img/bg/picjumbo.com_HNCK3558.jpg'
			],
			flatten: true
		},
		{
			dest: './img/bg',
			src: [
				'./assets/flatadmin/img/bg/picjumbo.com_HNCK3558.jpg'
			],
			flatten: true
		}

	],
	cache: {
		etagWeak: false
	}
};
