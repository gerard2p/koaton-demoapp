"use strict";
module.exports={
	"mongo": {
		"driver": "mongoose",
		"user": "",
		"database": "testingapp",
		"password": "",
		"port": 27017,
		"host": "localhost",
		"pool": false,
		"ssl": false
	},
	"sqlite3": {
		"driver": "sqlite3",
		"user": "gerard2p",
		"database": "awsome",
		"password": "secure"
	},
	"mysql": {
		"driver": "mysql",
		"user": "gerard2p",
		"database": "awsome",
		"password": "secure",
		"port": 90000,
		"host": "remotelocation",
		"pool": false,
		"ssl": false
	}
};
