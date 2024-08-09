import { Router } from 'express';
import { getProyectos, crearProyecto, actualizarProyecto, eliminarProyecto, getProyecto } from '../controllers/proyecto.controller.js';



const router = Router();

// TODAS ESTAS RUTAS PARTEN DESDE  //BASE DEL PROFE
router.get("/all", getProyectos);
router.get("/:_id", getProyecto);
router.post("/create", crearProyecto);
router.put("/:_id", actualizarProyecto);
router.delete("/:_id", eliminarProyecto);

export default router
