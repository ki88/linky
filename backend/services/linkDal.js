import { Link } from '../models/link';

const linkDal = {
  find: async search => {
    const links = await Link.find(search, null, {
      sort: {
        created: -1
      }
    });
    return links.map(l => l.toJSON());
  },

  findOne: async search => {
    const link = await Link.findOne(search);
    if (!link) {
      return null;
    }
    return link.toJSON();
  },

  create: async data => {
    return (await Link.create(data)).toJSON();
  },

  logClick: async (sid, { countryCode, referrer }) => {
    let doc = await Link.findOne({ sid });
    doc.stats.total++;
    doc.stats.byCountry = {
      ...doc.stats.byCountry,
      [countryCode]: (doc.stats.byCountry[countryCode] || 0) + 1
    };
    doc.stats.byReferrer = {
      ...doc.stats.byReferrer,
      [referrer]: (doc.stats.byReferrer[referrer] || 0) + 1
    };
    await doc.save();
  }
};

export default linkDal;
