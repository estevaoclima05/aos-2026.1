import { Router } from "express";
import { profissionalController } from "../controllers/index.js";

const router = Router({ mergeParams: true });

router.get("/", profissionalController.getAll);
router.get("/:id", profissionalController.getOne);
router.post("/", profissionalController.post);
router.put("/:id", profissionalController.put);
router.delete("/:id", profissionalController.remove);

export default router;