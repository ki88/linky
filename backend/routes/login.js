import jwt from 'jsonwebtoken';

function login() {
  const secretKey = process.env.SECRET_KEY;

  return async function(req, res) {
    try {
      const token = jwt.sign(
        {
          user: req.body.user
        },
        secretKey,
        { expiresIn: 60 * 60 * 24 }
      );

      res.send({ token });
    } catch (error) {
      res.status(500).send({ message: 'Internal server error' });
    }
  };
}

export default login;
