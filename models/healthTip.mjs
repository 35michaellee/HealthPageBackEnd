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

const HealthTip = mongoose.model('HealthTip', healthTipSchema);
export default HealthTip;