import { Stat } from '../models/stat';

const statDal = {
  findOne: async search => {
    const stat = await Stat.findOne(search);
    if (!stat) {
      return null;
    }
    return stat.toJSON();
  },

  logClick: async (sid, item) => {
    await Stat.update(
      {
        sid
      },
      {
        $push: {
          clicks: item
        }
      },
      {
        upsert: true,
        setDefaultsOnInsert: true
      }
    );
  }
};

export default statDal;
