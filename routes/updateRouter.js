import express from 'express';
import {updateRecord} from '../controller/updateController.js';

const updateRouter = express.Router();

updateRouter.put('updateRecord/:id',updateRecord);

export default updateRouter;