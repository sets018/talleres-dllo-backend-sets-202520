import { Router } from 'express';
import { Taller02Controller } from '../controllers/taller_02_controlador';

const router = Router();
const controller = new Taller02Controller();

router.post('/find-max', controller.findMax);
router.post('/find-min', controller.findMin);
router.post('/includes', controller.includes);
router.post('/sum', controller.sum);
router.post('/missing-numbers', controller.missingNumbers);

export default router;