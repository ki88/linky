import requestCountry from 'request-country';
import moment from 'moment';
import linkDal from '../services/linkDal';
import statDal from '../services/statDal';
import getReferrer from '../utils/getReferrer';

async function redirect(req, res) {
  const sid = req.params.sid;

  const link = await linkDal.findOne({ sid });

  if (!link) {
    res.status(404).send('Not found');
    return;
  }

  res.redirect(301, link.url);

  const countryCode = requestCountry(req) || 'RU';
  const referrer = getReferrer(req) || 'direct';

  linkDal.logClick(sid, {
    countryCode,
    referrer
  });

  statDal.logClick(sid, {
    time: moment().unix(),
    country: countryCode,
    referrer
  });
}

export default redirect;
