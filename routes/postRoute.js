import express from "express";
import multer from "multer";
import path from 'path';
import { createPost } from "../controller/postController.js";

const postRouter = express.Router();


postRouter.use(express.static('public'));

const storage = multer.diskStorage({
    destination:function(req,file,cb){
       cb(null,path.join(__dirname,'../public/postImages'),function(error,success){
        if(error){
            console.log(error);
        }
       })
    },
    filename:function(req,file,cb){
      const name = Date.now()+'-'+file.originalname;
      cb(null,name,function(error,success){
        if(error){
            console.log(error);
        }
      })
    }
});

const upload = multer({storage:storage});

postRouter.post('/createPost',createPost);

export default postRouter;
