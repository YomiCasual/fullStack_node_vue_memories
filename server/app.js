import express from 'express';
import cors from 'cors';
import connection from './db/index.js';

import posts from './routes/posts.js';

const app = express();

app.use(express.json());
app.use(cors());

connection();

app.use('/posts', posts);

const PORT = 5000;

app.listen(PORT, () => {
	console.log('Listening on Port 5000');
});
