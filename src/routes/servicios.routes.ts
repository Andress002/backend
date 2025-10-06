import { Router } from 'express';
import * as servicioController from '../controllers/gestionServiceController';
const router = Router();

import { authMiddleware } from '../middlewares/verificarToken';
import { checkRol } from '../middlewares/checkRol';


router.post('/', authMiddleware, servicioController.crearServiceController);
router.get('/', servicioController.obtenerServiciosController);
router.get('/:id', servicioController.obtenerServiciosIdController);
router.put('/:id', authMiddleware, checkRol, servicioController.actualizarServicioController);
router.delete('/:id', authMiddleware, checkRol, servicioController.eliminarServicioController);

export default router;