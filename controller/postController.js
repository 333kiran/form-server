
import Form from "../model/post-schema.js"

export const  createPost = async(req,res) => {
    try{
        const form = new Form({
            date: req.body.date,
            email: req.body.email,
            address: req.body.address,
            corporateName: req.body.corporateName,
            serviceName: req.body.serviceName,
            postalCode: req.body.postalCode,
            attachments: req.file ? req.file.path : null,
            amount: req.body.amount,
            mobile: req.body.mobile,
          });
          await form.save();

    res.status(200).json(form);

    }catch(error){
        console.error(error);
        res.status(500).json({ message: error.message });
    }
}