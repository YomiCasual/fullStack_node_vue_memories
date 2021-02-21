import users from './users.js';
import express from 'express';
import bcrypt from 'bcryptjs';

import connection from '../db/index.js';
import userModel from '../models/user.js';

var salt = bcrypt.genSaltSync(10);

const app = express();

connection()

app.use(express.json());

// console.log(users)

const imporData = async () => {

	let newUsers = users.map(user => {
		user.password = bcrypt.hashSync(user.password+ "", salt);
		return user;
	});

	try {
		await userModel.create(newUsers)
		console.log("Data Save successfully")
		process.exit()
	} catch (error) {
		console.log(error)
	}
};

const deleteData = async () => {
	try {
		await userModel.deleteMany();
		console.log('Data successfuly deleted');
		process.exit();
	} catch (error) {
		console.log(error);
	}
};

if (process.argv[2] === '-i') {
	imporData();
}
if (process.argv[2] === '-d') {
	deleteData();
}
