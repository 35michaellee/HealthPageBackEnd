import Grocery from '../models/grocery.mjs';

// Create a new grocery item
export const createGrocery = async (req, res) => {
  try {
    console.log(req.body);
    const newGrocery = await Grocery.create(req.body);
    res.status(201).json(newGrocery);
  } catch (err) {
    res.status(400).json({ message: err.message });//400 means bad request 
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



// Array of grocery items with their categories
const groceries = [
  { name: 'Apple', category: 'Fruits' },
  { name: 'Banana', category: 'Fruits' },
  { name: 'Orange', category: 'Fruits' },
  { name: 'Spinach', category: 'Vegetables' },
  { name: 'Broccoli', category: 'Vegetables' },
  { name: 'Milk', category: 'Dairy' },
  { name: 'Cheese', category: 'Dairy' },
  { name: 'Rice', category: 'Grains' },
  { name: 'Chicken', category: 'Protein' },
  { name: 'Beef', category: 'Protein' },
  { name: 'Bread', category: 'Others' },
  { name: 'Eggs', category: 'Protein' },
  { name: 'Yogurt', category: 'Dairy' },
  { name: 'Tomato', category: 'Vegetables' },
  { name: 'Potato', category: 'Vegetables' },
  { name: 'Onion', category: 'Vegetables' },
  { name: 'Carrot', category: 'Vegetables' },
  { name: 'Quinoa', category: 'Grains' },
  { name: 'Salmon', category: 'Protein' },
  { name: 'Olive Oil', category: 'Others' }
];

// Function to insert grocery items into the database
export const resetGroceries= async (req, res) => {
  try {
    await Grocery.deleteMany();
    await Grocery.insertMany(groceries);

    console.log('Grocery items inserted successfully!');
    res.status(200).json({ message: 'Grocery items reset successfully!' });
  } catch (err) {
    console.error('Error resetting grocery items:', err);
    res.status(500).json({ message: 'Failed to reset grocery items.' });
  } 
}