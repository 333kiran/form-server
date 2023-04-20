import Form from "../model/post-schema.js";

export const deleteRecord = async (req,res) => {
    try{
      const id = req.params.id;
      const data = await Form.deleteOne({'id': id})
  
      res.status(200).json(data);
    } catch(error) {
      res.status(500).json({message: error.message});
    }
  
  }