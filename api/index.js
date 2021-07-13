import express from 'express';
import { config } from 'dotenv';
import mongoose from 'mongoose';

// routes
import authRoutes from './routes/auth'
import postRoutes from './routes/posts'

const app = express();
config();

app.use(express.json());

mongoose.connect(process.env.MONGO_URL, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true   
}).then(console.log('Connected to MongoDB')).catch((err) => console.log(err))


// routes set up
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);


app.listen(4000, () => {
    console.log('Backend server is running')
})