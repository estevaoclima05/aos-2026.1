import { Router } from "express";
import { projetoController } from "../controllers/index.js";

const router = Router({ mergeParams: true });

router.get("/", projetoController.getAll);
router.get("/:id", projetoController.getOne);
router.post("/", projetoController.post);
router.put("/:id", projetoController.put);
router.delete("/:id", projetoController.remove);

export default router;