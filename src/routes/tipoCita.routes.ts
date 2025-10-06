import { Router } from "express";
import * as controller from "../controllers/tipoCitaController";
const router = Router();

import { authMiddleware } from "../middlewares/verificarToken";
import { checkRol } from "../middlewares/checkRol";

router.post("/cita", authMiddleware, controller.createTipoCita);
router.get("/", controller.listarTipoCitas);
router.get("/:id", controller.obtenerTipoCita);
router.put("/:id", authMiddleware, checkRol,  controller.actualizarTipoCita);
router.delete("/:id", authMiddleware, checkRol, controller.eliminarTipoCita);

export default router;
