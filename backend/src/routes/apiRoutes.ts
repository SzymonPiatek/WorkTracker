import { Router } from 'express';
import workRoutes from './workRoutes';

const router = Router();

router.use('/work', workRoutes);

export default router;
