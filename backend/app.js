import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDb from './connectDb';
import verifyJwt from './middleware/verifyJwt';
import linkRouter from './routes/link';
import redirect from './routes/redirect';
import login from './routes/login';

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/links', verifyJwt(), linkRouter());
app.use('/api/login', login());
app.use('/:sid', redirect);

connectDb().then(() => {
  const port = process.env.PORT || 3002;
  app.listen(port, () => console.log(`listening on port ${port}`));
});
