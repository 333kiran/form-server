import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

import connection from './database/db.js';
import postRouter from './routes/postRoute.js';
import readRouter from './routes/readRoute.js';
import updateRouter from './routes/updateRouter.js';
import deleteRouter from './routes/deleteRouter.js';



const app = express();

dotenv.config();


app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/api',postRouter);
app.use('/api',readRouter);
app.use('/api',updateRouter);
app.use('/api',deleteRouter);

const PORT = process.env.PORT || 8082;

const URL = process.env.DATABASE_URI;

connection(URL);


app.listen(PORT,()=> {
    console.log(`server is running at port ${PORT}`);
})