import Grocery from '../models/grocery.mjs';

// Create a new grocery item
export const createGrocery = async (req, res) => {
  try {
    const newGrocery = await Grocery.create(req.body);
    res.status(201).json(newGrocery);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all grocery items
export const getAllGroceries = async (req, res) => {
  try {
    const groceries = await Grocery.find();
    res.json(groceries);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single grocery item by ID
export const getGroceryById = async (req, res) => {
  try {
    const grocery = await Grocery.findById(req.params.id);
    if (!grocery) {
      return res.status(404).json({ message: 'Grocery item not found' });
    }
    res.json(grocery);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a grocery item
export const updateGrocery = async (req, res) => {
  try {
    const updatedGrocery = await Grocery.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedGrocery) {
      return res.status(404).json({ message: 'Grocery item not found' });
    }
    res.json(updatedGrocery);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a grocery item
export const deleteGrocery = async (req, res) => {
  try {
    const deletedGrocery = await Grocery.findByIdAndDelete(req.params.id);
    if (!deletedGrocery) {
      return res.status(404).json({ message: 'Grocery item not found' });
    }
    res.json({ message: 'Grocery item deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};