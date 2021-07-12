import express from 'express';
import { config } from 'dotenv';
import mongoose from 'mongoose';

// routes
import authRoutes from './routes/auth'

const app = express();
config();

mongoose.connect(process.env.MONGO_URL, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true   
}).then(console.log('Connected to MongoDB')).catch((err) => console.log(err))

app.use(express.json())

// routes set up
app.use('/api/auth', authRoutes);

app.listen(4000, () => {
    console.log('Backend server is running')
})