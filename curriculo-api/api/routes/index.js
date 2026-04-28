import { Router } from "express";
import usuarioRoutes from "./usuarioRoutes.js";
import academicaRoutes from "./academicaRoutes.js";
import profissionalRoutes from "./profissionalRoutes.js";
import projetoRoutes from "./projetoRoutes.js";

const router = Router();

router.use("/usuarios", usuarioRoutes);
router.use("/usuarios/:usuarioId/academicas", academicaRoutes);
router.use("/usuarios/:usuarioId/profissionais", profissionalRoutes);
router.use("/usuarios/:usuarioId/projetos", projetoRoutes);

export default router;