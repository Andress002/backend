import { Router } from "express";
import * as controller from '../controllers/contratoController';
const router = Router();

import { authMiddleware } from "../middlewares/verificarToken";
// import { checkRol } from "../middlewares/checkRol";
import { checkOwner } from "../middlewares/checkOwner";

router.post('/contrato', authMiddleware, controller.crearContratoController);
router.get('/', controller.obtenerContratosController);
router.get('/:id', controller.obtenerContratoController);
router.put('/:id', authMiddleware, checkOwner('Contrato'), controller.actualizarContratoController);
router.delete('/:id', authMiddleware, checkOwner('Contrato'), controller.eliminarContratoController);

export default router;