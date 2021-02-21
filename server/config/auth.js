import jwt from 'jsonwebtoken'
import { mySecret } from './pass.js';

const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, mySecret, (err, user) => {
            if (err) {
                return res.status(403).json({
                    isSuccessful: false,
                    message: "Uauthorized"
                });
            }

            req.user = user;
            next();
        });
    } else {
        return res.status(401).json({
            isSuccessful: false,
            message: "Unauthorized"
        });
    }
};

export default authenticateJWT