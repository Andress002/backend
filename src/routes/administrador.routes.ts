import { Router } from 'express';
import * as administradoraController from '../controllers/administradoraController';
// import { AuthRequest } from '../utils/AuthRequest';
import { authMiddleware } from '../middlewares/verificarToken';
import { checkOwner } from '../middlewares/checkOwner';

const router = Router();


router.post('/', authMiddleware, administradoraController.crearAdministradoraController);
router.get('/', administradoraController.obtenerAdministradorasController);
router.get('/:id', administradoraController.obtenerAdministradoraPorIdController);
router.put('/:id', authMiddleware, administradoraController.actualizarAdministradoraController);
router.delete('/:id', authMiddleware, checkOwner('Administradora'),  administradoraController.eliminarAdministradoraController);

export default router;