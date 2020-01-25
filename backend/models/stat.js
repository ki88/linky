import mongoose from 'mongoose';

const statSchema = new mongoose.Schema(
  {
    sid: {
      type: String,
      required: true
    },
    clicks: {
      type: [
        {
          time: Number,
          referrer: String,
          country: String
        }
      ]
    }
  },
  { minimize: false }
);

statSchema.methods.toJSON = function() {
  const obj = this.toObject();
  delete obj._id;
  delete obj.__v;
  obj.clicks.forEach(click => {
    delete click._id;
  });
  return obj;
};

export const Stat = mongoose.model('Stat', statSchema);
