import express from 'express';
const router = express.Router();
import * as healthTipController from '../controllers/healthTipsController.mjs';


// Get all health tips
router.get('/', healthTipController.getAllHealthTips);

// Get a health tip by ID
router.get('/:id', healthTipController.getHealthTipById);

// Delete a health tip by ID
router.delete('/:id', healthTipController.deleteHealthTip);

export { router as healthTipsRoutes };