import { Router } from "express";
import { academicaController } from "../controllers/index.js";

const router = Router({ mergeParams: true });

router.get("/", academicaController.getAll);
router.get("/:id", academicaController.getOne);
router.post("/", academicaController.post);
router.put("/:id", academicaController.put);
router.delete("/:id", academicaController.remove);

export default router;