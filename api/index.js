import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';

dotenv.config();

mongoose
  .connect(process.env.MONGO_DB)
  .then(() => {
    console.log('MongoDb is connected');
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
const port = process.env.PORT || 4000

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use('/api/user', userRoutes); 