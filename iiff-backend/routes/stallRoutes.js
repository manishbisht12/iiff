import express from 'express';
import {
  getStalls,
  addStall,
  updateStall,
  deleteStall,
} from '../controllers/stallController.js';

const router = express.Router();

router.get('/', getStalls);
router.post('/', addStall);
router.put('/:id', updateStall);
router.delete('/:id', deleteStall);

export default router;
