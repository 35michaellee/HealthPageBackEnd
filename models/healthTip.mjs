import mongoose from 'mongoose';

const healthTipSchema = new mongoose.Schema({
  tip: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
});
//
// We're defining indexes using the index() method on the healthTipSchema.
// Each index definition specifies the field(s) to index and the direction (ascending or descending). Here, 1 indicates ascending order, while -1 would indicate descending order.
// We've created indexes on the tip field, the description field, and a compound index on both tip and description.

// Define indexes
healthTipSchema.index({ tip: 1 }); // Index on the 'tip' field
healthTipSchema.index({ description: 1 }); // Index on the 'description' field
healthTipSchema.index({ tip: 1, description: 1 }); // Compound index on 'tip' and 'description'

const HealthTip = mongoose.model('HealthTip', healthTipSchema);
export default HealthTip;