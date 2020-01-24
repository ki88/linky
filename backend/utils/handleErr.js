function handleErr(fn) {
  return async function (req, res, next) {
    try {
      await fn(req, res, next);
    } catch (e) {
      console.error(e);
      const error = process.env.ENV === 'production' ? {message: 'Internal server error'} : e;
      res.status(500).send(error);
    }
  }
}

export default handleErr;
