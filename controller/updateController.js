import Form from "../model/post-schema.js";


export const updateRecord = async (req,res) => {
    try{
      const id = req.params.id;
      const record = await Form.findOne({'id': id})
  
      res.status(200).json(record);
    } catch(error) {
      res.status(500).json({message: error.message});
    }
  
  }