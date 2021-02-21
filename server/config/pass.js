import bcrypt from 'bcryptjs'

var salt = bcrypt.genSaltSync(10);

const mySecret = 'akjfa8i949ikkajhhf/afjja'

const refreshTokens = []
const refreshTokenSecret = "ifaehdiladhf//efo08393,,p-940382,"


export { salt, mySecret , refreshTokens, refreshTokenSecret }