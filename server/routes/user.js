import express from 'express'
import { loginUser, generateToken } from '../controllers/user.js'

const router = express.Router()


router.post('/login', loginUser)
router.post('/token', generateToken)

export default router