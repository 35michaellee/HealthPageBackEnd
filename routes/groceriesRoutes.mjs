import express from 'express';
const router = express.Router();
import * as groceriesController from '../controllers/groceriesController.mjs';
import bodyParser from 'body-parser';

// Middleware to parse JSON bodies
router.use(bodyParser.json());

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

router.post('/reset',groceriesController.resetGroceries);

export { router as groceriesRoutes }; // Export the router
