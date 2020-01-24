import mongoose from 'mongoose';

const connectDb = () => new Promise((resolve, reject) => {
  mongoose.connect(process.env.MONGO_CONNECTION, {useNewUrlParser: true});
  const db = mongoose.connection;
  db.on('error', reject);
  db.once('open', resolve);
});

export default connectDb;
