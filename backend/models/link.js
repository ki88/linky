import mongoose from 'mongoose';

const linkSchema = new mongoose.Schema({
  sid: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  user: {
    type: String,
    required: true
  },
  created: {
    type: Number,
    required: true
  },
  stats: {
    total: Number,
    byCountry: Object,
    byReferrer: Object
  }
}, { minimize: false });

linkSchema.methods.toJSON = function() {
  const obj = this.toObject();
  delete obj._id;
  delete obj.__v;
  return obj;
};

export const Link = mongoose.model('Link', linkSchema);
