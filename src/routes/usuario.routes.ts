import { Router } from 'express';
import {
  registroUsuarioController,
  loginUsuarioController,
  obtenerUsuariosController,
  eliminarUsuarioController,
  obtenerUsuarioPorIdController
} from '../controllers/usuarioController';

import { authMiddleware } from '../middlewares/verificarToken'
import { checkRol } from '../middlewares/checkRol';


const router = Router();


router.post('/register', registroUsuarioController);
router.post('/login', loginUsuarioController);

// Solo admin
router.get('/usuarios', authMiddleware, checkRol, obtenerUsuariosController);
router.get('/usuarios/:id', authMiddleware, checkRol, obtenerUsuarioPorIdController);
router.delete('/usuarios/:id', authMiddleware, checkRol, eliminarUsuarioController);

export default router;
