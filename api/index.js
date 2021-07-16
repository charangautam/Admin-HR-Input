const express = require('express')
const { config } = require('dotenv')
const mongoose = require('mongoose')


// routes
const authRoutes = require('./routes/auth')
const postRoutes = require('./routes/posts')

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


app.listen(process.env.PORT || 4000, () => {
    console.log('Backend server is running')
})