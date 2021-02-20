import express from 'express'

import { getPosts, createPosts, deletePost, updatePost, getSinglePost } from '../controllers/posts.js'

const router = express.Router()


router.get('/', getPosts)
router.get('/:id', getSinglePost)
router.post('/', createPosts)
router.delete('/:id', deletePost)
router.patch('/:id', updatePost)


export default router