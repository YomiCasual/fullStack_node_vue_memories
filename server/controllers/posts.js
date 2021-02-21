import PostModel from '../models/post.js'


export const getPosts = async (req, res) => {
	try {
        let Posts = await PostModel.find({}).populate('author', ['firstName', 'lastName'])
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

export const getSinglePost = async (req, res) => {
    const { id }= req.params
	try {
        let Post = await PostModel.findById(id)
        res.status(200).send({
            isSucessful: true,
            data: Post
        })
    } catch (error) {
        res.status(400).send({
            isSucessful: false,
            message: error
        })
    }
};

export const createPosts = async (req, res) => {
    
    const author = req.user._id
    const data = {...req.body, author}
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

export const updatePost = async (req, res ) => {
    const id = req.params.id
    const data = req.body
    const options = () => {
        let option = {}
        for (const d in {...data} ) {
            option[d] = 1
        }

       return option
    }
    try {
        let update = await PostModel.findByIdAndUpdate(id, { $set: { ...data }}, { new: true}).select(options())
        res.status(202).json({
            isSucessful: true,
            data: update
        })
    } catch (error) {
        res.status(404).json({
            isSucessful: false,
            message: error
        })
    }
}

