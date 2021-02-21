import express from 'express'
import authenticateJWT from '../config/auth.js'

import { getPosts, createPosts, deletePost, updatePost, getSinglePost } from '../controllers/posts.js'

const router = express.Router()


router.get('/', authenticateJWT, getPosts)
router.get('/:id',authenticateJWT, getSinglePost)
router.post('/', authenticateJWT, createPosts)
router.delete('/:id', deletePost)
router.patch('/:id', updatePost)


export default router