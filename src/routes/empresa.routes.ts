import { Router } from "express";
import * as controllerEmpresa from "../controllers/empresaController";
const router = Router();

import { authMiddleware } from "../middlewares/verificarToken";
import { checkRol } from "../middlewares/checkRol";

router.post("/", authMiddleware, controllerEmpresa.crearEmpresaController);
router.get("/", controllerEmpresa.obtenerEmpresasController);
router.get("/:id", controllerEmpresa.obtenerEmpresaIdController);
router.put("/:id", authMiddleware, checkRol, controllerEmpresa.actualizarEmpresaController);
router.delete("/:id", authMiddleware, checkRol, controllerEmpresa.eliminarEmpresaController);

export default router;