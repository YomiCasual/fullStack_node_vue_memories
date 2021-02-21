import express from 'express'
import authenticateJWT from '../config/auth.js'
import { loginUser, generateToken,logOut } from '../controllers/user.js'

const router = express.Router()


router.post('/login', loginUser)
router.post('/token', generateToken)
router.post('/logout', authenticateJWT, logOut)

export default router