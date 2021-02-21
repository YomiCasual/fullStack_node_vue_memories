import express from 'express';
import cors from 'cors';
import connection from './db/index.js';

import posts from './routes/posts.js';
import user from './routes/user.js'

const app = express();

app.use(cors());
app.use(express.json({limit: '50mb'}));


connection();

app.use('/posts', posts);
app.use('/user', user)

const PORT = 5000;

app.listen(PORT, () => {
	console.log('Listening on Port 5000');
});
