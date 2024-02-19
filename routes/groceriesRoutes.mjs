import express from 'express';
const router = express.Router();
import * as groceriesController from '../controllers/groceriesController.mjs';

// Create a new grocery item
router.post('/', groceriesController.createGrocery);

// Get all grocery items
router.get('/', groceriesController.getAllGroceries);

// Get a grocery item by ID
router.get('/:id', groceriesController.getGroceryById);

// Update a grocery item by ID
router.put('/:id', groceriesController.updateGrocery);

// Delete a grocery item by ID
router.delete('/:id', groceriesController.deleteGrocery);

export { router as groceriesRoutes }; // Export the router
