import express from 'express';
import { registerStall, getAllStalls  } from '../controllers/registerStallController.js';

const router = express.Router();

router.post('/', registerStall);

router.get('/', getAllStalls);

export default router;
