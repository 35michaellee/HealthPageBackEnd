import mongoose from 'mongoose';


const grocerySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['Fruits', 'Vegetables', 'Dairy', 'Grains', 'Protein', 'Others'],
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  unit: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

// Create and export the model
const Grocery = mongoose.model('Grocery', grocerySchema);
export default Grocery;