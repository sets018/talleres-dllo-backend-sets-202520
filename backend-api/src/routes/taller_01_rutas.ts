import { Router } from 'express';
import { Taller01Controller } from '../controllers/taller_01_controlador';

const router = Router();
const controller = new Taller01Controller();

router.post('/convertidor-temp', controller.convertidorTemp);
router.post('/resolvedor', controller.resolvedor);
router.post('/mejor-paridad', controller.mejorParidad);
router.post('/peor-paridad', controller.peorParidad);

export default router;