import express from 'express';
import { config } from 'dotenv';
import mongoose from 'mongoose';


const app = express();
config();

mongoose.connect(process.env.MONGO_URL, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true   
}).then(console.log('Connected to MongoDB')).catch((err) => console.log(err))

app.listen(4000, () => {
    console.log('Backend server is running')
})