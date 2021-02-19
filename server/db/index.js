import mongoose from 'mongoose';

const connection = () =>
	mongoose
		.connect('mongodb://localhost:27017/Memories', {
			useFindAndModify: false,
			useUnifiedTopology: true,
			useNewUrlParser: true,
		})
		.then(res => {
			console.log('connected');
		})
		.catch(err => console.log(err));

export default connection;
