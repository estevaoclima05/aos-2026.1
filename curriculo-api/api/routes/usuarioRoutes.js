import { Router } from "express";
import { usuarioController } from "../controllers/index.js";

const router = Router();

router.get("/", usuarioController.getAll);
router.get("/:id", usuarioController.getOne);
router.post("/", usuarioController.post);
router.put("/:id", usuarioController.put);
router.delete("/:id", usuarioController.remove);

export default router;