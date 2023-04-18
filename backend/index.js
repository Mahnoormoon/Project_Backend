const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const userRouter = require('./routers/userRouter');
const musicRouter = require('./routers/musicRouter');
const todoRouter = require('./routers/todoRouter');
const studyRouter = require('./routers/studyRouter');
const contactRouter = require('./routers/contactRouter');
const utilRouter = require('./routers/utils');
const cors = require('cors');
const { PORT } = require('./config');

const app = express();

app.use(cors(
    {
        origin : ['http://localhost:3001', 'http://localhost:3000'],
        credentials : true
    }
));

app.use(express.json());
app.use('/user', userRouter);
app.use('/music', musicRouter);
app.use('/todolist', todoRouter);
app.use('/study', studyRouter);
app.use('/contact', contactRouter);
app.use('/util', utilRouter);


app.use(express.static('./static/uploads'));

app.get('/', (req, res) => {
    console.log('Request at index');
    res.status(299).send('Working Perfectly!!');
})

app.listen(PORT, () => console.log(`Express server has started at ${PORT}`));