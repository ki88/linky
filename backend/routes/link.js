import express from 'express';
import moment from 'moment';
import handleErr from '../utils/handleErr';
import linkDal from '../services/linkDal';
import statDal from '../services/statDal';
import generateSid from '../utils/generateSid';
import isURL from '../utils/isURL';

function linkRouter() {
  const router = express.Router();

  router.get(
    '/',
    handleErr(async (req, res) => {
      const links = await linkDal.find({ user: req.user });

      res.send(links);
    })
  );

  router.get(
    '/:sid/stats',
    handleErr(async (req, res) => {
      const stat = await statDal.findOne({ sid: req.params.sid });

      if (!stat) {
        res.send([]);
        return;
      }

      res.send(stat.clicks);
    })
  );

  router.post(
    '/',
    handleErr(async (req, res) => {
      const url = req.body.url.trim();

      if (!isURL(url)) {
        res.status(400).send({ code: 'INVALID_URL' });
        return;
      }

      const linkData = {
        url: url.trim(),
        sid: generateSid(),
        user: req.user,
        created: moment().unix(),
        stats: {
          total: 0,
          byCountry: {},
          byReferrer: {}
        }
      };
      const link = await linkDal.create(linkData);
      res.send(link);
    })
  );

  return router;
}

export default linkRouter;
