import { Router } from 'express';
import { Taller03Controller } from '../controllers/taller_03_controlador';

const router = Router();
const controller = new Taller03Controller();

router.post('/desglosar-string', controller.desglosarString);
router.post('/two-sum', controller.twoSum);
router.post('/conversion-romana', controller.conversionRomana);
router.post('/descomposicion', controller.descomposicion);

export default router;