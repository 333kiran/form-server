import  mongoose from 'mongoose';

const formSchema = new mongoose.Schema({
  date: {
    type: Date,
  },
  email: {
    type: String,
  },
 
  corporateName: {
    type: String,
  },
  serviceName: {
    type: String,
  },
  postalCode: {
    type: String,
  },
  attachment: {
    type: String,
  },
  amount: {
    type: String,
  },
  mobile: {
    type: String,
  },
});

const Form = mongoose.model('Form', formSchema);

export default Form;
