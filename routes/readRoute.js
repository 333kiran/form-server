import express from 'express';
import {getAllRecords,getRecordById} from '../controller/readController.js';
const readRouter = express.Router();

readRouter.get('/records',getAllRecords);
readRouter.get('/recoreds/:id',getRecordById);

export default readRouter;