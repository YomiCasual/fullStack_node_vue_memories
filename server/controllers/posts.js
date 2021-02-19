import PostModel from '../models/post.js'


export const getPosts = async (req, res) => {
	try {
        let Posts = await PostModel.find({})
        res.status(200).send({
            isSucessful: true,
            data: Posts
        })
    } catch (error) {
        res.status(400).send({
            isSucessful: false,
            message: error
        })
    }
};

export const createPosts = async (req, res) => {
    console.log(req.body)
    const data = req.body
    const Post = new PostModel(data)
    try {
        let request = await Post.save()
        res.status(201).send({
            isSucessful: true,
            data: request
        })
        
    } catch (error) {
        res.status(409).send({
            isSucessful: false,
            message: error
        })
    }
    // res.send("Post Created")
}

export const deletePost = async (req, res) => {
    const data = req.params.id
    try {
        let request = await PostModel.findByIdAndDelete(data)
        res.status(200).send({
            isSucessful: true,
            data: request
        })
        
    } catch (error) {
        res.status(409).send({
            isSucessful: false,
            message: error
        })
    }
    // res.send("Post Created")
}

