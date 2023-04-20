import express from 'express';
import {deleteRecord} from '../controller/deleteController.js';

const deleteRouter = express.Router();

deleteRouter.delete('/deleteRecord/:id',deleteRecord);

export default deleteRouter;