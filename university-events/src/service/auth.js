const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const userRepository = require('../repository/user');

const jwtSecret = 'test';

const AUTH_TOKEN_HEADER = "Authorization";
const TOKEN_PREFIX = "Bearer";
const TOKEN_EXPIRATION_TIME = 15 * 60;

const authorizeUser = (req, res, next) => {
    const authHeader = req.header(AUTH_TOKEN_HEADER);

    if (!authHeader) {
        return res.status(401).send({errorMessage: 'Missed Authorization header'});
    }

    const authHeaderParts = authHeader.split(' ');
    if (authHeaderParts.length != 2 || TOKEN_PREFIX !== authHeaderParts[0]) {
        return res.status(401).send({errorMessage: 'Invalid format of Auth header!'});
    }

    const jwtToken = authHeaderParts[1];

    try {
        jwt.verify(jwtToken, jwtSecret);
    } catch (e) {
        res.status(401).send({errorMessage: 'Invalid Auth token!'});
        return;
    }

    const {userId, email} = jwt.decode(jwtToken);

    req.userId = userId;
    req.email = email;

    next();
}

const signIn = async (req, res) => {
    const {username, password} = req.body;
    const user = await userRepository.findAuthDataByUserName(username);

    if (!user) {
        res.status(401).send({errorMessage: 'Unauthorized'});
    }

    const isMatch = bcrypt.compareSync(password, user.passwordHash);

    if (isMatch) {
        const jwtToken = jwt.sign({
            userId: user.id,
            email: user.email
        }, jwtSecret, {
            expiresIn: TOKEN_EXPIRATION_TIME
        });

        res.send({token: jwtToken});
    } else {
        res.status(401).send({errorMessage: 'Unauthorized'});
    }
}

const signUp = async (req, res) => {
    const user = req.body;

    const salt = bcrypt.genSaltSync(10);
    user.passwordHash = bcrypt.hashSync(user.password, salt);

    try {
        const [{id}] = await userRepository.createUser(user);
        user.id = id;

        delete user.password;
        delete user.passwordHash;
    } catch (e) {
        res.status(409).send({errorMessage: 'Username or email is already used!'});
        return;
    }

    res.status(201).send(user);
}

module.exports = {
    authorizeUser,
    signIn,
    signUp
};
