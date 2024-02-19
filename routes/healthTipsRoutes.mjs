import express from 'express';
const router = express.Router();
import * as healthTipController from '../controllers/healthTipsController.mjs';

// Create a new health tip
router.post('/', healthTipController.createHealthTip);

// Get all health tips
router.get('/', healthTipController.getAllHealthTips);

// Get a health tip by ID
router.get('/:id', healthTipController.getHealthTipById);

// Update a health tip by ID
router.put('/:id', healthTipController.updateHealthTip);

// Delete a health tip by ID
router.delete('/:id', healthTipController.deleteHealthTip);

export { router as healthTipsRoutes };