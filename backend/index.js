const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const userRouter = require('./routers/userRouter');
const userprofileRouter = require('./routers/userprofileRouter');
const musicRouter = require('./routers/musicRouter');
const reminderRouter = require('./routers/reminderRouter');
const todoRouter = require('./routers/todoRouter');
const studyRouter = require('./routers/studyRouter');
const widgetRouter = require('./routers/widgetRouter');
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
// app.use(express.urlencoded({extended : true}));
app.use('/user', userRouter);
app.use('/userprofile', userprofileRouter);
app.use('/music', musicRouter);
app.use('/reminder', reminderRouter);
app.use('/todo', todoRouter);
app.use('/study', studyRouter);
app.use('/widget', widgetRouter);

app.get('/', (req, res) => {
    console.log('Request at index');
    res.status(299).send('Working Perfectly!!');
})

app.listen(PORT, () => console.log(`Express server has started at ${PORT}`));