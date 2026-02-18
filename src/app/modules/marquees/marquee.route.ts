import express from "express";
import { marqueeController } from "./marquee.controller";

const router = express.Router();

router.post("/", marqueeController.createMarquee);
router.get("/", marqueeController.getAllMarquees);
router.get("/active", marqueeController.getActiveMarquees);
router.patch("/:id", marqueeController.updateMarquee);
router.delete("/:id", marqueeController.deleteMarquee);

export const marqueeRoutes = router;
