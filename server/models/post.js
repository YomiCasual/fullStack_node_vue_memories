import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	message: {
		type: String,
		required: true,
	},
	tags: [String],
	image: { type: String },
	likeCount: {
		type: Number,
		default: 0,
	},
	createdAt: {
		type: Date,
		default: new Date(),
	},
	author: { type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true },
});

const PostModel = mongoose.model('Posts', postSchema);

export default PostModel;
