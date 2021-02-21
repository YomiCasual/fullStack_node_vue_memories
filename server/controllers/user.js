import bcrypt from 'bcryptjs'
import userModel from '../models/user.js'
import { mySecret, refreshTokens, refreshTokenSecret, salt} from '../config/pass.js'
import jwt from 'jsonwebtoken'

export const loginUser = async (req, res) => {
	try {
        let user = await userModel.findOne({ email: req.body.email})
        if (user) {
            let passwordComp = bcrypt.compareSync(req.body.password + "", user.password)
            if (passwordComp) {
                const token = jwt.sign({ username: user.firstName + " " + user.lastName
                ,  _id: user._id }, mySecret, { expiresIn: '40m' });

                const refreshToken = jwt.sign({ username: user.firstName + " " + user.lastName
                ,  _id: user._id }, refreshTokenSecret );

                refreshTokens.push(refreshToken)

                return res.status(200).send({
                    isSuccessful: true,
                    data: token,
                    refreshToken
                })
            }
            return res.send({
                isSuccessful: false,
                data: "Wrong Password"
            })
        }
        else {
            res.send({
                isSuccessful: false,
                data: "User with that email does not exist"
            })
        }
        console.log(user)
        res.send({
            isSuccessful: true,
            data: user
        })
       
    } catch (error) {
       res.status(404).send({
           isSuccessful: false,
           data: error
       })
    }
};


export const generateToken =  (req, res) => {
    const { token } = req.body;

    if (!token) {
        return res.status(401).jsone({
            isSuccessful:false,
            message: "Please provide a token"
        });
    }

    if (!refreshTokens.includes(token)) {
        return res.status(403).send({
            isSuccessful: false,
            message: "Unauthorized"
        });
    }

    jwt.verify(token, refreshTokenSecret, (err, user) => {
        if (err) {
            return res.sendStatus(403);
        }

        const accessToken = jwt.sign({ username: user.username, role: user.role }, mySecret, { expiresIn: '40m' });

        res.json({
            accessToken
        });
    });
};