import jwt from 'jsonwebtoken';

function verifyJwt() {
  return function (req, res, next) {
    const token = req.headers.authorization;
    const secretKey = process.env.SECRET_KEY;

    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        res.status(401).send({code: 'ACCESS_FORBIDDEN'});
        return;
      }
      const {user} = decoded;
      req.user = user;
      next();
    });
  }
}

export default verifyJwt;
