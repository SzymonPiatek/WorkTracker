import { Router } from 'express';
import { getAllWorkHandler } from '../handlers/work/getHandlers';
import { postWorkHandler } from '../handlers/work/postHandlers';

const router = Router();

router.get('/', getAllWorkHandler);
router.post('/', postWorkHandler);

export default router;
