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
  }
});


// The index() method in Mongoose is used to define indexes on fields within a schema. 
// Indexes are data structures that optimize the retrieval of data from a database by 
// allowing the database system to quickly locate specific documents based on the indexed fields.
// Define indexes
grocerySchema.index({ name: 1 }); // Index on the 'name' field in ascedning 
grocerySchema.index({ category: 1 }); // Index on the 'category' field in ascedning 

const Grocery = mongoose.model('Grocery', grocerySchema);
export default Grocery;