import HealthTip from '../models/healthTip.mjs';

// Create a new health tip
export const createHealthTip = async (req, res) => {
  try {
    const newHealthTip = await HealthTip.create(req.body);
    res.status(201).json(newHealthTip);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all health tips
export const getAllHealthTips = async (req, res) => {
  try {
    const healthTips = await HealthTip.find();
    res.json(healthTips);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a health tip by ID
export const getHealthTipById = async (req, res) => {
  try {
    const healthTip = await HealthTip.findById(req.params.id);
    if (!healthTip) {
      return res.status(404).json({ message: 'Health tip not found' });
    }
    res.json(healthTip);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a health tip by ID
export const updateHealthTip = async (req, res) => {
  try {
    const updatedHealthTip = await HealthTip.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedHealthTip) {
      return res.status(404).json({ message: 'Health tip not found' });
    }
    res.json(updatedHealthTip);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a health tip by ID
export const deleteHealthTip = async (req, res) => {
  try {
    const deletedHealthTip = await HealthTip.findByIdAndDelete(req.params.id);
    if (!deletedHealthTip) {
      return res.status(404).json({ message: 'Health tip not found' });
    }
    res.json({ message: 'Health tip deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};