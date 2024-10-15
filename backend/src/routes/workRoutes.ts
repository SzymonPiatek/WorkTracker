import { Router } from 'express';
import { getAllWorkHandler } from '../handlers/work/getHandlers';

const router = Router();

router.get('/', getAllWorkHandler);

export default router;
