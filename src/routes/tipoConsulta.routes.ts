import { Router } from "express";
import * as controller from "../controllers/tipoConsultaController";
const router = Router();

import { authMiddleware } from '../middlewares/verificarToken';
import { checkOwner } from "../middlewares/checkOwner";

router.post("/consulta", 
  authMiddleware,
  controller.crearTipoConsulta
);

router.get("/", 
  controller.listarTipoConsulta
);

router.get("/:id",
  authMiddleware,
   controller.obtenerTipoConsulta
  );

router.put(
  "/:id", 
  authMiddleware,
  checkOwner('TipoConsulta'), 
  controller.actualizarTipoConsulta
);

router.delete(
  "/:id", 
  authMiddleware, 
  checkOwner('TipoConsulta'), 
  controller.eliminarTipoConsulta);

export default router;
